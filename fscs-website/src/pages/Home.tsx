import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Globe, Users, Handshake } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' }
  })
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover"
        style={{ backgroundImage: "url('/hero-earth.jpeg')", backgroundPosition: "center right 60%" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h1 className="text-white font-serif text-4xl md:text-6xl font-bold">
            The Foundation Supporting<br />Climate Science
          </h1>
          <p className="mt-4 text-white text-lg md:text-xl max-w-2xl leading-relaxed">
            Restoring trust and balance in the climate science debate.
          </p>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-blue-50">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-teal mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-charcoal leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <BookOpen className="w-8 h-8 text-navy flex-shrink-0" />
              <div>
                <p className="mb-2 font-semibold">Catalog & Evaluate</p>
                <p>
                  FSCS catalogs, evaluates, and publishes information on scientific theories of anthropogenic global warming (AGW), covering science, policy, law, and private initiatives.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="w-8 h-8 text-navy flex-shrink-0" />
              <div>
                <p className="mb-2 font-semibold">Promote Transparency</p>
                <p>
                  We promote transparency, open debate, and scientific integrity in climate science discussions, ensuring all perspectives receive fair consideration based on evidence.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-navy flex-shrink-0" />
              <div>
                <p className="mb-2 font-semibold">Encourage Debate</p>
                <p>
                  FSCS encourages balanced debate and open scientific inquiry, advocating for rigorous analysis rather than censorship or suppression of alternative viewpoints.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Handshake className="w-8 h-8 text-navy flex-shrink-0" />
              <div>
                <p className="mb-2 font-semibold">Support Organizations</p>
                <p>
                  We grant 90%+ of raised funds annually to eligible organizations, supporting integrity and transparency in climate science.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Position Section */}
      <section className="py-16 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">
              Our Position
            </h2>
            <div className="w-24 h-1 bg-teal mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-charcoal leading-relaxed">
            <p className="mb-6">
              Climate has always changed. Humanity plays a role, but catastrophic predictions require verifiable evidence — and we believe that standard hasn't been met. FSCS promotes balanced debate and open scientific inquiry.
            </p>
            <p>
              We believe that extraordinary claims require extraordinary evidence. Many theories on catastrophic anthropogenic global warming (CAGW) remain untested and have become politically polarized. FSCS advocates for rigorous scientific debate rather than censorship or suppression of alternative viewpoints.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Leadership Preview Section */}
      <section className="py-16 bg-gray-100">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">
              Meet the Team
            </h2>
            <div className="w-24 h-1 bg-teal mx-auto mb-8"></div>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Our leadership brings decades of experience in business, finance, and scientific analysis to promote balanced climate science discourse.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Malon Wilkus */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-start"
              variants={fadeIn}
              custom={0}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(30,58,138,0.15)' }}
            >
              <div className="w-16 h-16 bg-slate-200 rounded-full mb-4 flex items-center justify-center text-navy text-2xl font-bold">
                MW
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-2">Malon Wilkus</h3>
              <p className="text-steel mb-4">President and Director</p>
              <p className="text-charcoal text-sm mb-4">
                Founder of Adasel. Former CEO of American Capital ($100B+ AUM). Created public firms AGNC, MTGE, ACSF. Private equity pioneer.
              </p>
              <Link to="/leadership" className="text-teal hover:text-navy font-semibold text-sm hover:underline underline-offset-4 decoration-blue-600 transition-all">
                Read Full Bio →
              </Link>
            </motion.div>
            {/* Jay Beam */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-start"
              variants={fadeIn}
              custom={1}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(30,58,138,0.15)' }}
            >
              <div className="w-16 h-16 bg-slate-200 rounded-full mb-4 flex items-center justify-center text-navy text-2xl font-bold">
                JB
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-2">Jay Beam</h3>
              <p className="text-steel mb-4">Director</p>
              <p className="text-charcoal text-sm mb-4">
                Managing Director at Adasel. 15+ years in PE, former CFO, public accountant. BS from University of Maryland.
              </p>
              <Link to="/leadership" className="text-teal hover:text-navy font-semibold text-sm hover:underline underline-offset-4 decoration-blue-600 transition-all">
                Read Full Bio →
              </Link>
            </motion.div>
            {/* Dr. Attila Freska */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-start"
              variants={fadeIn}
              custom={2}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(30,58,138,0.15)' }}
            >
              <div className="w-16 h-16 bg-slate-200 rounded-full mb-4 flex items-center justify-center text-navy text-2xl font-bold">
                AF
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-2">Dr. Attila Freska</h3>
              <p className="text-steel mb-4">Advisor</p>
              <p className="text-charcoal text-sm mb-4">
                CSO at Securiport. Aviation/border security expert. PhD in International Business. Speaker for INTERPOL, advisor to BORDERPOL and WEF.
              </p>
              <Link to="/leadership" className="text-teal hover:text-navy font-semibold text-sm hover:underline underline-offset-4 decoration-blue-600 transition-all">
                Read Full Bio →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Support Our Work Section */}
      <section className="py-16 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">
              Support Our Work
            </h2>
            <div className="w-24 h-1 bg-teal mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-charcoal mb-8 leading-relaxed">
              FSCS grants 90%+ of its raised funds annually to eligible organizations. We rely entirely on donations to promote integrity and transparency in climate science.
            </p>
            <Link
              to="/support"
              className="inline-block bg-navy text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              Donate Now
            </Link>
            <p className="text-sm text-steel mt-4">
              Donations are tax-deductible as allowed by law. EIN: [Placeholder]
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home 