import axios, { AxiosPromise } from "axios"
import { Food } from "../interface/Food";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const apiUrl = "http://localhost:8000"

const fetchData = async (data: Food): AxiosPromise<any> => {
    const response = axios.post(apiUrl + '/food/new', data);
    return response;
}

export function useFoodDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: fetchData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate;
}