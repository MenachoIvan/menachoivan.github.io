import React from 'react';
import { Mail, Braces, User } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="p-4 md:p-6 flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto text-white gap-4">
      <span className="font-mono font-bold text-xl tracking-tighter flex items-center">
        <span className="text-blue-500">&lt;</span>
        <span className="text-white mx-1">IM</span>
        <span className="text-blue-500">/&gt;</span>
      </span>

      <div className="flex items-center space-x-6 md:space-x-8 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
        <a 
          href="https://linkedin.com/in/ivan-menacho"
          target='_blank'
          rel='noreferrer'
          className="hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <span className="hidden sm:inline">Linkedin</span> <User size={18} />
        </a>
        
        <a 
          href="https://github.com/MenachoIvan" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <span className="hidden sm:inline">Github</span> <Braces size={18} />
        </a>
        
        <a 
          href="mailto:ivanmenachodominguez@gmail.com" 
          className="hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <span className="hidden sm:inline">Contact me</span> <Mail size={18} />
        </a>
      </div>
    </nav>
  );
};