<<<<<<< HEAD
export { withAuth } from "next-auth/middleware";
export { default } from "next-auth/middleware";
export const config = { matcher: ["/account", "/account/((?!.*\\.).*)"] }
=======
export { default } from "next-auth/middleware"

export const config = { matcher: ["/account"] }
>>>>>>> e12fb7ec44b5bbd069c2f8d0530a525c2acaa564
