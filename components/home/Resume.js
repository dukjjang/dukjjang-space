import UnderLine from "../UnderLine";
export default function Resume() {
  return (
    <main className=" w-full px-5 md:px-20 lg:px-56 bg-white dark:bg-[#0E141B]">
      <section className=" w-full bg-white h-[1000px] dark:bg-[#0E141B] ">
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
