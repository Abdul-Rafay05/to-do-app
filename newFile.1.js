const { add_btn, input_feild, task_section } = require("./script");

add_btn.addEventListener('click', () => {
    if (input_feild.value.length == 0) {
        alert("Please Enter Your tasks!");
    } else {
        task_section.innerHTML += `
        <div class="task_list_section">
                    <span class="task_list">${input_feild.value}</span>
                    <span class="task_complete">Complete</span>
                    <button type="button" class="btn btn-success" id="delete_task_btn"><i class="bi bi-trash3-fill"></i></button>
                </div>`;


        let delete_task_btn = document.querySelectorAll("#delete_task_btn");
        for (let i = 0; i < delete_task_btn.length; i++) {
            delete_task_btn[i].onclick = function() {
                this.parentNode.remove();
            };
        }

        let task_complete = document.querySelector(".task_complete");
        // for (let i = 0; i < task_complete.length; i++) {
        //     task_complete[i].onclick = function() {
        //         this.classList.toggle("show_complete")
        //     }
        // }
        let task_list = document.querySelectorAll(".task_list");
        for (let i = 0; i < task_list.length; i++) {
            task_list[i].onclick = function() {
                this.classList.toggle("complete_task");

            };

        }

    }
});