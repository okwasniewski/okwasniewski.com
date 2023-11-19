export interface BadgeProps {
  color: 'green' | 'blue';
  text: string;
}

const Badge = ({ color, text }: BadgeProps) => (
  <span
    style={{ width: 'fit-content' }}
    className={`flex justify-center px-2 py-1 mb-4 text-xs font-semibold text-${color}-500 uppercase bg-${color}-200 rounded-lg`}
  >
    {text}
  </span>
);

export default Badge;
