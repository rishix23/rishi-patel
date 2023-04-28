// import { useState, useEffect } from "react"
// import axios from 'axios';

// // let baseURL = 'http://localhost:5000'; // default for development
// console.log(`The env is: ${process.env.NODE_ENV}`)

// let baseURL = 'https://jade-liger-eed5fd.netlify.app/api'; // default for development

// // if (process.env.NODE_ENV === 'production') {
// //   baseURL = 'https://jade-liger-eed5fd.netlify.app/api'; // production URL
// // }

// const Blogs = () => {
//   const [blogName, setBlogName] = useState('');
//   const [blogs, setBlogs] = useState('')

//   const onChangeUsername = (e) => {
//     setBlogName(e.target.value);
//   }

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const blog = {
//       blogName
//     }
//     console.log(blog);
//     axios.post(`${baseURL}/blogs/add`, blog)
//       .then(res => {
//         console.log(res.data);
//         // Add the new blog to the blogs state array
//         setBlogs([...blogs, blog]);
//       });


//     setBlogName('');
//   }

//   useEffect(() => {
//     axios.get(`${baseURL}/blogs/`)
//       .then(response => {
//         if (response.data.length > 0) {
//           setBlogs(response.data);
//         }
//       })
//       .catch(error => console.log(error));
//   }, [blogName]);


//   return (
//     <>
//       <h3>Create New Blog Post</h3>
//       <form onSubmit={onSubmit}>
//         <div className="form-group">
//           <label>Blog: </label>
//           <input type="text"
//             required
//             className="form-control"
//             value={blogName}
//             onChange={onChangeUsername}
//           />
//         </div>
//         <div className="form-group">
//           <input type="submit" value="Create Blog" className="btn btn-primary" />
//         </div>
//       </form>

//       <h2>All Blogs</h2>
//       <div className="blogList">
//         {blogs.length > 0 && blogs.map((blog) => (
//           <div>{blog.blogName}</div>
//         ))}
//       </div>


//     </>
//   )
// }

// export default Blogs