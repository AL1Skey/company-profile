export const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/alumni`,
            {
                method:"POST",
                body:e
            }
        ).then(res=>res.json()).catch((err)=>{throw new Error(err)})
        return true
    } catch (error) {
        return {message:"Data is not valid"}
    }
}