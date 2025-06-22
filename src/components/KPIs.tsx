function KPIs() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-center">
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-4xl font-extrabold">7+</h3>
          <p className="mt-2 text-lg">Years Experience</p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-4xl font-extrabold">15+</h3>
          <p className="mt-2 text-lg">Projects Delivered</p>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-blue-500 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-4xl font-extrabold">4</h3>
          <p className="mt-2 text-lg">Industries Served</p>
        </div>
        <div className="bg-gradient-to-br from-blue-700 to-purple-500 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-4xl font-extrabold">3</h3>
          <p className="mt-2 text-lg">Degrees Earned</p>
        </div>
      </div>
    </section>
  );
}

export default KPIs;