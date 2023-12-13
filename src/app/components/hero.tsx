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
                                className='leading-relaxed mb-6 text-2xl md:text-5xl font-bold font-heading md:max-w-3xl text-sky-600'>
                                <span className={papyrus.className}>Stories are meant to be told and retold</span>
                            </h1>
                            <p
                                className='mb-11 text-gray-700 font-medium md:max-w-xl md:text-lg'>
                                <span className={ayuthaya.className}>An evocative collection of generational wisdom to help you cultivate your soul in the field of grace.</span>
                            </p>
                            <div className='flex flex-wrap -m-2.5 mb-20'>
                                <div className='w-full md:w-auto p-2.5'>
                                    <div className='block text-center'>
                                        <a href="https://pages.razorpay.com/pl_N6TrGb0E9gozlm/view"
                                            className='block py-3 px-6 w-full text-white font-semibold border rounded-xl focus:ring transition ease-in-out duration-200 text-base font-medium focus:ring-gray-50 bg-orange-500 border-yellow-600 focus:ring-yellow-400 hover:bg-orange-600'
                                        >
                                            Buy the Book
                                        </a>
                                        <Preview isOpen={isOpen} setOpen={setOpen}  />
                                    </div>
                                </div>
                                <div className='w-full md:w-auto p-2.5'>
                                    <div className='block'>
                                        <button
                                            className='py-3 px-9 w-full font-semibold border border-gray-300 hover:border-gray-400 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-100 transition ease-in-out duration-200'
                                            type='button'
                                            onClick={() => setOpen(true)}
                                        >
                                            <div className='flex flex-wrap justify-center items-center -m-1'>
                                                <div className='w-auto p-1'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width={16}
                                                        height={16}
                                                        fill='currentColor'
                                                        className=''
                                                        viewBox='0 0 16 16'
                                                    >
                                                        <path d='M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM7 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V7.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V7s1.54-1.274 1.639-1.208zM5 9h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z' />
                                                    </svg>
                                                </div>
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
                                className='shadow shadow-md'
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