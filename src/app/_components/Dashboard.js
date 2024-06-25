'use client'
import React from 'react'
import Loading from './Loading';
import { useEffect, useState } from 'react';
import { useSession, getCsrfToken } from 'next-auth/react'
export default function Dashboard() {
    const { data: session } = useSession();
    const [userinfo, setuserinfo] = useState()
    const [csrfToken, setcsrfToken] = useState()
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const csrfToken = await getCsrfToken()
                setcsrfToken(csrfToken)
                const dat = await fetch(`/api/accountinfo?q=${session.user.email}`, { cache: 'no-cache' })
                const res = await dat.json();
                setuserinfo(res.user)
            }
            catch (e) {
            }
        }
        if (session && session.user && session.user.email) {
            fetchUserData();
        }
    }, [session])
    return (
        <div>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-32 md:mt-14">
                    <section className="bg-white dark:bg-gray-900 rounded-3xl">
                        {userinfo && session ?
                            <div>
                                <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white uppercase">{session.user.name} Information</h2>
                                    {!userinfo.phone || !userinfo.company || !userinfo.role || !userinfo.gstin || !userinfo.bio ? <p className='text-white mb-3'>You wont be listed until unless you have filled the information marked with (*)</p> : ""}
                                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                        <div className="sm:col-span-2">
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Email</label>
                                            <input disabled type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={session.user.email} placeholder="Type product name" required="" />
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                            <input disabled type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={userinfo.name} placeholder="Product brand" required="" />
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GSTIN*</label>
                                            <input disabled type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={userinfo.gstin} placeholder="GSTIN" required="" />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5'>
                                            <div className="w-full">
                                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Phone*</label>
                                                <input disabled type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={userinfo.phone} placeholder="9876543210" required="" />
                                            </div>
                                            <div className="w-full">
                                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Visiting Charges*</label>
                                                <input disabled type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={userinfo.visitingcharge ? `₹`+userinfo.visitingcharge: ""} placeholder="$100" required="" />
                                            </div>
                                        </div>
                                        <div className='mt-6'>
                                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role*</label>
                                            <input disabled type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={userinfo.role} placeholder="Carpenter" required="" />
                                        </div>
                                        <div className='mt-6'>
                                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address*</label>
                                            <input disabled type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={userinfo.address} placeholder="Dholakpur, Haryana, India" required="" />
                                        </div>
                                        <div className='mt-6'>
                                            <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Company*</label>
                                            <input disabled type="text" name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={userinfo.company} placeholder="Find My Mate" required="" />
                                        </div>
                                        <div className="sm:col-span-2 mt-6">
                                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio*</label>
                                            <textarea disabled id="description" rows="12" className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={userinfo.bio} placeholder="About yourself" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : <Loading />}
                    </section>
                </div>
            </div >
        </div >
    )
}
