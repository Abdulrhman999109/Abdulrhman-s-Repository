import { useEffect , useState } from "react";

import WorkoutDetails from '../component/WorkoutDetails';
const Home = () => {
    const [workouts , setworkouts] = useState(null)

    useEffect(()=>{
        const fetchworkouts = async ()=>{
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok){
                setworkouts(json)
            }
        }
        fetchworkouts()
    }, [])
    return ( 
        <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
    </div>
        
     );
}
 
export default Home;