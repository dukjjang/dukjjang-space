import DefaultTags from "./shard/DefaultTags";

export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <title>Dukjjang</title>
      <meta name="description" content="덕짱의 공간" />
      <meta property="og:title" content={"Dukjjang"} />
      <meta property="og:description" content="덕짱의 포트폴리오 & 블로그" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={"https://www.dukjjang.space"} />
      <meta
        property="og:image"
        content={
          "https://user-images.githubusercontent.com/102455275/217112537-ed304a0b-74a5-45de-95b6-b6b7f6b020e8.png"
        }
      />
      <meta property="og:article:author" content="Dukjjang" />
      <DefaultTags />
    </>
  );
}
