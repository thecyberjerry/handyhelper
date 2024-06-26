import Link from 'next/link'
import React from 'react'
import { Fade, Slide } from "react-awesome-reveal";

export default function Hero() {
    return (
        <>
            <section>
                <div className="dark:bg-gray-900 text-white py-20">
                    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                            <h1 className="text-3xl md:text-5xl p-2 text-blue-700 tracking-loose"><Fade delay={1e1} cascade damping={1e-1}>HandyHelper </Fade></h1>
                            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Professionals : At your fingertip
                            </h2>
                            <p className="text-sm md:text-base text-gray-50 mb-4">Find Trusted Professionals for Every Home Service Need
                                Electricians, Plumbers, Carpenters, and More
                                Your Reliable Source for Expert Help.</p>
                            <Link prefetch={false} href={"/handyhelper"}
                                className="bg-transparent hover:bg-blue-700 text-blue-700 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-blue-700 hover:border-transparent">
                                Explore Now</Link>
                        </div>
                        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
                            <div className="h-48 flex flex-wrap content-center">
                                <div>
                                    <img className="md:inline-block mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" /></div>
                                <div>
                                    <img className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" /></div>
                                <div>
                                    <img className="md:inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
