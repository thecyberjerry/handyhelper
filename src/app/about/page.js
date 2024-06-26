"use client"
import React from 'react'
import { motion, useScroll } from "framer-motion"
export default function Page() {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <div>
                <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-transparent mt-16 md:mt-10  antialiased">
                    <motion.div className='fixed top-0 left-0 right-0 h-3 bg-blue-500 transform origin-left mt-16' style={{ scaleX: scrollYProgress }} />
                    <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                            <header className="mb-4 lg:mb-6 not-format">
                                <address className="flex items-center mb-6 not-italic">
                                    <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-black">
                                        <img className="mr-4 w-16 h-16 rounded-full" src="/assets/images/CEO.jpeg" alt="CEO" />
                                        <div>
                                            <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-black">Himanshu Sharma</a>
                                            <p className="text-base text-gray-500 dark:text-gray-600">Web Developer, Gamer & CEO HandyHelper</p>
                                            <p className="text-base text-gray-500 dark:text-gray-600"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                                        </div>
                                    </div>
                                </address>
                                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-black">Best practices for successful prototypes</h1>
                            </header>
                            <p className="lead">In today&apos;s fast-paced world, finding reliable professionals for household tasks like plumbing, electrical work, and painting can be a daunting challenge. Traditionally, it involved visiting multiple locations and making numerous calls, often leading to frustration and wasted time. That&apos;s where HandyHelper steps in, revolutionizing the way people connect with service professionals.</p>
                            <p>HandyHelper is a user-friendly platform designed to match users with skilled service professionals from various fields directly through their smartphones or computers. Instead of wandering through markets or relying on word-of-mouth, users simply visit HandyHelper&apos;s intuitive interface. By browsing through profiles of electricians, plumbers, painters, and more, users can assess each professional&apos;s qualifications and reviews, all conveniently displayed on profile cards.</p>
                            <figure><img className='my-3' src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="" />

                            </figure>
                            <h2 className='text-lg font-bold my-2'>Why Choose HandyHelper?</h2>
                            <p>The inspiration behind HandyHelper stems from the common frustration of searching for reliable service providers. Founder and CEO, Himanshu, a self-taught programmer at just 21 years old, understands this struggle firsthand. &ldquo;I saw a gap in the market where people needed a seamless way to find trustworthy professionals,&rdquo; he explains. &ldquo;HandyHelper bridges this gap by offering a curated pool of service providers verified with essential details like GSTIN, ensuring transparency and reliability.&rdquo;</p>
                            <p>For homeowners, HandyHelper offers peace of mind knowing that every service professional on the platform undergoes a rigorous verification process, including validation of their GSTIN (Goods and Services Tax Identification Number). This verification not only establishes credibility but also enhances security, protecting users from potential scams or subpar services.</p>
                            <h2 className='text-lg font-bold my-2'>For Service Providers</h2>
                            <p>HandyHelper isn&apos;t just for users—it&apos;s also a valuable tool for professionals looking to expand their client base. Whether you&apos;re an electrician, plumber, painter, carpenter, or any other service provider, creating an account on HandyHelper allows you to showcase your skills and expertise to a wide audience. The platform provides a dedicated space for professionals to highlight their qualifications, display customer testimonials, and even list specializations or certifications. This exposure helps service providers attract new clients who value quality, reliability, and professionalism.</p>
                            <ol>
                                <li>
                                    <br />
                                    <strong class='text-lg'>Professionals Pools</strong>
                                    <br />
                                    <br />
                                    HandyHelper boasts a diverse pool of professionals from various fields such as electricians, plumbers, painters, carpenters, and more. Each professional undergoes a rigorous verification process to ensure they meet our high standards of reliability and expertise. This extensive pool ensures that users can find the right professional for any home service need quickly and efficiently.
                                </li>
                                <li>
                                    <br />
                                    <strong class='text-lg'>Secured Auth</strong>
                                    <br />
                                    <br />
                                    Security is paramount at HandyHelper. Our platform employs robust authentication mechanisms powered by NextAuth, ensuring that user accounts and transactions are secure. This advanced authentication framework safeguards user data and privacy, providing a trustworthy environment for all interactions between users and service providers.
                                </li>
                                <li>
                                    <br />
                                    <strong class='text-lg'>User Friendly</strong>
                                    <br />
                                    <br />
                                    Designed with simplicity and ease of use in mind, HandyHelper offers a user-friendly interface that simplifies the process of finding and hiring professionals. Intuitive navigation, clear information presentation on professional profiles, and straightforward booking options make it easy for users to accomplish their tasks with minimal effort and time.
                                </li>
                                <li>
                                    <br />
                                    <strong class='text-lg'>24x7 Help</strong>
                                    <br />
                                    <br />
                                    Need assistance anytime? HandyHelper provides round-the-clock support to address user queries, resolve issues, and ensure a smooth experience. Our dedicated support team is available 24x7 to assist users and professionals with any technical or service-related concerns, ensuring prompt and reliable assistance whenever it&apos;s needed.
                                </li>
                            </ol>

                            <p> <br /> <strong className='text-lg'>For Service Providers</strong> <br /><br /> HandyHelper isn&apos;t just for users—it&apos;s also a valuable tool for professionals looking to expand their client base. Whether you&apos;re an electrician, plumber, painter, carpenter, or any other service provider, creating an account on HandyHelper allows you to showcase your skills and expertise to a wide audience. The platform provides a dedicated space for professionals to highlight their qualifications, display customer testimonials, and even list specializations or certifications. This exposure helps service providers attract new clients who value quality, reliability, and professionalism.</p>
                            <p> <br /> <strong className='text-lg'>About HandyHelper&apos;s Technology Stack</strong> <br /><br /> Behind the scenes, HandyHelper runs on cutting-edge technology to ensure a smooth and secure user experience. Powered by Next.js for robust frontend development, NextAuth for secure authentication, MongoDB for efficient data storage, and Tailwind CSS for sleek design, the platform combines functionality with aesthetics seamlessly. This tech stack not only supports a responsive and intuitive interface but also ensures scalability and reliability as the platform grows.</p>

                            <p> <br /> <strong className='text-lg'>Join HandyHelper Today</strong> <br /><br /> Whether you&apos;re a homeowner in need of reliable service or a skilled professional seeking to expand your clientele, HandyHelper offers a convenient solution tailored to your needs. Embrace the future of home services with HandyHelper and experience a hassle-free way to connect with professionals you can trust.</p>

                        </article>
                    </div>
                </main>

                {/* <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
                <div className="px-4 mx-auto max-w-screen-xl">
                    <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        <article className="max-w-xs">
                            <a href="#">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" alt="Image 1" />
                            </a>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                <a href="#">Our first office</a>
                            </h2>
                            <p className="mb-4 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                            <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                Read in 2 minutes
                            </a>
                        </article>
                        <article className="max-w-xs">
                            <a href="#">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" alt="Image 2" />
                            </a>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                <a href="#">Enterprise design tips</a>
                            </h2>
                            <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                            <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                Read in 12 minutes
                            </a>
                        </article>
                        <article className="max-w-xs">
                            <a href="#">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" alt="Image 3" />
                            </a>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                <a href="#">We partnered with Google</a>
                            </h2>
                            <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                            <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                Read in 8 minutes
                            </a>
                        </article>
                        <article className="max-w-xs">
                            <a href="#">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg" alt="Image 4" />
                            </a>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                <a href="#">Our first project with React</a>
                            </h2>
                            <p className="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                            <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                                Read in 4 minutes
                            </a>
                        </article>
                    </div>
                </div>
            </aside>   
            // Important UI Componnet   
            */}
            </div >
        </>
    )
}
