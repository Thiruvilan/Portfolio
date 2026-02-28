import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, FolderOpen, GraduationCap, Mail, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'projects', icon: FolderOpen, label: 'Projects' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3"
      >
        <div className="nav-glass rounded-2xl p-3 flex flex-col gap-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className={`p-3 rounded-xl transition-all duration-300 group relative ${
                activeSection === item.id 
                  ? 'gradient-bg text-primary-foreground glow-sm' 
                  : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
              }`}
              title={item.label}
            >
              <item.icon className="w-5 h-5" />
              <span className="absolute left-full ml-3 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden nav-glass"
      >
        <div className="flex items-center justify-between p-4">
          <span className="font-display font-bold text-lg gradient-text">TM</span>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-secondary transition-all"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border"
            >
              <div className="p-4 grid grid-cols-4 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all ${
                      activeSection === item.id 
                        ? 'gradient-bg text-primary-foreground' 
                        : 'hover:bg-secondary text-muted-foreground'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-xs">{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};