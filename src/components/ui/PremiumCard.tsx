import React from 'react';
import { cn } from "../../lib/utils";

interface PremiumCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  premium?: boolean;
  onClick?: () => void;
}

export const PremiumCard: React.FC<PremiumCardProps> = ({
  children,
  className,
  hover = true,
  premium = false,
  onClick
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  const premiumClasses = premium ? 'border-2 border-premium-gold bg-gradient-to-br from-white to-yellow-50' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={cn(
        baseClasses,
        hoverClasses,
        premiumClasses,
        clickableClasses,
        className
      )}
      onClick={onClick}
    >
      {premium && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-premium-gold rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">★</span>
        </div>
      )}
      {children}
    </div>
  );
};
