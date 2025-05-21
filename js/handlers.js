import { createList, deleteList, doneList, editList, updateListTotal } from "./lists.js";

export const addListHandler = () => {
  addList(textInput.value);
};

export const addList = (text) => {
  if (textInput.value.trim()) {
    textInput.value = null;
    listGroup.append(createList(text));

    updateListTotal();
  } else {
    alert("fill something");
  }
};

export const textInputHandler = (event) => {
  if (event.key === "Enter") {
    if (textInput.value.trim()) {
      addList(textInput.value);

      updateListTotal();
      textInput.value = null;
    } else {
      alert("fill something");
    }
  }
};

export const listGroupHandler = (event) => {
  if (event.target.classList.contains("del-btn")) {
    deleteList(event.target.closest(".list").id);
  } else if (event.target.classList.contains("edit-btn")) {
    editList(event.target.closest(".list").id);
  } else if (event.target.classList.contains("list-check")) {
    doneList(event.target.closest(".list").id);
  }
};
