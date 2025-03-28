import { ReactNode } from "react";
import { AnswersMissingDialog } from "./AnswersMissingDialog";

interface TestPageProps {
  title: string;
  cta: ReactNode;
  errorDilogOpen: boolean;
  setErrorDialogOpen: (open: boolean) => void;
  children: ReactNode;
}
export const TestPage: React.FunctionComponent<TestPageProps> = ({
  title,
  cta,
  errorDilogOpen,
  setErrorDialogOpen,
  children,
}) => {
  return (
    <>
      <div className="min-h-screen p-8 md:p-20 bg-gradient-to-b from-gray-50 to-gray-200">
        <main className="max-w-6xl mx-auto">
          <h1 className="text-8xl font-semibold tracking-tight">{title}</h1>
          {children}

          <div className="mt-8 flex justify-center">{cta}</div>
        </main>
      </div>
      <AnswersMissingDialog
        open={errorDilogOpen}
        setOpen={setErrorDialogOpen}
      />
    </>
  );
};
