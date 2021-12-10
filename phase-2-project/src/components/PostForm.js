import React, {useState} from 'react';

function PostForm({arrayToPOST}){

    console.log("arrayToPost: ", arrayToPOST)

    const [newName, setNewName] = useState('')
    const [newImage, setNewImage] = useState('')
    const [newLocation, setNewLocation] = useState('')
    const [newLanguage, setNewLanguage] = useState('')

    const [newProgrammerArray, setNewProgrammerArray] = useState( {
        name: newName,
        image: newImage,
        location: newLocation,
        language: newLanguage
    })



    return(<>
        <form onSubmit={ (synthEvent) => {
            // synthEvent.preventDefault();

            let newProfileCard = {
                name: newName,
                image: newImage,
                location: newLocation,
                language: newLanguage
            }

            fetch('http://localhost:3004/mentor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(newProfileCard)
            })
            .then(r => r.json())
            .then (console.log)

        setNewProgrammerArray([...arrayToPOST, newProfileCard])
        setNewName('')
        setNewImage('')
        setNewLocation('')
        setNewLanguage('')




        }} >
        <label>Name</label>
        <input onChange={ (synthEvent) => {
            setNewName(synthEvent.target.value) 
            console.log(synthEvent.target.value)
        }} 
        value={newName}
        placeholder="Name"
        />
        <label>Image URL</label>
        <input onChange={ (synthEvent) => {
            setNewImage(synthEvent.target.value) 
            console.log(synthEvent.target.value)
        }} 
        value={newImage}
        placeholder="Image URL"
        />
        <label>Location</label>
        <input onChange={ (synthEvent) => {
            setNewLocation(synthEvent.target.value) 
            console.log(synthEvent.target.value)
        }} 
        value={newLocation}
        placeholder="City and State"
        />
        <label>Programming Languages</label>
        <input onChange={ (synthEvent) => {
            setNewLanguage(synthEvent.target.value) 
            console.log(synthEvent.target.value)
        }} 
        value={newLanguage}
        placeholder="Programming Languages"
        />
        <button type="submit">Add Programmer</button>
            
        </form>

    </>)
}

export default PostForm;