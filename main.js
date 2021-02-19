var student;
function Submit() {
     student= []
    student.push(document.getElementById("student1").value)
    student.push(document.getElementById("student2").value)
    student.push(document.getElementById("student3").value)
    student.push(document.getElementById("student4").value)
    document.getElementById("result").textContent=student
    document.getElementById("sort_button").style.display="inline-block"
    document.getElementById("submit_button").style.display="none"
}
function Sort() {
    student.sort()
     document.getElementById("result").textContent=student

}