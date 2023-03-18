<script setup>
import { onBeforeMount, watchEffect } from "vue";
import { useEmployeeStore } from "../../stores/employees.js";
import InputFeild from '../../components/InputFeild.vue'
import { inject } from "vue";

const employeeStore = useEmployeeStore();
const swal = inject("$swal");
onBeforeMount(() => {
  employeeStore.fetchAllEmployeeData();
});

const showEmployeeDetail = (id) => {
  employeeStore.fetchEmployeeDetail(id)
}

const deleteSelectedEmployee = (id) => {
  employeeStore.deleteEmployee(id)
 
}

watchEffect(()=>{
  let code = employeeStore.respons_delete_code;
  console.log("employeeStore.respons_delete_code:", employeeStore.respons_delete_code)
  employeeStore.respons_delete_code = 0;
  if(code == 200){
    swal({
      title: "Successfully Deleted!",
      text: "Notice that data is deleted successfully but data don't remove from server so you can't see this " ,
      icon: "success"
    })
  }
})

</script>
<template>
  <div>
    <h1 v-if="employeeStore.isloading">
      <p class="card-text placeholder-glow">
      <span class="placeholder col-12"></span>
      <span class="placeholder col-12"></span>
      <span class="placeholder col-12"></span>
      <span class="placeholder col-12"></span>
      <span class="placeholder col-12"></span>
    </p>
    </h1>
    <table v-else>
      <caption>Employees Information</caption>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Age</th>
        <th>University</th>
        <th>Action</th>
      </tr>
      <tr v-for="employee in employeeStore.empoyeeData" :key="employee.id">
        <td>{{ employee.firstName + " " + employee.lastName }}</td>
        <td>{{ employee.email }}</td>
        <td>{{ employee.phone }}</td>
        <td>{{ employee.age }}</td>
        <td>{{ employee.university }}</td>
        <td>
          <button @click="deleteSelectedEmployee(employee.id)" class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DC3545" class="bi bi-trash-fill"
              viewBox="0 0 16 16">
              <path
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
          <button @click="showEmployeeDetail(employee.id)" class="btn" data-bs-toggle="modal"
            data-bs-target="#showEmpoyeeModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0DCAF0" class="bi bi-eye-fill"
              viewBox="0 0 16 16">
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
          </button>
          <!-- show employee Modal -->
          <div class="modal fade" id="showEmpoyeeModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Employee Detail</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <h5 v-if="employeeStore.isloading_oneValue ">loading .......</h5>
                  <template v-if="employeeStore.empoyeeDetails">

                    <InputFeild label="Name"  :value="employeeStore.empoyeeDetails.firstName +' ' + employeeStore.empoyeeDetails.lastName" />
                    <InputFeild label="Email"  :value="employeeStore.empoyeeDetails.email" />
                    <InputFeild label="Phone"  :value="employeeStore.empoyeeDetails.phone" />
                    <InputFeild label="Age"  :value="employeeStore.empoyeeDetails.age" />
                    <InputFeild label="University"  :value="employeeStore.empoyeeDetails.university" />

                  </template>
                 <!-- <div>{{employeeStore.empoyeeDetails.firstName}}</div> -->
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th,
td {
  text-align: center;
  padding: 16px;
  font-size: 14px;
}

th:first-child,
td:first-child {
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
caption{
    caption-side: top;
}
</style>