import Script from 'next/script'
import React from 'react'

export default function TechStack() {
    return (
        <div><div className="my-32 flex items-center justify-center text-center lg:rounded-full lg:shadow-2xl lg:shadow-blue-500 lg:mx-20" style={{backgroundImage:`url("/assets/images/svg.png")`, backgroundRepeat:`no-repeat`, backgroundPosition:`center`, backgroundSize:`cover`}}>
            <div className="flex flex-col p-2 m-2  max-w-7xl ">
                <div className="text-xl md:text-3xl font-medium">This App is Powered By</div>
                
                <div className="text-sm mt-2 mx-2 md:text-xl text-stone-500">Explore our tech stack: MongoDB, Next.js, Tailwind CSS, and NextAuth.js </div>
                <div className="text-sm mx-2 md:text-xl mb-2 text-stone-500">for a streamlined, secure, and efficient web experience.</div>

                <div className="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-2 p-2">

                    <div className="flex-col px-6 py-2 ">
                        <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">

                            <img src="https://images.unsplash.com/photo-1658204238967-3a81a063d162?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uZ29kYnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="" />
                        </div>

                        <div className="text-lg font-medium text-stone-600 cursor-pointer hover:dark:text-black">MongoDB</div>
                      
                    </div>
                    <div className="flex-col px-6 py-2 ">
                        <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">

                            <img src="https://wallpapercave.com/wp/wp11846968.png" alt="" className="h-full w-full" />
                        </div>

                        <div className="text-lg font-medium text-stone-600 cursor-pointer hover:dark:text-black">NEXT-JS</div>
                      
                    </div>
                    <div className="flex-col px-6 py-2 ">
                        <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKaYS6OK16tyGacJrkeVWly1q5OXKw8z-zg&s" alt="" className="h-full w-full" />
                        </div>

                        <div className="text-lg font-medium text-stone-600 cursor-pointer hover:dark:text-black">Tailwind-CSS</div>
                      
                    </div>

                </div>
                <div className="flex space-x-4 space-y-2 p-2 items-center justify-center md:flex-row flex-col ">
                    <div className="flex-col px-6 py-2 ">
                        <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">

                            <img src="https://next-auth.js.org/img/social-media-card.png" alt="" className="h-full w-full"/>
                        </div>

                        <div className="text-lg font-medium text-stone-600 cursor-pointer hover:dark:text-black">NEXT-AUTH </div>
                      
                    </div>

                </div>
            </div>
        </div>
            <Script src="https://cdn.tailwindcss.com"></Script> </div>
    )
}
