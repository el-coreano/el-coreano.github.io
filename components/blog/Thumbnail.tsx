import { Post } from 'contentlayer/generated';
import Link from 'next/link';
import { makeUrlPath } from '../../utils/index';

interface BlogThumbnailProps {
  post: Post;
}
const BlogThumbnail = ({ post }: BlogThumbnailProps) => {
  const {
    _raw: { flattenedPath: slug },
    title,
    description,
  } = post;

  return (
    <Link href={makeUrlPath('blog', slug)} passHref>
      <div>{title}</div>
      <div>{description}</div>
    </Link>
  );
};

export default BlogThumbnail;
