import { addListHandler, listGroupHandler, textInputHandler } from "./handlers.js";
import { listAddBtn, listGroup, textInput } from "./selectors.js";

const listners = () => {
  listAddBtn.addEventListener("click", addListHandler);
  textInput.addEventListener("keyup", textInputHandler);
  listGroup.addEventListener("click", listGroupHandler);
};

export default listners;
