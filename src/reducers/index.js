import { combineReducers } from 'redux';
import allTasks from './allTasks';
import tasks from './tasks';
import itemEditing from './itemEditing';
import tasksImportant from './tasksImportant';

const appReducers = combineReducers({
	allTasks,
    tasks,
    itemEditing,
    tasksImportant
})

export default appReducers;