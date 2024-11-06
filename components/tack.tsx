'use client';

import Image from 'next/image';
import { animate, motion } from 'framer-motion';

const slideVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-50%',
  },
};

export const tech = [
  {
    src: '/tech/express.svg',
    width: 101.2,
    height: 29.99,
    alt: 'express',
  },
  {
    src: '/tech/node.svg',
    width: 106.2,
    height: 31,
    alt: 'node js',
  },
  {
    src: '/tech/ts.svg',
    width: 46.14,
    height: 45.24,
    alt: 'typescript',
  },
  {
    src: '/tech/expo.svg',
    width: 89.96,
    height: 32.49,
    alt: 'expo',
  },
  {
    src: '/tech/gql.svg',
    width: 47.48,
    height: 52.48,
    alt: 'gql',
  },
  {
    src: '/tech/apollo.svg',
    width: 47.48,
    height: 52.48,
    alt: 'apollo',
  },
  {
    src: '/tech/react.svg',
    width: 54.98,
    height: 48.73,
    alt: 'react',
  },
  {
    src: '/tech/angular.svg',
    width: 47.48,
    height: 51.23,
    alt: 'angular',
  },
  {
    src: '/tech/psql.svg',
    width: 128.94,
    height: 19.99,
    alt: 'psql',
  },
  {
    src: '/tech/prisma.svg',
    width: 43.73,
    height: 51.23,
    alt: 'prisma',
  },
];

const Tack = () => {
  return (
    <section
      className='bg-secondary pb-10 pt-10'
      id='FAQ'
    >
      <div className='center mt-10 flex justify-center py-4'>
        <div className='flex w-full max-w-[1200px] items-center justify-center overflow-x-hidden'>
          <div className='right-0 z-40 h-full w-[150px] bg-opacity-20 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/0' />
          <motion.div
            variants={slideVariant}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
            initial='initial'
            animate='animate'
            className='center flex space-x-12'
          >
            {tech.map((item) => (
              <Image
                key={item.alt}
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />
            ))}
            {tech.map((item) => (
              <Image
                key={item.alt}
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />
            ))}
          </motion.div>
          <div className='right-0 z-40 h-full w-[150px] bg-gradient-to-l from-secondary via-secondary/90 to-secondary/0' />
        </div>
      </div>
    </section>
  );
};
export default Tack;
