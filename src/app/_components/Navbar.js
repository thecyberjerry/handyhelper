"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { usePathname } from 'next/navigation';
export default function Navbar() {
    const path = usePathname();
    const [toggleMenu, settoggleMenu] = useState(false)
    const { data: session } = useSession()
    return (
        <div>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link prefetch={false} href={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/assets/logo/logo.png" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HandyHelper <sup className='text-sm'>Beta</sup></span>
                    </Link>
                    <button onClick={() => settoggleMenu(!toggleMenu)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`items-center justify-between ${toggleMenu ? "" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex md:items-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link prefetch={false} href={"/"} onClick={() => settoggleMenu(!toggleMenu)} className={`block ${path == "/" ? "dark:text-blue-700" : "dark:text-white"} py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Home</Link>
                            </li>
                            <li>
                                <Link prefetch={false} href={"/about"} onClick={() => settoggleMenu(!toggleMenu)} className={`block ${path == "/about" ? "dark:text-blue-700" : "dark:text-white"} py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>About</Link>
                            </li>
                            <li>
                                <Link prefetch={false} href={"/handyhelper"} onClick={() => settoggleMenu(!toggleMenu)} className={`block ${path == "/handyhelper" ? "dark:text-blue-700" : "dark:text-white"} py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Find HandyHelper</Link>
                            </li>
                            <li>
                                <Link prefetch={false} onClick={() => settoggleMenu(!toggleMenu)} href={"https://himanshu-folio.vercel.app/contact"} target="_blank" className={`block ${path == "/contact" ? "dark:text-blue-700" : "dark:text-white"} py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Contact</Link>
                            </li>
                            <li>
                                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                    {session ? <div className='flex gap-2'>
                                        <Link prefetch={false} href={"/account"}>
                                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{session.user.name}</button></Link>
                                        <button type="button" onClick={() => signOut({ callbackUrl: "/" })} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
                                    </div> : <button type="button" onClick={() => signIn()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Professional Login</button>}

                                </div>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >

        </div >
    )
}
