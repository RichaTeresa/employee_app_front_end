import baseApi from "../api";

export const departmentApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getDepartmentList:builder.query({
            query:()=>'/department'
        }),
    })
})

export const {useGetDepartmentListQuery}=departmentApi