/*const apiUrl="http://localhost:8085/api/student";

async function loadStudents(){
	const res=await fetch(apiUrl);
	const students=await res.json();
	
	const list=document.getElementById("student-list");
	list.innerHTML="";
	
	students.forEach(s=>{
		const li=document.createElement("li");
		li.textContent=`${s.id}:${s.name} - ${s.email} - ${s.department}`;
		list.appendChild(li);
	});
}
loadStudents();*/


const apiUrl = "http://localhost:8086/api/student";

async function loadStudents() {
    const res = await fetch(apiUrl);
    const students = await res.json();

    const list = document.getElementById("student-list");
    list.innerHTML = "";

    students.forEach(s => {
        const div = document.createElement("div");
        div.className = "student-card";
        div.innerHTML = `
            <h3>${s.name}</h3>
            <p><strong>ID:</strong> ${s.id}</p>
            <p><strong>Email:</strong> ${s.email}</p>
            <p><strong>Department:</strong> ${s.department}</p>
        `;
        list.appendChild(div);
    });
}

loadStudents();
