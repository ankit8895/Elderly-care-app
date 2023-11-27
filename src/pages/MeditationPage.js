import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../utils/ScrollAnimationWrapper';

import HeartMeditationIcon from '../assets/images/heart-meditation.png';
import ThroatMeditationIcon from '../assets/images/throat-meditation.png';
import CrownMeditationIcon from '../assets/images/crown-meditation.png';
import SacralMeditationIcon from '../assets/images/sacral-meditation.png';
import RootMeditationIcon from '../assets/images/root-meditation.png';
import PexusMeditationIcon from '../assets/images/pexus-meditation.png';

const MeditationPage = () => {
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
              Deep Meditation
            </motion.h3>
          </ScrollAnimationWrapper>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:mx-8 mt-6 gap-2'>
            <ScrollAnimationWrapper className='mx-4'>
              <motion.div
                variants={scrollAnimation}
                className='max-w-sm rounded-lg shadow-sm hover:shadow-lg mb-6 mx-auto bg-emerald-200'
              >
                <a href='/'>
                  <div className='flex justify-center'>
                    <img
                      className='p-8 rounded-t-lg'
                      alt='heart-meditation'
                      src={HeartMeditationIcon}
                    />
                  </div>
                  <div className='px-5 pb-5 flex flex-col items-center'>
                    <span className='text-xl sm:text-2xl font-semibold'>
                      Heart Meditation
                    </span>
                    <div className='flex items-center my-3 flex-wrap'>
                      <span className='text-xs sm:font-semibold sm:mr-1 px-2 py-0.5 rounded ml-3 mt-1 bg-emerald-100'>
                        Love
                      </span>
                      <span className='text-xs sm:font-semibold sm:mr-1 px-2 py-0.5 rounded ml-3 mt-1 bg-emerald-100'>
                        Inner-Peace
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className='mx-4'>
              <motion.div
                variants={scrollAnimation}
                className='max-w-sm rounded-lg shadow-sm hover:shadow-lg mb-6 mx-auto bg-cyan-200'
              >
                <a href='/'>
                  <div className='flex justify-center'>
                    <img
                      className='p-8 rounded-t-lg'
                      alt='throat-meditation'
                      src={ThroatMeditationIcon}
                    />
                  </div>
                  <div className='px-5 pb-5 flex flex-col items-center'>
                    <span className='text-xl sm:text-2xl font-semibold'>
                      Throat Meditation
                    </span>
                    <div className='flex items-center my-3 flex-wrap'>
                      <span className='text-xs sm:font-semibold sm:mr-1 px-2 py-0.5 rounded ml-3 mt-1 bg-cyan-100'>
                        Truth
                      </span>
                      <span className='text-xs sm:font-semibold sm:mr-1 px-2 py-0.5 rounded ml-3 mt-1 bg-cyan-100'>
                        Expression
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className='mx-4'>
              <motion.div
                variants={scrollAnimation}
                className='max-w-sm rounded-lg shadow-sm hover:shadow-lg mb-6 mx-auto bg-fuchsia-200'
              >
                <a href='/'>
                  <div className='flex justify-center'>
                    <img
                      className='p-8 rounded-t-lg'
                      alt='crown-meditation'
                      src={CrownMeditationIcon}
                    />
                  </div>
                  <div className='px-5 pb-5 flex flex-col items-center'>
                    <span className='text-xl sm:text-2xl font-semibold'>
                      Crown Meditation
                    </span>
                    <div className='flex items-center my-3 flex-wrap'>
                      <span className='text-xs sm:font-semibold sm:mr-1 px-2 py-0.5 rounded ml-3 mt-1 bg-fuchsia-100'>
                        Spirituality
                      </span>
                      <span className='text-xs sm:font-semibold sm:mr-1 px-2 py-0.5 rounded ml-3 mt-1 bg-fuchsia-100'>
                        Consiousness
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className='mx-4'>
              <motion.div
                variants={scrollAnimation}
                className='max-w-sm rounded-lg shadow-sm hover:shadow-lg mb-6 mx-auto bg-orange-200'
              >
                <a href='/'>
                  <div className='flex justify-center'>
                    <img
                      className='p-8 rounded-t-lg'
                      alt='sacral-meditation'
                      src={SacralMeditationIcon}
                    />
                  </div>
                  <div className='px-5 pb-5 flex flex-col items-center'>
                    <span className='text-xl sm:text-2xl font-semibold'>
                      Sacral Meditation
                    </span>
                    <div className='flex items-center my-3 flex-wrap'>
                      <span className='text-xs sm:font-semibold sm:mr-1 px-2 py-0.5 rounded ml-3 mt-1 bg-orange-100'>
                        Creativity
                      </span>
                      <span className='text-xs sm:font-semibold sm:mr-1 px-2 py-0.5 rounded ml-3 mt-1 bg-orange-100'>
                        Pleasure
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className='mx-4'>
              <motion.div
                variants={scrollAnimation}
                className='max-w-sm rounded-lg shadow-sm hover:shadow-lg mb-6 mx-auto bg-red-200'
              >
                <a href='/'>
                  <div className='flex justify-center'>
                    <img
                      className='p-8 rounded-t-lg'
                      alt='root-meditation'
                      src={RootMeditationIcon}
                    />
                  </div>
                  <div className='px-5 pb-5 flex flex-col items-center'>
                    <span className='text-xl sm:text-2xl font-semibold'>
                      Root Meditation
                    </span>
                    <div className='flex items-center my-3 flex-wrap'>
                      <span className='text-xs sm:font-semibold sm:mr-1 px-2 py-0.5 rounded ml-3 mt-1 bg-red-100'>
                        Survival
                      </span>
                      <span className='text-xs sm:font-semibold sm:mr-1 px-2 py-0.5 rounded ml-3 mt-1 bg-red-100'>
                        Grounding
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className='mx-4'>
              <motion.div
                variants={scrollAnimation}
                className='max-w-sm rounded-lg shadow-sm hover:shadow-lg mb-6 mx-auto bg-amber-200'
              >
                <a href='/'>
                  <div className='flex justify-center'>
                    <img
                      className='p-8 rounded-t-lg'
                      alt='pexus-meditation'
                      src={PexusMeditationIcon}
                    />
                  </div>
                  <div className='px-5 pb-5 flex flex-col items-center'>
                    <span className='text-xl sm:text-2xl font-semibold'>
                      Pexus Meditation
                    </span>
                    <div className='flex items-center my-3 flex-wrap'>
                      <span className='text-xs sm:font-semibold sm:mr-1 px-2 py-0.5 rounded ml-3 mt-1 bg-amber-100'>
                        Will
                      </span>
                      <span className='text-xs sm:font-semibold sm:mr-1 px-2 py-0.5 rounded ml-3 mt-1 bg-amber-100'>
                        Confidence
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeditationPage;
