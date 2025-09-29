import Image from "next/image";

export default function BioSection() {
  return (
    <section className="p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-4xl mx-auto">
        {/* Profile Photo */}
        <Image
          src="/images/abi.jpg"
          alt="Profile picture"
          width={180}
          height={180}
          className="rounded-2xl border-4 border-green-300 transition-transform duration-300 hover:scale-110 hover:shadow-lg"
        />

        {/* Text Card */}
        <div className="flex-1 p-6 bg-white dark:bg-gray-900 shadow-md rounded-2xl transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-green-300">
            Hi, I’m Maria Abigail T. Garcia
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            A passionate IT student specializing in web development and frontend
            systems. <br />
            I am eager to learn and grow in the tech industry. <br />
            I am willing to dabble in Networking, Server Management, and
            Cybersecurity if needed.
          </p>
        </div>
      </div>
    </section>
  );
}
