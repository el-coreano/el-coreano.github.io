import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

import BlogPost from '../../components/blog/Post';

interface BlogPostUrlPath {
  params: {
    slug: string;
  };
}
export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: BlogPostUrlPath) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw Error('BlogPost Not found');

  return {
    props: {
      post,
    },
  };
};

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <BlogPost post={post} mdx={useMDXComponent(post.body.code)} />;
};

export default Post;
