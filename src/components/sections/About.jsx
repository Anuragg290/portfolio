import {motion} from 'framer-motion';
import {fadeIn} from '../../varients';
export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "Python", "SQL", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
  
        <div className="max-w-3xl mx-auto px-4">
         <motion.div
         variants={fadeIn("left", 0.2)}
         initial="hidden"
          whileInView="show"
         viewport={{ once: false, amount: 0.3 }} 
          >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          </motion.div >
          <motion.div 
        
        variants={fadeIn("up", 0.2)}
        initial="hidden"
         whileInView="show"
        viewport={{ once: false, amount: 0.3 }} 
      
          
          className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
             whileInView="show"
            viewport={{ once: false, amount: 0.3 }} 

             className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Bachelor in Computer Science <br/>
                    </strong>  SRM University AP
                  (2022-2026)
                </li>
                <br/>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Computer Network, Data Science...
                </li>
              </ul>
            </motion.div>

            <motion.div
         variants={fadeIn("left", 0.2)}
         initial="hidden"
          whileInView="show"
         viewport={{ once: false, amount: 0.3 }} 
            
            className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                     Intern at Satyadip International Pvt Ltd (2023-Jun to 2023-July){" "}
                  </h4>
                  <br/>
                  <p>
                  Developed responsive web applications using React.js and Bootstrap, improving performance and user
 experience.
                  </p>
                </div>

                {/* <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at ........... (2019){" "}
                  </h4>
                  <p>
                   statement
                  </p>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
    
    </section>
  );
};