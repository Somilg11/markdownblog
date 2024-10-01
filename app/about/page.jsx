import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-6 bg-white text-zinc-950 dark:bg-zinc-950 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg leading-relaxed mb-6">
        Hey there! I&apos;m Somil Gupta, a passionate Full Stack Web Developer, 
        sharing my thoughts, projects, and ideas through this blog. 
        I love diving deep into topics like Nextjs, React, and Node,
        always striving to learn something new and share valuable insights.
      </p>
      <p className="text-lg leading-relaxed">
        When I&apos;m not working on my latest project or writing about tech, 
        you can find me learning something new in tech, or exploring Web3 and AI.
        Thanks for stopping by, and feel free to connect with me on social media!
        I&apos;m open to collaborate in projects, please feel free to contact at:
        <br />
        <span className="inline-flex gap-2 mt-2">
        <a
              href="https://www.instagram.com/somil_1101/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon"><Instagram/></Button>
              
              </a>
              <a
              href="mailto:gsomil93@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon"><Mail/></Button>
              
              </a>
              </span>
      </p>
    </div>
  );
};

export default About;
