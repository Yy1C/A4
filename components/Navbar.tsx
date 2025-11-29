import React from 'react';
import { Home, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'planner', label: 'AI 设计师', icon: Sparkles },
    { id: 'booking', label: '立即预约', icon: Calendar },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-stone-200 p-2 md:top-0 md:bottom-auto md:border-b md:border-t-0 z-50">
      <div className="max-w-4xl mx-auto flex justify-around md:justify-end md:gap-8 items-center h-14">
        <div className="hidden md:flex flex-1 items-center gap-3">
          <div className="text-2xl font-bold text-orange-600 tracking-tighter">
            栖物集 <span className="text-stone-400 font-light text-lg ml-1">Qiwuji</span>
          </div>
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