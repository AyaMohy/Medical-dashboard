import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';


export const usePatientStore = defineStore('patient', () => {
  const patientData = ref(null)
  const patientDetails=ref(null)
  const respons_delete_code=ref(null)
 const isloading=ref(true)
 const isloading_oneValue=ref(true)
 async function fetchAllPatientData() {
    isloading.value=true
    await axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        patientData.value=response.data
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        isloading.value=false
    })
  
  }

  async function fetchPatientDetail(id){
    isloading_oneValue.value=true
    await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>{
        patientDetails.value=response.data
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
      isloading_oneValue.value=false
    })
    console.log(patientDetails.value)
  }

  async function deletePatient(id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
        console.log("delete code:" , res.status)
             respons_delete_code.value = res.status
        })
}

  return { patientData, patientDetails,fetchAllPatientData,fetchPatientDetail,deletePatient,respons_delete_code, isloading ,isloading_oneValue}
})
