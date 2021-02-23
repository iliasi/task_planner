const assert = require('assert');
const TaskManager = require("../js/taskManager");

//Test case code for TaskManger's constructor
describe("TaskManager", () => {
    describe("#constructor", () => {
        describe("if a new TaskManager class is initated", () => {
            it("should declare an empty tasks array", () => {
                const tasks = new TaskManager(0);
                assert.deepStrictEqual(tasks.tasks, []);
            });

            it("shoud assign the value of zero (0) to variable currentId", () => {
                const tasks = new TaskManager(0);
                assert.deepStrictEqual(tasks.currentId, 0);
            });
        });
    });
});

//Test case code for when the TaskManager's addTask method is called
describe("#addTask", () => {
    describe("adding new tasks by calling addTask method", () => {
        it("should accept new tasks details as parameter and add the task to the tasks array", () => {
            const tasks = new TaskManager();
            const newTask = {
                taskId: tasks.currentId,
                taskName: 'Test Task',
                taskDescription: 'Testing addTask',
                taskAssignedTo: 'ilias',
                taskDueDate: Date.now(),
                taskStatus: 'In Progress',
            };

            tasks.addTask(
                newTask.taskName,
                newTask.taskDescription,
                newTask.taskAssignedTo,
                newTask.taskDueDate,
                newTask.taskStatus
            );

            assert.deepStrictEqual(tasks.tasks[0], newTask)

        });

        it("should increment the currentId of the new task by one (1)", () => {
            const tasks = new TaskManager();
            const newTask = {
                taskId: tasks.currentId,
                taskName: 'Test Task',
                taskDescription: 'Testing addTask',
                taskAssignedTo: 'ilias',
                taskDueDate: Date.now(),
                taskStatus: 'In Progress',
            };

            tasks.addTask(
                newTask.taskName,
                newTask.taskDescription,
                newTask.taskAssignedTo,
                newTask.taskDueDate,
                newTask.taskStatus
            );

            assert.deepStrictEqual(tasks.currentId, 1)
        });
    });
});

// Test case code for when the TaskManger's delete method is called.
describe("#delete", () => {
    describe("when delete method of TaskManager class is called", () => {
        it("should accept taskId of the task to be deleted and remove the task from the tasks array", () => {
            const tasks = new TaskManager();
            const deletedTask = {
                taskId: tasks.currentId,
                taskName: 'Test Task',
                taskDescription: 'Testing addTask',
                taskAssignedTo: 'ilias',
                taskDueDate: Date.now(),
                taskStatus: 'In Progress',
            };

            const newTask = {
                taskId: tasks.currentId + 1,
                taskName: 'Delete Task',
                taskDescription: 'Testing deleteTask Method',
                taskAssignedTo: 'Tiza',
                taskDueDate: Date.now(),
                taskStatus: 'In Progress',
            };

            tasks.addTask(
                deletedTask.taskName,
                deletedTask.taskDescription,
                deletedTask.taskAssignedTo,
                deletedTask.taskDueDate,
                deletedTask.taskStatus
            );

            tasks.addTask(
                newTask.taskName,
                newTask.taskDescription,
                newTask.taskAssignedTo,
                newTask.taskDueDate,
                newTask.taskStatus
            );

            tasks.delete(deletedTask.taskId);

            assert.deepStrictEqual(tasks.tasks, [newTask]);
        });
    });
});

//Test case code for when the findTaskById method of the TaskManager's class is called
describe("#findTaskById", () => {
    describe("when findTaskById is called", () => {
        it("should accept a taskId parameter and return the task whose currentId matches taskId", () => {
            const tasks = new TaskManager();
            const newTask = {
                taskId: tasks.currentId,
                taskName: 'Test Task',
                taskDescription: 'Testing addTask',
                taskAssignedTo: 'ilias',
                taskDueDate: Date.now(),
                taskStatus: 'In Progress',
            };

            tasks.addTask(
                newTask.taskName,
                newTask.taskDescription,
                newTask.taskAssignedTo,
                newTask.taskDueDate,
                newTask.taskStatus
            );
            
            const foundTask = tasks.findTaskById(newTask.taskId); 
            assert.deepStrictEqual(foundTask, newTask);
        });
    });
});