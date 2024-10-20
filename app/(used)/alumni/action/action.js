export const handleSubmit=async(e)=>{
   

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/alumni`,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",  
                },
                body:JSON.stringify(e),
            }
        ).then(res=>res.json()).catch((err)=>{throw new Error(err)})
        console.log(response)
        return true
    } catch (error) {
        console.log(error)
        return {message:"Data is not valid"}
    }
}