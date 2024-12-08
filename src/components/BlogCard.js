import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`}>
        <div className="bg-white shadow-xl rounded-xl p-4" >
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold text-gray-900">{blog.title}</h3>
      <p className="mt-2 text-gray-600 text-sm">
        {blog.content.length > 100 ? `${blog.content.substring(0, 100)}...` : blog.content}
      </p>
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Read More
        </button>
      </div>
    </div>
    </Link>
  );
};

export default BlogCard;
