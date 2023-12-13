import Image from 'next/image'
import localFont from 'next/font/local'
const papyrus = localFont({ src: './papyrus.ttf' })

export default function Testimonials() {
    return (
        <section id="community" className='relative pt-24 pb-32 bg-white overflow-hidden'>

        <div className='relative z-10 container px-4 mx-auto'>
          <div className='flex flex-wrap justify-between items-end -m-2 mb-12'>
            <div className='w-auto p-2'>
              <h2 className='text-5xl font-bold font-heading tracking-px-n text-sky-600'>
                <span className={papyrus.className}>What readers say!</span>
              </h2>
            </div>
            <div className='w-auto p-2' />
          </div>
          <div className='flex flex-wrap -m-2'>
            <div className='w-full md:w-1/2 lg:w-1/4 p-2 '>
              <div className='px-8 py-6 h-full bg-white rounded-3xl shadow shadow-xl'>
                <div className='flex flex-col justify-between h-full'>
                  <div className='mb-7 block'>
                    <p>
                    In these days with so little wisdom and too much violence, Saccha Sur brings us back to the simplicity and complexity of being human.  Brings us back to ourselves and lays us back on the path to life, and love and being alive.  Out of the noise into oneness.  It is an invitation to be in relationship with the questions that are just more steppingstones on the endless path of being.    Awaken to love.
                    </p>
                  </div>
                  <div className='block'>
                    <p>
                        <span className='font-bold'>Jodie Evans</span><br/> Co-Founder, CODEPINK:  Women for Peace
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
              <div className='px-8 py-6 h-full bg-white rounded-3xl shadow shadow-xl'>
                <div className='flex flex-col justify-between h-full'>
                  <div className='mb-7 block'>
                    <p>
                    This book has taken me on an incredibly insightful journey! The stories opened my mind to new perspectives and offered profound wisdom. Its compelling narrative left a lasting impact, urging me to reflect on life in profound ways. A must-read for those seeking inspiration and a deeper understanding of the human experience.
                    </p>
                  </div>
                  <div className='block'>
                    <p>
                        <span className='font-bold'>Claudia Roth</span> <br/> Founder, Soul-Luxury.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
              <div className='px-8 py-6 h-full bg-white rounded-3xl shadow shadow-xl'>
                <div className='flex flex-col justify-between h-full'>
                  <div className='mb-7 block'>
                    <p>
                    As a mother, grand mother, and lifelong learner, I have truly appreciated the nuggets of eternal wisdom delivered by this book with exceptional clarity and brevity. Woven through the fabric of classical music, these stories are like the drone of a tanpura reminding me to live my life in harmony with “Saccha Sur” or notes of wisdom from the maestros.
                    </p>
                  </div>
                  <div className='block'>
                    <p>
                    <span className='font-bold'>Dr. Kalpana Merchant</span> <br/>Neuroscientist and R&D Executive.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
              <div className='px-8 py-6 h-full bg-white rounded-3xl shadow shadow-xl'>
                <div className='flex flex-col justify-between h-full'>
                  <div className='mb-7 block'>
                    <p>
                    Saccha Sur is a treasure of profound insights, offering deep wisdom, packaged as short, engaging stories. This book has earned its place of honor in my living room; it's become a ritual to randomly select a story and, invariably, I discover the exact lesson I need at that moment. Whether it's a reminder to live fully in the present or to approach life with a sense of wonder, each story has a way of striking a chord.
                    </p>
                  </div>
                  <div className='block'>
                    <p>
                     
                    <span className='font-bold'>Sanjiv Sidhu</span> <br/>Co-founder and Chairman o9 Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}