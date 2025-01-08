import { useState } from "react"

const Home = () => {
    const handleClick=() => {
        console.log('hello , programmers')
    }
    /*const handleClickag=(name) => {
        console.log('hello' + name)
    }*/
    const [name , setname] = useState('mario');
    const [age , setage] = useState(15);
    const handlechange=() => {
        setname('Khaled')
        setage(40)
    }
    //let name = 'Ahmed';
    /*const handlechange=() => {
        name='Abdulrhman'
        console.log(name)
    }*/
    
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>click me</button>
            <p>{name} is {age} years old</p>
            <button onClick={handlechange}>click me</button> 
        </div>
     );
}
 
export default Home;