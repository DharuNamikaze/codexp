
import Link from "next/link";
import Timeline from "../../components/Timeline";
import MainPage from "../../components/MainPage";
export default function Home() {
  return (
    <div>
      
      {/* Hero Section with Background Video */}
      <section className="relative text-white text-center py-24">
        {/* Background Video */}
        
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Welcome to CodeXP</h1>
          <p className="mt-4 text-xl">
            Level up your skills in coding through <strong style={{color:'#683aae'}} className="inline">gamified</strong> learning!
          </p>
          {/* <div className="mt-8">
            <a
              href="#"
              className="btn btn-primary transition-all"
            >
              Get Started
            </a>
          </div> */}
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40 -z-10"></div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Features Section */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-semibold text-gray-900">Why CodeXP?</h2>
        <p className="mt-4 text-xl text-gray-700">
          Experience the future of learning with a fun, interactive platform.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
         
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-white text-center py-16">
        <h2 className="text-3xl font-semibold">Ready to Start Your Learning Journey?</h2>
        <p className="mt-4 text-lg">
          Join <strong style={{color:'#683aae'}}>CodeXP</strong> now and start building your future with personalized lessons.
        </p>
        <button className="mt-8">
            <Link href="components/MainPage.jsx"
              className="box text-white hover:text-violet-700">
              Get Started
            </Link>
          </button>
      </section>

      {/* Footer  */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <p>&copy; {new Date().getFullYear()} CodeXP. All rights reserved.</p>
        <div className="mt-4 ">
          {/* <a href="#" className="transition-all mx-4">Privacy</a>
          <a href="#" className="transition-all mx-4">Terms</a> */}
        </div>
      </footer>
    </div>
  );
}
