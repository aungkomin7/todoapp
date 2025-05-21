import { doneListTotal, listTemplate } from "./selectors.js";

export const updateListTotal = () => {
  const list = document.querySelectorAll(".list");
  listTotal.innerText = list.length;
};

export const doneUpdateListTotal = () => {
  const list = document.querySelectorAll("input:checked");
  doneListTotal.innerText = list.length;
};

export const createList = (listmessage) => {
  const list = listTemplate.content.cloneNode(true);

  list.querySelector(".list").id = "list" + Date.now();
  list.querySelector(".list-message").innerText = listmessage;

  return list;
};

export const deleteList = (listId) => {
  const currentlist = document.querySelector(`#${listId}`);
  if (window.confirm("confirm delete")) {
    currentlist.classList.add("animate__animated", "animate__zoomOut");
    currentlist.addEventListener("animationend", () => {
      currentlist.remove();
      updateListTotal();
      doneUpdateListTotal();
    });
  }
};

export const editList = (listId) => {
  const currentlist = document.querySelector(`#${listId}`);
  const listCheck = currentlist.querySelector(".list-check");
  const editBtn = currentlist.querySelector(".edit-btn");
  const listMessage = currentlist.querySelector(".list-message");
  const createInput = document.createElement("input");
  listMessage.classList.add("hidden");
  createInput.classList.add(
    "border",
    "w-[200px]",
    "mr-1",
    "px-3",
    "py-1.5",
    "focus-visible:outline-none",
    "rounded-2xl"
  );
  listMessage.after(createInput);
  createInput.focus();
  createInput.value = listMessage.innerText;

  editBtn.setAttribute("disabled", true);
  listCheck.setAttribute("disabled", true);

  createInput.addEventListener("blur", () => {
    createInput.classList.add("hidden");
    listMessage.innerText = createInput.value;
    listMessage.classList.remove("hidden");

    editBtn.removeAttribute("disabled");
    listCheck.removeAttribute("disabled");
  });
};

export const doneList = (listId) => {
  const currentlist = document.querySelector(`#${listId}`);
  const listCheck = currentlist.querySelector(".list-check");
  const editBtn = currentlist.querySelector(".edit-btn");

  const listMessage = currentlist.querySelector(".list-message");
  listMessage.classList.toggle("line-through");
  currentlist.classList.toggle("scale-95");
  currentlist.classList.toggle("opacity-80");
  doneUpdateListTotal();

  console.dir(listCheck);
  if (listCheck.checked) {
    editBtn.setAttribute("disabled", true);
    editBtn.classList.add("opacity-50");
  } else {
    editBtn.removeAttribute("disabled");
    editBtn.classList.remove("opacity-50");
  }
};
