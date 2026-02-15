import React from "react";

const WhiteServiceCard = ({ title, details, image }) => {
  return (
    <div className="h-full">
      <div className="group h-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-secondary/20 hover:-translate-y-1">
        {/* Icon Container */}
        <div className="w-16 h-16 mb-6 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
          <img
            src={image}
            alt={title}
            className="w-10 h-10 object-contain"
          />
        </div>

        <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
          {details}
        </p>
      </div>
    </div>
  );
};

export default WhiteServiceCard;
