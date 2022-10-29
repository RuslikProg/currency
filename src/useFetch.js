import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url){

    const [dataTest,setDataTest] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const response = await axios.get(url)
                    setDataTest(response.data)
                }catch(err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return { dataTest, error, loading }
}