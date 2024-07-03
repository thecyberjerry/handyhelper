"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut, useSession } from 'next-auth/react'
export default function Dashboard() {
    const { data: session } = useSession();
    const notify = (msg) => {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    const submitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        console.log(formData.get("newPassword"));
        try {
            const pass = await fetch("/api/accountinfo",
                {
                    method: "PATCH", // *GET, POST, PUT, DELETE, etc.
                    mode: "cors", // no-cors, *cors, same-origin
                    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: "same-origin", // include, *same-origin, omit
                    redirect: "follow", // manual, *follow, error
                    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                    body: (formData), // body data type must match "Content-Type" header
                }
            )
            const res = await pass.json();
            if (res.error) notify(res.error);
            else {
                toast.success(res.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                e.target.reset()
                setTimeout(() => {
                    signOut();
                }, 1000);
            }
        }
        catch (e) { notify("Some Error Occurred!") }
    }
    return (
        <div>
            <ToastContainer />
            <div className="p-4 sm:ml-64 mt-12 md:mt-4 h-screen">
                <div className="p-4 border-2 border-gray-200 max-w-4xl border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <form className="max-w-4xl  dark:bg-gray-900 p-10 rounded-3xl" onSubmit={submitForm}>
                        <div className="mb-5">
                            <p className={`text-red-500 ${session && session.provider && session.provider == "credentials" ? "hidden" : ""}`}>Oauth Users Can Not Change Password</p>
                            <label htmlFor="currentpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                            <input disabled={session && !session.provider ? true : ""} type="password" id="currentpassword" name="currentPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                            <input disabled={session && !session.provider ? true : ""} type="password" name="newPassword" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <button disabled={session && !session.provider ? true : ""} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
