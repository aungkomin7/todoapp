import { addListHandler, checkAllLists, delAllLists, listGroupHandler, textInputHandler } from "./handlers.js";
import { checkAllBtn, delAllBtn, listAddBtn, listGroup, textInput } from "./selectors.js";

const listners = () => {
  listAddBtn.addEventListener("click", addListHandler);
  textInput.addEventListener("keyup", textInputHandler);
  listGroup.addEventListener("click", listGroupHandler);
  checkAllBtn.addEventListener("click",checkAllLists);
  delAllBtn.addEventListener("click",delAllLists);
};

export default listners;
