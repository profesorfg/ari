class menuprincipal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

     <input type="checkbox" id="check__menu">
                <label for="check__menu" id="label__check">
                   <img class="icon__menu" src="../imagenes/icono.png"/>
                </label>    
  <ul class="menu menu_ul"> 
   <li> <a href="../index.html" >Inicio</a></li> 
 <li> <a href="../webRobotica/robotica.html" >Robotica</a></li> 
   
  
     
   

<li> <a href="#">Automatismos</a> 
    <ul>
       <li>   <a href="../webAutomatismos/cableados.html">Cableados</a> </li> 
        <li>   <a href="../webAutomatismos/neumaticos.html">Neumáticos</a> </li>    
    </ul>
</li>

    <li> <a href="#" >Autómatas</a> 
      			 <ul> 
           			<li> <a href="../webAutomatas/programados.html">S7-200</a> </li> 
           			<li> <a href="../webAutomatas/logo.html">LOGO</a> </li> 
           			<li> <a href="../webAutomatas/tiaportal.html">TIA-PORTAL</a> </li> 
      			</ul>  
   		  </li> 
        
   

   <li> <a href="#" >Mecatrónica</a> 
       <ul> 
   		 
           <li> <a href="../webMotores/variadores.html">variador</a> </li> 
           <li> <a href="../webMotores/motores.html">Motores</a> </li> 
           <li> <a href="../webMotores/trafo_practicas.html">Transformador</a> </li> 
       </ul>  
   </li> 

 
<li> <a href="../webenlaces/enlaces.html">Enlaces</a></li> 
   <li> <a href="#">Varios</a>
       <ul> 
          <li> <a href="../webInterior/interior.html" >Interior</a></li>  
          <li> <a href="../webDomotica/Domotica.html">Domotica</a> </li> 
          <li> <a href="../web3d/3d.html">Impresión 3D</a></li> 
          <li> <a href="../arduino/arduino_curso.html">Arduino</a></li> 
          <li> <a href="../webRenovables/renovables.html" >Renovables</a></li>
          <li> <a href="https://cifpmedinadelcampo.es/iea/" >CIFP Electricidad</a></li> 
        </ul>  
   </li> 
 </ul>



    `;
    }
}

window.customElements.define('menu-principal', menuprincipal);









class menuprincipalindex extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
 
     <input type="checkbox" id="check__menu">
                <label for="check__menu" id="label__check">
                   <img class="icon__menu" src="imagenes/icono.png"/>
                </label>    
  <ul class="menu menu_ul"> 
   <li> <a href="index.html" >Inicio</a></li> 
   
 <li> <a href="webRobotica/robotica.html" >Robotica</a></li> 

 <li> <a href="#">Automatismos</a> 
    <ul>
       <li>   <a href="webAutomatismos/cableados.html">Cableados</a> </li> 
        <li>   <a href="webAutomatismos/neumaticos.html">Neumáticos</a> </li>    
    </ul>
</li>
    <li> <a href="#" >Autómatas</a> 
      			 <ul> 
           			<li> <a href="webAutomatas/programados.html">S7-200</a> </li>
           			<li> <a href="webAutomatas/logo.html">LOGO</a> </li>
           			<li> <a href="webAutomatas/tiaportal.html">TIA-PORTAL</a> </li>
      			</ul>  
  <li> <a href="#" >Mecatrónica</a> 
       <ul> 
   		 
           <li> <a href="webMotores/variador.html">Variadores</a> </li> 
           <li> <a href="webMotores/motores.html">Motores</a> </li> 
           <li> <a href="webMotores/trafo_practicas.html">Transformador</a> </li> 
       </ul>  
   </li> 

     <li> <a href="webenlaces/enlaces.html">Enlaces</a></li> 
     <li> <a href="#">Varios</a> 
       <ul> 
          <li> <a href="webInterior/interior.html" >Interior</a></li>  
          <li> <a href="webDomotica/Domotica.html">Domotica</a> </li> 
          <li> <a href="web3d/3d.html">Impresión 3D</a></li> 
          <li> <a href="arduino/arduino_curso.html">Arduino</a></li> 
          <li> <a href="webRenovables/renovables.html" >Renovables</a></li>
          <li> <a href="https://cifpmedinadelcampo.es/iea/" >CIFP Electricidad</a></li> 
        </ul>  
   </li> 
 </ul>



    `;
    }
}

window.customElements.define('menu-principal-index', menuprincipalindex);
