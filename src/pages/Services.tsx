import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  CalendarDays,
  Landmark,
  Mic2,
  LayoutGrid,
  Rocket,
  Trophy,
  Megaphone,
  Clapperboard,
  Speaker,
  MapPin,
} from "lucide-react";
import { SERVICES_LIST } from "@/lib/data";

const SERVICE_ICONS = [
  CalendarDays,
  Landmark,
  Mic2,
  LayoutGrid,
  Rocket,
  Trophy,
  Megaphone,
  Clapperboard,
  Speaker,
  MapPin,
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary py-32 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl md:text-5xl font-serif font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive event solutions tailored for corporate, government,
            and institutional excellence.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_LIST.map((service, i) => {
              const Icon = SERVICE_ICONS[i] ?? CalendarDays;
              return (
                <motion.div
                  key={service.title}
                  className="border p-6 hover:shadow-lg transition"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Icon className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="font-serif font-semibold text-lg text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Need a tailored solution for your next event?
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-white/80"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our team is ready to conceptualize and execute your vision with
            uncompromising quality.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center bg-secondary text-primary hover:bg-secondary/90 font-semibold px-8 py-3 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
