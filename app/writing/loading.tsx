import SkeletonBlogList from "../../ui/SkeletonBlogList";

const Loading = () => {
  return (
    <div className="bg-background min-h-screen min-w-screen">
      <section className="h-fit pt-32 w-full lg:px-[180px] bg-background">
        <SkeletonBlogList />
      </section>
    </div>
  );
};

export default Loading;
