import viewTask from "./view-task.js";

const SECTION_HEADING_LEVEL = "h2";

const TODO_HEADING_TEXT = "To Do";
const IN_PROGRESS_HEADING_TEXT = "In Progress";
const DONE_HEADING_TEXT = "Done";

export default (project) => {
    
    const projectDiv = document.createElement("div");

    const todoSection = document.createElement("section");
    
    const todoHeading = document.createElement(SECTION_HEADING_LEVEL);
    todoHeading.textContent = TODO_HEADING_TEXT;

    const todoTaskList = document.createElement("ol");
    const todoTasks = [];
    for (const task of project["todo"]){
        const todoTask = document.createElement("li");
        todoTask.appendChild(viewTask(task));
        todoTasks.push(todoTask);
    }
    todoTaskList.replaceChildren(...todoTasks); 

    todoSection.appendChild(todoHeading);
    todoSection.appendChild(todoTaskList);

    const inProgressSection = document.createElement("section");

    const inProgressHeading = document.createElement(SECTION_HEADING_LEVEL);
    inProgressHeading.textContent = IN_PROGRESS_HEADING_TEXT;
    inProgressSection.appendChild(inProgressHeading);

    const inProgressTaskList = document.createElement("ol");
    const inProgressTasks = [];
    for (const task of project["inProgress"]){
        const inProgressTask = document.createElement("li");
        inProgressTask.appendChild(viewTask(task));
        inProgressTasks.push(inProgressTask);
    }
    inProgressTaskList.replaceChildren(...inProgressTasks);
    inProgressSection.appendChild(inProgressTaskList);
    
    const doneSection = document.createElement("section");

    const doneHeading = document.createElement(SECTION_HEADING_LEVEL);
    doneHeading.textContent = DONE_HEADING_TEXT;
    doneSection.appendChild(doneHeading);

    const doneTaskList = document.createElement("ol");
    const doneTasks = [];
    for (const task of project["done"]){
        const doneTask = document.createElement("li");
        doneTask.appendChild(viewTask(task));
        doneTasks.push(doneTask);
    }
    doneTaskList.replaceChildren(...doneTasks);
    doneSection.appendChild(doneTaskList);

    projectDiv.appendChild(todoSection);
    projectDiv.appendChild(inProgressSection);
    projectDiv.appendChild(doneSection);
    
    return projectDiv;
}