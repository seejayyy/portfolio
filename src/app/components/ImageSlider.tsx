import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ImageSlider({ children: images }: { children: JSX.Element[] }) {
    const [currentImage, setCurrentImage] = useState(0);

    const prev = () => setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);

    const next = () => setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);

    return (
        <div className="relative w-full overflow-hidden xl:p-8">
            <div className="flex transition-transform ease-out duration-500 items-center" style={{ transform: `translateX(-${currentImage * 100}%)`}}>
                {images}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="p-1 rounded-full shadow bg-gray-200/80 text-gray-800 hover:bg-gray-200"><FiChevronLeft /></button>
                <button onClick={next} className="p-1 rounded-full shadow bg-gray-200/80 text-gray-800 hover:bg-gray-200"><FiChevronRight /></button>
            </div>
        </div>
    )
};