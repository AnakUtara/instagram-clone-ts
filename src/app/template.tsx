import MainNav from "./_components/MainNav";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col sm:flex-row">
      {children}
      <MainNav />
    </main>
  );
}
