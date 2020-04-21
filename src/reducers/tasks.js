import findIndex from './../utils/findIndex';

const defaultState = []

const tasks=(state=defaultState, action)=>{
	var index = -1;
    switch(action.type){
    	case "FETCH_TASK":
	    	state = action.tasks;
	    	return [...state];
	    case "FETCH_TASK_PAGE":
	    	state = action.tasks;
	    	return [...state];
	    case "ADD_TASK":
	    	state.reverse().push(action.task);
	    	return [...state];
	    case "DELETE_TASK":
	    	index = findIndex(state, action.id);
	    	state.splice(index, 1);
	    	return [...state];
	    case "UPDATE_TASK":
	    	index = findIndex(state, action.task.id);
	    	state[index] = action.task
	    	return [...state];
	  	case "FETCH_TASK_IMPORTANT":
	    	state = action.tasks;
	    	return [...state];
	    case "TOGGLE_ICON_IMPORTANT":
	    	index = findIndex(state, action.task.id);
	    	state[index] = action.task;
	    	break;
        default:
            return [...state];
    }
}
export default tasks;