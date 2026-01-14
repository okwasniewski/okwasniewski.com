export interface BadgeProps {
  color: "green" | "blue" | "orange";
  text: string;
  className?: string;
}

const colorClasses = {
  green: "text-green-500 bg-green-200",
  blue: "text-blue-500 bg-blue-200",
  orange: "text-orange-500 bg-orange-200",
};

const Badge = ({ color, text, className }: BadgeProps) => (
  <div
    className={`flex justify-center items-center text-center w-fit h-fit whitespace-nowrap px-2 py-1 text-xs font-semibold uppercase dark:opacity-80 rounded-lg ${colorClasses[color]} ${className || ""}`}
  >
    {text}
  </div>
);

export default Badge;
