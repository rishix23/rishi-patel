import React, { useState, useEffect } from "react";
import axios from "axios";

let baseURL;
if (process.env.NODE_ENV === "production") {
  baseURL = "https://rishi-patel-server.onrender.com"; // production URL
} else {
  baseURL = "http://localhost:5000";
}

console.log(`Environment is: ${process.env.NODE_ENV}`);
console.log(`Base URL is: ${baseURL}`);

const Blogs = () => {
  const [blogName, setBlogName] = useState("");
  const [blogs, setBlogs] = useState("");

  const onChangeUsername = (e) => {
    setBlogName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const blog = {
      blogName,
    };
    console.log(blog);
    axios.post(`${baseURL}/blogs/add`, blog).then((res) => {
      console.log(res.data);
      // add the new blog to the blogs state array
      setBlogs([...blogs, blog]);
    });
    setBlogName("");
  };

  useEffect(() => {
    axios
      .get(`${baseURL}/blogs/`)
      .then((response) => {
        if (response.data.length > 0) {
          setBlogs(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, [blogName]);

  return (
    <>
      <div className="mx-2">
        <h3 className="text-2xl font-semibold">Create New Blog Post</h3>
        <div className="mt-4">
          <div className="flex items-center mb-4">
            <label
              htmlFor="blogName"
              className="mr-2 text-gray-700">
              Blog:
            </label>
            <input
              type="text"
              id="blogName"
              required
              className="border border-gray-400 px-3 py-2 rounded"
              value={blogName}
              onChange={onChangeUsername}
            />
          </div>
          <button
            type="submit"
            className="btn-custom"
            onClick={onSubmit}>
            Create Blog
          </button>
        </div>

        <h2 className="text-2xl font-semibold mt-8">All Blogs</h2>
        <div className="blogList">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <React.Fragment key={index}>
                <div className="border border-gray-300 rounded px-4 py-2 mb-2">
                  {blog.blogName}
                  <div className="flex-col">button</div>
                </div>
              </React.Fragment>
            ))
          ) : (
            <div>No blogs yet.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;
