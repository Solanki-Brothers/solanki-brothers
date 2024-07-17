import { HeroComponent, FeaturedNewsArticles } from "@/containers";

export default function Home() {
  return (
    <main className="h-full">
      <HeroComponent />
      <FeaturedNewsArticles />
    </main>
  );
}
