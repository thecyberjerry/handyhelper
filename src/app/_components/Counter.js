import React from 'react'
import CountUp from 'react-countup';
export default function Counter() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900"><CountUp
                                start={0}
                                end={2.5}
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                                duration={2.75}
                                separator=" "
                                decimals={2}
                                decimal="."
                                suffix="K" /></h2>
                            <p className="leading-relaxed">Users</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900"><CountUp
                                start={0}
                                end={4500}
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                                duration={2.75}
                                separator=""
                                decimal=","
                                suffix="" /></h2>
                            <p className="leading-relaxed">Target Subscribes</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900"><CountUp
                                start={0}
                                end={4.7}
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                                duration={2.75}
                                separator=" "
                                decimals={2}
                                decimal="."
                                suffix="K" /></h2>
                            <p className="leading-relaxed">Usage Aim</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900"><CountUp
                                start={0}
                                end={5.0}
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                                duration={2.75}
                                separator=" "
                                decimals={2}
                                decimal="."
                                suffix="K" /></h2>
                            <p className="leading-relaxed">Target Professionals</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
