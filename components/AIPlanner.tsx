import React, { useState } from 'react';
import { generateDormConcept } from '../services/geminiService';
import { DesignIdea } from '../types';
import { Sparkles, Palette, Armchair, ShoppingBag, ArrowRight } from 'lucide-react';

interface AIPlannerProps {
  onBookNow: () => void;
}

const AIPlanner: React.FC<AIPlannerProps> = ({ onBookNow }) => {
  const [style, setStyle] = useState('');
  const [roomSize, setRoomSize] = useState('Standard 4-bunk dorm');
  const [occupants, setOccupants] = useState(4);
  const [idea, setIdea] = useState<DesignIdea | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!style.trim()) return;
    setLoading(true);
    setError('');
    setIdea(null);
    try {
      const result = await generateDormConcept(style, roomSize, occupants);
      setIdea(result);
    } catch (err) {
      setError("Failed to generate ideas. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-stone-800 flex items-center justify-center gap-2">
          <Sparkles className="text-orange-500" fill="currentColor" />
          AI Dorm Consultant
        </h2>
        <p className="text-stone-600 max-w-xl mx-auto">
          Not sure where to start? Tell our AI about your style preferences, and we'll generate a free concept card for you. 
          Like what you see? Book our blueprint service for the full execution plan!
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div>
          <label className="block text-xs font-semibold uppercase text-stone-500 mb-1">Your Style</label>
          <input 
            type="text" 
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            placeholder="e.g. Minimalist, Boho, Cyberpunk"
            className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase text-stone-500 mb-1">Room Type</label>
          <select 
            value={roomSize}
            onChange={(e) => setRoomSize(e.target.value)}
            className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          >
            <option>Standard 4-bunk dorm</option>
            <option>6-person shared suite</option>
            <option>Double room</option>
            <option>Single studio</option>
          </select>
        </div>
        <button
          onClick={handleGenerate}
          disabled={loading || !style}
          className="w-full p-3 bg-stone-800 text-white rounded-lg hover:bg-stone-900 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition flex items-center justify-center gap-2"
        >
          {loading ? 'Thinking...' : 'Generate Idea'}
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-center">
          {error}
        </div>
      )}

      {/* Result Section */}
      {idea && (
        <div className="bg-white border border-orange-200 rounded-2xl p-6 md:p-8 animate-in slide-in-from-bottom-4 duration-500 shadow-lg shadow-orange-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-orange-600">{idea.title}</h3>
              <p className="text-stone-600 italic mt-1">{idea.concept}</p>
            </div>
            <button 
              onClick={onBookNow}
              className="whitespace-nowrap px-6 py-2 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition flex items-center gap-2 shadow-lg shadow-orange-200"
            >
              Get Full Blueprint ¥10 <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-50/50 p-5 rounded-xl shadow-sm border border-orange-100">
              <div className="flex items-center gap-2 mb-3 text-stone-800 font-semibold">
                <Palette size={18} className="text-orange-500" /> Color Palette
              </div>
              <div className="flex flex-wrap gap-2">
                {idea.colorPalette.map((color, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <div 
                      className="w-10 h-10 rounded-full border border-stone-100 shadow-inner" 
                      style={{ backgroundColor: color.includes('#') ? color : '#e5e7eb' }} 
                    />
                    <span className="text-[10px] text-stone-500 uppercase">{color.replace('#','')}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-stone-50 p-5 rounded-xl shadow-sm border border-stone-100">
              <div className="flex items-center gap-2 mb-3 text-stone-800 font-semibold">
                <Armchair size={18} className="text-orange-500" /> Layout Advice
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                {idea.furnitureArrangement}
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-xl shadow-sm border border-stone-100">
              <div className="flex items-center gap-2 mb-3 text-stone-800 font-semibold">
                <ShoppingBag size={18} className="text-orange-500" /> Suggested Decor
              </div>
              <ul className="text-sm text-stone-600 space-y-1 list-disc pl-4">
                {idea.decorItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6 text-center text-xs text-stone-400">
            * This is an AI-generated preview. Book the Blueprint Service for exact measurements and shopping links.
          </div>
        </div>
      )}
    </div>
  );
};

export default AIPlanner;