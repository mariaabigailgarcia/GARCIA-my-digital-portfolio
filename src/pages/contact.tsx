import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p>Email: <a href="mailto:your@email.com" className="text-blue-500">mariaatm.garcia@gmail.com</a></p>
        <p className="mt-2">Or connect with me on <a href="https://www.facebook.com/abigail.garcia.7334" className="text-blue-500">Facebook</a></p>
      </main>
      <Footer />
    </>
  );
}
