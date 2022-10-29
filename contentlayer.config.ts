import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const defineDocHof = (typeName: string) =>
  defineDocumentType(() => ({
    name: typeName,
    contentType: 'mdx',
    filePathPattern: `**/*.mdx`,
    fields: {
      title: { type: 'string', required: true },
      date: { type: 'string', required: true },
      description: { type: 'string', required: true },
    },
  }));

const BlogPost = defineDocHof('Post');

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [BlogPost],
});
