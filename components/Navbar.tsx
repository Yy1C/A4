import React from 'react';
import { Home, Image, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'gallery', label: 'Blueprints', icon: Image },
    { id: 'planner', label: 'AI Planner', icon: Sparkles },
    { id: 'booking', label: 'Book Now', icon: Calendar },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-stone-200 p-2 md:top-0 md:bottom-auto md:border-b md:border-t-0 z-50">
      <div className="max-w-4xl mx-auto flex justify-around md:justify-end md:gap-8 items-center h-14">
        <div className="hidden md:flex flex-1 text-2xl font-bold text-orange-600 tracking-tighter">
          栖物集 <span className="text-stone-400 font-light text-lg ml-2">Qiwuji</span>
        </div>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-2 rounded-lg transition-colors duration-200
              ${activeTab === item.id 
                ? 'text-orange-700 bg-orange-50' 
                : 'text-stone-500 hover:text-orange-600 hover:bg-stone-50'}`}
          >
            <item.icon size={20} strokeWidth={activeTab === item.id ? 2.5 : 2} />
            <span className="text-xs md:text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;