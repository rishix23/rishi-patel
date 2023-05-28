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
                <div className="flex items-center justify-between px-4 py-2 border mb-3 bg-white rounded-md hover:bg-gray-100">
                  <div>{blog.blogName}</div>
                  <div className="flex items-center">
                    <div className="bg-gray-800 rounded-md hover:bg-gray-700 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </div>
                  </div>
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
