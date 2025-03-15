import React from 'react'
import { motion } from 'framer-motion'
import { Truck, RotateCcw, Clock, Shield } from 'lucide-react'

const OurPolicy = ({ inView }) => {
  const policies = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Free Shipping",
      description: "Free shipping on all orders over $50"
    },
    {
      icon: <RotateCcw className="h-8 w-8" />,
      title: "Easy Returns",
      description: "30-day return policy for all items"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Quick delivery within 3-5 business days"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Payment",
      description: "All transactions are secure and encrypted"
    }
  ]

  return (
    <section className="py-16 px-6 bg-stone-50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-2">
            OUR <span className="font-semibold">PROMISE</span>
          </h2>
          <div className="h-px w-16 bg-rose-500 mt-4 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {policies.map((policy, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-4 text-rose-500">{policy.icon}</div>
              <h3 className="text-xl font-medium mb-2">{policy.title}</h3>
              <p className="text-gray-600">{policy.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurPolicy
