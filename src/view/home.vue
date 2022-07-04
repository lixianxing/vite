<script setup>
import tabbar from "../components/tabar.vue";
import Table from "../components/Table.vue";
import { ref } from "vue";
let tabList = ref([
  {
    id: 1,
    tabName: "年施耐德",
  },
  {
    id: 2,
    tabName: "asdas",
  },
  {
    id: 3,
    tabName: "达达",
  },
  {
    id: 4,
    tabName: "打色",
  },
]);
// let tabList = [1, 2, 3, 4, 5, 6];
let bg = ref("#fff");

function tabClose(index) {
  tabList.value.splice(index, 1);
}

function allClose() {
  tabList.value = [];
}

function leftClose(index) {
  tabList.value.splice(0, index);
}
function rightClose(index) {
  console.log(index);
  tabList.value.splice(index, 1);
}
</script>
<template>
  <div id="home">
    <tabbar
      :tabList="tabList"
      :bg-color="bg"
      @close="tabClose"
      @all-close="allClose"
      @left-close="leftClose"
      @right-close="rightClose"
    />
    <Table>
      <template #default>
        <div>默认</div>
      </template>
      <template #header>
        <div>header</div>
      </template>
      <template #footer>
        <div>footer</div>
      </template>
    </Table>
  </div>
</template>
<style lang="scss" scoped></style>
