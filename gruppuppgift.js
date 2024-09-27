const inputText = document.getElementById("inputText")
const addButton = document.getElementById("submit")
const toDoList = document.getElementById("lista")

addButton.addEventListener('click', (e) => {
    e.preventDefault()
    const toDoText = inputText.value; // toDoText hämtar värdet från inputText som användaren har skrivit in. 
    const li = document.createElement("li"); //Skapar ett li element i HTML
    li.textContent = toDoText; // Ger li värdet av toDoList, alltså de användaren skrivit in 
    toDoList.appendChild(li); // skapar ett li element i HTML med värdet av toDoList alltså vad användaren har skrivit in. 

    //Add to bort knapp
    const removeButton = document.createElement("button");
    removeButton.className = "removeButton";
    removeButton.textContent = "Ta bort";
    // lägger till eventlistnener för vad som ska ske när man klickar på knappen

    removeButton.addEventListener('click', () => {
        toDoList.removeChild(li);
    });

    //Lägger till knappen i vår function
    li.appendChild(removeButton);

    //Gör så att inputText försvinner efter varje gång man lagt till något. 

    inputText.value = "";

});
