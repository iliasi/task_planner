// add taskId to the parrameters and element
createTaskHtml = (taskId, name, description, assignedTo, dueDate, status) => {
    const html = `
        <li class="card" data-task-id="${taskId}" style="min-width: 50vw">
            <div class="card-body">
                
                <h5 class="card-title">${name}</h5>
                <p class="card-text">
                    ${description}
                </p>
                <p class="card-text">${assignedTo}</p>
                <p class="card-text">${dueDate}</p>
                <div class="card-footer row">
                    <div class="col-6">
                        <p class="card-text"><b>${status}</b></p>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-success done-button">
                            Done
                        </button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-outline-danger delete-button">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            </li>
    `
    return html;
}

class TaskManager{
    constructor(currentId, tasks){
        this.currentId = 0;
        this.tasks = [];
    }

    addTask(name, description, assignedTo, dueDate, status) {

        const newTask = {
            taskId: this.currentId++,
            taskName: name,
            taskDescription: description,
            taskAssignedTo: assignedTo,
            taskDueDate: dueDate,
            taskStatus: status,

        };
        
        this.tasks.push(newTask);

    }

    findTaskById(taskId) {

        let taskFound;

        for (let i = 0; i < this.tasks.length; i++){
            const task = this.tasks[i];
            if (task.taskId === taskId) {
                taskFound = task;
            }
        }

        return taskFound;
    }

    render() {
        let taskHtmlList = [];

        for(let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];

            const taskDate = new Date(task.taskDueDate);
            const formattedDate = taskDate.getDate() + '/'  + (taskDate.getMonth() + 1) + "/" + taskDate.getFullYear();
            const taskHtml = createTaskHtml(task.taskId, task.taskName, task.taskDescription, task.taskAssignedTo, formattedDate, task.taskStatus); //TODO: add task.id
            taskHtmlList.push(taskHtml);
        }
        const tasksHtml = taskHtmlList.join('\n');
        const ulList = document.querySelector("#task-list");
        ulList.innerHTML = tasksHtml;
    }
}