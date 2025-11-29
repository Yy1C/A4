import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import AIPlanner from './components/AIPlanner';
import { SERVICES } from './constants';
import { ArrowRight, Ruler, Truck } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-16 pb-20">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center rounded-b-[3rem] shadow-xl bg-orange-600 overflow-hidden">
              <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-in slide-in-from-bottom-4 duration-700 delay-150">
                  栖物集 <span className="block text-xl md:text-3xl font-light mt-2 tracking-widest text-orange-100">QI WU JI</span>
                </h1>
                <p className="text-lg md:text-xl text-orange-50 mb-8 font-light leading-relaxed animate-in slide-in-from-bottom-4 duration-700 delay-300">
                  打造理想的校园生活空间。<br className="hidden md:block"/>
                  专业线上设计 ¥10 | 上门全案改造 ¥40
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-4 duration-700 delay-500">
                  <button 
                    onClick={() => setActiveTab('booking')}
                    className="px-8 py-3 bg-white text-orange-600 hover:bg-orange-50 rounded-full font-semibold transition flex items-center justify-center gap-2 shadow-lg"
                  >
                    立即预约 <ArrowRight size={18} />
                  </button>
                  <button 
                    onClick={() => setActiveTab('planner')}
                    className="px-8 py-3 bg-orange-700 hover:bg-orange-800 text-white border border-orange-500 rounded-full font-semibold transition"
                  >
                    体验 AI 设计
                  </button>
                </div>
              </div>
            </section>

            {/* Services Overview */}
            <section className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-stone-800 mb-4">服务项目</h2>
                <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {SERVICES.map((service, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                      {index === 0 ? <Ruler size={24} /> : <Truck size={24} />}
                    </div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-2">{service.title}</h3>
                    <p className="text-4xl font-bold text-orange-600 mb-4">¥{service.price}</p>
                    <p className="text-stone-500 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-3 text-stone-600 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => setActiveTab('booking')}
                      className="w-full py-3 border border-orange-600 text-orange-700 font-semibold rounded-xl hover:bg-orange-50 transition"
                    >
                      选择此方案
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case 'planner':
        return (
          <div className="pt-24 pb-20 px-6 min-h-screen">
            <AIPlanner onBookNow={() => setActiveTab('booking')} />
          </div>
        );

      case 'booking':
        return (
          <div className="pt-24 pb-20 px-6 min-h-screen">
            <BookingForm />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen text-stone-800 selection:bg-orange-200 selection:text-orange-900">
      <Navbar activeTab={activeTab} setActiveTab={(tab) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveTab(tab);
      }} />
      
      <main className="animate-in fade-in duration-500">
        {renderContent()}
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12 px-6 pb-24 md:pb-12 text-center text-sm">
        <p className="font-bold text-stone-200 text-lg mb-2">栖物集 Qiwuji</p>
        <p>© {new Date().getFullYear()} 校园宿舍改造服务. 保留所有权利。</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className="hover:text-orange-400 transition">服务条款</a>
          <a href="#" className="hover:text-orange-400 transition">隐私政策</a>
          <a href="#" className="hover:text-orange-400 transition">联系我们</a>
        </div>
      </footer>
    </div>
  );
};

export default App;