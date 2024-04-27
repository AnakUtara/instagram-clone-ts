import CreateModal from "./_components/CreateModal";
import ResponsiveNavWrapper from "./_components/ResponsiveNavWrapper";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ResponsiveNavWrapper>
      <CreateModal />
      {children}
    </ResponsiveNavWrapper>
  );
}
