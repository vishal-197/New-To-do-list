import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';



function InputLi(){

    const [value,setInput] = useState(''); 
    const [values, setValues] = useState([]);
    const [edit, setEditing] = useState(false);
    const [complet, setComplet]= useState([]);

 
    function handlecchange(e){
        setInput(e.target.value)
    }

    function submitForm(e){
        e.preventDefault();
        if(edit=== false){
            setValues([...values, value])
        }
        else{
            console.log ("hello")
          values[edit] = value
          setEditing (false)
        
        }
        setInput('');
    }
    // console.log(input)
    // console.log(data)

    function handelDelete(e, index){
        e.preventDefault()
        setValues(values.filter((task, id)=>{
            return id !== index
        }))
    }
    function handelEdit(e,index){
        e.preventDefault()
        setInput(values[index]);
        setEditing(index);

    }
    function handelComplet(e,index){
        e.preventDefault()
        setComplet([...complet, index])

    }
    
    
    return(
        <>

    <form onSubmit={submitForm}>
        <h1> ToDo List</h1>
     <input type="text" placeholder="Enter your name" onChange={handlecchange} value= {value} />
     <button onClick={submitForm}>Submit</button>
        
     <div>
        <ul>
        {
            values.map((task, index) => {
                return(
                    <li className={complet.includes(index)?"completed":""} key={index}><a href="" onClick={(e)=> handelDelete(e,index)}>{task}<DeleteIcon/></a>
                        <a href="" onClick={(e)=> handelEdit(e,index)}><EditIcon/></a>
                        <a href="" onClick={(e)=> handelComplet(e,index)}>< CheckIcon/></a>
                    </li>
                    )
                    
                })
        }
        </ul>
     </div>
     </form>
     </>

    )
}


export default InputLi

