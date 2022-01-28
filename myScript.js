
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
          <button class="delete"><i class="material-icons">delete</i></button>
         </div>`;

        
         var current_tasks = document.
         querySelectorAll('.delete');

         for(var i = 0; i < current_tasks.length; i++){
             current_tasks[i].onclick = function(){
                 this.parentElement.remove();
             }
         }
         document.querySelector('#newtask input').value="";

        const addtask = document.getElementById("addedtask");
        const checkbox = document.getElementById('check');
        

        checkbox.addEventListener("click",onitemclick);

        function onitemclick(e){
            const item = e.target;

            if(item.classList[0] === "checkbox"){
                console.log("sddd");
                const todo = item.parentElement;
                todo.classList.toggle('completed');
            }
        }

        // function onitemclick(event){
        //        console.log("savan");
        //     const target = event.target;
        //     const item = target.parentElement;
           
            
        //         // item.classList.toggle('completed');
        //     // item.style.display="none";
              
        //     if(target.classList[0]=="checkb"){
        //         item.classList.add('completed');
                
        //     }
        

        // }

        //  var tasks = document.
        //  querySelectorAll('#taskname');  

        //  for(var i = 0; i < tasks.length; i++){
        //      tasks[i].onclick = function(){
        //          this.classList.toggle('completed');
        //      }
        //  }
        


        //  const checkbox = document.getElementById('check');
        //  var x = document.getElementsByClassName("checkb");
        // //  const checkeded = document.getElementById('taskname');
        //  const taskclass = document.getElementById('taskclass');
        //  const desk = document.getElementById('deskbox');

        //  for (var i = 0; i < x.length; i++) {
        //     x[i].addEventListener('change', (event) => {
        //     if (event.currentTarget.checked) {
        //         console.log("sssss");
                
        //             taskclass.children[2].classList.add('completed');
        //             desk.classList.remove('fa-minus-square');
        //             desk.classList.add('fa-check-square');
                   
                
        //     } else {
        //         taskclass.children[2].classList.remove('completed');
        //         desk.classList.remove('fa-check-square');
        //         desk.classList.add('fa-minus-square');
        //     }
        //     })
        // }

        //  for (var i = 0; i < x.length; i++) {
             
        //     x[i].addEventListener('change', function() {
        //       if (this.checked) {
        //           console.log("sssss")
        //         // Checkbox is checked..
        //         taskclass.children[2].classList.toggle('completed');
        //       } else {
        //         // Checkbox is not checked..
        //         taskclass.children[2].classList.remove('completed');
        //       }
        //     })
        //  }
          
       
    }
        

 }



