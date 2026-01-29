import React from "react";

interface PropertyCardProps {
  name: string;
  image: string;
  price: number;
  rating: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ name, image, price, rating }) => {
  return (
    <div className="border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-3">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-500">Price: ${price}</p>
        <p className="text-sm text-yellow-500">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
