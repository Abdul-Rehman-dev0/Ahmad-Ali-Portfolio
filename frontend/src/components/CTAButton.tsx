import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
interface CTAButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
  className?: string;
  onClick?: () => void;
}
export function CTAButton({
  children,
  href,
  variant = 'primary',
  icon = false,
  className = '',
  onClick
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-offset-2 focus:ring-offset-navy';
  const variants = {
    primary: 'bg-electric-blue text-navy hover:bg-electric-blue/90',
    secondary: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm',
    outline: 'border border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10'
  };
  const content = <>
      {children}
      {icon && <ExternalLink className="ml-2 w-4 h-4" />}
    </>;
  const Component = href ? motion.a : motion.button;
  return <Component href={href} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`} whileHover={{
    scale: 1.02
  }} whileTap={{
    scale: 0.98
  }} initial={{
    opacity: 0,
    y: 10
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }}>
      {content}
    </Component>;
}