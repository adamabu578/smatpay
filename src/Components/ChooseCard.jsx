import React from 'react'

const ChooseCard = ({ title, subTitle, icon }) => {
  return (
    <div className="group bg-neutral-light dark:bg-gray-800 p-8 rounded-2xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/10 h-full">
      <div className="flex flex-col gap-4">
        {/* Optional Icon Placeholder - or use passed icon */}
        <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-sm text-primary group-hover:scale-110 transition-transform duration-300">
          {/* If icon passed, render it, otherwise a default dot or SVG */}
          {icon ? icon : <div className="w-4 h-4 rounded-full bg-primary" />}
        </div>

        <h3 className="text-xl font-bold text-neutral-dark dark:text-white group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
          {subTitle}
        </p>
      </div>
    </div>
  )
}

export default ChooseCard
