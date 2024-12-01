import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Principal Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    bio: 'Award-winning designer with 15 years of experience in luxury interiors.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@brittocharette.com'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Senior Architect',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    bio: 'Specializes in sustainable and modern architectural solutions.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'michael@brittocharette.com'
    }
  },
  {
    name: 'Emma Davis',
    role: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    bio: 'Creating timeless spaces with contemporary elegance.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'emma@brittocharette.com'
    }
  }
];

const TeamMemberCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="aspect-[3/4] relative overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <h3 className="text-2xl font-bold">{member.name}</h3>
      <p className="text-white/90 mb-4">{member.role}</p>
      
      <div className="flex gap-4 items-center">
        <a href={member.social.linkedin} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
          <Linkedin size={18} />
        </a>
        <a href={member.social.twitter} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
          <Twitter size={18} />
        </a>
        <a href={`mailto:${member.social.email}`} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </motion.div>
);

export const TeamSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Team</h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Meet the creative minds behind our exceptional designs
      </p>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} index={index} />
      ))}
    </div>
  </section>
);