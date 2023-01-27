import DefaultTags from "../../components/DefaultTags";

export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <title>Writing | Dukjjang</title>
      <meta name="description" content="덕짱 블로그" />
      <DefaultTags />
    </>
  );
}
