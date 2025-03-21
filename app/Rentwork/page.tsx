"use client";

import { title } from "@/components/primitives";
import { Image } from "@nextui-org/react";
import { motion, AnimatePresence } from 'framer-motion';
import { Slide, Zoom } from "react-awesome-reveal";
import { useState } from "react";

// Work gallery data
const workGallery = [
  {
    id: 1,
    src: "/photo/reeent.png",
    category: "rental",
    title: "บริการเช่าอุปกรณ์",
    description: "บริการให้เช่าคอมพิวเตอร์และอุปกรณ์ไอที"
  },
  {
    id: 2,
    src: "/photo/technical.jpg",
    category: "service",
    title: "บริการด้านเทคนิค",
    description: "บริการซ่อมและดูแลอุปกรณ์"
  },
  {
    id: 3,
    src: "/photo/install.jpg",
    category: "installation",
    title: "บริการติดตั้ง",
    description: "บริการติดตั้งระบบและอุปกรณ์"
  },
  {
    id: 4,
    src: "/photo/printer-service.jpg",
    category: "printer",
    title: "บริการเครื่องพิมพ์",
    description: "บริการเช่าและดูแลเครื่องพิมพ์"
  },
  {
    id: 5,
    src: "/photo/network.jpg",
    category: "network",
    title: "ระบบเน็ตเวิร์ค",
    description: "บริการติดตั้งและดูแลระบบเครือข่าย"
  },
  {
    id: 6,
    src: "/photo/cctv.jpg",
    category: "security",
    title: "ระบบกล้องวงจรปิด",
    description: "บริการติดตั้งระบบกล้องวงจรปิด"
  }
];

export default function RentWork() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background dark:bg-background/95">

      {/* Categories Section */}
      <section>
        <div className="container mx-auto px-4">
          <Zoom triggerOnce>
            <h2 className="text-2xl font-bold text-center mb-12 dark:text-white">
              บริการของเรา
            </h2>
          </Zoom>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workGallery.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(work.src)}
              >
                <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={work.src}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-semibold mb-2">{work.title}</h3>
                      <p className="text-gray-200 text-sm">{work.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-50 p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl w-full"
            >
              <Image
                src={selectedImage}
                alt="Selected work"
                className="w-full h-auto rounded-lg shadow-2xl"
                width={1920}
                height={1080}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-all"
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