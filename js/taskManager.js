class TaskManager {
    constructor(currentId, tasks) {
        this.currentId = 0;
        this.tasks = [];
    }

    addTask(name, description, assignedTo, dueDate, status){
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
}