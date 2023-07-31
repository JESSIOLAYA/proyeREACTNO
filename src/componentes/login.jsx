import React ,{useState }from 'react'
import {Menu} from './Menu'


export const Login = () => {

       const[milogin,setmilogin] = useState("false");
       const[usu,setUsu] = useState("");
       const[pas,setpass] = useState("");

       function iniciarSesion(e){
        e.preventDefault();
        var txtusu = document.getElementById("txtusu").value;
         var txtpass = document.getElementById("txtpass").value;
if(txtusu.length===0 || txtpass.length ===0 )
{
    alert("Complete los datos faltantes");
}else{
        if(usu === "admin" && pas === "123" ) {
            setmilogin("true")
            document.getElementById("form_login").style.display = "none";
        }else{
            setmilogin("false");
            alert("Error de usuario");
            document.getElementById("txtusu").value = "";
            document.getElementById("txtpas").value = "";
            document.getElementById("txtusu").focus();
        }
    }
}

return (
    <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
        
    <form id="form_login">
        <div>
            <h1 style={{color:"blue", textalign:"center"}}>LOGIN</h1>
            <label htmlFor="txtusu"><strong>Username</strong></label>
            <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control" onChange={ (e)=> setUsu(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="txtpass"><strong>Password</strong></label>
            <input type="password" id="txtpass" style={{textAlign:"center"}} className="form-control"  onChange={ (e)=> setpass(e.target.value)}  required/>
        </div><br/>
        <input type="submit" onClick = {iniciarSesion} className="btn btn-primary" value="Login"/>
    </form>

    { milogin === "true" && <Menu usu={usu}/> }
     

</div>
)

}