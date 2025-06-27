import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, MapPin, FileText, ExternalLink } from 'lucide-react'

const Footer = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Support', path: '/support' },
    { name: 'Contact', path: '/contact' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <motion.footer 
      className="bg-navy text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Organization Info */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src="/logo.png" alt="FSCS Logo" className="h-16 w-auto mb-6" />
            </motion.div>
            <h3 className="text-xl font-serif font-bold mb-4">The Foundation Supporting Climate Science</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A 501(c)(3) nonprofit think tank promoting transparent, unbiased climate science debate and education.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FileText className="w-4 h-4" />
              <span>EIN: [Placeholder]</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-serif font-bold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-serif font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="w-5 h-5 text-teal" />
                <a href="mailto:info@thefscs.org" className="hover:underline">
                  info@thefscs.org
                </a>
              </motion.div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Registered 501(c)(3) nonprofit organization</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-sm">
            © 2025 The Foundation Supporting Climate Science. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer 