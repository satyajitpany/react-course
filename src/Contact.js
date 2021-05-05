import React,{useState} from 'react'

export const Contact = (props) => {
    const [val,setVal]=useState("Anil");
    function test(e)
    {
        console.warn("Hello On click",e.target.value);
        setVal(e.target.value)
    }
    // useEffect(() => {
    //     console.warn("Check Props",props.name)
    //     },[])
    // useEffect(() => {
    //     console.warn("Props in update",props.name)
    //     },[props.name])        
    return (
        <div>
            <h1>Contact Us Component</h1>
            <input type="text" value={val} onChange={test}/>
            <button onClick={()=>alert(val)}>Click Me</button>        
        </div>
    )
}
