import Link from "next/link";

export const TextBold: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold">{children}</span>
);

export const ListItemHeading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h2 className="font-2xl font-bold mt-4 mb-2 inline-block">{children}</h2>;

export const OrderedList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ol className="list-decimal list-inside my-4">{children}</ol>
);
export const UnorderedList: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <ul className="list-disc list-inside my-4">{children}</ul>;

export const StyledLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Link
    href={href}
    target="_blank"
    className="text-teal-700 hover:underline pointer"
  >
    {children}
  </Link>
);