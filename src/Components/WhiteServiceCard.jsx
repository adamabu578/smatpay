import React from "react";

const WhiteServiceCard = ({ title, details, image }) => {
  return (
    <div className="h-full">
      <div className="group h-full glass-card rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/5 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110" />

        {/* Icon Container */}
        <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-tr from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner">
          <img
            src={image}
            alt={title}
            className="w-8 h-8 object-contain"
          />
        </div>

        <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-4 group-hover:text-primary transition-colors">
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
