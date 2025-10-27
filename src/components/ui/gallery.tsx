import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

interface GalleryProps {
  images: GalleryImage[];
  theme?: 'pink' | 'blue';
}

const Gallery = ({ images, theme = 'pink' }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const themeClasses = {
    pink: {
      card: 'border-primary/20 hover:border-primary',
      overlay: 'bg-primary/90',
      button: 'bg-primary hover:bg-primary/90',
      text: 'text-primary',
    },
    blue: {
      card: 'border-blue-300 hover:border-blue-500',
      overlay: 'bg-blue-600/90',
      button: 'bg-blue-500 hover:bg-blue-600',
      text: 'text-blue-700',
    },
  };

  const currentTheme = themeClasses[theme];

  const openImage = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Card
            key={index}
            className={`overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in ${currentTheme.card}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => openImage(index)}
          >
            <div className="relative group">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className={`absolute inset-0 ${currentTheme.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                <Icon name="ZoomIn" className="text-white" size={48} />
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className={`text-xl font-bold mb-2 ${currentTheme.text}`}>{image.title}</h3>
              <p className="text-muted-foreground text-sm">{image.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={closeImage}
          >
            <Icon name="X" size={32} />
          </button>

          <button
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <Icon name="ChevronLeft" size={48} />
          </button>

          <button
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <Icon name="ChevronRight" size={48} />
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{images[selectedImage].title}</h3>
              <p className="text-gray-300">{images[selectedImage].description}</p>
              <p className="text-sm text-gray-400 mt-2">
                {selectedImage + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
