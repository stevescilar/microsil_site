import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="min-h-screen flex items-center">
        <div className="container-width">
          <h1 className="text-7xl font-black">
            Intelligent Digital Solutions
          </h1>

          <p className="mt-6 text-slate-600 max-w-2xl text-lg">
            Software, analytics, data and cybersecurity
            solutions built for modern businesses.
          </p>
        </div>
      </section>
    </main>
  );
}