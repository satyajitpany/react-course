import React,{useState} from 'react'

export const CreateUser = () => {
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[address,setAddress]=useState("");
    function makeUser(){
        let data={name,age,address};
        console.log(data);
    }
    return (
        <div>
           <h1>Make A New User</h1> 
           <input type="text" name="username" onChange={(e)=>setName(e.target.value)} value={name} />
           <br/>
           <input type="text" name="age" onChange={(e)=>setAge(e.target.value)} value={age} /><br/>
           <input type="text" name="adderss" onChange={(e)=>setAddress(e.target.value)} value={address} /><br/>
        <button onClick={makeUser}>CreateUser</button>
        </div>
    )
}
