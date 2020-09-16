import React, { useEffect, useState } from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './componentes/common/Header';
import Inicio from './componentes/principal/Inicio';
import ListarProductos from './componentes/productos/ListarProductos';
import AgregarProductos from './componentes/productos/AgregarProductos';
import EditarProductos from './componentes/productos/EditarProductos';
import PaginaError from './componentes/error404/PaginaError';
import Footer from './componentes/common/Footer';
import Banner from './componentes/common/Banner'

function App() {
  const [productos, setProductos] = useState([]);
  const [recargarProducto, setRecargarProducto] = useState(true);

  useEffect(()=>{
    if(recargarProducto){
        //  llamar a la api
        consultarApi();
        setRecargarProducto(false);
    }
    
  },[recargarProducto]);

  const consultarApi = async()=>{
    try{
     //  operacion get
       const respuesta = await fetch('http://localhost:4002/api/cafeteria')
       console.log(respuesta);
       const resultado = await respuesta.json();
       console.log(resultado);
       // guardar datos en  el  state
       setProductos(resultado)

    }catch(error){
      console.log(error)
    }
  }


  return (
    <>
    <Router >
       <Header/>
       <Banner/>
      <Switch>
        <Route exact path='/'>
          <Inicio/>
        </Route>
        <Route exact path='/productos'>
         <ListarProductos
             productos = {productos}
             setRecargarProducto={setRecargarProducto}
         />
        </Route>
        <Route exact path='/productos/nuevo'>
          <AgregarProductos
               setRecargarProducto={setRecargarProducto}
          />
        </Route>
        <Route exact path='/productos/editar/:id' render={(props)=> {
                 // Tomar el id de la ruta
                 const parametro = props.match.params.id
                 // buscar el producto a editar en el arreglo producto
                 const productoBuscado = productos.find( (item) => item._id === parametro)
                 console.log(productoBuscado)
                 // dibujo el componente
                 return   <EditarProductos  
                              producto={productoBuscado}
                              setRecargarProducto={setRecargarProducto}
                           />
               }}>
        </Route>         
        <Route exact path='*' > 
            <PaginaError/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
