import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto text-center space-y-2">
        <p>&copy; {new Date().getFullYear()} ListingApp. All rights reserved.</p>
        <div className="flex justify-center gap-4 text-sm">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Terms of Service</span>
          <span className="hover:underline cursor-pointer">Contact</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
