
const formulario = document.querySelector("#formulario");


//crear el evento
formulario.addEventListener( "submit", validarFormulario )


//mis funciones
function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Hola ${nombre} Bienvenido/a.`
}


form2.addEventListener("submit", function(Event) { 
Event.preventDefault();

let form2Data = new FormData(form2) ;

let transactionTaBleRef = document.getElementById ("transactionTable") ;
let newTransactionRoWRef = transactionTableRef.insertRow(-1);

let newTypeCellRef = newTransactionRowRef.insertCell (0);
newTypeCellRef.textContent = form2Data.get ("1")

newTypeCellRef = newTransactionRowRef.insertCell (1) ;
newTypeCellRef , textContent = form2Data . get (" 2");

newTypeCelLRef = newTransactionRowRef . insertCell (2)
newTypeCellRef. textContent = form2Data . get ("3 ");

newTypeCelLRef = newTransactionRowRef . insertCell (3)
newTypeCellRef. textContent = form2Data . get ("4 ");

newTypeCelLRef = newTransactionRowRef . insertCell (4)
newTypeCellRef. textContent = form2Data . get ("5 ");

})