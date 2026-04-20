import React from 'react';

export const FaroLogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 200 200" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="12" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Base Line */}
    <line x1="40" y1="170" x2="160" y2="170" />
    
    {/* Tower Body (Trapezoid) */}
    <path d="M75 170 L85 85 L115 85 L125 170" strokeLinejoin="miter" />
    
    {/* Stripes */}
    <line x1="80" y1="140" x2="120" y2="130" />
    <line x1="83" y1="110" x2="117" y2="100" />
    
    {/* Balcony Line */}
    <line x1="75" y1="85" x2="125" y2="85" />
    
    {/* Lantern House */}
    <rect x="88" y="55" width="24" height="30" />
    
    {/* Roof Triangle */}
    <path d="M80 55 L100 30 L120 55 Z" fill="currentColor" stroke="none" />
    
    {/* Rays Left */}
    <line x1="30" y1="65" x2="65" y2="75" />
    <line x1="30" y1="95" x2="65" y2="85" />
    
    {/* Rays Right */}
    <line x1="170" y1="65" x2="135" y2="75" />
    <line x1="170" y1="95" x2="135" y2="85" />
  </svg>
);