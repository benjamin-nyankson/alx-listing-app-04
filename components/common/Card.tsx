import React from 'react';
import Image from 'next/image';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, description, image, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-56">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-800">${price}/night</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
