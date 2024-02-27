import axios, { AxiosPromise } from "axios"
import { Food } from "../interface/Food";
import { useQuery } from "@tanstack/react-query";

const apiUrl = "http://localhost:8000"

const fetchData = async (): AxiosPromise<Food[]> => {
    const response = axios.get(apiUrl + '/food/list');
    return response;
}

export function useFooddata(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}