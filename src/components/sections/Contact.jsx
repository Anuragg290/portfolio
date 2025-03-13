import { useState } from "react";
import {motion} from 'framer-motion';
import {fadeIn} from '../../varients';
import emailjs from "emailjs-com";


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
         <motion.div
                 variants={fadeIn("up", 0.2)}
                 initial="hidden"
                  whileInView="show"
                 viewport={{ once: false, amount: 0.3 }} >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
            
            Get In Touch
          </h2>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
          <motion.div 
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                     whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </motion.div>

            <motion.div 
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                     whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </motion.div>

               <motion.div 
               variants={fadeIn("left", 0.3)}
               initial="hidden"
                whileInView="show"
               viewport={{ once: false, amount: 0.3 }} 
               className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </motion.div>
            <motion.div 
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                     whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} >
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
            </motion.div>
          </form>
          </motion.div>
        </div>
  
      
    </section>
  );
};