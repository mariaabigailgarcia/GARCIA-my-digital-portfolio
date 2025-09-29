import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Portfolio() {
  // Project images
  const project1Images = ["/images/BOD01.png", "/images/BOD02.png", "/images/BOD03.png"];
  const project2Images = ["/images/CMS01.jpg", "/images/CMS02.jpg"];

  const [current1, setCurrent1] = useState(0);
  const [current2, setCurrent2] = useState(0);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);

  // Carousel handlers
  const nextSlide = (images: string[], current: number, setCurrent: (n: number) => void) => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = (images: string[], current: number, setCurrent: (n: number) => void) => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  // Modal handlers
  const openModal = (images: string[], startIndex = 0) => {
    setModalImages(images);
    setModalIndex(startIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImages([]);
    setModalIndex(0);
  };

  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 with carousel */}
          <div className="border rounded-lg p-4 shadow bg-white">
            <div className="relative overflow-hidden rounded-md mb-3">
              <img
                src={project1Images[current1]}
                alt={`Project 1 - ${current1 + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <button
                onClick={() => prevSlide(project1Images, current1, setCurrent1)}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 text-white rounded-full px-2 py-1"
              >
                ◀
              </button>
              <button
                onClick={() => nextSlide(project1Images, current1, setCurrent1)}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 text-white rounded-full px-2 py-1"
              >
                ▶
              </button>
            </div>
            <h3 className="font-bold text-lg">Project 1</h3>
            <p className="text-gray-600">A short description of the project.</p>
            <button
              onClick={() => openModal(project1Images, current1)}
              className="text-blue-500 hover:underline transition-colors"
            >
              View Images
            </button>
          </div>

          {/* Project 2 with carousel */}
          <div className="border rounded-lg p-4 shadow bg-white">
            <div className="relative overflow-hidden rounded-md mb-3">
              <img
                src={project2Images[current2]}
                alt={`Project 2 - ${current2 + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <button
                onClick={() => prevSlide(project2Images, current2, setCurrent2)}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 text-white rounded-full px-2 py-1"
              >
                ◀
              </button>
              <button
                onClick={() => nextSlide(project2Images, current2, setCurrent2)}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 text-white rounded-full px-2 py-1"
              >
                ▶
              </button>
            </div>
            <h3 className="font-bold text-lg">Project 2</h3>
            <p className="text-gray-600">Another cool project description.</p>
            <button
              onClick={() => openModal(project2Images, current2)}
              className="text-blue-500 hover:underline transition-colors"
            >
              View Images
            </button>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="max-w-3xl w-full p-4">
            <div className="relative">
              <img
                src={modalImages[modalIndex]}
                alt={`Modal ${modalIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded shadow-lg transition-transform duration-300 hover:scale-105"
              />
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full px-3 py-1 transition-transform hover:scale-110 hover:bg-red-700"
              >
                ✕
              </button>
              {/* Prev */}
              <button
                onClick={() =>
                  setModalIndex((modalIndex - 1 + modalImages.length) % modalImages.length)
                }
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white rounded-full px-3 py-1 transition-transform hover:scale-110"
              >
                ◀
              </button>
              {/* Next */}
              <button
                onClick={() => setModalIndex((modalIndex + 1) % modalImages.length)}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white rounded-full px-3 py-1 transition-transform hover:scale-110"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
