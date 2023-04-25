import React, {useState} from 'react'
import axios from 'axios'


function RandomData() {

    const [image,setImage] = useState('')
    const [name,setName] = useState('')
 const [email,setEmail] = useState('')
 const [phone, setPhone] = useState('')

function GetRandomData(){
    return axios.get("https://randomuser.me/api").then((result)=>{
        console.log(result.data.results[0])
        setImage(result.data.results[0].picture.large)
        setName(result.data.results[0].name.first + " " + result.data.results[0].name.last)
        setEmail(result.data.results[0].email)
        setPhone(result.data.results[0].phone)
    })
}
    return (
    <div>
        <button onClick={GetRandomData}>Get Random Data</button>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{phone}</p>
    </div>
  )
}

export default RandomData