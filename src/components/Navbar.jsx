import React from 'react';
import { Mail, Braces, User} from 'lucide-react'; 

export const Navbar = () => {
  return (
    <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto text-white">
    <span className="font-mono font-bold text-xl tracking-tighter flex items-center">
        <span className="text-blue-500">&lt;</span>
        <span className="text-white mx-1">IM</span>
        <span className="text-blue-500">/&gt;</span>
    </span>
      <div className="space-x-6 text-xs uppercase tracking-[0.2em] font-medium flex">
        <a 
            href="https://linkedin.com/in/ivan-menacho"
            target='_blank'
            rel='noreferrer'
            className="hover:text-blue-400 transition-colors flex items-center gap-2">
          Linkedin <User />
        </a>
        <a 
          href="https://github.com/MenachoIvan" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-blue-400 transition-colors flex items-center gap-2"        >
          Github <Braces />
        </a>
        <a 
          href="mailto:ivanmenachodominguez@gmail.com" 
          className="hover:text-blue-400 transition-colors flex items-center gap-2"        >
          Contact me <Mail />
        </a>
      </div>
    </nav>
  );
};