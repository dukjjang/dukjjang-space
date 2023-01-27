import DefaultTags from "../components/DefaultTags";

export default function Head({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  return (
    <>
      <title>Dukjjang</title>
      <meta name="description" content="덕짱의 포트폴리오" />
      <DefaultTags />
    </>
  );
}
