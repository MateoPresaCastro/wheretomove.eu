import LandingPage from "@/components/landing-page";
import getAllData from "@/lib/data";

export default async function Home() {
  const data = await getAllData();
  return <LandingPage data={data} />;
}
