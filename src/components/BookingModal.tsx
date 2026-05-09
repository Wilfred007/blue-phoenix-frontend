import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Strategic Alignment',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
        {
          from_name: formData.name,
          from_email: formData.email,
          company_name: formData.company,
          service_of_interest: formData.service,
          message: formData.message,
          to_email: 'admin@bluephoenix.ltd', // This can also be set in EmailJS template
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'
      );
      
      setIsSubmitted(true);
    } catch (err) {
      console.error('Email failed to send:', err);
      setError('Something went wrong. Please try again or email us directly at info@bluephoenix.ltd');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-xl glass-card p-8 relative pointer-events-auto overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary/20 rounded-full blur-[60px] -z-10" />

              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-brand-gray hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-brand-primary/20 rounded-lg text-brand-secondary">
                      <Calendar size={20} />
                    </div>
                    <h2 className="text-2xl font-bold">Book a Consultation</h2>
                  </div>

                  <p className="text-brand-gray mb-8">
                    Ready to transform your organization? Fill out the form below and our team will get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3 text-sm"
                      >
                        <AlertCircle size={18} />
                        {error}
                      </motion.div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-gray ml-1">Full Name</label>
                        <input
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-gray ml-1">Email Address</label>
                        <input
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email"
                          placeholder="john@company.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-gray ml-1">Company Name</label>
                      <input
                        required
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        type="text"
                        placeholder="Organization Ltd."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-gray ml-1">Service of Interest</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors appearance-none"
                      >
                        <option className="bg-brand-dark" value="Strategic Alignment">Strategic Alignment</option>
                        <option className="bg-brand-dark" value="Leadership Development">Leadership Development</option>
                        <option className="bg-brand-dark" value="Cultural Transformation">Cultural Transformation</option>
                        <option className="bg-brand-dark" value="Talent Management">Talent Management</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-gray ml-1">Message (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your needs..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
                      />
                    </div>

                    <button
                      disabled={isLoading}
                      type="submit"
                      className="btn-primary w-full py-4 mt-4 flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        'Submit Request'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-secondary">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
                  <p className="text-brand-gray max-w-sm mx-auto mb-8">
                    Thank you for reaching out. A senior consultant will review your information and contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      setTimeout(() => setIsSubmitted(false), 300);
                    }}
                    className="btn-primary px-8"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
