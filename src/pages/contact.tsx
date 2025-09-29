import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p>Email: <a href="mailto:your@email.com" className="text-blue-500">your@email.com</a></p>
        <p className="mt-2">Or connect with me on <a href="https://linkedin.com" className="text-blue-500">LinkedIn</a></p>
      </main>
      <Footer />
    </>
  );
}
