<<<<<<< HEAD
import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ req }) => {
      // verify token and return a boolean
      const sessionToken = req.cookies.get("next-auth.session-token");
      if (sessionToken) return true;
      else return false;
    },
  },
});
export const config = { matcher: ["/account/:path*"] }
=======
export { withAuth } from "next-auth/middleware";
export { default } from "next-auth/middleware";
export const config = { matcher: ["/account/:path*"] }
>>>>>>> 66d5f058be64d3a7470b7d662f0f53655bb53bcc
