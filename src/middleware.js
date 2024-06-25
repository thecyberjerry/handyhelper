export { default } from "next-auth/middleware"

export const config = { matcher: ["/account","/account/changepassword","/account/changeemail","/account/shopimages","/account/updateinfo"] }
