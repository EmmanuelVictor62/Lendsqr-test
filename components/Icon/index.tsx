import icons from "@/public/icons/icon";

interface IconsProps {
  name: keyof typeof icons;
  className?: string;
}

const Icon: React.FC<IconsProps> = ({ name, className }) => {
  const SVGIcon = icons[name];
  return SVGIcon ? <SVGIcon className={className} /> : null;
};

export default Icon;
