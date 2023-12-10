import Image from 'next/image'
import logo from '@/../public/images/tell-me-a-story-2.png'

export default function Footer() {
    return (


        <section className='relative py-16 bg-white overflow-hidden'>
          <Image
            className='absolute top-0 left-0 h-full'
            src='/flaro-assets/images/footers/gradient4.svg'
            alt=''
            layout='fill'
          />
          <div className='relative z-10 container px-4 mx-auto'>
            <div className='flex flex-wrap justify-between items-center -m-8'>
              <div className='w-auto p-8'>
                <a href='#'>
                  <Image
                    src={logo}
                    alt=''
                  />
                </a>
              </div>
              <div className='w-auto p-8'>
              
              </div>
              <div className='w-auto p-8'>
                <div className='w-auto p-1.5'>
                    <a href='https://twitter.com/sangamitrastory'>
                      <div className='flex items-center justify-center w-8 h-8 border border-gray-300 hover:border-gray-400 rounded-full'>
                        <svg
                          width={14}
                          height={11}
                          viewBox='0 0 14 11'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z'
                            fill='#27272A'
                          />
                        </svg>
                      </div>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}