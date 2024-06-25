import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";

export default function CEO() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <h1 className='text-3xl'>About the CEO</h1>
                        <div className="flex flex-col sm:flex-row ">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className='flex items-center justify-center'>
                                    <img src="/assets/images/CEO.jpeg" className='w-1/2 md:w-3/4 h-full object-contain object-center' alt="" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Himanshu Sharma</h2>
                                    <h2 className="font-medium title-font  text-gray-400 text-sm">Web Developer</h2>
                                    <h2 className="font-medium title-font  text-gray-400 text-sm">CEO, Find My Mate</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base">I&apos;m Himanshu, a self-taught programmer passionate about technology and dedicated to innovating service accessibility.</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left flex flex-col 
                            justify-center ">
                                <p className="leading-relaxed text-base md:text-lg md:px-10 mb-4">&ldquo;I&apos;m Himanshu, a 21-year-old self-taught programmer and recent bachelor&apos;s graduate actively seeking job opportunities. Passionate about technology, I aim to revolutionize service finding with FindMyMate, connecting users to trusted professionals conveniently. Dedicated to leveraging innovation for positive impact, I eagerly anticipate contributing my skills and vision to shaping the future of service accessibility.&rdquo; </p>
                                <Link href={"/about"} className="text-indigo-500 inline-flex items-center md:px-10 mb-4">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
