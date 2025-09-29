interface Props {
  skill: string;
}

export default function SkillPill({ skill }: Props) {
  return (
    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mr-2">
      {skill}
    </span>
  );
}
