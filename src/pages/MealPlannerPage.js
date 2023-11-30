import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from '../utils/ScrollAnimationWrapper';

const MealPlannerPage = () => {
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
              Meal Panner
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className='leading-normal mx-auto my-2 text-center'
            >
              Plan your meals with AI powered meal planner. This meal planner
              will generate a meal plan for you based on your age and total
              caloric goal.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className='py-8 lg:py-12 px-6 sm:px-0 lg:px-6'>
            <div className='flex justify-center'>
              <div className='w-full md:mx-4'>
                <label className='block text-gray-700 text-left'>
                  What is your Age?
                </label>
                <input
                  type='text'
                  placeholder='e.g. 30'
                  className='w-full px-4 py-3 rounded bg-gray-200 mt-1 border focus:border-teal-500 focus:bg-white focus:outline-none'
                  required
                />
                <label className='block text-gray-700 text-left'>
                  What is your goal calories consumption a day?
                </label>
                <input
                  type='text'
                  placeholder='e.g. 1850 calories'
                  className='w-full px-4 py-3 rounded bg-gray-200 mt-1 border focus:border-teal-500 focus:bg-white focus:outline-none'
                  required
                />
                <label className='block text-gray-700 text-left'>
                  What cuisines do you like?
                </label>
                <input
                  type='text'
                  placeholder='e.g. Italian, Mexican, Chinese'
                  className='w-full px-4 py-3 rounded bg-gray-200 mt-1 border focus:border-teal-500 focus:bg-white focus:outline-none'
                  required
                />
                <label className='block text-gray-700 text-left'>
                  What allergies do you have?
                </label>
                <input
                  type='text'
                  placeholder='e.g. Gluten, Dairy, Nuts'
                  className='w-full px-4 py-3 rounded bg-gray-200 mt-1 border focus:border-teal-500 focus:bg-white focus:outline-none'
                  required
                />
                <label className='block text-gray-700 text-left'>
                  What diet do you want to follow?
                </label>
                <input
                  type='text'
                  placeholder='e.g. Vegan'
                  className='w-full px-4 py-3 rounded bg-gray-200 mt-1 border focus:border-teal-500 focus:bg-white focus:outline-none'
                  required
                />
                <button
                  type='submit'
                  className='w-full block bg-teal-500 hover:bg-teal-400 focus:bg-teal-400 text-white font-semibold rounded px-4 py-3 mt-4'
                >
                  Generate your Meal Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlannerPage;
