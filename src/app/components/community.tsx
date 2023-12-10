export default function Community() {
    return (
        <section id="community" className='py-24 bg-white overflow-hidden'>
        <div className='container px-4 mx-auto'>
          <div className='flex flex-wrap xl:items-center -m-8'>
            <div className='w-full md:w-1/2 p-8 bg-white'>
              <div className='md:max-w-xl'>
                <h2 className='mb-3 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight text-sky-600'>
                  The Community
                </h2>
                <p className='mb-9 font-medium text-gray-600 leading-relaxed'>
                  Sangamitra's life and his book is an inspiration and an
                  invitation to transform our lives. The online community to
                  facilitate this is still in the making.
                </p>
                <div className='mb-3 p-2 xl:pl-6 inline-block md:max-w-xl w-full border border-gray-300 rounded-lg focus-within:ring focus-within:ring-indigo-300'>
                  <div className='flex flex-wrap items-center'>
                    <div className='w-full xl:flex-1'>
                      <input
                        className='p-3 xl:p-0 xl:pr-6 w-full font-medium text-gray-500 placeholder-gray-500 outline-none'
                        id='newsletterInput2-1'
                        type='text'
                        placeholder='Email address'
                      />
                    </div>
                    <div className='w-full xl:w-auto'>
                      <div className='block'>
                        <button
                          className='py-4 px-8 w-full text-white font-semibold border rounded-lg focus:ring transition ease-in-out duration-200 px-6 rounded-xl bg-yellow-500 border-yellow-600 focus:ring-yellow-400 hover:bg-yellow-500'
                          type='button'
                        >
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <p className='text-sm text-gray-500 font-medium'>
                  Get to know when the community is ready. We don’t spam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}