interface Props {
  title: string;
  company: string;
  date: string;
  description: string;
}

export default function ExperienceCard({ title, company, date, description }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow mb-4 bg-white transition-transform duration-200 hover:scale-103 hover:shadow-xl">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-500">
        {company} • {date}
      </p>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
}
