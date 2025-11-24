import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import AIPlanner from './components/AIPlanner';
import { SERVICES, GALLERY_IMAGES } from './constants';
import { ArrowRight, Star, Ruler, Truck } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-16 pb-20">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center rounded-b-[3rem] shadow-xl bg-orange-600">
              <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                  栖物集 <span className="block text-xl md:text-3xl font-light mt-2 tracking-widest text-orange-100">QI WU JI</span>
                </h1>
                <p className="text-lg md:text-xl text-orange-50 mb-8 font-light leading-relaxed">
                  Transform your campus dorm into a sanctuary. <br className="hidden md:block"/>
                  Professional blueprints for 10 CNY. Full decoration for 60 CNY.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setActiveTab('booking')}
                    className="px-8 py-3 bg-white text-orange-600 hover:bg-orange-50 rounded-full font-semibold transition flex items-center justify-center gap-2 shadow-lg"
                  >
                    Book Now <ArrowRight size={18} />
                  </button>
                  <button 
                    onClick={() => setActiveTab('planner')}
                    className="px-8 py-3 bg-orange-700 hover:bg-orange-800 text-white border border-orange-500 rounded-full font-semibold transition"
                  >
                    Try AI Planner
                  </button>
                </div>
              </div>
            </section>

            {/* Services Overview */}
            <section className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-stone-800 mb-4">Our Services</h2>
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
                      Choose Plan
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case 'gallery':
        return (
          <div className="pt-24 pb-20 px-6 max-w-6xl mx-auto min-h-screen">
            <h2 className="text-3xl font-bold text-stone-800 mb-8">Previous Transformations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {GALLERY_IMAGES.map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-xl font-bold text-white">{img.title}</h3>
                    <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-white rounded-2xl text-center shadow-sm border border-orange-100">
              <h3 className="text-xl font-bold text-stone-800 mb-2">Want to see your room here?</h3>
              <p className="text-stone-600 mb-6">Join hundreds of students who have upgraded their living space.</p>
              <button 
                onClick={() => setActiveTab('booking')}
                className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
              >
                Start Your Project
              </button>
            </div>
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
        <p>© {new Date().getFullYear()} Campus Decoration Service. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className="hover:text-orange-400 transition">Terms</a>
          <a href="#" className="hover:text-orange-400 transition">Privacy</a>
          <a href="#" className="hover:text-orange-400 transition">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default App;