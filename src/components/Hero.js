import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../utils/ScrollAnimationWrapper';
import Lottie from 'lottie-react';
import heroData from '../assets/animation/hero.json';

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className='max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto'>
      <ScrollAnimationWrapper>
        <motion.div
          className='grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16'
          variants={scrollAnimation}
        >
          <div className='flex flex-col justify-center items-start row-start-2 sm:row-start-1'>
            <h1 className='text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal'>
              Transforming Aging Experiences with <strong>WiseGuardian</strong>
            </h1>
            <p className='text-black-500 mt-4 mb-6'>
              Your Trusted Companion for Personalized Elderly Care Solutions and
              Holistic Approach to Elderly Care Tailored Just for Them
            </p>
            <a href='#services' className='decoration-0'>
              <button className='py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-teal-500 hover:shadow-teal-500 transition-all outline-none'>
                Get Started
              </button>
            </a>
          </div>
          <div className='flex w-full'>
            <motion.div className='h-full w-full' variants={scrollAnimation}>
              <div className='h-[383px] w-[612px]'>
                <Lottie animationData={heroData} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
