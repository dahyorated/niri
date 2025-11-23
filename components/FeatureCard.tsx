import React from 'react';
import { FeatureCardProps } from '../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <div 
      className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-niri-primary to-niri-accent rounded-2xl opacity-0 group-hover:opacity-30 transition duration-500 blur"></div>
      <div className="relative flex flex-col h-full">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-niri-primary/20 to-niri-accent/20 flex items-center justify-center mb-4 text-niri-accent group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white font-serif tracking-wide">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;