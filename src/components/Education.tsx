
const educationData = [
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Hochschule_Muenchen_Logo.svg/2560px-Hochschule_Muenchen_Logo.svg.png',
    institution: 'Hochschule München University of Applied Sciences',
    degree: 'Master of Business Administration - MBA, Business Administration and Management, Engineering',
    period: 'Oct 2023 - Aug 2025',
    details: [
      'Leadership and Upward Management',
      'Strategy',
      'Innovation Management',
      'Sustainability',
      'Lean Manufacturing and Administration',
      'Economy',
      'Evaluation of IT Trend',
      'Product Management & Technical Sales',
    ],
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Hochschule_Muenchen_Logo.svg/2560px-Hochschule_Muenchen_Logo.svg.png',
    institution: 'Hochschule München University of Applied Sciences',
    degree: 'Master of Science - MS, Aerospace, Aeronautical and Astronautical Engineering',
    period: '2019 - 2021',
    grade: '2.1',
    details: [
      'Space Flight Dynamics and Space Environment',
      'Propulsion Systems for Spacecraft',
      'Space Systems Design',
    ],
    skills: ['Business Strategy'],
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/THM_Logo.svg/2560px-THM_Logo.svg.png',
    institution: 'Technische Hochschule Mannheim',
    degree: 'Bachelor of Science - BS, Computertechnik/Computersystemtechnik',
    period: '2016 - 2019',
    grade: '1.8',
    details: [
      'Software development',
      'Embedded System',
      'High-Speed-Network Technology',
      'Broadband and Information Technology',
    ],
  },
];

function Education() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Education</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-1 text-center">{edu.institution}</h3>
              <p className="text-gray-700 font-medium text-center mb-1">{edu.degree}</p>
              <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
              {edu.grade && (
                <p className="text-sm text-gray-600 mb-3 font-semibold">Grade: {edu.grade}</p>
              )}
              <ul className="text-left text-gray-700 list-disc list-inside max-w-xs">
                {edu.details.map((item, idx) => (
                  <li key={idx} className="mb-1">{item}</li>
                ))}
              </ul>
              {edu.skills && (
                <p className="mt-3 text-sm text-gray-600 italic">
                  Skills: {edu.skills.join(', ')}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
