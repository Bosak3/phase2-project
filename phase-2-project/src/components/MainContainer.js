import PersonalProfile from "./PersonalProfile"
import ProgrammerList from "./ProgrammerList"
import Matches from "./Matches"



import {useEffect, useState} from "react"


function MainContainer() {
   
    const [mentorListArray, setMentorList] = useState([])
    console.log("MentorListArray:", mentorListArray)

    const[myMatchesArrary, setMatchesArray] =useState([])
    console.log(myMatchesArrary)
  
    const addToMyMatches = (clickedMentor) => {
        setMatchesArray([...myMatchesArrary, clickedMentor])
    }


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

            <ProgrammerList 
                arrayToMap={mentorListArray} 
                addMentorMatches={addToMyMatches}
            />

            <Matches
                mentorArrayToMap={mentorListArray}
                addingMentorsToMatches={addToMyMatches}
            
            />
        </div>
    )
}

export default MainContainer