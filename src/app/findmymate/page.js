"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Loading from '../_components/Loading'

export default function Page() {
  const [userData, setuserData] = useState()
  useEffect(() => {
    const fetchUsers = async () => {
      const fetchMe = await fetch("/api/findmymate", { cache: 'force-cache' });
      const res = await fetchMe.json()
      setuserData(res)
    }
    fetchUsers();
  }, [])
  return (
    <div >
      <section className="bg-white dark:bg-gray-900 mt-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <Link href={"/about"} className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">FindMyMate is out! See what&apos;s new</span>
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </Link>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Find mate at your fingertip</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at FindMyMate we focus on markets where technology, innovation, and help can unlock long-term value and drive economic & fastest service at your doorstep.</p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Learn more
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
              Watch video
            </a>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Surf the Professionals Pool Here</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Discover skilled professionals for home services including electricians, plumbers, carpenters, and more. Get reliable help for all your household needs here.</p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {userData ? userData.map((item) => {
              return <>
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="User" className="object-cover object-center h-full w-full" src={item.image ? item.image : "https://shorturl.at/Oa3OX"} />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{item.name}</h2>
                  <h2 className="text-sm font-light title-font text-gray-900">{item.role}</h2>
                  <p className="text-base leading-relaxed mt-2">{item.bio.slice(0, 40)}...</p>
                  <Link prefetch={false} href={{ pathname: `/findmymate/${item.name}`, query: { name: item.name } }} className="text-indigo-500 inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </>
            }) : <div className='flex items-center justify-center w-full'><Loading /></div>}
          </div>
        </div>
      </section>
    </div>
  )
}
