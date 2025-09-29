import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4 shadow bg-white">
            <h3 className="font-bold text-lg">Project 1</h3>
            <p className="text-gray-600">A short description of the project.</p>
            <a href="https://github.com/yourusername/project1" className="text-blue-500">
              View on GitHub
            </a>
          </div>

          <div className="border rounded-lg p-4 shadow bg-white">
            <h3 className="font-bold text-lg">Project 2</h3>
            <p className="text-gray-600">Another cool project description.</p>
            <a href="https://github.com/yourusername/project2" className="text-blue-500">
              View on GitHub
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
