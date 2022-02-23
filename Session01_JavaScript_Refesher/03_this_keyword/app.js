const person = {
	name: 'Vali',
	showInfo() {
		console.log(this);
	},
};

person.showInfo();

const globalShowInfo = person.showInfo;

console.log(globalShowInfo);

globalShowInfo();

const student = {
	name: 'Ionut',
};

// student.showStudentInfo = person.showInfo;
// student.showStudentInfo();

const showStudentInfo = person.showInfo.bind(student);

showStudentInfo();
