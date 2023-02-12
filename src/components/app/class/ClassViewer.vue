<script lang="ts" setup>
import { ref } from "vue";
import { StudentModel } from "../../../models/students/student.model";
import { FirebaseDocModel } from "../../../models/utils/firebase/firebase-doc.model";
import { StudentsService } from "../../../services/app/students/students.service";
import StudentEntity from "./StudentEntity.vue";

// 40 seats

const students = ref<{ students: FirebaseDocModel<StudentModel>[] | null }>({
  students: null,
});
console.log({ students });

StudentsService.onStudentsChange(
  (data) => (students.value = { students: data })
);
</script>

<template>
  <div class="container" v-if="students.students !== null">
    <a-row :gutter="[24, 24]">
      <!-- Left tables -->
      <a-col lg="8" xs="24">
        <a-row :gutter="[24, 24]">
          <a-col span="24">
            <table border="1">
              <tr>
                <td>
                  <StudentEntity :students="students.students" :number="0" />
                </td>
                <th rowspan="6"></th>
                <td>
                  <StudentEntity :students="students.students" :number="1" />
                </td>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="students.students" :number="2" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="3" />
                </td>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="students.students" :number="4" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="5" />
                </td>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="students.students" :number="6" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="7" />
                </td>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="students.students" :number="8" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="9" />
                </td>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="students.students" :number="10" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="11" />
                </td>
              </tr>
            </table>
          </a-col>
          <a-col>
            <table border="1">
              <tr>
                <td>
                  <StudentEntity :students="students.students" :number="12" />
                </td>
                <th rowspan="2"></th>
                <td>
                  <StudentEntity :students="students.students" :number="13" />
                </td>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="students.students" :number="14" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="15" />
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
                  <StudentEntity :students="students.students" :number="16" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="17" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="18" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="19" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="20" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="21" />
                </td>
              </tr>
              <tr>
                <th colspan="6"></th>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="students.students" :number="22" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="23" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="24" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="25" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="26" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="27" />
                </td>
              </tr>
            </table>
          </a-col>
          <a-col span="24">
            <table border="1">
              <tr>
                <td>
                  <StudentEntity :students="students.students" :number="28" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="29" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="30" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="31" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="32" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="33" />
                </td>
              </tr>
              <tr>
                <th colspan="6"></th>
              </tr>
              <tr>
                <td>
                  <StudentEntity :students="students.students" :number="34" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="35" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="36" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="37" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="38" />
                </td>
                <td>
                  <StudentEntity :students="students.students" :number="39" />
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
