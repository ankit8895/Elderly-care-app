import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../utils/ScrollAnimationWrapper';
import Lottie from 'lottie-react';
import serviceData from '../assets/animation/service.json';

const Services = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className='bg-gradient-to-b from-white to-white w-full py-14' id=''>
      <div className='max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center'>
        <div className='flex flex-col w-full'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className='text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-relaxed'
            >
              Our Services
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className='leading-normal mx-auto my-2 text-center'
            >
              Innovative Solutions for Holistic Wellbeing and Support
            </motion.p>
          </ScrollAnimationWrapper>
          <div className='grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6'>
            <ScrollAnimationWrapper className='flex justify-center'>
              <motion.div
                variants={scrollAnimation}
                className='flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-4'
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className='p-4 lg:p-0 mt-6 lg:mt-16'>
                  <Lottie animationData={serviceData} />
                </div>
                <p className='text-lg text-black-600 font-medium capitalize my-2 sm:my-7'>
                  Meditation Guide
                </p>
                <div className='flex flex-col w-full justify-center mb-8 flex-none mt-12'>
                  <a href='/' className='decoration-0'>
                    <button className='font-medium tracking-wide py-2 px-5 sm:px-8 border border-teal-500 text-teal-500 bg-white outline-none rounded-l-full rounded-r-full capitalize hover:bg-teal-500 hover:text-white transition-all hover:shadow-teal-500'>
                      Select
                    </button>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className='flex justify-center'>
              <motion.div
                variants={scrollAnimation}
                className='flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-4'
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className='p-4 lg:p-0 mt-6 lg:mt-16'>
                  <Lottie animationData={serviceData} />
                </div>
                <p className='text-lg text-black-600 font-medium capitalize my-2 sm:my-7'>
                  Memory Aid
                </p>
                <div className='flex flex-col w-full justify-center mb-8 flex-none mt-12'>
                  <a href='/' className='decoration-0'>
                    <button className='font-medium tracking-wide py-2 px-5 sm:px-8 border border-teal-500 text-teal-500 bg-white outline-none rounded-l-full rounded-r-full capitalize hover:bg-teal-500 hover:text-white transition-all hover:shadow-teal-500'>
                      Select
                    </button>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className='flex justify-center'>
              <motion.div
                variants={scrollAnimation}
                className='flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-4'
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className='p-4 lg:p-0 mt-6 lg:mt-16'>
                  <Lottie animationData={serviceData} />
                </div>
                <p className='text-lg text-black-600 font-medium capitalize my-2 sm:my-7'>
                  Emergency Alert
                </p>
                <div className='flex flex-col w-full justify-center mb-8 flex-none mt-12'>
                  <a href='/' className='decoration-0'>
                    <button className='font-medium tracking-wide py-2 px-5 sm:px-8 border border-teal-500 text-teal-500 bg-white outline-none rounded-l-full rounded-r-full capitalize hover:bg-teal-500 hover:text-white transition-all hover:shadow-teal-500'>
                      Select
                    </button>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
