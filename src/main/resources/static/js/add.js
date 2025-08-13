
const apiUrl="http://localhost:8086/api/student";

document.getElementById("add-form").addEventListener("submit",async(e)=>{
	e.preventDefault();
	
	const id=document.getElementById("id").value;
	const name=document.getElementById("name").value;
	const email=document.getElementById("email").value;
	const department=document.getElementById("course").value;
	
	const student={id,name,email,department};
	
	const res=await fetch(apiUrl,{
		method:"POST",
		headers:{"Content-Type":"application/json"},
		body:JSON.stringify(student),
	});
	
	if(res.ok){
		alert("Student Added Successfully...!");
		e.target.reset();
	}
	else{
		alert("Student Not Added");
	}
});