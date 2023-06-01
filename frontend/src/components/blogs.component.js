import React, { useState, useEffect } from "react";
import axios from "axios";
import editIcon from "../assets/svgs/editIcon.svg";

const baseURL = process.env.NODE_ENV === "production" ? "https://rishi-patel-server.onrender.com" : "http://localhost:5000";

const Blogs = () => {
  const [currentBlog, setCurrentBlog] = useState("");
  const [blogName, setBlogName] = useState("");
  const [blogs, setBlogs] = useState([]);

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

  const editBlog = (blog) => {
    setCurrentBlog(blog);
  };

  const handleOnChange = (event) => {
    const { value } = event.target;
    setCurrentBlog((prevState) => ({
      ...prevState,
      blogName: value,
    }));
  };

  const saveEdit = () => {
    console.log(currentBlog);
    setBlogs((prevBlogs) => {
      const updatedBlogs = prevBlogs.map((blog) => {
        if (blog._id === currentBlog._id) {
          return currentBlog;
        }
        return blog;
      });
      console.log(updatedBlogs);
      return updatedBlogs;
    });

    setCurrentBlog("");
  };

  return (
    <>
      <div className="mx-2">
        <h3 className="text-2xl font-semibold">Create New Blog Post</h3>
        <div className="mt-4">
          <div className="flex items-center mb-4">
            <label htmlFor="blogName" className="mr-2 text-gray-700">
              Blog:
            </label>
            <input type="text" id="blogName" required className="border border-gray-400 px-3 py-2 rounded" value={blogName} onChange={onChangeUsername} />
          </div>
          <button type="submit" className="btn-custom" onClick={onSubmit}>
            Create Blog
          </button>
        </div>

        <h2 className="text-2xl font-semibold mt-8">All Blogs</h2>
        <div className="blogList">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center justify-between px-4 py-2 border mb-3 bg-white rounded-md hover:bg-gray-100">
                  {currentBlog && currentBlog._id === blog._id ? (
                    <>
                      <div>
                        <input type="text" defaultValue={currentBlog.blogName} onChange={handleOnChange} />
                      </div>
                      <button className="btn-custom" onClick={saveEdit}>
                        Save
                      </button>
                    </>
                  ) : (
                    <div>{blog.blogName}</div>
                  )}
                  <div className="flex items-center">
                    <div className="dark:bg-gray-800 bg-gray-400 dark:hover:bg-gray-700 hover:bg-gray-300 rounded-md p-1">
                      <img className="h-4 w-4 dark:text-white text-black" onClick={() => editBlog(blog)} src={editIcon} alt="edit"></img>
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
