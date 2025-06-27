import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Info, Landmark, Timer, FileText } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' }
  })
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

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
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-teal mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-serif font-bold text-navy mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6 text-navy" /> Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-navy text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
          >
            {/* Organization Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-serif font-bold text-navy mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-navy" /> Organization Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-teal" />
                  <h3 className="font-semibold text-navy mb-2">The Foundation Supporting Climate Science</h3>
                </div>
                <p className="text-charcoal text-sm">
                  A 501(c)(3) nonprofit think tank promoting transparent, unbiased climate science debate and education.
                </p>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-teal" />
                  <h3 className="font-semibold text-navy mb-2">info@thefscs.org</h3>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-teal" />
                  <h3 className="font-semibold text-navy mb-2">EIN: [Placeholder]</h3>
                </div>
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-teal" />
                  <h3 className="font-semibold text-navy mb-2">Registered 501(c)(3) nonprofit organization</h3>
                </div>
              </div>
            </div>
            {/* What We Do */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-serif font-bold text-navy mb-4">What We Do</h3>
              <div className="space-y-3 text-charcoal text-sm">
                <p>• Catalog and evaluate climate science research</p>
                <p>• Support organizations promoting balanced debate</p>
                <p>• Fund unbiased climate science education</p>
                <p>• Advocate for scientific transparency</p>
                <p>• Grant 90%+ of raised funds to eligible organizations</p>
              </div>
            </div>
            {/* Response Time */}
            <div className="bg-gradient-to-r from-navy to-teal text-white rounded-lg p-6">
              <h3 className="text-lg font-serif font-bold mb-2 flex items-center gap-2">
                <Timer className="w-5 h-5 text-white" /> Response Time
              </h3>
              <p className="text-gray-200 text-sm">
                We typically respond to inquiries within 2-3 business days. 
                For urgent matters, please include "URGENT" in your message subject.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={2}
        >
          <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-navy mb-4">
              Get in Touch
            </h3>
            <p className="text-charcoal leading-relaxed">
              Whether you have questions about our mission, want to learn more about our grant-making process, 
              or are interested in supporting our work, we'd love to hear from you. 
              Our team is committed to transparency and open communication about our activities and goals.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact 