export default (task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.dataset.id = task["id"];

    const taskDivChildren = [];
    
    const heading = document.createElement("h3");
    heading.textContent = task["subject"];
    taskDivChildren.push(heading);
    
    const descriptionP = document.createElement("p");
    descriptionP.textContent = task["description"];
    descriptionP.classList.add("taskDescription", "hidden");
    taskDivChildren.push(descriptionP);

    if(task["dueDate"] !== null){
        const dueDateP = document.createElement("p");
        const dueDate = new Date(task["dueDate"]);
        dueDateP.classList.add("dueDate");
        dueDateP.textContent = "Due: " + dueDate.toLocaleString();
        taskDivChildren.push(dueDateP);
    }

    const showDescriptionLink = document.createElement("a");
    showDescriptionLink.textContent = "Show Description";
    showDescriptionLink.classList.add("showDescription");
    showDescriptionLink.setAttribute("href","#");
    taskDivChildren.push(showDescriptionLink);

    showDescriptionLink.addEventListener("click", (event)=>{
        event.preventDefault();
        descriptionP.classList.remove("hidden");
    })
    console.log(taskDivChildren);
    taskDiv.replaceChildren(...taskDivChildren);
    
    return taskDiv;
}