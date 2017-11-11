function add(){

var section=document.getElementById("principal");
var container=document.createElement("div");
container.classList.add("container");
var newTarget=document.getElementById("newtarget");

 var addForm= document.createElement("form");

 var addInput=document.createElement("input");
 addInput.type="text";
 addInput.placeholder="Añadir una lista...";


 var addButton=document.createElement("button");
 addForm.appendChild(addInput);
 addForm.appendChild(addButton);
 container.appendChild(addForm);
 section.appendChild(container);
 addButton.textContent="Guardar";
 addForm.classList.add("addform");
 addButton.classList.add("addbutton");
 addInput.classList.add("addinput");


 addButton.addEventListener("click" , function(){
	 container.removeChild(addForm);
	 var nameList=document.createElement("h2");
	 var textNameList=addInput.value;
	 nameList.textContent=textNameList;
	 container.appendChild(nameList);

	 var buttonTwo=document.createElement("button");


	 buttonTwo.textContent="Añadir una tarea ...";
	 container.appendChild(buttonTwo);
	  buttonTwo.focus(); //Agregando el focus al boton.
	 buttonTwo.addEventListener("click",function(){
	 	container.removeChild(buttonTwo);


	 var addFormTwo=document.createElement("Form");
	 var textArea = document.createElement("textarea");
	 textArea.placeholder="Escribe aqui tus tareas...";
	 var buttonThree=document.createElement("button");
	 buttonThree.textContent="Añadir";
	 buttonThree.classList.add("buttonthree");

	 addFormTwo.appendChild(textArea);
	 container.appendChild(addFormTwo);
	 container.appendChild(buttonThree);


	 buttonThree.addEventListener("click",function(){
	 		var comment= textArea.value;

	 	var listToDo= document.createElement("li");
	 	   listToDo.textContent=comment;
	 	  
	 	   container.appendChild(listToDo);
	 	   //container.appendChild(textAreaTwo); 
	 	   container.insertBefore(listToDo,addFormTwo);  
	 	   textArea.value="";
	 	 
	 	
	 	 


	 })

	 


	 })



    	})



}