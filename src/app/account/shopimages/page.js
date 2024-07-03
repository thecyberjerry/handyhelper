'use client'
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';
import { useRef, useState } from "react";
import { uploadFile } from "@/lib/storage";
import { getStorage, ref, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import Loading from '@/app/_components/Loading';

export default function Page() {
    const { data: session } = useSession();
    const [selectedFile, setSelectedFile] = useState(null);
    const inputRef = useRef(null);
    const handleUpload = async () => {
        try {
            const folder = `${session.user.name}/`;
            const imagePath = await uploadFile(selectedFile, folder);
            toast.success("File Uploaded! Reload to view changes")
            inputRef.current.value = ""
        }
        catch (e) {
            toast.error("Sorry!, Some Error Occured or invalid file", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const [urls, seturls] = useState([])
    const storage = getStorage();
    const listRef = ref(storage, session && session.user.name);
    useEffect(() => {
        try {
            listAll(listRef)
                .then((res) => {
                    if (res.items.length === 0 && res.prefixes.length === 0) {
                        seturls(false)
                    }
                    res.items.forEach((items) => {
                        const newRef = ref(storage, items._location.path_)
                        getDownloadURL(newRef)
                            .then((url) => {
                                if (url) {
                                    seturls(urls => [...urls, { name: newRef._location.path_.split(`${session.user.name}/`)[1], link: url }])
                                }
                            })
                    })
                }).catch((error) => {
                });
        }
        catch (e) {
            console.log(e);
        }
    }, [session?.user?.name])
    const deletImg = async (img) => {
        const desertRef = ref(storage, `${session.user.name}/${img}`);
        // Delete the file
        deleteObject(desertRef).then(() => {
            // File deleted successfully
            toast.info("File Deleted! Reload to view changes", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });
    }

    return (

        <div className='mt-12 ml-32 text-black'>
            <div className="p-4 sm:ml-32 sm:mt-0">
                <div className="p-10 border-2 border-gray-200 max-w-4xl border-dashed rounded-lg dark:border-gray-700 ">
                    <ToastContainer />
                    <div className="container mx-auto  max-w-[560px]">
                        <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-900 mb-4">
                            <h1 className="text-3xl font-semibold">Upload Image</h1>
                        </div>
                        <input
                            className='w-20 md:w-auto'
                            type="file"
                            accept="image/png, image/gif, image/jpeg"
                            ref={inputRef}
                            onChange={(e) => {
                                setSelectedFile(e?.target?.files?.[0]);
                            }}
                        />
                        <button
                            className="mt-5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 duration-200 w-full"
                            type="button"
                            onClick={() => {
                                handleUpload()
                                setSelectedFile(null)
                            }}>
                            Upload File
                        </button>
                    </div>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                {!urls ? <div className="w-full flex items-center justify-center">
                                    <div className="h-full overflow-hidden">
                                        <img className="h-full w-full" src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" alt="blog" />
                                    </div>
                                </div> : urls && urls.length == 0 ? <Loading /> : urls.map((item, index) => {
                                    return (
                                        <div className="p-4 md:w-1/3" key={index}>
                                            <div className="h-full overflow-hidden">
                                                <p className='text-xl my-2'>Name: {item.name.split(".")[0].toUpperCase()}</p>
                                                <button className='bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 duration-200' onClick={() => {
                                                    deletImg(item.name);
                                                }
                                                }>Delete</button>
                                                <img className=" my-2 w-full " src={item.link} alt="blog" />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div >
    )
}

