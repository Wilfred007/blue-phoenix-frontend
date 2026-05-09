import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openModal = () => setIsBookingModalOpen(true);
  const closeModal = () => setIsBookingModalOpen(false);

  return (
    <div className="min-h-screen">
      <Navbar onBookClick={openModal} />
      <main>
        <Hero onBookClick={openModal} />
        <Services />
        <Process />
        {/* Call to Action Section */}
        <section className="py-24 bg-gradient-to-br from-brand-primary/20 to-brand-dark">
          <div className="section-padding text-center">
            <h2 className="text-4xl lg:text-6xl mb-8">Ready to <span className="text-gradient">Rise</span>?</h2>
            <p className="text-xl text-brand-gray mb-12 max-w-2xl mx-auto">
              Transform your organization's culture and performance. Let's find the right people for your organization.
            </p>
            <button 
              onClick={openModal}
              className="btn-primary px-10 py-4 text-lg"
            >
              Get Started with a Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer onBookClick={openModal} />
      
      <BookingModal isOpen={isBookingModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
