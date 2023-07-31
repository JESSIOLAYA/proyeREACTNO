import  React ,{useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Registrar } from "./Registrar"
import {Cliente } from  "./Cliente"
export const Menu = (props) => {


const[reg,setReg] = useState("");
const[cle,setcle] = useState("");

function cerrarSesion(){
    document.getelementeByid("caja_menu").style.display = "none";
    document.getElementById("form_login").style.display = "block";
    document.getElementById("txtusu").value = "";

    document.getElementById("txtpas").value = "";
    document.getElementById("txtusu").focus();


}

function op_registrar(){
    setReg ("1");
    setcle ("0");
}





function op_cliente(){
    setReg ("0");
    setcle ("1");
}


return (
    <>
        
    <div id="caja_menu" style={{textAlign:"left"}}>

    <strong className="h3">
      Bienvenido Usuario : { props.usu}
    </strong>
              
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop:20}}>
      <div className="container-fluid">

        <label className="navbar-brand  h5" href=" ">Menú Principal</label>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="" className="nav-link  h5  text-center"  onClick = {op_registrar}  >Registrar</NavLink>
            <NavLink to="" className="nav-link  h5  text-center" onClick = {op_cliente}   >Cliente</NavLink>
            <a className="nav-link  h5  text-center"  style={{color:"blue"}}  href=" " onClick={cerrarSesion} >Cerrar Sesión</a>
          </div>
        </div>
      </div>
    </nav>
  </div>

    { reg === "1"  && <Registrar/> }
    { cle === "1"  && <Cliente/> }

</>
  
)

}