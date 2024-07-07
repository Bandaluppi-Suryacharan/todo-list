let text = document.querySelector("input[type='text']")
        let todo = document.querySelector(".todolist")

        text.addEventListener("keyup", (event) => {
            if (event.key == "Enter") {
                addtodo(text.value);
                text.value = ""
            }

        })
        const addtodo = (text) => {
            let listitem = document.createElement('li');
            listitem.innerHTML = `<input type="checkbox">${text} <i class="fa-solid fa-circle-xmark"></i>`;
            todo.appendChild(listitem);
            listitem.querySelector('i').addEventListener("click", () => {
                listitem.remove()
            })
        }