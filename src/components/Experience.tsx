function Experience() {
  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Experience Highlights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <p className="text-lg">💡 Software Engineer @ ASMPT: CI/CD pipelines, DevOps infra, test automation in C#</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <p className="text-lg">📚 MBA Thesis: DevSecOps challenges for cloud-native applications using Kubernetes & Docker</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <p className="text-lg">🚀 Engineering Consultant @ ALTEN: MES engineering & .NET software development</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <p className="text-lg">🌱 Young Talents Programme: Strategy, innovation & business network development</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <p className="text-lg">✈️ MSc Aerospace Engineering: Space systems, propulsion, flight dynamics</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;