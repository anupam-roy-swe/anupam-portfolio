'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  BsArrowRight,
  BsFacebook,
  BsLinkedin,
} from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section className=''>
      <div className='flex items-center justify-between'>
        <div className=''>
          <motion.h1
            className=' top-0 bottom-0 text-4xl '
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            {' '}
            👋Hey, I'm Anupam
          </motion.h1>
          <motion.span
            className=' '
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            A skilled web developer, crafting and
            managing websites and web applications
            to ensure the success of the entire
            product with finesse.
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.4,
          }}
        >
          {' '}
          <Image
            src='/anupam.jpg'
            alt='anupam'
            width='400'
            height='400'
            quality='95'
            priority={true}
            className='h-64 w-64 rounded-full
               object-cover border-[0.35rem]
                border-white shadow-xl'
          />
        </motion.div>
      </div>
      {/* intro text start */}

      {/* socle */}
      <motion.div
        className=' mb-10 mt-4 flex flex-col sm:flex-row items-center
       justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          className='group bg-gray-900 text-white px-7
         py-3 flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 hover:bg-gray-950
           active:scale-105 transition'
          href='#contact'
        >
          {' '}
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          href='/CV.pdf'
          download
        >
          Projects{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          href='/CV.pdf'
          download
        >
          Download CV{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>

        <a
          className='bg-white p-4 text-gray-700
           hover:text-gray-950 flex items-center 
           gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]
            active:scale-105 transition cursor-pointer borderBlack 
            dark:bg-white/10 dark:text-white/60'
          href='www.linkedin.com'
          target='_blank'
        >
          <BsLinkedin />
        </a>

        <a
          className='bg-white p-4 text-gray-700 
          flex items-center gap-2 text-[1.35rem] 
          rounded-full focus:scale-[1.15] hover:scale-[1.15] 
          hover:text-gray-950 active:scale-105 transition 
          cursor-pointer borderBlack dark:bg-white/10 
          dark:text-white/60'
          href='https://github.com'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
        <a
          className='bg-white p-4 text-gray-700 
          flex items-center gap-2 text-[1.35rem] 
          rounded-full focus:scale-[1.15] hover:scale-[1.15] 
          hover:text-gray-950 active:scale-105 transition 
          cursor-pointer borderBlack dark:bg-white/10 
          dark:text-white/60'
          href='https://github.com'
          target='_blank'
        >
          <BsFacebook />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
