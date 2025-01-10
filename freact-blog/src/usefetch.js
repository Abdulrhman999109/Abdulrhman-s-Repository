import { useState , useEffect } from "react";
const useFetch=(url)=>{

    const[Data,setData]= useState(null);
    const [ispandding, setispandding] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(url)
        .then(res => {
            if (!res.ok) { // error coming back from server
                throw Error('could not fetch the data for that resource');
              } 
              return res.json();
        })
        .then (data =>{
            setData(data);
            setispandding(false);
            setError(null);
        })
        .catch(err=>{
            setispandding(false);
            setError(err.message); 
        })
    },[url]); 
    return{Data , ispandding , error}
}

export default useFetch;