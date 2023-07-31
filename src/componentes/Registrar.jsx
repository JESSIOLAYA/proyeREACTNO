
import React, { useEffect, useState  } from 'react'

export const Registrar = () => {


    const obtenerRegistro =  ( )=> {
    var datos = localStorage.getItem("registroslogin");
    if(datos) {
        return JSON.parse(datos);
    }
    else{
        return[];
    }
}
    

const [registroslogin,setRegistrosLogin] = useState (obtenerRegistro());

const [titulo,setTitulo] = useState ("");
const [estilo,setEstilo] = useState ("");
const [tecnica,setTecnica] = useState ("");
const [precio,setPrecio] = useState ("");

const botonGuardar = (e) => {
      e.preventDefault();
      var miObjeto = {titulo,estilo,tecnica,precio}
      setRegistrosLogin([...registroslogin,miObjeto]);
      limpiarFormulario();
}

useEffect(()=> {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
})

const limpiarFormulario = (e) => {
     setTitulo("");
     setEstilo("");
     setTecnica("");
     setPrecio("");
}






    return (
    
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Formulario De Registro Datos Clientes
      <br/>
      <form id="miFormulario"  >
        <div className="row" style={{marginTop:20}}>

        <br/>


<br/>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Ingrese Nombre del Cliente" onchange = {(e) => setTitulo (e.target.value) } required  />
          </div>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="imagen" placeholder="Email"  required  />
          </div>

          <div className="col-6">
            <select className="form-select form-select-lg text-center"   onchange = {(e) => setEstilo (e.target.value) } required  >
              <option value="">    Tipo Identificacion    </option>
              <option value="Retrato">Cedula</option>
              <option value="Paisaje">Ruc</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>
        </div>
        
        <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Ingrese Identificacion" onchange = {(e) => setTitulo (e.target.value) } required  />
          </div>

        <div className="row" style={{marginTop:20}}>
          <div className="col-6">
            <select className="form-select form-select-lg text-center" onchange = {(e) => setTecnica (e.target.value) } required  >
              <option value="">Tipo Numero        </option>
              <option value="Óleo">Casa</option>
              <option value="Acrílico">Celular</option>
              
            </select>
          </div>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Ingrese Numero Telefono" onchange = {(e) => setTitulo (e.target.value) } required  />
          </div>



         
        </div>

        <br/>
        <br/>

        <div className="h3">
      Datos del Vehiculo 
      <br/>
      </div>

  <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Modelo" onchange = {(e) => setTitulo (e.target.value) } required  />
          </div>


          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Marca" onchange = {(e) => setTitulo (e.target.value) } required  />
          </div>
          
  <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Placa" onchange = {(e) => setTitulo (e.target.value) } required  />
          </div>


          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Nivel tanque de gasolina" onchange = {(e) => setTitulo (e.target.value) } required  />
          </div>

          
  <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Descricion del daño del Vehiculo" onchange = {(e) => setTitulo (e.target.value) } required  />
          </div>

          <br/>

<div className="h3">
Selección de servicios:
<br/>
</div>

<div className="row" style={{marginTop:20}}>
          <div className="col-6">
            <select className="form-select form-select-lg text-center" onchange = {(e) => setTecnica (e.target.value) } required  >
              <option value="">Tipo de Servicios</option>
              <option value="aceite">Cambio de Aceite</option>
              <option value="freno">Cambio de Frenos</option>
              <option value="alineacion">Alineación</option>
              <option value="balanceo">Balanceo</option>
              <option value="general">Diagnóstico general</option>
              <option value="sistema">Revisión sistema eléctrica</option>
              <option value="suspencion">Revisión de la suspensión</option>
            </select>
          </div>
          </div>

        <div className="row" style={{marginTop:20}}>
          <div className="col">
            <button className="btn btn-primary btn-lg" onClick={botonGuardar}>Guardar Datos</button>
          </div>
        </div>
      </form>
    </div>
            
  </div>

)

}