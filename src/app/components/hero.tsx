'use client'
import { useState } from 'react'
import Image from 'next/image'
import bookCover from '@/../public/images/book-cover.png'
import logo from '@/../public/images/tell-me-a-story-2.png'
import localFont from 'next/font/local'
const papyrus = localFont({ src: './papyrus.ttf' })
const ayuthaya = localFont({ src: './Ayuthaya.ttf' })

import Preview from '@/app/components/preview'

export default function Hero() {
    const [isOpen, setOpen] = useState(false);

    return (
        <section id="hero" className='bg-blueGray-50'>
            <div className='container mx-auto overflow-hidden'>
                <div className='flex items-center justify-between px-4 py-5 bg-blueGray-50'>
                    <div className='w-auto'>
                        <div className='flex flex-wrap items-center'>
                            <div className='w-auto mr-14'>
                                <a href='#'>
                                    <Image

                                        src={logo}
                                        alt="Saccha Sur"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='overflow-hidden pt-16'>
                <div className='container px-4 mx-auto'>
                    <div className='flex flex-wrap -m-8'>
                        <div className='w-full md:w-2/3 p-8'>
                            <h1
                                className='mb-6 text-4xl md:text-5xl font-bold font-heading md:max-w-3xl text-sky-600'>
                                <span className={papyrus.className}>Stories are meant to be told and retold</span>
                            </h1>
                            <div className="flex">
                                <p
                                    className='mb-11 text-gray-700 font-medium md:max-w-xl md:text-lg'>
                                    <span className={ayuthaya.className}>An evocative collection of generational wisdom to help you cultivate your soul in the field of grace.</span>
                                </p>
                                <Image
                                    className='md:hidden max-h-48 object-contain mb-4'
                                    src={bookCover}
                                    alt=''
                                />
                            </div>

                            <div className='flex flex-wrap -m-2.5 mb-20'>
                                <div className='w-auto p-2.5'>
                                    <div className='block text-center'>
                                        <a href="https://pages.razorpay.com/pl_N6TrGb0E9gozlm/view"
                                            className='block py-3 px-6 w-full text-white font-semibold border rounded-xl focus:ring transition ease-in-out duration-200 text-base font-medium focus:ring-gray-50 bg-orange-500 border-yellow-600 focus:ring-yellow-400 hover:bg-orange-600'
                                        >
                                            Buy the Book
                                        </a>
                                        <Preview isOpen={isOpen} setOpen={setOpen} />
                                    </div>
                                </div>
                                <div className='w-auto p-2.5'>
                                    <div className='block'>
                                        <button
                                            className='py-3 px-9 w-full font-semibold border border-gray-300 hover:border-gray-400 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-100 transition ease-in-out duration-200'
                                            type='button'
                                            onClick={() => setOpen(true)}
                                        >
                                            <div className='flex flex-wrap justify-center items-center -m-1'>
                                                <div className='w-auto p-1'>
                                                    <span>Read a sample story</span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='-mt-16 w-full md:w-1/3 p-8 pb-16'>
                            <Image
                                className='hidden md:block shadow shadow-md object-contain'
                                src={bookCover}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}