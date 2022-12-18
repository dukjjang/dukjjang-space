import Animation from "./animation";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 진현덕입니다!
          <br className="hidden lg:inline-block" />
          소통하며 성장하는 신입 개발자입니다
        </h1>

        <p className="mb-8 leading-relaxed">
          가장 큰 가치는 사람들과 함께 하는데서 만들어진다고 생각합니다.
          <br />
          사람들과 좋은 관계를 맺고 소통하며 그안에서 멋진 결과를 만들어내는
          <br />
          것을 좋아합니다. 항상 더 나은 서비스를 만들기 위해 고민하고
          <br />
          노력하는 신입 개발자입니다. 주도적으로 일 할 수 있는 환경을
          선호합니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="inline-flex text-white dark:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg mt-20 lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
