import DefaultTags from "../DefaultTags";

export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <DefaultTags />
      <title>Writing | Dukjjang</title>
      <meta name="description" content="덕짱 블로그" />
    </>
  );
}
