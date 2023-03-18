import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';


export const useEmployeeStore = defineStore('employee', () => {
  const empoyeeData = ref(null)
  const empoyeeDetails=ref(null)
  const respons_delete_code=ref(null)
 const isloading=ref(true)
 const isloading_oneValue=ref(true)
 async function fetchAllEmployeeData() {
    isloading.value=true
    await axios.get('https://dummyjson.com/users')
    .then((response)=>{
        empoyeeData.value=response.data.users
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        isloading.value=false
    })
  
  }

  async function fetchEmployeeDetail(id){
    isloading_oneValue.value=true
    await axios.get(`https://dummyjson.com/users/${id}`)
    .then((response)=>{
        empoyeeDetails.value=response.data
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
      isloading_oneValue.value=false
    })
    console.log(empoyeeDetails.value)
  }

  async function deleteEmployee(id) {
    await axios.delete(`https://dummyjson.com/users/${id}`).then((res) => {
        console.log("delete code:" , res.status)
             respons_delete_code.value = res.status
        })
}

  return { empoyeeData, empoyeeDetails,fetchAllEmployeeData,fetchEmployeeDetail,deleteEmployee,respons_delete_code, isloading ,isloading_oneValue}
})
