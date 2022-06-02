import React,{useState} from "react";
import axios from "axios";

const Title = () =>{
     
    const[name,nameData] = useState()
    const[password,passwordData] = useState();

    const postData = ()=>{
        console.log(name);
        console.log(password);
        axios.post("http://192.168.29.139:7000/api/v1/login",{name,password}).then(result=>{
        console.log("result",result);
       console.log({result})
    }).catch(err=>{
        console.log(err.message);
    })
  }


    return(
        <> 
            <span>Login</span>
        <form>   
        <br></br>
            <input type="text" placeholder="userName" name="name" onChange={(val)=>nameData(val.target.value)} /><br></br>
            <input type="text" placeholder="password" name="password" onChange={(val)=>passwordData(val.target.value)} /><br></br>
            <button type="submit" onClick={postData}>LOG IN</button><br></br>
            <a href="">Forget password</a>
            <br></br><br></br>
            <a href="">Create New Account</a><br></br><br></br>
            <span>Or login with</span><br></br>
            
        </form>
        <br></br>
        <div className="img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" width="40"></img>
        <img src="https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png" width="40"></img>
        </div>
    

        </>
    )
}

export default Title