export { default } from "next-auth/middleware"
//currently this middleware is not working as expected
const secret = process.env.NEXTAUTH_SECRET
console.log(secret);

export const config = { matcher: ["/account/:path*"] }
