import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCretors } from "../state";

export const useAction=()=>{
    const dispatch = useDispatch();

  return  bindActionCreators(actionCretors,dispatch)
};