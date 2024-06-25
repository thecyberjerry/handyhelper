export { default } from "next-auth/middleware"

export const config = { matcher: ["/dash", "/dash/changepassword", "/dash/changeemail", "/dash/shopimages", "/dash/updateinfo"] }