export { default } from "next-auth/middleware"
//currently this middleware is not working as expected
export const config = { matcher: ["/dashboard/:path*"] }
