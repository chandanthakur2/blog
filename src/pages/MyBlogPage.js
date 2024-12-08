import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import axios from 'axios';

const MyBlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Replace with API call to fetch blogs
    const fetchBlogs = async () => {
      axios.get('http://localhost:8080/api/blog/myBlogs', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
        .then((res) => {
            console.log(res.data)
            setBlogs(res.data)
        })
        .catch((err) => console.log(err));
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Blogs</h1>
          <p className="mt-2 text-sm text-gray-600">Explore our latest blogs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBlogPage;
