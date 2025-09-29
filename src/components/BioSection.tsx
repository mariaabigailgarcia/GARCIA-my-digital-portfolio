import Image from "next/image";

export default function BioSection() {
  return (
    <section className="text-center p-8">
      <Image
        src="/images/abi.jpg"
        alt="Profile picture"
        width={128}
        height={128}
        className="mx-auto rounded-full border-4 border-gray-300"
      />
      <h2 className="text-2xl font-bold mt-4">
        Hi, I’m Maria Abigail T. Garcia
      </h2>
      <p className="mt-2 text-gray-600">
        A passionate IT student specializing in web development and frontend
        systems. <br /> I am eager to learn and grow in the tech industry.
      </p>
    </section>
  );
}
