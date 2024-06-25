import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from '@/lib/db';
import * as EmailValidator from 'email-validator';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import bcrypt from "bcrypt";
const authOptions = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          host: "Github"
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          host: "Google"
        }
      }
    }),

    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const hash = bcrypt.hashSync(credentials.password, 10);
        const con = MongoDBAdapter(await clientPromise)
        const findUser = await con.getUserByEmail(credentials.email)
        const validEmail = EmailValidator.validate(credentials.email)

        if ((findUser && findUser.host == "Github") || !validEmail) {
          return null
        }
        else if (findUser && findUser.host == "credentials" && bcrypt.compareSync(credentials.password, findUser.password)) {
          return findUser;
        }
        else if (findUser && findUser.host == "credentials" && !bcrypt.compareSync(credentials.password, findUser.password)) { return null }
        else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
    updateAge: 1 * 60 * 60,
  },
  jwt: { secret: process.env.NEXTAUTH_SECRET, maxAge: 60 * 60 * 24 * 1, updateAge: 1 * 60 * 60 },
  callbacks: {
    async jwt({ token, account, profile, trigger, session }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        if (account.provider == "credentials") {
          token.id = account.providerAccountId
          token.provider = account.provider
        }
        else {
          token.id = profile.id
        }
        token.accessToken = account.access_token
      }
      if (trigger === "update" && session?.email) {

        try {
          const client = await clientPromise;
          const db = client.db("myApp");
          const user = await db.collection("users").findOne({ email: session.email })
          if (!user) {
            await db.collection("users").updateOne({ email: token.email }, { $set: { email: session.email } });
            token.email = session.email;
          }
          token.email = token.email;
        }
        catch (e) {
        }
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id
      session.provider = token.provider
      session.user.email = token.email
      return session
    }
  },
})
export { authOptions as GET, authOptions as POST }