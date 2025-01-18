import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (arg: React.SyntheticEvent) => void;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  type?: ButtonType;
}

interface TypeStyles {
  primary: string;
  success: string;
}

export enum ButtonType {
  Primary = "primary",
  Success = "success",
}

export enum IconPosition {
  Left = "left",
  Right = "right",
}

const typeStyles: TypeStyles = {
  primary: "bg-blue-500 hover:bg-blue-600",
  success: "bg-green-600 hover:bg-green-700",
};

export const Button = ({
  children,
  onClick,
  disabled,
  icon,
  iconPosition = IconPosition.Left,
  type = ButtonType.Primary,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center space-x-2 px-4 py-2 rounded shadow transition-all duration-300 ease-in-out text-white ${
        disabled
          ? `${typeStyles[type]} opacity-50 cursor-not-allowed`
          : typeStyles[type]
      }`}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};
