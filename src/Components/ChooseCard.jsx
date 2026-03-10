import React from 'react'

const ChooseCard = ({ title, subTitle, icon }) => {
  return (
    <div className="group glass-card p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-500 h-full relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent dark:from-secondary/10 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-150" />

      <div className="flex flex-col gap-6 relative z-10">
        <div className="w-14 h-14 bg-gradient-to-tr from-primary to-purple-600 rounded-2xl flex items-center justify-center shadow-lg text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          {/* If icon passed, render it, otherwise a default dot or SVG */}
          {icon ? icon : <div className="w-4 h-4 rounded-full bg-white" />}
        </div>

        <h3 className="text-2xl font-bold text-neutral-dark dark:text-white group-hover:text-primary transition-colors tracking-tight">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
          {subTitle}
        </p>
      </div>
    </div>
  )
}

export default ChooseCard
