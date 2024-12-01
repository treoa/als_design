import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Camera, Ruler, Lightbulb, PenTool, Truck } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Color Consultation',
    description: 'Expert guidance on color schemes and palettes that reflect your style and enhance your space.'
  },
  {
    icon: Camera,
    title: '3D Visualization',
    description: 'Photorealistic 3D renderings to help you visualize your space before making any changes.'
  },
  {
    icon: Ruler,
    title: 'Space Planning',
    description: 'Optimal layout solutions that maximize functionality and flow in your space.'
  },
  {
    icon: Lightbulb,
    title: 'Lighting Design',
    description: 'Strategic lighting plans that create ambiance and enhance architectural features.'
  },
  {
    icon: PenTool,
    title: 'Custom Furniture',
    description: 'Bespoke furniture design tailored to your specific needs and style preferences.'
  },
  {
    icon: Truck,
    title: 'Procurement',
    description: 'Full-service sourcing and purchasing of all materials and furnishings.'
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-rose-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    <div className="relative">
      <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <service.icon size={24} className="text-black" />
      </div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  </motion.div>
);

export const AdditionalServices = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Additional Services</h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Enhance your design experience with our specialized services
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  </section>
);