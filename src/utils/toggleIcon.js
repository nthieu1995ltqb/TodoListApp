export default function toggleIcon(task, important){
	task.important = !task.important
	return task;
}