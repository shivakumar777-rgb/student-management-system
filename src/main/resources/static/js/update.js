const apiUrl="http://localhost:8086/api/student";

async function updateStudent(){
	const id=document.getElementById("id").value;
	const name=document.getElementById("name").value;
	const email=document.getElementById("email").value;
	const department=document.getElementById("course").value;
	
	const student={name,email,department};
	
	const res=await fetch(`${apiUrl}/${id}`,{
		method:"PUT",
		headers:{"Content-Type":"application/json"},
		body:JSON.stringify(student),
	});
	if(res.ok){
		alert("Student Updated Successfully...");
	}else{
		alert("Student Not Updated...")
	}
}