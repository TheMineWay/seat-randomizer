<script lang="ts" setup>
import { ref } from "vue";
import { AssignedStudentModel } from "../../../models/students/assigned-student.model";
import { StudentModel } from "../../../models/students/student.model";
import { FirebaseDocModel } from "../../../models/utils/firebase/firebase-doc.model";
import { StudentSitesService } from "../../../services/app/sites/student-sites.service";
import { StudentsService } from "../../../services/app/students/students.service";
import StudentEntity from "./StudentEntity.vue";

const studentsState = ref<FirebaseDocModel<StudentModel>[]>([]);
const studentSitesState = ref<FirebaseDocModel<AssignedStudentModel>[]>([]);
const enableDeleteState = ref<boolean>(false);

StudentsService.onStudentsChange((data) => (studentsState.value = data));
StudentSitesService.onStudentsSitesChange(
  (data) => (studentSitesState.value = data)
);
</script>

<template>
  <a-row :gutter="[24, 24]">
    <a-col span="24">
      <a-row :gutter="[12, 12]">
        <a-col>
          <a-switch v-model:checked="enableDeleteState" />
        </a-col>
        <a-col>
          <p>{{ $t("classViewer.enableDelete.Text") }}</p>
        </a-col>
      </a-row>
    </a-col>
    <a-col span="24">
      <div class="container">
        <a-row :gutter="[24, 24]">
          <!-- Left tables -->
          <a-col lg="8" xs="24">
            <a-row :gutter="[24, 24]">
              <a-col span="24">
                <table border="1">
                  <tr>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="0"
                      />
                    </td>
                    <th rowspan="6"></th>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="1"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="2"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="3"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="4"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="5"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="6"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="7"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="8"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="9"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="10"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="11"
                      />
                    </td>
                  </tr>
                </table>
              </a-col>
              <a-col>
                <table border="1">
                  <tr>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="12"
                      />
                    </td>
                    <th rowspan="2"></th>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="13"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="14"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="15"
                      />
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
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="16"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="17"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="18"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="19"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="20"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="21"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th colspan="6"></th>
                  </tr>
                  <tr>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="22"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="23"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="24"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="25"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="26"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="27"
                      />
                    </td>
                  </tr>
                </table>
              </a-col>
              <a-col span="24">
                <table border="1">
                  <tr>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="28"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="29"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="30"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="31"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="32"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="33"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th colspan="6"></th>
                  </tr>
                  <tr>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="34"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="35"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="36"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="37"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="38"
                      />
                    </td>
                    <td>
                      <StudentEntity
                        :assigned-students="studentSitesState"
                        :students="studentsState"
                        :enableDelete="enableDeleteState"
                        :number="39"
                      />
                    </td>
                  </tr>
                </table>
              </a-col>
            </a-row>
          </a-col>
        </a-row></div
    ></a-col>
  </a-row>
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
