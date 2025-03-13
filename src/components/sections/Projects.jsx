import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../varients";

const GITHUB_USERNAME = "Anuragg290"; 

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&direction=desc`
        );
  
        if (!response.ok) {
          throw new Error(`GitHub API Error: ${response.status} ${response.statusText}`);
        }
  
        const data = await response.json();
        console.log("Fetched Repos:", data); 
  
  
        const sortedProjects = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  
        setProjects(sortedProjects);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };
  
    fetchProjects();
  }, []);
  
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="
                  glass p-6 rounded-xl border border-white/10 
                  hover:-translate-y-1 hover:border-blue-500/30
                  hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                  transition-all
                "
              >
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">
                  {project.description || "No description available."}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 text-center">Loading projects...</p>
          )}
        </div>
      </div>
    </section>
  );
};
