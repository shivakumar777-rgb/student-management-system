const apiUrl="http://localhost:8086/api/student";

async function deleteStudent(){
	const id=document.getElementById("delete-id").value;
	const res=await fetch(`${apiUrl}/${id}`,{
		method:"DELETE",
	});
	if(res.ok){
		alert("Student Deleted Successfully...");
	}else if(res===404){
		alert("student not found")
	}
	
	else{
		alert("Failed to delete student");
	}
}