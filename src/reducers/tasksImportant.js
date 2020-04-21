// const defaultState = []

// var findIndex = (task, id) => {
// 	var result = -1;
// 	task.forEach((task, index) => {
// 		if (task.id === id) {
// 			result = index;
// 		}
// 	});
// 	return result;
// }

// const tasksImportant=(state=defaultState, action) => {
// 	var index = -1;
//     switch(action.type){
//     	case "FETCH_TASK_IMPORTANT":
// 	    	state = action.tasks;
// 	    	return [...state];    		
//     	case "ADD_TASK_IMPORTANT":
//     		state.push(action.taskImportant)
// 	    	return [...state];
//         default:
//             return state;
//             console.log(state)
//     }
// }
// export default tasksImportant;