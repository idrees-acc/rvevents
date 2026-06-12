import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { WHY_CHOOSE } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
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
            About RV Events
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A professionally managed event solutions company with over a decade
            of expertise in delivering high-impact events across India.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Our Story
          </motion.h2>

          <div className="max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              Established in 2014, RV Events &amp; Entertainment Pvt. Ltd. was
              founded with a singular vision: to bring professional rigor,
              strategic planning, and flawless execution to the corporate and
              institutional event space in India.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Over the past 12+ years, we have grown from a boutique agency to a
              trusted partner for some of India's largest PSUs, government
              departments, financial institutions, and Fortune 500 companies. We
              do not just plan events; we architect platforms for communication,
              branding, and strategic engagement.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our pan-India capability, supported by a robust vendor ecosystem
              and a highly professional team, allows us to execute national-level
              summits, corporate conventions, and large-scale exhibitions with
              uncompromising quality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Why Choose RV Events?
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2">
            {WHY_CHOOSE.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-secondary" />
                <div>
                  <h3 className="font-serif font-semibold text-lg text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
