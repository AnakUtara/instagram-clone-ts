import CreatePost from "./_components/CreatePost";
import ResponsiveNavWrapper from "./_components/ResponsiveNavWrapper";
import StoreProvider from "./provider/redux.provider";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <ResponsiveNavWrapper>
        <CreatePost />
        {children}
      </ResponsiveNavWrapper>
    </StoreProvider>
  );
}
