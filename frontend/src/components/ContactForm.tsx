import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle2, Loader2, Check } from 'lucide-react';

export function ContactForm() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Pop-up state
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopyStatus(label);
    setTimeout(() => setCopyStatus(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' }); 
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      
      {/* Pop-up message (Isse change nahi kiya) */}
      <AnimatePresence>
        {copyStatus && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-[1000] bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-medium"
          >
            <Check size={18} />
            <span>{copyStatus} Copied to Clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success/Loading States */}
      <AnimatePresence>
        {(isSubmitting || showSuccess) && (
          <motion.div className="fixed inset-0 z-[999] bg-slate-950/60 backdrop-blur-xl flex items-center justify-center p-6">
            {isSubmitting && (
              <div className="flex flex-col items-center gap-4 text-center">
                <Loader2 className="w-16 h-16 text-primary animate-spin" />
                <h3 className="text-2xl font-bold text-white tracking-wide">Sending Message...</h3>
              </div>
            )}
            {showSuccess && (
              <motion.div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl shadow-2xl flex flex-col items-center text-center max-w-sm relative">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-green-500 w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
                <button onClick={() => setShowSuccess(false)} className="bg-white text-black px-10 py-3 rounded-full font-bold">Close</button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let's Work Together</h2>
            
            <div className="space-y-8">
              {/* EMAIL */}
              <div 
                onClick={() => handleCopy('ahmadalisanty@gmail.com', 'Email')}
                className="flex items-start gap-4 cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-slate-800/50 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <p className="text-slate-400">ahmadalisanty@gmail.com</p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-slate-800/50 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Location</h3>
                  <p className="text-slate-400">Gujranwala, Pakistan</p>
                </div>
              </div>

              {/* PHONE */}
              <div 
                onClick={() => handleCopy('+923137519324', 'Phone Number')}
                className="flex items-start gap-4 cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-slate-800/50 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Phone</h3>
                  <p className="text-slate-400">+923137519324</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form hissa */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/30 p-8 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
            <div className="relative">
               <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
               <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white outline-none focus:border-primary" 
                placeholder="Ahmad Ali" 
              />
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white outline-none focus:border-primary" 
                placeholder="ahmad@example.com" 
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea 
                rows={4} 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-3 text-white outline-none focus:border-primary resize-none" 
                placeholder="Tell me about your project..." 
              />
            </div>

            <button 
              disabled={isSubmitting}
              type="submit" 
              className="w-full bg-primary hover:bg-blue-600 disabled:opacity-50 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}