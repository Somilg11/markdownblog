import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import OnThisPage from "@/components/onthispage";

const postsDirectory = path.join(process.cwd(), "content");

// Generate static params for dynamic routing
export async function generateStaticParams() {
  // Read markdown files from the directory
  const filenames = fs.readdirSync(postsDirectory);

  // Generate params for each markdown file
  return filenames.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

// Main component to render the markdown content
export default async function Page({ params }) {
  const filepath = path.join(postsDirectory, `${params.slug}.md`);

  if (!fs.existsSync(filepath)) {
    return {
      notFound: true,
    };
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  // Process markdown using remark and rehype
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: data.title })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot;{data.description}&quot;
      </p>
      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
        <p className="text-sm text-gray-500 mb-4">{data.date}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose dark:prose-invert"
      />
      <span>
        <OnThisPage htmlContent={htmlContent} />
      </span>
    </div>
  );
}
