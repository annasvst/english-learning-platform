import { ReactNode } from 'react';

interface FormErrorProps {
  children: ReactNode;
}

export const FormError = ({ children }: FormErrorProps) => {
  return (
    <div>
      <p className="text-sm text-red-800 my-2">{children}</p>
    </div>
  );
}
