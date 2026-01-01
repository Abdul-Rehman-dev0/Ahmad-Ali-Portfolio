import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';
export function Footer() {
  return <footer className="relative py-12 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">Ahmad Ali</h3>
          <p className="text-slate-500 text-sm">
            Building digital experiences with code and creativity.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <SocialLink href="#" icon={Github} />
          <SocialLink href="#" icon={Linkedin} />
          <SocialLink href="#" icon={Twitter} />
          <SocialLink href="#" icon={Instagram} />
        </div>

        <div className="text-center md:text-right text-sm text-slate-500">
          <p className="flex items-center justify-center md:justify-end gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" />{' '}
            in Pakistan
          </p>
          <p className="mt-1">© 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>;
}
function SocialLink({
  href,
  icon: Icon
}: {
  href: string;
  icon: any;
}) {
  return <a href={href} className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-primary hover:scale-110 transition-all duration-300">
      <Icon size={20} />
    </a>;
}