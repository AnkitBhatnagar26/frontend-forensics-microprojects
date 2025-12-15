import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ mode?: "before" | "after" }>;
}) {
  const { mode = "before" } = await searchParams;
  const after = mode === "after";

  return (
    <main style={{ position: "relative", height: "80vh" }}>
      <Image
        src="/hero.jpg"
        alt="Hero"
        fill
        priority={after}
        fetchPriority={after ? "high" : "auto"}
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
    </main>
  );
}
