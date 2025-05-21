import {
  createList,
  deleteList,
  doneList,
  doneUpdateListTotal,
  editList,
  updateListTotal,
} from "./lists.js";
import { listGroup } from "./selectors.js";

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

export const delAllLists = () => {
  if (window.confirm("confirm delete all lists!")) {
    const lists = listGroup.querySelectorAll(".list");
    lists.forEach((el) => {
      el.remove();
    });
    updateListTotal();
    doneUpdateListTotal();
  }
};

export const checkAllLists = () => {
  const lists = listGroup.querySelectorAll(".list");
  lists.forEach((el) => {
    el.querySelector(".list-check").checked = true;
    doneList(el.id);
  });
};
