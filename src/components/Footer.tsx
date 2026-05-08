import { Logo } from './Logo';
import { Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo className="h-10 mb-6" />
            <p className="text-brand-gray max-w-sm mb-8 leading-relaxed">
              Helping organizations build stronger workplaces by aligning the right people, systems, and culture for sustainable growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-6">Solutions</h4>
            <ul className="space-y-4 text-brand-gray text-sm">
              <li><a href="#" className="hover:text-brand-secondary">Recruitment</a></li>
              <li><a href="#" className="hover:text-brand-secondary">Team Structuring</a></li>
              <li><a href="#" className="hover:text-brand-secondary">Leadership Training</a></li>
              <li><a href="#" className="hover:text-brand-secondary">Culture Audit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-brand-gray text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-secondary" />
                info@bluephoenix.ltd
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-secondary" />
                +44 (0) 20 1234 5678
              </li>
              <li className="text-xs mt-4">
                © 2026 Bluephoenix Consulting LTD. All rights reserved.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-brand-gray">
          <div>Privacy Policy | Terms of Service</div>
          <div className="font-bold text-white/20">The right people for the right organisations.</div>
        </div>
      </div>
    </footer>
  );
};
