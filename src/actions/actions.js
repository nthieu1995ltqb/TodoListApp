import callApi from './../utils/apiCaller';
import toggleIcon from './../utils/toggleIcon';

export const fetchAllTaskRequest = () => {
    return(dispatch) => {
        return callApi('tasks', 'GET', null).then(res =>{
            dispatch(fetchAllTasks(res.data))
        });
    };
} 

export const fetchAllTasks = (tasks) => {
	return {
		type: "FETCH_ALL_TASK",
		tasks
	}
}

export const fetchTaskPageRequest = (index = 1) => { 
    return(dispatch) => {
        return callApi(`tasks?_page=${index}&_limit=9`, 'GET', null).then(res =>{
            dispatch(fetchPageTasks(res.data))
        });
    };
} 

export const fetchTaskImportantRequest = (index = 1) => {
    return(dispatch) => {
        return callApi(`tasks?important=true&_page=${index}&_limit=9`, 'GET', null).then(res =>{
            dispatch(fetchTasksImportant(res.data))
        });
    };
} 

// export const fetchTasksByPage = (index) => {
//     return(dispatch) => {
//         return callApi(`tasks?_page=${index}&_limit=3`, 'GET', null).then(res =>{
//             dispatch(fetchTaskByPages(res.data))
//         });
//     };
// } 
export const fetchTasksImportant = (tasks) => {
	return {
		type: "FETCH_TASK_IMPORTANT",
		tasks
	}
}

export const fetchPageTasks = (tasks) => {
	return {
		type: "FETCH_TASK",
		tasks
	}
}

// export const fetchTaskByPages = (tasks) => {
// 	return {
// 		type: "FETCH_TASK_PAGE",
// 		tasks
// 	}
// }

export const addTaskRequest = (task) => {
    return(dispatch) => {
        return callApi('tasks', 'POST', task).then(res =>{
            dispatch(addTasks(res.data))
        });
    };
}

export const addTasks = (task) => {
	return {
		type: "ADD_TASK",
		task
	}
}

export const deleteTaskRequest = (id) => {
	return(dispatch) => {
		return callApi(`tasks/${id}`, 'DELETE', null).then(res =>{
			dispatch(deleteTask(id))
		})
	}
}


export const deleteTask = (id) => {
	return {
		type: "DELETE_TASK",
		id
	}
}

export const editTaskRequest = (id) => {
	return(dispatch) => {
		return callApi(`tasks/${id}`, 'GET', null).then(res =>{
			dispatch(editTask(res.data))
		})
	}
}


export const editTask = (task) => {
	return {
		type: "EDIT_TASK",
		task
	}
}

export const updateTaskRequest = (task) => {
	return(dispatch) => {
		return callApi(`tasks/${task.id}`,'PUT', task).then(res =>{
			dispatch(updateTask(res.data))
		})
	}
}


export const updateTask = (task) => {
	return {
		type: "UPDATE_TASK",
		task
	}
}

export const getImportantRequest = (id) => {
	return(dispatch) => {
		return callApi(`tasks/${id}`, 'GET', null).then(res =>{
			dispatch(toggleIconImportant(res.data))
		})
	}
}

export const toggleIconImportant = (task) => {
	return(dispatch) => {
		return callApi(`tasks/${task.id}`, 'PUT', toggleIcon(task, task.important)).then(res =>{
			dispatch(updateTask(res.data))
		})
	}
}

export const fetchTasksByPage = (index) => {
	return {
		type: "FETCH_TASK_BY_PAGE`",
		index
	}
}