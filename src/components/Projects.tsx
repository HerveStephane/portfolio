import React from 'react';
import { FiCpu, FiBox, FiGlobe, FiCreditCard } from 'react-icons/fi';

const projectsData = [
  {
    icon: <FiCpu size={40} className="text-blue-600 mb-4" />,
    title: 'DevOps Infrastructure for ASMPT',
    description: 'Designed and deployed automated testing and CI/CD pipelines, improving release efficiency and quality assurance.',
  },
  {
    icon: <FiBox size={40} className="text-blue-600 mb-4" />,
    title: 'Business-Focused DevSecOps Research',
    description: 'Conducted in-depth analysis of DevSecOps challenges for cloud-native platforms leveraging Kubernetes and Docker.',
  },
  {
    icon: <FiGlobe size={40} className="text-blue-600 mb-4" />,
    title: 'Strategic Digital Solution for Government in Gabon',
    description: 'Created innovative digital platforms to enhance government service delivery and citizen engagement.',
  },
  {
    icon: <FiCreditCard size={40} className="text-blue-600 mb-4" />,
    title: 'Fintech Solution for African Market',
    description: 'Developed scalable fintech applications addressing unique challenges in African financial ecosystems.',
  },
];

function Projects() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Strategic Projects</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Key initiatives I've driven across engineering and business strategy:
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 transition transform hover:-translate-y-2 hover:shadow-2xl duration-300 cursor-pointer"
            >
              <div className="flex justify-center">{icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
