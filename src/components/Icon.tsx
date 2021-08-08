import { IconType } from 'react-icons';

interface IconProps {
  Element: IconType;
  text: string;
}
const Icon = ({ Element, text }: IconProps) => {
  return (
    <div className="flex flex-col items-center justify-center mt-6 text-white transition transform hover:scale-110">
      <Element className='w-16 h-16 mb-4' />
      <p>{text}</p>
    </div>
  );
};

export default Icon;
