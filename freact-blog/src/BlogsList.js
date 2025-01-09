const BlogsList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h4>Written by {blog.author}</h4>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogsList;