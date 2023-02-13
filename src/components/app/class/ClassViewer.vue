<script lang="ts" setup>
import { ref } from "vue";
import { StudentModel } from "../../../models/students/student.model";
import { FirebaseDocModel } from "../../../models/utils/firebase/firebase-doc.model";
import { StudentsService } from "../../../services/app/students/students.service";
import StudentCard from "../students/StudentCard.vue";
import StudentEntity from "./StudentEntity.vue";

const studentsState = ref<FirebaseDocModel<StudentModel>[]>();

StudentsService.onStudentsChange((data) => (studentsState.value = data));
</script>

<template>
  <a-row :gutter="[12, 12]">
    <a-col v-if="studentsState">
      <div v-for="student of studentsState" :key="student.id" span="24">
        <StudentCard :student="student" />
      </div>
    </a-col>
  </a-row>
  <div class="container" v-if="studentsState">
    <a-row :gutter="[24, 24]">
      <!-- Left tables -->
      <a-col lg="8" xs="24">
        <a-row :gutter="[24, 24]">
          <a-col span="24">
            <table border="1">
              <tr>
                <td>
                  <StudentEntity :students="studentsState" :number="0" />
                </td>
                <th rowspan="6"></th>
                <td>
                  <StudentEntity :students="studentsState" :number="1" />
                </td>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="studentsState" :number="2" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="3" />
                </td>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="studentsState" :number="4" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="studentsState" :number="6" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="7" />
                </td>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="studentsState" :number="8" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="9" />
                </td>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="studentsState" :number="10" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="11" />
                </td>
              </tr>
            </table>
          </a-col>
          <a-col>
            <table border="1">
              <tr>
                <td>
                  <StudentEntity :students="studentsState" :number="12" />
                </td>
                <th rowspan="2"></th>
                <td>
                  <StudentEntity :students="studentsState" :number="13" />
                </td>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="studentsState" :number="14" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="15" />
                </td>
              </tr>
            </table>
          </a-col>
        </a-row>
      </a-col>
      <!-- Right tables -->
      <a-col lg="16" xs="24">
        <a-row :gutter="[24, 24]">
          <a-col span="24">
            <table border="1">
              <tr>
                <td>
                  <StudentEntity :students="studentsState" :number="16" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="17" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="18" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="19" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="20" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="21" />
                </td>
              </tr>
              <tr>
                <th colspan="6"></th>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="studentsState" :number="22" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="23" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="24" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="25" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="26" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="27" />
                </td>
              </tr>
            </table>
          </a-col>
          <a-col span="24">
            <table border="1">
              <tr>
                <td>
                  <StudentEntity :students="studentsState" :number="28" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="29" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="30" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="31" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="32" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="33" />
                </td>
              </tr>
              <tr>
                <th colspan="6"></th>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="studentsState" :number="34" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="35" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="36" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="37" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="38" />
                </td>
                <td>
                  <StudentEntity :students="studentsState" :number="39" />
                </td>
              </tr>
            </table>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
  <div v-else>...</div>
</template>

<style>
td {
  padding: 2.5em;
}
th {
  background-color: orange;
  padding: 5em;
}
.container {
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
table {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}
</style>
