import axios from 'axios'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

const MyBlogPage = () => {
    useEffect(() => {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }

        axios.get("http://localhost:8080/api/blog/getAll", { headers: headers })
        .then((res) => {
            toast.success('Fetched all blogs');
            console.log(res.data);
        })
        .catch((err) => {
            toast.error("Sorry, something went wrong. Please try again later.");
            console.log("Error: ", err);
        })

    })
  return (
    <div>MyBlogPage</div>
  )
}

export default MyBlogPage