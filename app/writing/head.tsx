import DefaultTags from "../shard/DefaultTags";

export default async function Head() {
  return (
    <>
      <DefaultTags />
      <title>Writing | Dukjjang</title>
      <meta name="description" content="덕짱 블로그" />
      <meta property="og:title" content="Dukjjang's Blog" />
      <meta property="og:description" content="덕짱의 블로그" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={"https://www.dukjjang.space/writing"} />
      <meta
        property="og:image"
        content={
          "https://user-images.githubusercontent.com/102455275/217112434-0eda110f-b085-438e-bc25-831dc1886a93.png"
        }
      />
      <meta property="og:article:author" content="Dukjjang" />
    </>
  );
}
