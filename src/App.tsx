import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        {/* Call to Action Section */}
        <section className="py-24 bg-gradient-to-br from-brand-primary/20 to-brand-dark">
          <div className="section-padding text-center">
            <h2 className="text-4xl lg:text-6xl mb-8">Ready to <span className="text-gradient">Rise</span>?</h2>
            <p className="text-xl text-brand-gray mb-12 max-w-2xl mx-auto">
              Transform your organization's culture and performance. Let's find the right people for your organization.
            </p>
            <button className="btn-primary px-10 py-4 text-lg">
              Get Started with a Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
