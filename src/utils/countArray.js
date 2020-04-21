export default function countArray(tasks, important){
	var count = 0;
	tasks.forEach((task, index) => {
		if (task.important){
			count = count + 1;
		}
	});
	return count;
}
