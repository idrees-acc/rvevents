import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { asset } from "@/lib/asset";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
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
            Our Portfolio
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A curated selection of high-impact events and projects delivered with
            precision and professionalism.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <motion.article
                key={project.id}
                className="overflow-hidden border"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <img
                  src={asset(project.image)}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                  style={{ objectPosition: project.crop }}
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="font-serif font-semibold text-lg text-primary">
                    {project.title}
                  </h3>
                  <span className="mt-3 inline-block rounded-full bg-secondary/10 text-secondary text-xs px-3 py-1">
                    {project.category}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
