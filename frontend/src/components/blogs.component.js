import React, { useState, useEffect } from "react";
import axios from "axios";
import editIcon from "../assets/svgs/editIcon.svg";
import trashIcon from "../assets/svgs/trashIcon.svg";

const baseURL = process.env.NODE_ENV === "production" ? "https://rishi-patel-server.onrender.com" : "http://localhost:5000";

const Blogs = () => {
  const [currentBlog, setCurrentBlog] = useState("");
  const [blogName, setBlogName] = useState("");
  const [blogs, setBlogs] = useState([]);

  // gets blog
  useEffect(() => {
    axios
      .get(`${baseURL}/blogs/`)
      .then((response) => {
        if (response.data.length > 0) {
          setBlogs(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, [blogName, blogs]);

  const onBlogNameChange = (e) => {
    setBlogName(e.target.value);
  };

  // adds blog
  const createBlog = (e) => {
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

  // updates blog
  const updateBlog = (blogToUpdate) => {
    console.log(blogToUpdate);
    axios.put(`${baseURL}/blogs/update/${blogToUpdate._id}`, blogToUpdate);

    setBlogs((prevBlogs) => {
      const updatedBlogs = prevBlogs.map((blog) => {
        if (blog._id === blogToUpdate._id) {
          return blogToUpdate;
        }
        return blog;
      });
      console.log(updatedBlogs);
      return updatedBlogs;
    });

    setCurrentBlog("");
  };

  // deletes blog
  const deleteBlog = (blogToDelete) => {
    console.log(blogToDelete);
    axios
      .delete(`${baseURL}/blogs/delete/${blogToDelete._id}`)
      .then((response) => {
        // Remove the deleted blog from the blogs array
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogToDelete._id));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handles input change
  const handleOnChange = (event) => {
    const { value } = event.target;
    setCurrentBlog((prevState) => ({
      ...prevState,
      blogName: value,
    }));
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
            <input type="text" id="blogName" required className="border border-gray-400 px-3 py-2 rounded" value={blogName} onChange={onBlogNameChange} />
          </div>
          <button type="submit" className="btn-custom" onClick={createBlog}>
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
                    <div className="flex justify-between">
                      <div>
                        <input
                          className="w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          type="text"
                          defaultValue={currentBlog.blogName}
                          onChange={handleOnChange}
                        />
                      </div>
                      <button className="btn-custom" onClick={() => updateBlog(currentBlog)}>
                        Update Blog
                      </button>
                      <button className="btn-custom" onClick={() => setCurrentBlog("")}>
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="text-lg font-medium">{blog.blogName}</div>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="dark:bg-gray-800 bg-gray-400 dark:hover:bg-gray-700 hover:bg-gray-300 rounded-md p-2 mr-2">
                      <img className="h-6 w-6" onClick={() => setCurrentBlog(blog)} src={editIcon} alt="edit" />
                    </div>
                    <div className="bg-blue-500 dark:text-blue-400 rounded-md p-2 mr-2">
                      <img className="h-6 w-6 dark:text-blue-400 stroke-white" onClick={() => deleteBlog(blog)} src={trashIcon} alt="delete" />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))
          ) : (
            <div className="text-gray-500">No blogs yet.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;
