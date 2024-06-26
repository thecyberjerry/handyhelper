"use client"
import React, { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Filler1() {
    useEffect(() => {
        AOS.init();
    }, [])
    const { data: session } = useSession();
    return (
        <div data-aos="fade-up">
            <section className="bg-white rounded-3xl shadow-2xl shadow-blue-500  mx-8 md:mx-20 my-20">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img className="w-full hidden dark:block" src="https://plus.unsplash.com/premium_photo-1682361002156-7bb05f6cac54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dashboard image" />
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">Let&apos;s create more easy and accessible service for the people.</h2>
                        <p className="mb-6 font-light text-black md:text-lg dark:text-black">Let&apos;s innovate for easier, more accessible services, enhancing convenience and efficiency for everyone. By focusing on accessibility, we ensure equal opportunity to benefit from advancements, fostering inclusivity and support. Join us in shaping a future where accessing essential services is seamless, improving quality of life across diverse needs and backgrounds.</p>
                        <button onClick={() => { signIn() }} className="inline-flex items-center text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                            Are you a Professional? Sign-In!
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
