function objClean(array) {
	let data = []

	array.forEach(async item => {
		delete item["_id"];
		delete item["__v"];
		delete item["userId"];
		delete item["eventId"];
		delete item["eventName"];

		data.push(item)
	});

	return data;
}

//from https://codepen.io/Jacqueline34/pen/pyVoWr

function convertArrayOfObjectsToCSV(array) {
	let result;

	const columnDelimiter = ',';
	const lineDelimiter = '\n';
	const keys = Object.keys(array[0]);

	result = '';
	result += keys.join(columnDelimiter);
	result += lineDelimiter;

	array.forEach(item => {
		let ctr = 0;
		keys.forEach(key => {
			if (ctr > 0) result += columnDelimiter;

			result += item[key];

			ctr++;
		});
		result += lineDelimiter;
	});

	return result;
}

export function downloadCSV(array, name) {
	const link = document.createElement('a');
	let clean = objClean(array)
	let csv = convertArrayOfObjectsToCSV(clean);
	if (csv == null) return;

	const filename = `export-${name}.csv`;

	if (!csv.match(/^data:text\/csv/i)) {
		csv = `data:text/csv;charset=utf-8,${csv}`;
	}

	link.setAttribute('href', encodeURI(csv));
	link.setAttribute('download', filename);
	link.click();
}