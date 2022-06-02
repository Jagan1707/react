import React,{useState} from "react";
import Style from './Reg.css'
import Reg from "../Parent/parent";
import Log from "../Parent/Child/child"
import axios from "axios";




const Register = ()=>{
    const [initialData , changdata] = useState( <Reg/> );    
    const data = ()=>{
    changdata(<Log/>);
    }

    
    return (<>
    <div className="sigin">
    <h1>Facebook</h1>
 
        <div className="container">
        <div className="Reg">
       {initialData}
         <br></br>
         <span>Have already an account ?</span><a href="#"  onClick={data}>Login here</a><br></br>       
             </div>
             </div>
        </div>
    </> 
    )
    
}

export default Register;