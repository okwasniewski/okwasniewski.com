export interface BadgeProps {
  color: 'green' | 'blue';
  text: string;
  className?: string;
}

const Badge = ({ color, text, className }: BadgeProps) => (
  <span
    style={{ width: 'fit-content' }}
    className={`flex justify-center px-2 py-1 text-xs font-semibold text-${color}-500 uppercase bg-${color}-200 dark:opacity-80 rounded-lg ${className}`}
  >
    {text}
  </span>
);

export default Badge;
