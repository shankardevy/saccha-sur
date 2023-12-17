import Image from 'next/image'
import gradient from '@/../public/flaro-assets/images/faqs/gradient.svg'
import localFont from 'next/font/local'
const papyrus = localFont({ src: './papyrus.ttf' })

export default function FAQ() {
    return (
        <section className='relative pt-24 pb-28 bg-blueGray-50 overflow-hidden'>
          <Image
            className='absolute bottom-0 left-1/2 transform -translate-x-1/2'
            src={gradient}
            alt=''
            layout='fill'
          />
          <div className='relative z-10 container px-4 mx-auto'>
            <div className='md:max-w-4xl mx-auto'>
              <h2 className='mb-16 text-2xl md:text-5xl text-center font-bold font-heading tracking-px-n leading-relaxed text-sky-600'>
                <span className={papyrus.className}>Frequently Asked Questions</span>
              </h2>
              <div className='mb-11 flex flex-wrap -m-1'>
                <div className='w-full p-1'>
                  <a>
                    <div className='py-7 px-8 bg-white bg-opacity-60 border-2 border-indigo-600 rounded-2xl shadow-10xl'>
                      <div className='flex flex-wrap justify-between -m-2'>
                        <div className='flex-1 p-2'>
                          <h3 className='mb-4 text-lg font-semibold leading-normal'>⁠What is Saccha Sur all about?</h3>
                          <p className='text-gray-600 font-medium'>
                          Saccha Sur is a compilation of first hand experiences of Sanghamitra with the incredible gurus - Bhaskar and Freddy! To the world, Bhaskar and Freddy, were phenomenal musicians; for Sanghmitra, they were Grace Incarnate. Music was the craft they taught, yet the flowering of the disciple was their sole objective. Every story in Saccha Sur, is a carefully curated vignette, carrying a drop of timeless truth that feeds the soul! These stories are an invitation to transformation ...each one can be the beginning of something new!
                          </p>
                        </div>
                        <div className='w-auto p-2'>
                          <svg
                            className='relative top-1'
                            width={20}
                            height={20}
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M4.16732 12.5L10.0007 6.66667L15.834 12.5'
                              stroke='#4F46E5'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='w-full p-1'>
                  <a>
                    <div className='py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl'>
                      <div className='flex flex-wrap justify-between -m-2'>
                        <div className='flex-1 p-2'>
                          <h3 className='text-lg font-semibold leading-normal'>
                            ⁠Is Saccha Sur available for international shipping?  
                          </h3>
                          <p>Yes, International shipping is available. Please click on this link to learn about the shipping charges to various countries. If your state or country is not mentioned, please write to us on this link with your order quantity, full address and telephone number and we will get back to you regarding the exact shipping cost. 
      </p>
                        </div>
                        <div className='w-auto p-2'>
                          <svg
                            className='relative top-1'
                            width={18}
                            height={18}
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M14.25 6.75L9 12L3.75 6.75'
                              stroke='#18181B'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='w-full p-1'>
                  <a>
                    <div className='py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl'>
                      <div className='flex flex-wrap justify-between -m-2'>
                        <div className='flex-1 p-2'>
                          <h3 className='text-lg font-semibold leading-normal'>
                            ⁠How long does it take to receive the book after placing an order?
                          </h3>
                          <p>Your copies will be shipped within 48hours of the realisation of the credit of your payment. 
      </p>
                        </div>
                        <div className='w-auto p-2'>
                          <svg
                            className='relative top-1'
                            width={18}
                            height={18}
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M14.25 6.75L9 12L3.75 6.75'
                              stroke='#18181B'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='w-full p-1'>
                  <a>
                    <div className='py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl'>
                      <div className='flex flex-wrap justify-between -m-2'>
                        <div className='flex-1 p-2'>
                          <h3 className='text-lg font-semibold leading-normal'>
                          ⁠Can I track my order?
                          </h3>
                          <p>Once your book is shipped, your tracking number and website will be shared with you on the email id that has been entered during the payment process. </p>
                        </div>
                        <div className='w-auto p-2'>
                          <svg
                            className='relative top-1'
                            width={18}
                            height={18}
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M14.25 6.75L9 12L3.75 6.75'
                              stroke='#18181B'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
         
      
                <div className='w-full p-1'>
                  <a>
                    <div className='py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl'>
                      <div className='flex flex-wrap justify-between -m-2'>
                        <div className='flex-1 p-2'>
                          <h3 className='text-lg font-semibold leading-normal'>
                          ⁠Is there an e-book version available?
                          </h3>
                          <p>The Saccha Sur book has been carefully created as a piece of art that can be appreciated with all your senses. We have not planned for an e-book for now however, please <a href="mailto:sanghamitra.stories@gmail.com">leave us a note here</a> and we will consider your suggestion.</p>
                        </div>
                        <div className='w-auto p-2'>
                          <svg
                            className='relative top-1'
                            width={18}
                            height={18}
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M14.25 6.75L9 12L3.75 6.75'
                              stroke='#18181B'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='w-full p-1'>
                  <a>
                    <div className='py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl'>
                      <div className='flex flex-wrap justify-between -m-2'>
                        <div className='flex-1 p-2'>
                          <h3 className='text-lg font-semibold leading-normal'>
                          ⁠How can I contact customer support?
                          </h3>
                          <p>
                          You can contact us here and we will address all your queries within 48 hours.
                            
                            </p>
                        </div>
                        <div className='w-auto p-2'>
                          <svg
                            className='relative top-1'
                            width={18}
                            height={18}
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M14.25 6.75L9 12L3.75 6.75'
                              stroke='#18181B'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <p className='text-gray-600 text-center font-medium'>
                <span>Still have any questions?&nbsp;</span><br/>
                <a
                  className='font-semibold text-indigo-600 hover:text-indigo-700'
                  href='mailto:sanghamitra.stories@gmail.com'>
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </section>
    );
}