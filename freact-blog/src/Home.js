import { useState , useEffect } from "react"
import BlogsList from "./BlogsList"

const Home = () => {
    /*const handleClick=() => {
        console.log('hello , Blogers')
    }*/
    /*const handleClickag=(name) => {
        console.log('hello' + name)
    }*/
    /*const [name , setname] = useState('mario');
    const [age , setage] = useState(15);
    const handlechange=() => {
        setname('Khaled')
        setage(40)
    }*/
    //let name = 'Ahmed';
    /*const handlechange=() => {
        name='Abdulrhman'
        console.log(name)
    }*/
   const [blogs , setblogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }])

    const handleDelete =(id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setblogs(newBlogs)
    } 
    const [name , setName] = useState('mario');
    useEffect(() => {
        console.log('Name changed');
    },); 
    
    return ( 
        <div className="home">
            <BlogsList blogs = {blogs} title ='All Blogs' handleDelete={handleDelete} />
            {name}
            <button onClick={() => setName('Abdulrhman')}>change Name</button>
            {/* reuse componnent to other service */}
           {/*<BlogsList blogs = {blogs.filter(blog => blog.author === 'mario')}  title ='mario Blogs' />*/}
        </div>
     );
}
 
export default Home;