"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Dashboard() {
    const { data: session, update } = useSession();
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
    const submitemail = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            const fetchUser = await fetch("/api/accountinfo",
                {
                    method: "PATCH", // *GET, POST, PUT, DELETE, etc.
                    mode: "cors", // no-cors, *cors, same-origin
                    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: "same-origin", // include, *same-origin, omit
                    redirect: "follow", // manual, *follow, error
                    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                    body: (formData), // body data type must match "Content-Type" header
                });
            const res = await fetchUser.json();
            if (res.error) {
                notify(res.error);
            }
            else {
                update({ email: formData.get("email") })
                toast.success("Email Updated", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                e.target.reset();
            }
        }
        catch (e) {
            notify("Sorry! Some Error Occured.")
        }
    }
    return (
        <div>
            <ToastContainer />
            <div className="p-4 sm:ml-64 mt-16 sm:mt-0 h-screen ">
                <div className="p-4 border-2 border-gray-200 max-w-4xl border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <form onSubmit={submitemail} className="max-w-4xl  dark:bg-gray-900 p-10 rounded-3xl">
                        <div className="mb-5">
                            <p className={`text-red-500 ${session && session.provider && session.provider == "credentials" ? "hidden" : ""}`}>Oauth Users Can Not Change Email</p>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Change Email</label>
                            <input disabled={session && session.provider ? "" : true} type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <button type="submit" disabled={session && session.provider ? "" : true} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  >Change Email</button>
                    </form>
                </div>
            </div>
        </div>
    )
}   
