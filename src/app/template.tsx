import MainNav from "./_components/MainNav";
import MobileHeader from "./_components/MobileHeader";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col sm:flex-row">
      <MobileHeader />
      {children}
      <MainNav />
    </main>
  );
}
