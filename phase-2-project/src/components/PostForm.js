import React, {useState} from 'react';

function PostForm({arrayToPOST}){

    // console.log("arrayToPost: ", arrayToPOST)

    const [newName, setNewName] = useState('')
    const [newImage, setNewImage] = useState('')
    const [newLocation, setNewLocation] = useState('')
    const [newLanguage, setNewLanguage] = useState('')
    const [newBio, setNewBio] = useState('')

    const [newProgrammerArray, setNewProgrammerArray] = useState( {
        name: newName,
        image: newImage,
        location: newLocation,
        language: newLanguage,
        bio: newBio
    })

    return(<>
        <form onSubmit={ (synthEvent) => {
            // synthEvent.preventDefault();

            let newProfileCard = {
                name: newName,
                image: newImage,
                location: newLocation,
                language: newLanguage,
                bio: newBio
            }

            fetch('http://localhost:3004/mentor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(newProfileCard)
            })
            .then(r => r.json())
            .then (console.log)

        setNewProgrammerArray([...{arrayToPOST}, newProfileCard])
        // setNewProgrammerArray([newProfileCard, ...{arrayToPOST}])
        setNewName('')
        setNewImage('')
        setNewLocation('')
        setNewLanguage('')
        setNewBio('')

        }} >
        <h1>Add a Programmer</h1>
        <label>Name:    </label>
        <input onChange={ (synthEvent) => {
            setNewName(synthEvent.target.value) 
            console.log(synthEvent.target.value)
        }} 
        value={newName}
        type="text"
        placeholder="Name"
        />
        <br></br>
        <label>Image URL:   </label>
        <input onChange={ (synthEvent) => {
            setNewImage(synthEvent.target.value) 
            console.log(synthEvent.target.value)
            
        }} 
        value={newImage}
        type="text"
        placeholder="Image URL"
        />
        <br></br>
        <label>Location:    </label>
        <input onChange={ (synthEvent) => {
            setNewLocation(synthEvent.target.value) 
            console.log(synthEvent.target.value)
        }} 
        value={newLocation}
        type="text"
        placeholder="City and State"
        />
        <br></br>
        <label>Programming Languages:   </label>
        <input onChange={ (synthEvent) => {
            setNewLanguage(synthEvent.target.value) 
            console.log(synthEvent.target.value)
        }} 
        value={newLanguage}
        type="text"
        placeholder="Languages"
        />
        <br></br>
        <label>Bio:    </label>
        <input onChange={ (synthEvent) => {
            setNewBio(synthEvent.target.value) 
            console.log(synthEvent.target.value)
        }} 
        value={newBio}
        type="text"
        placeholder="Bio"
        />
        <br></br>
        <button className="form-button" type="submit">Add Programmer</button>
            
        </form>

    </>)
}

export default PostForm;