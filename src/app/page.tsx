import Link from "next/link";
import flagsmith from "@/utils/flagsmith";

export const revalidate = 0;

export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();
  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus ipsam quidem illo nemo, aut, est adipisci doloribus, eligendi rem alias! Ullam voluptatibus quibusdam minus facilis sunt nesciunt, deleniti quas!</p>
      </div>
      <Link href="/about">About</Link>
      <br />

      {flags.isFeatureEnabled("search") && <input placeholder="Search" />}
    </main>
  );
}
