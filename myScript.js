const dbtn = document.getElementById("del");
const addtask = document.getElementById("addedtask");
const checkbox = document.getElementById('check');
addtask.addEventListener("click",onitemclick);
document.addEventListener("DOMContentLoaded", getfromlocal);



//add button clicked
document.querySelector('#push').onclick = function(){

if(document.querySelector('#newtask input').
    value.length == 0){
          alert("Please Enter a Task");
      }

      else{
          document.querySelector('#addedtask').innerHTML
          += `<div class="task" id="taskclass">
          <input type="checkbox" id="check" class="checkb">
          <i class="fa fa-minus-square" id="deskbox" style="font-size:20px;"></i>
          <span id="taskname">
          ${document.querySelector('#newtask input').
          value}
          </span>
          <button class="delete"  id="del">
          <i class="material-icons">delete</i>
          </button>
         </div>`;
         

         //deletetask

        //  const current_task = document.querySelectorAll(".delete");
        //  for(var i = 0 ; i < current_task.length; i++){
        //      current_task[i].onclick = function(){
        //          this.parentElement.remove();
        //          removelocalTodos(this.parentElement);

        //      }
        //  }
       
        //save in local storage
        var todolst = document.getElementById("todoinput");
        // let addtaskinputval = todolst.value;
        saveltolocal(todolst.value);
        
      
        
        
        // let webtask = localStorage.getItem("elements");

        // if(webtask == null){
        //     elements = [];
        // }

        // else{
        //    elements = JSON.parse(webtask);
        // }
        // taskobj.push(addtaskinputval);
        // localStorage.setItem("localtask",JSON.stringify(elements));

        document.querySelector('#newtask input').value="";


    }

        

}
    //    document.querySelector('#newtask input').value="";






         // checkbox clicked and delete clicked
        function onitemclick(e){
            const item = e.target;
            
            
            if(item.classList[0] == "material-icons"){
               
                
                const parent = item.parentElement.parentElement;
                removefromlocal(parent);
                // console.log(item.parentElement);
                parent.remove();
            }
            //for checkbox
            if(item.classList[0] === "checkb"){
                
                console.log("sddd");
                var todo = item.parentElement;
                console.log(todo);



              if(item.checked == true){
                    console.log(item.nextElementSibling.nextElementSibling);
                    item.nextElementSibling.nextElementSibling.classList.add("completed");
                    item.nextElementSibling.classList.remove('fa-minus-square');
                    item.nextElementSibling.classList.add('fa-check-square');
                    // todo.classList.add('blur');

                }
              else{
                    item.nextElementSibling.nextElementSibling.classList.remove("completed");
                    item.nextElementSibling.classList.add('fa-minus-square');
                    item.nextElementSibling.classList.remove('fa-check-square');
                    // todo.classList.remove('blur');
                }
            }

        }


        // function saveltolocal(addtaskinputval){
        // let webtask = localStorage.getItem("localtask");

        // if(webtask == null){
        //     taskobj = [];
        // }

        // else{
        //    taskobj = JSON.parse(webtask);
        // }
        // taskobj.push(addtaskinputval);
        // localStorage.setItem("localtask",JSON.stringify(taskobj));

        // document.querySelector('#newtask input').value="";
        // }



    function removefromlocal(todo){
        console.log(todo);
        let todos;
        let index;
        if(localStorage.getItem("todos") === null){
            todos = [];
        }
        else{
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        var child = todo.childNodes[1];
        var textele = child.nextElementSibling.nextElementSibling.innerText;
        console.log(textele);
        
        for(var i = 0; i<todos.length ; i++){
            // console.log(todos[i]);
            if(textele == todos[i]){ 
                // console.log(index);
                index = i;
            }

        }
         
        console.log(index);
         todos.splice(index,1);
        localStorage.setItem("todos",JSON.stringify(todos));
    }

    function saveltolocal(todo) {
        // console.log(typeof(todo));
        let elements;
        if (localStorage.getItem("todos") === null) {
          todos = [];
        } else {
          // getting the elements saved in localStorage in array
          todos = JSON.parse(localStorage.getItem("todos"));
        }
      
        
        todos.push({"text": todo, "status": 0});
      
        localStorage.setItem("todos", JSON.stringify(todos));
      }

      function getfromlocal(){
        let todos;
        if (localStorage.getItem("todos") === null) {
          todos = [];
        } else {
          // getting the elements saved in localStorage in array
          todos = JSON.parse(localStorage.getItem("todos"));
        }
        todos.forEach((sd)=>{
            // console.log(sd);
            document.querySelector('#addedtask').innerHTML
            += `<div class="task" id="taskclass">
            <input type="checkbox" id="check" class="checkb">
            <i class="fa fa-minus-square" id="deskbox" style="font-size:20px;"></i>
            <span id="taskname">
            ${sd.text} 
            </span>
            <button class="delete"  id="del">
            <i class="material-icons">delete</i>
            </button>
           </div>`;

        })

      }



