import CreatePost from "./_components/CreatePost";
import ResponsiveNavWrapper from "./_components/ResponsiveNavWrapper";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ResponsiveNavWrapper>
      <CreatePost />
      {children}
    </ResponsiveNavWrapper>
  );
}
