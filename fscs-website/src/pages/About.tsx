import { motion } from 'framer-motion'
import { BookOpen, ShieldCheck, Megaphone, Landmark, Users, Leaf, Info, Handshake } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' }
  })
}

const About = () => {
  return (
    <div className="min-h-screen py-16 bg-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h1 className="text-5xl font-serif font-bold text-navy mb-6">
            About FSCS
          </h1>
          <div className="w-24 h-1 bg-teal mx-auto"></div>
        </motion.div>

        {/* Our Mission */}
        <motion.section
          className="mb-16 bg-white rounded-xl shadow-lg p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-7 h-7 text-navy" />
            <h2 className="text-3xl font-serif font-bold text-navy">Our Mission</h2>
          </div>
          <div className="prose prose-lg text-charcoal max-w-prose">
            <p className="mb-6">
              The Foundation Supporting Climate Science (FSCS) catalogs, evaluates, and publishes information on anthropogenic global warming (AGW)-related science, policy, and law. We are committed to promoting transparency, open debate, and scientific integrity in climate science discussions.
            </p>
            <p>
              As a 501(c)(3) nonprofit think tank, we operate without political bias, focusing solely on the scientific evidence and encouraging rigorous analysis of all perspectives in the climate science debate.
            </p>
          </div>
        </motion.section>

        {/* Our Beliefs on Climate Science */}
        <motion.section
          className="mb-16 bg-blue-50 rounded-xl shadow p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-7 h-7 text-navy" />
            <h2 className="text-3xl font-serif font-bold text-navy">Our Beliefs on Climate Science</h2>
          </div>
          <div className="prose prose-lg text-charcoal max-w-prose">
            <p className="mb-6">
              We believe that climate has always changed throughout Earth's history, and that human activity does play a role in current climate patterns. However, we maintain that extraordinary claims require extraordinary evidence.
            </p>
            <p className="mb-6">
              Many theories on catastrophic anthropogenic global warming (CAGW) remain untested and have become politically polarized. We advocate for rigorous scientific debate rather than the acceptance of unproven catastrophic predictions.
            </p>
            <p>
              FSCS promotes balanced debate and open scientific inquiry, ensuring that all perspectives receive fair consideration based on evidence rather than political alignment.
            </p>
          </div>
        </motion.section>

        {/* Debate on CAGW */}
        <motion.section
          className="mb-16 bg-white rounded-xl shadow-lg p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex items-center gap-3 mb-4">
            <Megaphone className="w-7 h-7 text-navy" />
            <h2 className="text-3xl font-serif font-bold text-navy">Debate on CAGW</h2>
          </div>
          <div className="prose prose-lg text-charcoal max-w-prose">
            <p className="mb-6">
              The debate over catastrophic anthropogenic global warming (CAGW) is complex and multifaceted. While there is consensus that human activities influence climate, the extent and severity of these impacts remain subjects of legitimate scientific inquiry.
            </p>
            <p className="mb-6">
              We believe that the scientific method requires skepticism, peer review, and the ability to question prevailing theories. Many CAGW predictions have not been validated by empirical evidence, yet they continue to drive policy decisions.
            </p>
            <p>
              FSCS supports organizations and researchers who are investigating alternative theories and questioning the assumptions underlying catastrophic climate change predictions.
            </p>
          </div>
        </motion.section>

        {/* Scientific Suppression */}
        <motion.section
          className="mb-16 bg-blue-50 rounded-xl shadow p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex items-center gap-3 mb-4">
            <Landmark className="w-7 h-7 text-navy" />
            <h2 className="text-3xl font-serif font-bold text-navy">Scientific Suppression</h2>
          </div>
          <div className="prose prose-lg text-charcoal max-w-prose">
            <p className="mb-6">
              We are concerned about the suppression of alternative viewpoints in climate science. Many institutions reject alternative theories of CAGW without proper consensus or peer consideration, which violates fundamental principles of the scientific method.
            </p>
            <p className="mb-6">
              Researchers who question catastrophic climate change predictions often face professional consequences, including loss of funding, publication barriers, and social ostracism. This creates a chilling effect on scientific inquiry.
            </p>
            <p>
              FSCS believes that true scientific progress requires open debate and the ability to challenge prevailing theories without fear of retribution. We support researchers who are willing to ask difficult questions and pursue alternative explanations.
            </p>
          </div>
        </motion.section>

        {/* Media & Politics */}
        <motion.section
          className="mb-16 bg-white rounded-xl shadow-lg p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-7 h-7 text-navy" />
            <h2 className="text-3xl font-serif font-bold text-navy">Media & Politics</h2>
          </div>
          <div className="prose prose-lg text-charcoal max-w-prose">
            <p className="mb-6">
              Some CAGW advocates promote catastrophic forecasts as settled truth, suppressing criticism and leveraging fear for funding and control. The media often amplifies these claims without proper scientific scrutiny.
            </p>
            <p className="mb-6">
              Political agendas have become deeply intertwined with climate science, making it difficult to separate genuine scientific inquiry from policy advocacy. This politicization undermines public trust in scientific institutions.
            </p>
            <p>
              FSCS advocates for depoliticizing climate science and restoring public confidence through transparent, evidence-based discussions that acknowledge the complexity and uncertainty inherent in climate research.
            </p>
          </div>
        </motion.section>

        {/* Policy Concerns */}
        <motion.section
          className="mb-16 bg-blue-50 rounded-xl shadow p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-7 h-7 text-navy" />
            <h2 className="text-3xl font-serif font-bold text-navy">Policy Concerns</h2>
          </div>
          <div className="prose prose-lg text-charcoal max-w-prose">
            <p className="mb-6">
              Many emerging climate policies are costly and disruptive, with significant economic and social consequences. We question whether these policies are necessary and call for open review of their scientific basis and potential impacts.
            </p>
            <p className="mb-6">
              The rush to implement aggressive climate policies based on unproven catastrophic predictions could have unintended consequences, including economic hardship, energy insecurity, and reduced quality of life for millions of people.
            </p>
            <p>
              FSCS supports evidence-based policy making that considers the full range of scientific perspectives and balances environmental concerns with economic and social well-being.
            </p>
          </div>
        </motion.section>

        {/* FSCS's Purpose */}
        <motion.section
          className="mb-16 bg-white rounded-xl shadow-lg p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="w-7 h-7 text-navy" />
            <h2 className="text-3xl font-serif font-bold text-navy">FSCS's Purpose</h2>
          </div>
          <div className="prose prose-lg text-charcoal max-w-prose">
            <p className="mb-6">
              We fund organizations to educate, investigate, and broaden climate discourse. Our grants support research, education, and advocacy that promotes balanced, evidence-based discussions of climate science.
            </p>
            <p className="mb-6">
              FSCS serves as a platform for alternative viewpoints that are often marginalized in mainstream climate discussions. We believe that a diversity of perspectives strengthens scientific understanding and leads to better policy outcomes.
            </p>
            <p>
              Through our work, we aim to restore trust in scientific institutions by promoting transparency, open debate, and the rigorous application of the scientific method to climate science questions.
            </p>
          </div>
        </motion.section>

        {/* Support for Environmentalism */}
        <motion.section
          className="mb-16 bg-blue-50 rounded-xl shadow p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="w-7 h-7 text-navy" />
            <h2 className="text-3xl font-serif font-bold text-navy">Support for Environmentalism</h2>
          </div>
          <div className="prose prose-lg text-charcoal max-w-prose">
            <p className="mb-6">
              FSCS supports environmentalism and rational action across many issues. We believe in responsible stewardship of natural resources and support efforts to reduce pollution, protect ecosystems, and promote sustainable practices.
            </p>
            <p className="mb-6">
              However, we distinguish between legitimate environmental concerns and the politicized debate over catastrophic climate change. We support environmental policies that are based on sound science and consider economic and social impacts.
            </p>
            <p>
              Our commitment to environmental protection is not diminished by our skepticism of catastrophic climate change predictions. We believe that effective environmental policy requires honest assessment of risks and benefits, free from political pressure and fear-based advocacy.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default About 