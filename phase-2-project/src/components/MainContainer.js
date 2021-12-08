import PersonalProfile from "./PersonalProfile"
import ProgrammerList from "./ProgrammerList"
import Matches from "./Matches"


import {useEffect, useState} from "react"


function MainContainer() {
   
    const [mentorListArray, setMentorList] = useState([])
    console.log("MentorListArray:", mentorListArray)

  

    useEffect(
        
        () => {
            fetch('http://localhost:3003/mentor')
            .then(r=>r.json())
            .then(
                
                (fetchedMentors)=> {


                    setMentorList(fetchedMentors)

            })
    
        }
    
    ,[])

    return (
        <div>
            <PersonalProfile />
            <ProgrammerList arrayToMap={mentorListArray} />
            <Matches />
        </div>
    )
}

export default MainContainer