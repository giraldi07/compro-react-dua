import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2',
    description: 'A modern e-commerce platform with advanced features and seamless user experience.',
    link: '#'
  },
  {
    title: 'Fitness App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5',
    description: 'Cross-platform mobile app for fitness tracking and workout planning.',
    link: '#'
  },
  {
    title: 'Marketing Dashboard',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    description: 'Comprehensive marketing analytics dashboard for data-driven decisions.',
    link: '#'
  },
  {
    title: 'Cloud Migration',
    category: 'Cloud Solutions',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    description: 'Successful cloud migration project for a large enterprise.',
    link: '#'
  },
  {
    title: 'Social Network',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    description: 'Social networking platform with real-time features.',
    link: '#'
  },
  {
    title: 'IoT Platform',
    category: 'Cloud Solutions',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    description: 'IoT device management and monitoring platform.',
    link: '#'
  }
];

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and success stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-white hover:text-indigo-200 transition-colors duration-300"
                >
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;