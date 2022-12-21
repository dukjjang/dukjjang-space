import Link from "next/link";
export default function Resume() {
  return (
    <main className=" w-full px-5 md:px-20 lg:px-40 bg-white dark:bg-[#0E141B]">
      <section className=" w-full bg-white h-[1000px] dark:bg-[#0E141B] ">
        <h1 className=" w-full text-[30px] md:text-4xl lg:text-6xl font-bold">
          안녕하세요,{" "}
          <span className=" relative z-20">
            진현덕{" "}
            <span className="absolute h-3 z-[-1] w-20 md:w-24 lg:w-40 bottom-[0px] lg:bottom-[10px] left-[0px] bg-[#C3FA07]"></span>
          </span>{" "}
          입니다
          <span className="text-[#C3FA07]">.</span>
        </h1>
      </section>
    </main>
  );
}
