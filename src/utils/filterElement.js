export default function filterElement(tasks, important){
	tasks.forEach((task, index) => {
		if (task.important === false) {
			tasks.splice(index, 1);
		}
	});
	return tasks;
}