import ResponsiveNavWrapper from "./_components/ResponsiveNavWrapper";

export default function Template({ children }: { children: React.ReactNode }) {
  return <ResponsiveNavWrapper>{children}</ResponsiveNavWrapper>;
}
