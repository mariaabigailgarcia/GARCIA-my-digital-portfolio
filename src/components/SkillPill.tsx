interface Props {
  skill: string;
}

export default function SkillPill({ skill }: Props) {
  return (
    <span
      className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mr-2 transition-colors duration-300 hover:bg-green-200 hover:text-green-800 cursor-pointer"
    >
      {skill}
    </span>
  );
}
