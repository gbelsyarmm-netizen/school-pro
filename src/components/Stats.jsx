import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Users, UserCheck, UserPlus, Award } from 'lucide-react';

const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  React.useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
};

const Stats = () => {
  const stats = [
    { label: 'Total Students', value: 213, icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Boys', value: 148, icon: UserCheck, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Girls', value: 65, icon: UserPlus, color: 'text-pink-500', bg: 'bg-pink-100' },
    { label: 'Classes', value: 8, icon: Award, color: 'text-green-600', bg: 'bg-green-100' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 hover:translate-y-[-5px] transition-all duration-300 border-b-4 border-b-blue-600"
            >
              <div className={`${stat.bg} ${stat.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">
                <Counter value={stat.value} />
              </h3>
              <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
