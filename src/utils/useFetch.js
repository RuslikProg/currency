import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import {getCurrency, getCurrencyError, getCurrencySuccess} from '../reducer';

export default function useFetch(url){
    const dispatch = useDispatch();

    useEffect(() => {
        (
            async function(){
                try{
                    dispatch(getCurrency())
                    const response = await axios.get(url)
                    dispatch(getCurrencySuccess(response.data))
                }catch(err){
                    dispatch(getCurrencyError())
                }finally{
                    dispatch(getCurrencyError())
                }
            }
        )()
    }, [url])
}