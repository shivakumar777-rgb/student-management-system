const apiUrl="http://localhost:8086/api/student";

async function findStudent(){
	const id=document.getElementById("search-id").value;
	const res=await fetch(`${apiUrl}/${id}`);
	
	if(!res.ok){
		document.getElementById("result").textContent="Student Not Found";
		return;
	}
	
	const student=await res.json();
	document.getElementById("result").textContent=`${student.name}-${student.email}-${student.department}`;
}