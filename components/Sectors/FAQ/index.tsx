"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageCircleQuestion } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
  index: number
}

const FAQItem = ({ question, answer, isOpen, toggleOpen, index }: FAQItemProps) => {
  return (
    <motion.div
      className={`border-b border-gray-200 overflow-hidden ${isOpen ? "bg-blue-50" : "bg-white"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <button
        className="flex justify-between items-center w-full py-5 px-6 text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="text-xl font-semibold text-gray-800">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-blue-600">
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-5"
          >
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqData = [
    {
      question: "What types of civil engineering projects do you specialize in?",
      answer:
        "We specialize in a comprehensive range of civil engineering projects including roads and highways, tunnels, railway infrastructure, waterways, and commercial/residential buildings. Our team has extensive experience in both public and private sector projects, with particular expertise in challenging terrain and complex structural requirements.",
    },
    {
      question: "How do you ensure quality and safety in your projects?",
      answer:
        "Quality and safety are our top priorities. We implement rigorous quality control processes at every stage of the project lifecycle. Our team follows industry best practices and maintains all relevant certifications. We conduct regular safety audits, provide comprehensive training to all personnel, and utilize advanced monitoring systems to ensure all projects meet or exceed regulatory standards.",
    },
    {
      question: "What is your typical project timeline from conception to completion?",
      answer:
        "Project timelines vary based on scope, complexity, and specific requirements. Typically, our process includes initial consultation (1-2 weeks), feasibility studies and planning (2-8 weeks), detailed design (4-12 weeks), regulatory approvals (varies by jurisdiction), construction (depends on project scale), and final inspection and handover. We provide detailed timelines during the initial consultation and keep clients informed of progress throughout the project.",
    },
    {
      question: "Do you handle all necessary permits and regulatory compliance?",
      answer:
        "Yes, we manage all aspects of regulatory compliance and permitting. Our team stays current with local, state, and federal regulations affecting civil engineering projects. We handle environmental impact assessments, building code compliance, safety regulations, and all necessary permits. Our proactive approach to compliance helps prevent delays and ensures smooth project execution.",
    },
    {
      question: "How do you incorporate sustainable practices in your engineering solutions?",
      answer:
        "Sustainability is integrated into all our projects. We employ eco-friendly materials, energy-efficient designs, and water conservation techniques. Our team conducts thorough environmental impact assessments and develops mitigation strategies. We also utilize BIM (Building Information Modeling) to optimize resource usage and minimize waste. Additionally, we stay updated on the latest green technologies and sustainable engineering practices to provide environmentally responsible solutions.",
    },
    {
      question: "What sets your civil engineering firm apart from competitors?",
      answer:
        "Our company distinguishes itself through our innovative approach, technical excellence, and client-focused service. We combine decades of industry experience with cutting-edge technology and methodologies. Our multidisciplinary team allows us to handle complex projects in-house, ensuring seamless coordination. We pride ourselves on our problem-solving capabilities, attention to detail, and commitment to delivering projects on time and within budget while exceeding quality expectations.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="pb-20 relative overflow-hidden ">
      {/* Decorative elements */}
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-3 bg-blue-100 rounded-full mb-4"
          >
            <MessageCircleQuestion size={32} className="text-blue-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Get answers to common questions about our civil engineering services and project approach
          </motion.p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">Still have questions? Contact our team for more information.</p>
          <a
            href="/ContactUs"
            className="inline-block mt-4 px-8 py-3 text-lg sm:text-xl  font-bold hover:bg-logored transition-all duration-300 hover:translate-x-1 hover:scale-110 rounded bg-primary text-center  text-white "
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

