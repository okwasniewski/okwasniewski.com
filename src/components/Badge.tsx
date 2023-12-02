export interface BadgeProps {
  color: 'green' | 'blue';
  text: string;
  className?: string;
}

const Badge = ({ color, text, className }: BadgeProps) => (
  <div
    className={`flex justify-center items-center text-center w-fit h-fit whitespace-nowrap px-2 py-1 text-xs font-semibold text-${color}-500 uppercase bg-${color}-200 dark:opacity-80 rounded-lg ${className}`}
  >
    {text}
  </div>
);

export default Badge;
