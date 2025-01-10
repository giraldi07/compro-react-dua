import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              About Our Company
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We are a forward-thinking technology company dedicated to delivering innovative
              solutions that help businesses succeed in the digital era. With over a decade
              of experience, we've helped countless organizations transform their operations
              and achieve their goals.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {[
                { icon: <Users className="h-8 w-8" />, label: '100+ Clients' },
                { icon: <Target className="h-8 w-8" />, label: '95% Success' },
                { icon: <Award className="h-8 w-8" />, label: '10+ Awards' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-indigo-600 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="mt-12 lg:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team working together"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;