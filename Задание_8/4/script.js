function giveJobToStudent(student, jobName) {
  student.job = jobName;
  const fullName = student.fullName;
  alert(
    `Поздравляем! У студента ${fullName} появилась новая работа! Теперь он ${jobName}`
  );
  return student;
}

const student = {
  fullName: "Дима",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"],
};

const updatedStudent = giveJobToStudent(student, "веб-разработчик");
console.log("updatedStudent", updatedStudent);