'use client'

import { Fragment, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import localFont from 'next/font/local'
const papyrus = localFont({ src: './papyrus.ttf' })
const ayuthaya = localFont({ src: './Ayuthaya.ttf' })



import HTMLFlipBook from 'react-pageflip';
export default function Preview({ isOpen, setOpen }) {
    const audioRef = useRef(null);

    useEffect(() => {

        if (isOpen && audioRef.current) {
            console.log('Modal isOpen:', isOpen);
            console.log('audioRef.current:', audioRef.current);
            audioRef.current.volume = 0.1;
          audioRef.current.play().catch(error => {
            console.error("Error playing audio:", error);
            // Handle the error for autoplay restrictions, etc.
          });
        }
      }, [isOpen]);

      if(!isOpen && audioRef.current) {
        audioRef.current.pause()
      }
    
      const handleError = (e) => {
        console.error("Audio Error:", e);
        // Handle audio loading error
      };
    
  return (
    <div>
    <audio
        ref={audioRef} 
        onError={handleError}
        preload="auto" 
        loop
      >
          <source src="/tanpura.mp3" type="audio/mp3" />

        Your browser does not support the audio element.
      </audio>

      <Transition.Root show={isOpen} as="div">
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div>
                  <div className="mt-3 text-left sm:mt-5">
                    <Dialog.Title as="h3" className="font-semibold text-center text-5xl text-gray-900 pb-5">
                    <span className={papyrus.className}>Let there be Light</span>
                    </Dialog.Title>
                    <p className="text-2xl text-center">Moving from Darkness to Dawn</p>

                    <div className={`mt-10 prose lg:prose-xl ${ayuthaya.className}`}>


<p>How does one find a guru? I could think
  of only one way to get a definitive answer
  to this question. I had to ask my friend, the
  wise old musician, Bhaskar!</p>
  <p>Bhaskar was more than twice my age
  at that time. Even then, we had an easy
  and friendly relationship. Most times I
  would not have hesitated to call him my
  best friend. We talked about anything
  and everything.</p>
  

  <p>A few days later I met Bhaskar and asked him
  my question, “How does one find a Guru?”
  He looked at me very intently for a long time
  and then said, “You cannot!” took one of his
  very long pauses and continued, “The Guru
  finds you!”</p>
  
  <p>This was not the answer I was expecting.
  “Surely there is something one can do to find
  a guru?” feeling a little uncomfortable at the
  one-sidedness of the above statement.</p>
  <p>It looked like Bhaskar had lost interest in
  the question but he was merely lost in his
  thoughts. He came back and responded,
  “No, not really. The Guru finds you.”</p>

  <p>“I cannot accept that”, I said forcefully,
  “I have always found my own teachers…”</p>
  <p>“AHA!” he said, “Teachers! Yes, you can find
  your own teachers but the guru has to find
  you. There is no other way.”</p>
  <p>Now I was confused.</p>
  <p>“What is the difference between a teacher
  and a guru?” I asked.</p>
  <p>(Story continues in the full book...)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
    
  )
}
