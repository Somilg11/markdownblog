import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const dirContent = fs.readdirSync("content", "utf-8");

const blogs = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

// const blogs = [
//   {
//     title: 'First Blog',
//     description: 'This is the first blog description.',
//     slug: 'first-blog',
//     date: '2023-10-01',
//     author: 'John Doe',
//     image: '/typescript.webp'
//   },
//   {
//     title: 'Second Blog',
//     description: 'This is the second blog description.',
//     slug: 'second-blog',
//     date: '2023-10-02',
//     author: 'Jane Doe',
//     image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//   },
//   {
//     title: 'Second Blog',
//     description: 'This is the second blog description.',
//     slug: 'second-blog',
//     date: '2023-10-02',
//     author: 'Jane Doe',
//     image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg'
//   },
//   // Add more blog objects here
// ];

/**
 * Blog component that renders a list of blog posts.
 * Each blog post includes an image, title, description, author, date, and a link to the full post.
 *
 * @returns {JSX.Element} The rendered blog component.
 */
const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Main heading for the blog section */}
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      {/* Grid layout for blog posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden dark:border-2"
          >
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle className="text-xl font-semibold">
                {blog.title}
              </AlertTitle>
              <AlertDescription>
                {blog.description}
                <div>
                  <div className="text-sm  mb-4 text-zinc-500">
                    <span>- by {blog.author}</span> |{" "}
                    <span>
                      {new Date(blog.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Link to the full blog post */}
                  <Link
                    href={`/blogpost/${blog.slug}`}
                    className={buttonVariants({ variant: "outline" })}
                  >
                    Click here
                  </Link>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
