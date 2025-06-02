
import type { Employee } from "../../store/employee/employee.types";
import baseApi from "../api";

export const employeeApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getEmployeeList:builder.query({
            query:()=>'/employee',
            providesTags:['EMPLOYEES']
        }),
        getEmployeeById:builder.query({
            query:({id})=>({
                url:`/employee/${id}`,
                method:'GET'
            })
        }),
        deleteEmployee:builder.mutation({
            query:({id})=>({
                url:`/employee/${id}`,
                method:'DELETE'
            }),
            invalidatesTags:['EMPLOYEES']
        }),
        createEmployee:builder.mutation({
            query:(payload)=>({
                url:'/employee',
                method:'POST',
                body:payload
            })
        }),
        updateEmployee:builder.mutation({
            query:({id, payload})=>({
                url:`/employee/${id}`,
                method:'PUT',
                body:payload
            })
        })
    })
})

export const {useGetEmployeeListQuery,useDeleteEmployeeMutation,useGetEmployeeByIdQuery,useCreateEmployeeMutation,useUpdateEmployeeMutation}=employeeApi;