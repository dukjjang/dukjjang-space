import UnderLine from "../shared/UnderLine";
import Waves from "./Waves";

export default function Resume() {
  return (
    <main className=" h-full w-full bg-white dark:bg-[#0E141B]">
      <Waves />
      <section className=" px-5 lg:px-56 w-full bg-white h-[1000px] dark:bg-[#0E141B] ">
        <h1 className=" w-full text-[30px] md:text-4xl lg:text-6xl font-bold">
          안녕하세요,{" "}
          <span className="relative z-20">
            진현덕 <UnderLine />
          </span>{" "}
          입니다
          <span className="text-[#C3FA07]">.</span>
        </h1>
      </section>
    </main>
  );
}
