
import {
  SiArgo,
  SiKubernetes,
  SiDocker,
  SiHelm,
  SiDotnet,
  SiCplusplus,
  SiC,
  SiReact,
  SiTypescript,
  SiGithub,
  SiGit,
  SiRaspberrypi,
  SiArduino,
  SiQt,
} from 'react-icons/si';
import { VscAzureDevops } from "react-icons/vsc";
import { FaBusinessTime, FaProjectDiagram } from 'react-icons/fa';

// Categorized skill data with icons
const skillsData = {
  "Cloud & DevOps": [
    { name: "ArgoCD", description: "Master Thesis at Hochschule München University of Applied Sciences", Icon: SiArgo },
    { name: "Kubernetes", description: "Master Thesis at Hochschule München University of Applied Sciences", Icon: SiKubernetes },
    { name: "Docker", description: "Master Thesis at Hochschule München University of Applied Sciences", Icon: SiDocker },
    { name: "Helm Charts", description: "Master Thesis at Hochschule München University of Applied Sciences", Icon: SiHelm },
    { name: "Harbor", description: "Master Thesis at Hochschule München University of Applied Sciences", Icon: SiDocker }, // no official icon, reuse Docker icon
  ],

  "Programming & Frameworks": [
    { name: "C#", description: "5 years Software Enginner at ASMPT", Icon: SiDotnet },
    { name: "C++", description: "2 experiences across Fraunhofer IIS and 1 other company", Icon: SiCplusplus },
    { name: "TypeScript", description: "Cofounded Fintech company", Icon: SiTypescript },
    { name: "React", description: "Digitalisation project in multiple african country", Icon: SiReact },
    

  ],

  "Management & Strategy": [
    { name: "Business Strategy", description: "Munich University of Applied Sciences", Icon: FaBusinessTime },
    { name: "Intrapreneurship", description: "Young Talents Programme Rising at ASMPT Ltd", Icon: FaProjectDiagram },
    { name: "Management", description: "Young Talents Programme Rising at ASMPT Ltd", Icon: FaBusinessTime },
  ],

  "Software Architecture": [
    // No official icons here, use general project or code icon
    { name: "Software Architectural Design", description: ".NET - Moderne Architekturen und Designprinzipien", Icon: FaProjectDiagram },
    { name: "Architectural Patterns", description: ".NET - Moderne Architekturen und Designprinzipien", Icon: FaProjectDiagram },
    { name: "System Architecture", description: ".NET - Moderne Architekturen und Designprinzipien", Icon: FaProjectDiagram },
    { name: "SOLID Design Principles", description: ".NET - Moderne Architekturen und Designprinzipien", Icon: FaProjectDiagram },
    { name: "Software Design Patterns", description: ".NET - Moderne Architekturen und Designprinzipien", Icon: FaProjectDiagram },
    { name: "Web Services", description: ".NET - Moderne Architekturen und Designprinzipien", Icon: FaProjectDiagram },
  ],

  "Tools & Platforms": [
    { name: "GitHub", description: "", Icon: SiGithub },
    { name: "Git", description: "1 endorsement", Icon: SiGit },
    { name: "VS Azure devops", description: "Software Engineer at ASMPT Ltd", Icon: VscAzureDevops },
  ],

  "Hardware & Embedded": [
    { name: "Raspberry Pi", description: "Bachelor Thesis at Hochschule Mannheim", Icon: SiRaspberrypi },
    { name: "Arduino", description: "", Icon: SiArduino },
    { name: "Qt", description: "Intern at Fraunhofer IIS", Icon: SiQt },
  ],
};

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-white max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>

      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="mb-14">
          <h3 className="text-2xl font-semibold mb-8 border-b-2 border-blue-600 inline-block pb-2">
            {category}
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map(({ name, description, Icon }, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 p-4 border rounded-xl shadow hover:shadow-lg transition"
              >
                <Icon className="w-12 h-12 text-blue-600" />
                <div>
                  <h4 className="text-lg font-semibold">{name}</h4>
                  {description && <p className="text-sm text-gray-600">{description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
