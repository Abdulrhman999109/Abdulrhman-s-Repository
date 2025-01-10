import BlogsList from "./BlogsList"
import useFetch from "./usefetch";

const Home = () => {
    
    const {Data : blogs , ispandding , error} =useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { ispandding && <div> loading...</div>}
            {blogs && <BlogsList blogs = {blogs}/>}
            {/* reuse componnent to other service */}
           {/*<BlogsList blogs = {blogs.filter(blog => blog.author === 'mario')}  title ='mario Blogs' />*/}
        </div>
     );
}
 
export default Home;