import findIndex from './../utils/findIndex';

const defaultState = []

const allTasks=(state=defaultState, action)=>{
	var index = -1;
    switch(action.type){
    	case "FETCH_ALL_TASK":
	    	state = action.tasks;
	    	return [...state];
	    case "UPDATE_TASK":
	    	index = findIndex(state, action.task.id);
	    	state[index] = action.task
	    	return [...state]
        default:
            return state;
    }
}
export default allTasks;