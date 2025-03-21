"use client";

import { useState } from 'react';
import GalleryFilter from '@/components/GalleryFilter';
import { Image } from "@nextui-org/react";
import { motion, AnimatePresence } from 'framer-motion';
import { Slide, Fade } from "react-awesome-reveal";

// Preview images (one per category)
  // Updated preview images without event and donation categories
  const previewImages = [
    {
      src: "/photo/product_type2.jpeg",
      category: "study",
      title: "การศึกษา",
      description: "กิจกรรมด้านการศึกษาและการพัฒนา",
      isPreview: true
    },
    {
      src: "/photo/1.jpg",
      category: "society",
      title: "กิจกรรมสังคม",
      description: "การช่วยเหลือสังคมและชุมชน",
      isPreview: true,
    }
  ];
  
  // Updated all images (removed event and donation)
  const allImages = [
    {
      src: "/photo/product_type2.jpeg",
      category: "study",
      title: "การศึกษา 1"
    },
    ...[...Array(70)].map((_, index) => ({
      src: `/photo/${index + 1}.jpg`,
      category: "society",

    }))
  ];

export default function GalleryPage() {
  const [filteredImages, setFilteredImages] = useState(previewImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFilterChange = (selectedKeys: Set<string>) => {
    try {
      if (selectedKeys.size === 0) {
        setFilteredImages(previewImages);
        return;
      }
      
      const filtered = allImages.filter((image) => 
        image && image.category && selectedKeys.has(image.category)
      );
      
      setFilteredImages(filtered.length > 0 ? filtered.map(img => ({
        ...img,
        title: 'title' in img ? img.title : 'Untitled',
        ...img,
        description: '',
        isPreview: false
      })) : previewImages);
    } catch (error) {
      console.error('Filter error:', error);
      setFilteredImages(previewImages);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/photo/6057300.jpg"
            alt="Gallery Hero"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
        <div className="relative container mx-auto h-full flex items-center justify-center px-4">
          <Slide direction="down" triggerOnce>
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                แกลเลอรี่ภาพกิจกรรม
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                บันทึกความทรงจำแห่งการแบ่งปัน
              </p>
            </div>
          </Slide>
        </div>
      </section>
      {/* Filter Section */}
      <section className="py-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <GalleryFilter onFilterChange={handleFilterChange} />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className={`group ${!image.isPreview ? 'cursor-pointer' : ''} h-[300px]`}
                onClick={() => !image.isPreview && setSelectedImage(image.src)}
              >
                <div className="relative w-full h-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={image.src}
                    alt={image.title || 'Gallery image'}
                    classNames={{
                      wrapper: "w-full h-full",
                      img: `w-full h-full object-cover ${image.src.includes('napok') ? 'object-[center_30%]' : ''}`
                    }}
                    radius="none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white text-xl font-medium">{image.title}</p>
                      {image.description && (
                        <p className="text-gray-200 mt-2">{image.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-50 p-4 flex items-center justify-center backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-full"
            >
              <Image
                src={selectedImage}
                alt="Selected image"
                className="w-full h-auto rounded-lg shadow-2xl"
                width={1920}
                height={1080}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-all transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}