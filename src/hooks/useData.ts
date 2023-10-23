import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
 

interface FetchDataRespons<T>{
    count:number;
    results:T[];
}

const useData = <T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[])=>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState();
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const controller = new AbortController()
      apiClient
        .get<FetchDataRespons<T>>(endpoint,{signal:controller.signal,...requestConfig})
        .then((res) => {
            setData(res.data.results)
            setLoading(false)
        })
        .catch((err) => {
            if(err instanceof CanceledError) return
            setError(err.message)
            setLoading(false)
        })
        return () => controller.abort()


    }, deps?[...deps]:[]);
 
    return {data,error,loading}
}

export default useData