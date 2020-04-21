const defaultState = {}

const itemEditing=(state=defaultState, action)=>{
    switch(action.type){
    	case "EDIT_TASK":
	    	return action.task;
        default:
            return state;
    }
}
export default itemEditing;