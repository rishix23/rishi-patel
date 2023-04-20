import { useState, useEffect } from "react"
import axios from 'axios';

const Blogs = () => {
  const [blogName, setBlogName] = useState('');
  const [blogs, setBlogs] = useState('')

  const onChangeUsername = (e) => {
    setBlogName(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const blog = {
      blogName
    }
    console.log(blog);
    axios.post('http://localhost:5000/blogs/add', blog)
      .then(res => {
        console.log(res.data);
        // Add the new blog to the blogs state array
        setBlogs([...blogs, blog]);
      });


    setBlogName('');
  }

  useEffect(() => {
    axios.get('http://localhost:5000/blogs/')
      .then(response => {
        if (response.data.length > 0) {
          setBlogs(response.data);
        }
      })
      .catch(error => console.log(error));
  }, [blogName]);


  return (
    <>
      <h3>Create New Blog Post</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Blog: </label>
          <input type="text"
            required
            className="form-control"
            value={blogName}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Blog" className="btn btn-primary" />
        </div>
      </form>

      <h2>All Blogs</h2>
      <div className="blogList">
        {blogs.length > 0 && blogs.map((blog) => (
          <div>{blog.blogName}</div>
        ))}
      </div>


    </>
  )
}

export default Blogs