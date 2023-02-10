<script lang="ts" setup>
// 40 seats
</script>

<template>
  <div class="container">
    <a-row :gutter="[24, 24]">
      <!-- Left tables -->
      <a-col lg="8" xs="24">
        <a-row :gutter="[24, 24]">
          <a-col span="24">
            <table border="1">
              <tr>
                <td>#</td>
                <th rowspan="6"></th>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
              </tr>
            </table>
          </a-col>
          <a-col>
            <table border="1">
              <tr>
                <td>#</td>
                <th rowspan="2"></th>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
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
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <th colspan="6"></th>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
            </table>
          </a-col>
          <a-col span="24">
            <table border="1">
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <th colspan="6"></th>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
            </table>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
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
