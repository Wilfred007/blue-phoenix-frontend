import { motion } from 'framer-motion';
import { Users, Layout, Zap, TrendingUp } from 'lucide-react';

const services = [
  {
    title: "Recruitment & Talent",
    description: "Aligning the right people with your organization's vision through strategic hiring and cultural fit assessments.",
    icon: Users,
    color: "bg-blue-500/10",
    textColor: "text-blue-400"
  },
  {
    title: "Team Structuring",
    description: "Building resilient organizational structures that empower teams to perform at their highest potential.",
    icon: Layout,
    color: "bg-cyan-500/10",
    textColor: "text-cyan-400"
  },
  {
    title: "Leadership Transformation",
    description: "Developing visionary leaders who can navigate change and inspire sustainable growth across all levels.",
    icon: Zap,
    color: "bg-indigo-500/10",
    textColor: "text-indigo-400"
  }
];

export const Services = () => {
  return (
    <section id="services" className="bg-brand-black/50 py-24">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl mb-4"
          >
            Our Strategic <span className="text-gradient">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-gray max-w-2xl mx-auto"
          >
            We focus on the core elements that drive organizational success: People, Systems, and Culture.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} ${service.textColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl mb-4 group-hover:text-brand-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-gray leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-secondary transition-colors">
                Learn More
                <TrendingUp className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
