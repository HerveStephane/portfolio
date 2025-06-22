function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 to-purple-700 text-white text-center px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">Hi, I’m Hervé Stéphane Njanga Njafang</h1>
      <p className="text-2xl md:text-3xl mb-8 font-light">MBA | Software Engineer | DevSecOps & Strategy</p>
      <a href="#contact" className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-gray-100 transition-all duration-300">
        Let’s Connect
      </a>
    </section>
  );
}

export default Hero;
