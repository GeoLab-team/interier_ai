import Header from "./shared/header/components/composite/Header";
import Hero from "./features/landing/components/composite/Hero";
import Interior from "./features/landing/components/composite/Interior";
import RecentDesigns from "./features/landing/components/composite/RecentDesigns";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#FEF8F1]">
      <Header />

      <main>
        <Hero />
        <Interior />
        <RecentDesigns />
      </main>
    </div>
  );
}
