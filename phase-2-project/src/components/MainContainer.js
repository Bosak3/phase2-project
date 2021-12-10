import PersonalProfile from "./PersonalProfile"
import ProgrammerList from "./ProgrammerList"
import Matches from "./Matches"
import NavBar from "./NavBar"

import {useEffect, useState} from "react"

import {Route, Switch} from "react-router-dom"


function MainContainer() {
   
    const [mentorListArray, setMentorList] = useState([])//Working++
        // console.log("MentorListArray:", mentorListArray)

    const[myMatchesArray, setMatchesArray] =useState([])//working++
        console.log(myMatchesArray)

    
    const baseURL = "http://localhost:3004/mentor" 

    
    
    useEffect( //Working++
        
        () => {
            fetch(baseURL)
            .then(r=>r.json())
            .then(
                
                (fetchedMentors)=> {
               setMentorList(fetchedMentors)
            
            })
        },[])
            
            
    
    const addToMatches= (objToAdd) => {   //objToAdd - coming from click//Working++
        // console.log('IN MAINC', objToAdd)

        let checkForDup= myMatchesArray.find(
            (eachMatchObj) => {

                return ( eachMatchObj.id === objToAdd.id )

            })

        if(checkForDup === undefined){
        
            setMatchesArray([...myMatchesArray, objToAdd])
        }else{console.log("DUP")}

    }
    
    
    
    
    const removeFromMatches= (objToRemove) => {    ///Working++
        //filter for frontend
        console.log('IN MAINC', objToRemove.id)

        let newMatchesArray= myMatchesArray.filter(
            (eachMatchObj) => {

               return  objToRemove.id  !==  eachMatchObj.id 
        })

        setMatchesArray([...newMatchesArray])
    
    }
    
    
    
    
    
    const deleteFrontendBackend= (idOfObjToRemove) => {  //Working++
        
        
        let newMentorListArray= mentorListArray.filter(
            (eachMentorObj) => {

               return   eachMentorObj.id !==   idOfObjToRemove
        })

        setMentorList([...newMentorListArray])


        let newMatchesArray= myMatchesArray.filter(
            (eachMatchObj) => {

               return  eachMatchObj.id !==   idOfObjToRemove
        })
        setMatchesArray([...newMatchesArray])

        //backend delete request

        fetch(`${baseURL}/${idOfObjToRemove}`,
            {method: "DELETE"}
        )

    }

    







    return (
        <div>
            <NavBar/>
                <Switch>

                    <Route exact path="/programmerlist">
                        <ProgrammerList 
                            arrayToMap={mentorListArray}// Working+++
                            addToMatches={addToMatches}
                            deleteRequest={deleteFrontendBackend}// For Delete Fetch
                        />
                    </Route>

                    <Route exact path="/matches">
                        <Matches
                            arrayToMap={myMatchesArray}//Working++
                            removeFromMatchesFunction={removeFromMatches}
                            deleteRequest={deleteFrontendBackend}// For Delete Fetch
                        />
                        
                    </Route>
                    <Route exact path="/">
                        <PersonalProfile />
                    </Route >
                </Switch>
            
        </div>
    )
}

export default MainContainer