import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle2, Loader2 } from 'lucide-react';

export function ContactForm() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
     
      <AnimatePresence>
        {(isSubmitting || showSuccess) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-slate-950/60 backdrop-blur-xl flex items-center justify-center p-6"
          >
            {/* Loading State */}
            {isSubmitting && (
              <div className="flex flex-col items-center gap-4 text-center">
                <Loader2 className="w-16 h-16 text-primary animate-spin" />
                <h3 className="text-2xl font-bold text-white tracking-wide">Sending Message...</h3>
              </div>
            )}

            {/* Success State (Center Modal) */}
            {showSuccess && (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-slate-900 border border-slate-800 p-10 rounded-3xl shadow-2xl flex flex-col items-center text-center max-w-sm relative"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-green-500 w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
                <p className="text-slate-400 mb-8">Your message has been sent successfully. Ahmad will contact you soon.</p>
                <button 
                  onClick={() => setShowSuccess(false)}
                  className="bg-white text-black px-10 py-3 rounded-full font-bold hover:bg-slate-200 transition-all active:scale-95"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Work Together
            </motion.h2>
            <p className="text-slate-400 mb-12 text-lg">
              Have a project in mind or want to discuss modern web technologies?
              I'm always open to new opportunities and collaborations.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-slate-800/50 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <p className="text-slate-400">ahmadalisanty@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-slate-800/50 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Location</h3>
                  <p className="text-slate-400">Gujranwala, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
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

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="space-y-6 bg-slate-900/30 p-8 rounded-2xl border border-slate-800/50 backdrop-blur-sm"
          >
            <div className="relative">
              <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full bg-slate-950/50 border rounded-lg px-4 py-3 text-white outline-none transition-all duration-300 ${focusedField === 'name' ? 'border-primary shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'border-slate-800 focus:border-primary'}`} 
                onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} placeholder="Ahmad Ali" 
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full bg-slate-950/50 border rounded-lg px-4 py-3 text-white outline-none transition-all duration-300 ${focusedField === 'email' ? 'border-primary shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'border-slate-800 focus:border-primary'}`} 
                onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} placeholder="ahmad@example.com" 
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea 
                rows={4} 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`w-full bg-slate-950/50 border rounded-lg px-4 py-3 text-white outline-none transition-all duration-300 resize-none ${focusedField === 'message' ? 'border-primary shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'border-slate-800 focus:border-primary'}`} 
                onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} placeholder="Tell me about your project..." 
              />
            </div>

            <button 
              disabled={isSubmitting}
              type="submit" 
              className="w-full bg-primary hover:bg-blue-600 disabled:opacity-50 text-white font-medium py-4 rounded-lg transition-all duration-300 hover:shadow-glow flex items-center justify-center gap-2 group"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}