import React from "react";
import blog1 from "../assets/blog1.png";
const blogData = [
  {
    id: 1,
    title: "What Makes UI UX Design London Stand Out in the Global Market?",
    category: "Subscription: UI/UX",
    date: "04/14/2025",
    image: blog1,
  },
  {
    id: 2,
    title: "How to Choose the Best Agency for Ecommerce Web Design London?",
    category: "E-commerce",
    date: "04/10/2025",
    image: blog1,
  },
  {
    id: 3,
    title: "What Role Do AI Designers Play in an AI Design Company’s Success?",
    category: "AI Design",
    date: "04/06/2025",
    image: blog1,
  },
];

const BlogPosts = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center p-4 min-h-screen">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full mb-4">
        Blog Posts
      </button>
      <h1 className="text-2xl font-bold mb-6 text-center">
        From Trending Topics To Fundamentals: Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {blogData.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md p-4 transition hover:shadow-lg"
          >
            <img
              src={post.image}
              alt={`Illustration of ${post.category}`}
              className="rounded-t-lg mb-4"
            />
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>{post.category}</span>
              <span>{post.date}</span>
            </div>
            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">
              Read Full Article
            </button>
          </div>
        ))}
      </div>
      <button className="bg-red-500 text-white px-6 py-3 rounded-full mt-6 flex items-center">
        <i className="fas fa-arrow-right mr-2" />
        View All Blogs
      </button>
    </div>
  );
};

export default BlogPosts;
