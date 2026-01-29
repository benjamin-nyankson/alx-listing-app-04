import React from "react";
import { HERO_BACKGROUND, FILTERS, PROPERTYLISTINGSAMPLE }
import Pill from "../components/Pill";
import PropertyCard from "../components/PropertyCard";

const Home: React.FC = () => {
  return (
    <div className="space-y-12">

      {/* Hero Section */}
      <section
        className="w-full h-96 bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
      >
        <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
        <p className="text-lg max-w-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 flex flex-wrap gap-3">
        {FILTERS.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Listing Section */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <PropertyCard
            key={property.name}
            name={property.name}
            image={property.image}
            price={property.price}
            rating={property.rating}
          />
        ))}
      </section>

    </div>
  );
};

export default Home;
