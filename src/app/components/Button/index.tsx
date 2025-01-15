import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  onClick: (arg: React.SyntheticEvent) => void;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  type: "basic" | "start";
}

interface TypeStyles {
  basic: string;
  start: string;
}

const typeStyles: TypeStyles = {
  basic: "bg-blue-500 hover:bg-blue-600",
  start: "bg-green-600 hover:bg-green-700",
};

export const Button = ({
  text,
  onClick,
  className = "",
  disabled,
  icon,
  iconPosition = "left",
  type = "basic",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center space-x-2 px-4 py-2 rounded shadow transition-all duration-300 ease-in-out text-white ${
        disabled
          ? `${typeStyles[type]} opacity-50 cursor-not-allowed`
          : typeStyles[type]
      } ${className}`}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      <span>{text}</span>
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};
