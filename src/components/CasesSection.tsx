import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from './BlogPost';

const allProjects = [
  {
    title: "Modern Minimalist",
    description: "Clean lines meet comfort",
    images: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4"
    ]
  },
  {
    title: "Urban Oasis",
    description: "Nature-inspired living spaces",
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
      "https://images.unsplash.com/photo-1598928636135-d702940dc78d",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c"
    ]
  },
  {
    title: "Luxury Penthouse",
    description: "Elevated living experience",
    images: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
      "https://images.unsplash.com/photo-1600607688939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    ]
  },
  {
    title: "Contemporary Villa",
    description: "Modern elegance redefined",
    images: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea"
    ]
  },
  {
    title: "Industrial Loft",
    description: "Raw beauty meets sophistication",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    ]
  },
  {
    title: "Coastal Retreat",
    description: "Seaside serenity",
    images: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
      "https://images.unsplash.com/photo-1600607688939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    ]
  },
  {
    title: "Mountain Lodge",
    description: "Alpine luxury living",
    images: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea"
    ]
  },
  {
    title: "Smart Home",
    description: "Technology meets design",
    images: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4"
    ]
  },
  {
    title: "Eco-Friendly Haven",
    description: "Sustainable luxury",
    images: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
      "https://images.unsplash.com/photo-1600607688939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    ]
  }
];

const ProjectCard = ({ project, index, onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = x / width;
    
    const imageIndex = Math.floor(percentage * project.images.length);
    if (imageIndex !== currentImageIndex && imageIndex >= 0 && imageIndex < project.images.length) {
      setCurrentImageIndex(imageIndex);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
      style={{ transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})` }}
      onClick={onClick}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer transform transition-all duration-300 group-hover:scale-105 shadow-lg"
      >
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="mt-2 text-white/80">{project.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const CasesSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, allProjects.length));
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured Cases</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our portfolio of exceptional interior transformations
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            onClick={() => {
              setSelectedProject(project);
              setIsBlogOpen(true);
            }}
          />
        ))}
      </div>

      {visibleProjects < allProjects.length && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            Load More Projects
          </button>
        </motion.div>
      )}

      {selectedProject && (
        <BlogPost
          project={selectedProject}
          isOpen={isBlogOpen}
          onClose={() => {
            setIsBlogOpen(false);
            setSelectedProject(null);
          }}
        />
      )}
    </section>
  );
};