function add(){ /*función que desencadena todos los eventos*/

	var section=document.getElementById("principal"); /*llamando a la section principal en donde estarán contenidos container y newtarget*/
	var container=document.createElement("div"); /*creando el div contenedor de las tareas*/
	container.classList.add("container"); /*dando una class al container*/
	var newTarget=document.getElementById("newtarget"); /*llamando al contenedor que crea una nueva lista */
	var addForm= document.createElement("form"); /*formulario que contiene el input y el boton */
	var addInput=document.createElement("input");
	addInput.type="text";
	addInput.placeholder="Añadir una lista...";/*agregando un placeholder al boton */
	var addButton=document.createElement("button"); 
	
	addForm.appendChild(addInput); /*dando posición a mi input y boton dentro del formulario*/
	addForm.appendChild(addButton);
	container.appendChild(addForm);/*dando posición al formulario dentro del container*/
	section.appendChild(container);/* dando posición al container dentro de section*/
	
	addButton.textContent="Guardar";
	addForm.classList.add("addform");
	addButton.classList.add("addbutton");
	addInput.classList.add("addinput");
	
	section.insertBefore(container,newTarget); /*para que cada vez que se hace click en el boton , 
	se crea el div container antes de newtarget (este se desplaza hacia el lado)*/


	addButton.addEventListener("click" , function(){ /*evento que se crea para cuando se hace click en el boton anterior*/
		container.removeChild(addForm);  /*se borra el formulario anterior*/
		var nameList=document.createElement("h2"); /*h2 en donde vamos a guardar el nombre de la lista escrito en el input */
		var textNameList=addInput.value; /*guardamos el texto escrito en el input*/
		nameList.textContent=textNameList; /*el texto guardado anteriormente se lo asignamos a h2*/
		container.appendChild(nameList); /*le damos posición al h2 en el container*/ 
		var buttonTwo=document.createElement("button"); /*creamos el boton para añadir una tarea*/
		buttonTwo.textContent="Añadir una tarea ...";
		container.appendChild(buttonTwo); /* dando posión al boton en el container*/
		buttonTwo.focus(); //Agregando el focus al boton para que obtenga la atención.
		


		buttonTwo.addEventListener("click",function(){  /*creando nuevo evento en el boton para añadir una tarea*/
			container.removeChild(buttonTwo); // removemos el boton .
			var addFormTwo=document.createElement("Form"); /*creando formulario que contiene el textarea*/
			var textArea = document.createElement("textarea");
			textArea.placeholder="Escribe aqui tus tareas...";
			var buttonThree=document.createElement("button");// creando nuevo boton "añadir"
			buttonThree.textContent="Añadir";
			buttonThree.classList.add("buttonthree");

			addFormTwo.appendChild(textArea); /*posicionando el texarea dentro del formulario*/
			container.appendChild(addFormTwo);/*posicionando el formulario dentro de container*/
			container.appendChild(buttonThree);/*posicionando el boton añadir dentro del container*/


	 		buttonThree.addEventListener("click",function(){ /*creando evento para el boton "añadir*/
			 	var comment= textArea.value;   /*rescatando el texto que se escribe en el textarea*/

			 	var listToDo= document.createElement("li"); //creando un elemento li en donde añadir las tareas .
			 	listToDo.textContent=comment;
			   
				container.appendChild(listToDo); //dando posición a las tareas
			   
			 	container.insertBefore(listToDo,addFormTwo);  //para que las tareas queden insertadas antes que el textarea.
			 	textArea.value=""; //limpiando el contenido de textarea.

	 		})
	 	})
   	})
}