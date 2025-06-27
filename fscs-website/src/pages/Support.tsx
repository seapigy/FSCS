import { motion } from 'framer-motion'
import { HandCoins, ShieldCheck, Mail, Phone, MapPin, Info } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' }
  })
}

const Support = () => {
  return (
    <div className="min-h-screen py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h1 className="text-5xl font-serif font-bold text-navy mb-6">
            Support Our Work
          </h1>
          <div className="w-24 h-1 bg-teal mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4 flex items-center justify-center gap-2">
              <HandCoins className="w-7 h-7 text-navy" />
              FSCS is a registered 501(c)(3) nonprofit
            </h2>
            <p className="text-lg text-charcoal leading-relaxed">
              We raise and grant funds to support unbiased climate science education and research. 
              At least 90% of all raised funds are granted each year to eligible organizations 
              that promote transparent, evidence-based climate science discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-6 h-6 text-navy" />
                <h3 className="text-xl font-serif font-bold text-navy">Our Mission</h3>
              </div>
              <p className="text-charcoal mb-2">
                FSCS promotes transparency, open debate, and scientific integrity in climate science discussions. 
                We support organizations that:
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• Conduct unbiased climate science research</li>
                <li>• Promote open scientific debate</li>
                <li>• Educate the public on climate science</li>
                <li>• Advocate for evidence-based policy</li>
                <li>• Support alternative viewpoints in climate discussions</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-6 h-6 text-navy" />
                <h3 className="text-xl font-serif font-bold text-navy">Financial Transparency</h3>
              </div>
              <p className="text-charcoal mb-2">
                We are committed to transparency and responsible stewardship of donor funds:
              </p>
              <ul className="text-charcoal space-y-2">
                <li>• 90%+ of raised funds go directly to grants</li>
                <li>• Minimal administrative overhead</li>
                <li>• Regular financial reporting</li>
                <li>• Independent financial oversight</li>
                <li>• Tax-deductible donations</li>
              </ul>
            </div>
          </div>

          {/* Donation CTA */}
          <motion.div
            className="text-center bg-gradient-to-r from-navy to-teal text-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-4">
              Make a Tax-Deductible Donation
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Your donation helps us support organizations that promote balanced, evidence-based climate science discussions. 
              Every contribution makes a difference in advancing scientific integrity and transparency.
            </p>
            <button className="bg-white text-navy px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:text-white hover:scale-105 transition-all duration-300">
              Donate Now
            </button>
            <p className="text-sm text-gray-300 mt-4">
              Donations are tax-deductible as allowed by law
            </p>
          </motion.div>
        </motion.div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tax Information */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
          >
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-6 h-6 text-navy" />
              <h3 className="text-xl font-serif font-bold text-navy">Tax Information</h3>
            </div>
            <div className="space-y-3 text-charcoal">
              <p><strong>EIN:</strong> [Placeholder]</p>
              <p><strong>Tax Status:</strong> 501(c)(3) nonprofit organization</p>
              <p><strong>Donations:</strong> Tax-deductible as allowed by law</p>
              <p><strong>Reporting:</strong> Annual financial reports available upon request</p>
            </div>
          </motion.div>

          {/* Contact for Donations */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={2}
          >
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-6 h-6 text-navy" />
              <h3 className="text-xl font-serif font-bold text-navy">Contact for Donations</h3>
            </div>
            <div className="space-y-3 text-charcoal">
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-teal" /> <strong>Email:</strong> info@thefscs.org</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-teal" /> <strong>Phone:</strong> [Placeholder]</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal" /> <strong>Address:</strong> [Placeholder]</p>
              <p className="text-sm text-steel">
                For large donations or corporate giving, please contact us directly to discuss your specific needs and our grant-making process.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Impact Statement */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={3}
        >
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-navy mb-4">
              Your Support Makes a Difference
            </h3>
            <p className="text-charcoal leading-relaxed max-w-3xl mx-auto">
              By supporting FSCS, you're helping to promote transparency and open debate in climate science. 
              Your donation enables us to fund organizations that question prevailing assumptions, 
              investigate alternative theories, and advocate for evidence-based policy making. 
              Together, we can restore trust in scientific institutions and ensure that all perspectives 
              receive fair consideration in the climate science debate.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Support 