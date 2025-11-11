'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  };

  return (
    <div className={cn('relative p-[1px] group', containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 rounded-[--radius] z-[1] opacity-40 group-hover:opacity-60 blur-sm transition duration-500 will-change-transform',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#4caf50,transparent),radial-gradient(circle_farthest-side_at_100%_0,#66bb6a,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#4caf50,transparent),radial-gradient(circle_farthest-side_at_0_0,#81c784,#66bb6a)]'
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 rounded-[--radius] z-[1] will-change-transform',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#4caf50,transparent),radial-gradient(circle_farthest-side_at_100%_0,#66bb6a,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#4caf50,transparent),radial-gradient(circle_farthest-side_at_0_0,#81c784,#66bb6a)]'
        )}
      />

      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  );
};

