export const handleSubmit=async(e)=>{
    console.log(e)
   if(!e?.name){
        return {message:"Name is required"}
   }
    if(!e?.angkatan){
          return {message:"Angkatan is required"}
    }
    if(!e?.jurusan){
          return {message:"Jurusan is required"}
    }
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/alumni`,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",  
                },
                body:JSON.stringify(e),
            }
        ).then(res=>res.json())
        console.log(response)
        if(response?.message){
            alert(response.message)
        }
        return true
    } catch (error) {
        console.log(error)
        if(error?.message){
            alert(error.message)
        }
        alert("Failed to submit")
    }
}