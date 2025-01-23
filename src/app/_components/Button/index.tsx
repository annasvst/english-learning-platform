import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (arg: React.SyntheticEvent) => void;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  color?: ButtonColor;
  fullWidth?: boolean;
  size?: "md" | "lg";
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
  primary: "bg-teal-800 hover:bg-teal-700 text-teal-50",
  accent: "bg-red-200 hover:bg-red-300 text-red-900",
  success: "bg-green-600 hover:bg-green-700 text-green-50",
};

const sizeStyles = {
  md: "py-2 px-6",
  lg: "py-4 px-8",
}

export const Button = ({
  children,
  onClick,
  disabled,
  icon,
  iconPosition = IconPosition.Left,
  color = ButtonColor.Primary,
  fullWidth = false,
  size = 'md',
  type,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${fullWidth && 'w-full'} ${sizeStyles[size]} flex items-center justify-center space-x-2 rounded shadow transition-all duration-300 ease-in-out font-bold ${
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
