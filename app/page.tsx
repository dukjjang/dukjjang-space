import { previewData } from "next/headers";
import Resume from "../ui/Resume";

const Home = () => {
  if (!previewData) return <div>not Data</div>;

  return (
    <main className="h-full w-full bg-background">
      <Resume />
    </main>
  );
};

export default Home;
