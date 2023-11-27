import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../utils/ScrollAnimationWrapper';
import Lottie from 'lottie-react';
import memoryaidData from '../assets/animation/memoryaid.json';

const MemoryAidPage = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className='bg-gradient-to-b from-white to-white w-full py-14 px-8'>
      <div className='max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center'>
        <div className='flex flex-col w-full'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className='text-4xl mt-8 mb-12 grid justify-center md:text-6xl font-semibold col-span-11 text-black leading-relaxed'
            >
              Memory Aid
            </motion.h3>
          </ScrollAnimationWrapper>
          <div className='flex flex-col md:flex-row h-screen items-center'>
            <ScrollAnimationWrapper>
              <motion.div className='bg-white w-full md:max-w-md lg:max-w-full md:mx-auto h-screen flex items-center justify-center'>
                <div className='w-full h-100'>
                  <p className='text-xl md:text-3xl font-bold leading-tight'>
                    Book your appointment with WiseGuardian in 2 minutes
                  </p>
                  <p className='text-gray-700 mt-4'></p>
                  <form className='mt-6'>
                    <div>
                      <label className='block text-gray-700'>Full Name</label>
                      <input
                        type='text'
                        placeholder='Enter full name'
                        className='w-full px-4 py-3 rounded bg-gray-200 mt-1 border focus:border-teal-500 focus:bg-white focus:outline-none'
                        autoFocus
                        required
                      />
                    </div>
                    <div className='flex flex-col md:flex-row items-start mt-4 md:-mx-4'>
                      <div className='w-full md:mx-4'>
                        <label className='block text-gray-700'>
                          Phone Number
                        </label>
                        <input
                          type='tel'
                          placeholder='Enter Phone Number'
                          className='w-full px-4 py-3 rounded bg-gray-200 mt-1 border focus:border-teal-500 focus:bg-white focus:outline-none'
                          required
                        />
                      </div>
                      <div className='w-full md:mx-4 mt-4 md:mt-0'>
                        <label className='block text-gray-700'>Treatment</label>
                        <div className='relative mt-1'>
                          <select
                            className='w-full px-4 py-3 rounded bg-gray-200 border focus:border-teal-500 focus:bg-white focus:outline-none appearance-none'
                            required
                          >
                            <option value selected disabled>
                              Select Treatment
                            </option>
                          </select>
                          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700'>
                            <svg
                              className='fill-current h-4 w-4'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                            >
                              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='w-full mt-4'>
                      <label className='block text-gray-700'>Message</label>
                      <textarea
                        placeholder='Write message'
                        className='w-full px-4 py-3 rounded bg-gray-200 mt-1 border focus:border-teal-500 focus:bg-white focus:outline-none resize-none'
                        rows={3}
                        required
                      ></textarea>
                    </div>
                    <button
                      type='submit'
                      className='w-full block bg-teal-500 hover:bg-teal-400 focus:bg-teal-400 text-white font-semibold rounded px-4 py-3 mt-4'
                    >
                      Book Appointment
                    </button>
                  </form>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.div className='block w-full h-screen'>
                <div className='w-full h-100'>
                  <p className='text-xl md:text-3xl font-bold leading-tight mt-32'>
                    Upcoming Appointments
                  </p>
                  <div className='w-full h-screen object-cover'>
                    <Lottie animationData={memoryaidData} />
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryAidPage;
