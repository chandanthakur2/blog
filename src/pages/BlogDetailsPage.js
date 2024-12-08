import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams, Link } from 'react-router-dom';

const BlogDetailsPage = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/blog/${blogId}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((res) => {
                setBlog(res.data);
                console.log(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                toast.error(err.response.data.error);
            });
    }, [blogId]);

    return (
        <>
            {loading ? (<>Loading...</>) : (
                <div className="min-h-screen bg-gray-50 py-12 px-6">
                    <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
                        <div className="bg-white shadow-xl rounded-xl p-6">
                            <img
                                src={blog.coverImage}
                                alt={blog.title}
                                className="w-full h-64 object-cover rounded-md mb-6"
                            />
                            <h1 className="text-2xl font-bold text-gray-900 mb-4">{blog.title}</h1>
                            <p className="text-gray-700 text-sm leading-6">{blog.content}</p>
                        </div>
                    </div>
                </div>)}
        </>
    );
};

export default BlogDetailsPage;
