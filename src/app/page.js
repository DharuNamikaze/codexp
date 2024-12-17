// pages/index.js
// import Timeline from "../components/Timeline";
import Timeline from "../../components/Timeline";
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-24">
        <h1 className="text-5xl font-bold">Welcome to CodeXP</h1>
        <p className="mt-4 text-xl">Level up your skills in coding, data science, and more through gamified learning!</p>
        <div className="mt-8">
          <a
            href="#"
            className="bg-yellow-500 text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-all"
          >
            Get Started for Free
          </a>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Features Section */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-semibold text-gray-900">Why CodeXP?</h2>
        <p className="mt-4 text-xl text-gray-700">Experience the future of learning with a fun, interactive platform.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Add content or remove if unnecessary */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center py-16">
        <h2 className="text-3xl font-semibold">Ready to Start Your Learning Journey?</h2>
        <p className="mt-4 text-lg">Join CodeXP now and start building your future with personalized lessons.</p>
        <a
          href="#"
          className="mt-8 inline-block bg-yellow-500 text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-all"
        >
          Start Learning Today
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <p>&copy; {new Date().getFullYear()} CodeXP. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-yellow-500 hover:text-yellow-400 transition-all mx-4">Privacy</a>
          <a href="#" className="text-yellow-500 hover:text-yellow-400 transition-all mx-4">Terms</a>
        </div>
      </footer>
    </div>
  );
}