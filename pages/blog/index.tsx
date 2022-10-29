import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';

import PageLayout from '../../components/layout/PageLayout';
import BlogThumbnail from '../../components/blog/Thumbnail';

export const getStaticProps = async () => {
  return {
    props: {
      posts: allPosts,
    },
  };
};

const BlogMain = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout metaData={{ title: 'blog main' }}>
      <h1>blog main</h1>
      {posts.map((post) => (
        <BlogThumbnail key={post._id} post={post} />
      ))}
    </PageLayout>
  );
};

export default BlogMain;
