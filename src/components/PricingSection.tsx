import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Essential',
    price: '2,999',
    description: 'Perfect for small spaces',
    features: [
      'Initial consultation',
      '2D space planning',
      'Color scheme selection',
      'Basic furniture recommendations',
      'One revision round'
    ]
  },
  {
    name: 'Premium',
    price: '5,999',
    description: 'Ideal for full room designs',
    features: [
      'Everything in Essential',
      '3D visualization',
      'Custom furniture selection',
      'Material & finish board',
      'Three revision rounds',
      'Project management'
    ],
    popular: true
  },
  {
    name: 'Luxury',
    price: '9,999',
    description: 'Complete home transformation',
    features: [
      'Everything in Premium',
      'Full-home 3D walkthrough',
      'Custom furniture design',
      'Unlimited revisions',
      'Dedicated project manager',
      'Contractor coordination',
      'Post-project support'
    ]
  }
];

const PricingCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className={`relative p-8 rounded-2xl ${
      plan.popular 
        ? 'bg-black text-white shadow-xl' 
        : 'bg-white text-black border border-gray-200'
    }`}
  >
    {plan.popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-sm font-medium rounded-full">
        Most Popular
      </div>
    )}

    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <p className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
        {plan.description}
      </p>
    </div>

    <div className="mb-8">
      <span className="text-4xl font-bold">${plan.price}</span>
      <span className={plan.popular ? 'text-gray-300' : 'text-gray-600'}>
        /project
      </span>
    </div>

    <ul className="space-y-4 mb-8">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3">
          <Check size={18} className={plan.popular ? 'text-white' : 'text-black'} />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>

    <button
      className={`w-full py-3 rounded-full transition-colors ${
        plan.popular
          ? 'bg-white text-black hover:bg-gray-100'
          : 'bg-black text-white hover:bg-gray-800'
      }`}
    >
      Get Started
    </button>
  </motion.div>
);

export const PricingSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Simple Pricing</h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Choose the perfect plan for your space transformation
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pricingPlans.map((plan, index) => (
        <PricingCard key={index} plan={plan} index={index} />
      ))}
    </div>
  </section>
);