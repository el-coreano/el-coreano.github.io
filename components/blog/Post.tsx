import React, { ComponentType } from 'react';
import { Post } from 'contentlayer/generated';
import PageLayout from '../layout/PageLayout';

interface BlogPostProps {
  post: Post;
  mdx: ComponentType<unknown>;
}
const BlogPost = ({ post, mdx }: BlogPostProps) => {
  const MdxComp = mdx;
  return (
    <PageLayout metaData={{ title: post.title }}>
      <h1>{post.title}</h1>
      <MdxComp />
    </PageLayout>
  );
};

export default BlogPost;
