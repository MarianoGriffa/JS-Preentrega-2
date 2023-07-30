//Pre entrega 2

const paises = [
  { nombre: 'argentina', capital: 'Buenos Aires', codigoISO: 'ARS'}, 
  { nombre: 'bolivia', capital: 'Sucre', codigoISO: 'BOB' },  
  { nombre: 'brasil', capital: 'Brasilia', codigoISO: 'BRL' }, 
  { nombre: 'chile', capital: 'Santiago', codigoISO: 'CLP'},
  { nombre: 'colombia', capital: 'Bogotá', codigoISO: 'COP' }, 
  { nombre: 'costa Rica', capital: 'San Jose', codigoISO: 'CRI' },      
  { nombre: 'cuba', capital: 'La Habana', codigoISO: 'CUB' },      
  { nombre: 'ecuador', capital: 'Quito', codigoISO: 'USD' }, 
  { nombre: 'el salvador', capital: 'San Salvador', codigoISO: 'SLV' },      
  { nombre: 'guatemala', capital: 'Ciudad de Guatemala', codigoISO: 'GTM' },      
  { nombre: 'haiti', capital: 'Puerto Principe', codigoISO: 'HTI' },      
  { nombre: 'honduras', capital: 'Tegucigalpa', codigoISO: ' HND' },      
  { nombre: 'mexico', capital: 'Ciudad de Mexico', codigoISO: 'MX' },      
  { nombre: 'nicaragua', capital: 'Managua', codigoISO: 'NIC' },     
  { nombre: 'panama', capital: 'Panamá', codigoISO: 'PAN' },      
  { nombre: 'peru', capital: 'Lima', codigoISO: 'PEN' }, 
  { nombre: 'paraguay', capital: 'Asuncion', codigoISO: 'PYG' }, 
  { nombre: 'uruguay', capital: 'Montevideo', codigoISO: 'UYU'},
  { nombre: 'venezuela', capital: 'Caracas', codigoISO: 'VEF' } 
 ];           
   
  //Eligir pais
  function buscarPais() {
    let dato = prompt('Ingresa el pais que perteneces de America latina').trim().toUpperCase();    
         
    if (paises.find( pais => pais.nombre.toUpperCase() === dato)) { 
          console.log('Tu pais es: ' + dato);           
      } else {   
         console.log('No se encontro ningun Pais: ' + dato);   
      }     
  
    };                  

     //Agregar un nuevo pais 
    function agregarNuevoPais() {
      let nuevoPais =  prompt('Ingresa un nuevo pais que NO sea de america latina').trim(); 
      let nuevaCapital = prompt('Ingresa su capital oficial').trim();
      let nuevoCodigoIso = prompt('Ingresa su Codigo ISO').trim();     
      
       if( nuevoPais === '' || nuevaCapital === '' ||  nuevoCodigoIso === ''){     
         alert('Ingresa datos válidos');               
       }      
       else if( paises.find( p => p.nombre === nuevoPais)  ) {   
        alert('Incorecto, El pais NO debe pertenecer a America Latina');  
       }  
       else { 
        console.log('Nuevo Pais Ingresado: ' + nuevoPais + '' +  ' Capital: ' + '' + nuevaCapital + ' Codigo: ' + nuevoCodigoIso);       
       }    

      let paisAgregado = {
        nombre: nuevoPais,
        capital: nuevaCapital,
        codigoISO: nuevoCodigoIso.toUpperCase()       
      };   
          
      if (paises.some( p => p.nombre === paisAgregado.nombre)) {
        alert('El Pais existe');    
        return;       
      }  

        paises.push(paisAgregado);    
      
        console.log(paises);      

      }  
        
  
    buscarPais(); 
    agregarNuevoPais();  
  

 