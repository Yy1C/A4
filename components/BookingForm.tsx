import React, { useState } from 'react';
import { ServiceType, BookingFormState } from '../types';
import { SERVICES } from '../constants';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormState>({
    name: '',
    studentId: '',
    dormNumber: '',
    phone: '',
    serviceType: ServiceType.BLUEPRINT,
    preferredDate: '',
    notes: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleServiceSelect = (type: ServiceType) => {
    setFormData(prev => ({ ...prev, serviceType: type }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // In a real app, reset form or redirect here
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-orange-50 rounded-2xl border border-orange-100 animate-in fade-in zoom-in duration-300">
        <CheckCircle2 size={64} className="text-orange-600 mb-4" />
        <h2 className="text-2xl font-bold text-orange-800 mb-2">Booking Confirmed!</h2>
        <p className="text-center text-stone-600 mb-6">
          Thank you, {formData.name}. We have received your request for the <span className="font-semibold">{formData.serviceType === ServiceType.BLUEPRINT ? 'Blueprint Design' : 'Full Decoration'}</span> service.
        </p>
        <p className="text-sm text-stone-500">We will contact you at {formData.phone} shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
        >
          Book Another
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200">
      <h2 className="text-2xl font-bold text-stone-800 mb-6">Book Your Transformation</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Service Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceSelect(service.id)}
              className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 relative
                ${formData.serviceType === service.id 
                  ? 'border-orange-500 bg-orange-50/50' 
                  : 'border-stone-200 hover:border-orange-200 hover:bg-stone-50'}`}
            >
              {formData.serviceType === service.id && (
                <div className="absolute top-3 right-3 text-orange-600">
                  <CheckCircle2 size={20} />
                </div>
              )}
              <h3 className="font-bold text-lg text-stone-800">{service.title}</h3>
              <p className="text-orange-600 font-bold text-xl my-1">¥{service.price}</p>
              <p className="text-xs text-stone-500">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
            <input
              required
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
              placeholder="Li Ming"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
            <input
              required
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
              placeholder="138 0000 0000"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Student ID</label>
            <input
              required
              name="studentId"
              type="text"
              value={formData.studentId}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Dorm Building & Room</label>
            <input
              required
              name="dormNumber"
              type="text"
              value={formData.dormNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
              placeholder="Building A, Room 302"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Preferred Date (For On-site Service)</label>
          <input
            name="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Special Requests / Style Preferences</label>
          <textarea
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
            placeholder="I prefer warm lighting and a minimalist desk setup..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="animate-spin" size={20} /> Processing...
            </>
          ) : (
            'Confirm Booking'
          )}
        </button>

      </form>
    </div>
  );
};

export default BookingForm;