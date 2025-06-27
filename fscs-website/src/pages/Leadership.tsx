import { motion } from 'framer-motion'
import { User, Briefcase, BarChart3 } from 'lucide-react'

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

const Leadership = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h1 className="text-5xl font-serif font-bold text-navy mb-6">
            Leadership
          </h1>
          <div className="w-24 h-1 bg-teal mx-auto mb-8"></div>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Our leadership team brings decades of experience in business, finance, and scientific analysis to promote balanced climate science discourse.
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Malon Wilkus */}
          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col"
            variants={fadeIn}
            custom={0}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(30,58,138,0.15)' }}
          >
            <div className="bg-gradient-to-r from-navy to-teal p-6 text-white flex flex-col items-center">
              <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mb-3">
                <User className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-2">Malon Wilkus</h2>
              <p className="text-gray-200">President and Director</p>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4">
                <h3 className="font-semibold text-navy mb-2">Current Position</h3>
                <p className="text-charcoal">Founder of Adasel</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-navy mb-2">Professional Background</h3>
                <ul className="text-charcoal text-sm space-y-1">
                  <li>• Former CEO of American Capital (sold for $4.1B)</li>
                  <li>• Created and led firms with over $100B in assets under management</li>
                  <li>• Founded and led AGNC Investment Corp. (AGNC)</li>
                  <li>• Founded and led MTGE Investment Corp. (MTGE)</li>
                  <li>• Founded and led American Capital Senior Floating (ACSF)</li>
                  <li>• Private equity pioneer with extensive board experience</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-navy mb-2">Key Achievements</h3>
                <ul className="text-charcoal text-sm space-y-1">
                  <li>• Led American Capital through $4.1 billion exit</li>
                  <li>• Created multiple successful public companies</li>
                  <li>• Served on numerous corporate boards</li>
                  <li>• Recognized leader in private equity and finance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-2">Role at FSCS</h3>
                <p className="text-charcoal text-sm">
                  As President and Director, Malon provides strategic leadership and financial expertise to advance FSCS's mission of promoting transparent, unbiased climate science debate.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Jay Beam */}
          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col"
            variants={fadeIn}
            custom={1}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(30,58,138,0.15)' }}
          >
            <div className="bg-gradient-to-r from-navy to-teal p-6 text-white flex flex-col items-center">
              <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mb-3">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-2">Jay Beam</h2>
              <p className="text-gray-200">Director</p>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4">
                <h3 className="font-semibold text-navy mb-2">Current Position</h3>
                <p className="text-charcoal">Managing Director at Adasel</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-navy mb-2">Professional Background</h3>
                <ul className="text-charcoal text-sm space-y-1">
                  <li>• 15+ years of experience in private equity</li>
                  <li>• Former Senior Vice President at American Capital</li>
                  <li>• Former CFO of a venture capital-backed finance company</li>
                  <li>• Public accountant with extensive financial expertise</li>
                  <li>• BS from University of Maryland</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-navy mb-2">Areas of Expertise</h3>
                <ul className="text-charcoal text-sm space-y-1">
                  <li>• Private equity investment and management</li>
                  <li>• Financial analysis and reporting</li>
                  <li>• Corporate finance and restructuring</li>
                  <li>• Risk assessment and management</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-2">Role at FSCS</h3>
                <p className="text-charcoal text-sm">
                  Jay brings his financial expertise and analytical skills to help FSCS evaluate climate science research and ensure responsible stewardship of foundation resources.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Dr. Attila Freska */}
          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col"
            variants={fadeIn}
            custom={2}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(30,58,138,0.15)' }}
          >
            <div className="bg-gradient-to-r from-navy to-teal p-6 text-white flex flex-col items-center">
              <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mb-3">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-2">Dr. Attila Freska</h2>
              <p className="text-gray-200">Advisor</p>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4">
                <h3 className="font-semibold text-navy mb-2">Current Position</h3>
                <p className="text-charcoal">Chief Strategy Officer at Securiport</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-navy mb-2">Professional Background</h3>
                <ul className="text-charcoal text-sm space-y-1">
                  <li>• Expert in predictive analytics for aviation and border security</li>
                  <li>• Speaker at INTERPOL conferences</li>
                  <li>• Advisor to BORDERPOL and World Economic Forum (WEF)</li>
                  <li>• PhD in International Business from Corvinus University</li>
                  <li>• MBA from Middlebury Institute of International Studies</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-navy mb-2">Areas of Expertise</h3>
                <ul className="text-charcoal text-sm space-y-1">
                  <li>• Predictive analytics and data science</li>
                  <li>• International business and policy</li>
                  <li>• Aviation and border security systems</li>
                  <li>• Strategic planning and risk assessment</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-2">Role at FSCS</h3>
                <p className="text-charcoal text-sm">
                  Dr. Freska provides strategic guidance and analytical expertise to help FSCS evaluate climate science research and develop evidence-based approaches to environmental policy.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-navy mb-4">
              Our Approach to Leadership
            </h3>
            <p className="text-charcoal leading-relaxed">
              FSCS's leadership team combines decades of experience in business, finance, and scientific analysis. 
              We bring a data-driven, evidence-based approach to climate science discussions, ensuring that all 
              perspectives receive fair consideration. Our diverse backgrounds enable us to evaluate complex 
              scientific and policy issues from multiple angles, promoting balanced debate and informed decision-making.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Leadership 