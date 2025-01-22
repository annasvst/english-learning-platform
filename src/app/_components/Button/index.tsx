import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (arg: React.SyntheticEvent) => void;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  color?: ButtonColor;
  fullWidth?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

export enum ButtonColor {
  Primary = "primary",
  Success = "success",
  Accent = "accent",
}

export enum IconPosition {
  Left = "left",
  Right = "right",
}

const typeStyles = {
  primary: "bg-teal-800 hover:bg-teal-700 text-gray-50",
  accent: "bg-red-300 hover:bg-red-400 text-red-900",
  success: "bg-green-600 hover:bg-green-700 text-gray-50",
};

export const Button = ({
  children,
  onClick,
  disabled,
  icon,
  iconPosition = IconPosition.Left,
  color = ButtonColor.Primary,
  fullWidth = false,
  type,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${fullWidth && 'w-full'} flex items-center justify-center space-x-2 px-6 py-2 rounded shadow transition-all duration-300 ease-in-out font-bold ${
        disabled
          ? `${typeStyles[color]} opacity-50 cursor-not-allowed`
          : typeStyles[color]
      }`}
      disabled={disabled}
      type={type}
    >
      {icon && iconPosition === IconPosition.Left && (
        <span className="mr-2">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === IconPosition.Right && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};
