import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, Globe, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Code size={40} />,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies.',
    details: [
      'Full-stack Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'API Integration',
      'CMS Development'
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    slug: 'web-development'
  },
  {
    icon: <Smartphone size={40} />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
    details: [
      'iOS Development',
      'Android Development',
      'Cross-platform Apps',
      'App Store Optimization',
      'Mobile UI/UX Design'
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    slug: 'mobile-development'
  },
  {
    icon: <Globe size={40} />,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions for business growth.',
    details: [
      'SEO Optimization',
      'Social Media Marketing',
      'Content Strategy',
      'Email Marketing',
      'Analytics & Reporting'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    slug: 'digital-marketing'
  },
  {
    icon: <Database size={40} />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and management services.',
    details: [
      'Cloud Migration',
      'DevOps Services',
      'Cloud Security',
      'Serverless Architecture',
      'Performance Optimization'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    slug: 'cloud-solutions'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions to help your business thrive in the digital age
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
export { services };