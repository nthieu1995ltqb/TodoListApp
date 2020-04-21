export default function findIndex(task, id){
	var result = -1;
	task.forEach((task, index) => {
		if (task.id === id) {
			result = index;
		}
	});
	return result;
}