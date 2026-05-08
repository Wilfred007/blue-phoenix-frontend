import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We analyze your current organizational landscape to identify gaps and opportunities for alignment."
  },
  {
    num: "02",
    title: "Implementation",
    desc: "Deploying proven systems and cultural frameworks tailored to your organization's unique needs."
  },
  {
    num: "03",
    title: "Growth",
    desc: "Sustaining high performance through continuous refinement and leadership empowerment."
  }
];

export const Process = () => {
  return (
    <section id="process" className="py-24">
      <div className="section-padding">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl mb-6">How We <span className="text-gradient">Transform</span> Your Workplace.</h2>
            <p className="text-brand-gray mb-8">
              Our methodology is designed to provide precision, alignment, and strategic direction at every stage of your evolution.
            </p>
            <div className="p-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/10">
              <div className="text-brand-secondary font-bold mb-2">The Phoenix Effect</div>
              <div className="text-sm text-brand-gray italic">
                "Rising, evolving, and rebuilding stronger systems for sustainable success."
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-6 group"
              >
                <div className="text-4xl font-bold text-white/10 group-hover:text-brand-secondary/30 transition-colors duration-500 font-montserrat">
                  {step.num}
                </div>
                <div className="flex-1 pb-8 border-b border-white/5">
                  <h3 className="text-2xl mb-3">{step.title}</h3>
                  <p className="text-brand-gray max-w-xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
