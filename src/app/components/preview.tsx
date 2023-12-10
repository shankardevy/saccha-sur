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
  best f riend. We talked about anything
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
  <p>“Great question” he said, “come back in a
  couple of days and we can talk about this.”</p>

  <p>The couple of days turned into a couple of
months. One day Bhaskar had a concert in a
small town and asked me if I wanted to go. I
eagerly agreed. On the drive there he began
without preamble.</p>

<p>“When you know that you don’t know
something, you can go find someone to
teach you. But if you don’t know that you
don’t know – in other words if you are not
even aware of your ignorance – how are you
going to find a teacher for that?”</p>
<p>“A Guru sheds light on that which you
don’t know that you don’t know and thus
gets you to a stage that you know that
you don’t know! It is the first and essential
step of all learning. Since you are unaware
at this stage about your ignorance, it is
unlikely that you will even feel the need
to learn, much less be able to find the
person who will get rid of this ignorance.
A disciple, the Shishya, therefore has no
ability to find his guru. The guru has to
find him. It is an act of grace, compassion
and kindness.”</p>

<p>Like all his words, these words had an
instant and deep ring of truth to them,
“Wow!” I said, “I did not realise that. So, I
have been choosing teachers till now.”
His face was very soft and eyes were far,
far away. “Yes, you can find your teachers
because you know that you don’t know
something. The teacher takes you from that
stage to the stage where you know that
you know.”</p>

<p>“There are about seven major differences
between a Guru and a Teacher,” he
continued, reading my mind. Here is the
summary of the differences that he told me
on that drive.</p>

<ul>
    <li>A teacher has a skill or some specialised
knowledge whereas a Guru’s role is to
illuminate. The teacher gives you Vidya;
the Guru gives you light.</li>
<li>The interaction between a teacher and
student is a transaction – the teacher
teaches you their competence and you
compensate them for their time. The
Guru-Shishya relationship is one of love
and compassion. The teacher gives you
knowledge, the guru his grace. You
repay your teachers with dakshina, you
repay your gurus by living the truths
that were illuminated for you.</li>
<li>The teacher points you towards the
goal; the guru points you to yourself.</li>
<li>The good teacher answers your
questions, a great teacher will question
your answers; the guru questions your
questions. He helps you understand
why the question arose in the first
place. He asks of you, Who is asking
this question and Why is this question
being asked?</li>
<li>You sit facing the teacher and look at
the teacher. The guru stands behind your
shoulder to shine light on that, which is
dark for you.</li>
<li>A teacher teaches you through your
senses; a guru makes you more sensitive.
A teacher reduces your ignorance; a guru
makes you more aware of your ignorance.</li>
<li>And finally, you can’t find your guru; the
guru has to find you. It is because of the
guru’s illuminating light that you seek
your teachers.</li>
</ul>
<p>The rest of the drive was spent in silence as
I digested the deep import of this wisdom
given to me. This was a profoundly different
way of looking at learning, and one that I
was not entirely comfortable with.</p>

<p>It took me almost till the end of the drive
to verbalise my question: “Surely there is
something one can do to find a guru?” As
soon as I asked this, I felt a tinge of regret
because I realised immediately that I had
already asked this exact question a few
months before.</p>

<p>Bhaskar gave me a long and pitying look,
“Obviously, you have not understood
anything from what I told you.” It looked like
he meant to add, “you idiot” to that sentence
but stopped short.</p>

<p>Instantly though he smiled the most sunny
and cheerful smile that was his hallmark,
“Oh! Don’t look so crestfallen. There is one
way. And that was my way. From this day
forward, accept that EVERY person who
crosses your path is your Guru. And one day,
it will be true.”</p>



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
