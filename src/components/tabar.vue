<script setup>
import Dialog from "./dialog.vue";
import { defineEmits } from "vue";
import { isIndex, tabList, handleClick, showDialog } from "../hooks/useTabbar";
let emit = defineEmits(["show"]);
function show(e) {
  emit("show", tabList.value);
  showDialog.value = false;
  setTimeout(() => {
    showDialog.value = true;
  }, 200);
}

function close() {
  console.log(111);
}
window.onclick = function () {
  showDialog.value = false;
};
</script>

<template>
  <div>
    <ul class="tab-content" @contextmenu.prevent="show">
      <li
        v-for="(item, index) in tabList"
        :class="['tab-item', { active: index === isIndex }]"
        @click="handleClick(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
  <!-- <Dialog v-if="showDialog" title="3333">
   
  </Dialog> -->

  <teleport v-if="showDialog" to="body">
    <ul class="menu-list">
      <li class="menu-item" @click="close">关闭所有</li>
      <li class="menu-item">关闭左侧</li>
      <li class="menu-item">关闭右侧</li>
    </ul>
  </teleport>
</template>

<style lang="scss" scoped>
.tab-content {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  background-color: gray;
  padding: 5px 0;

  .tab-item {
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin: 0 3px;
    border-radius: 5px;
    transition: all 0.3s;
  }

  .active {
    background-color: rgb(39, 214, 226);
    transform: scale(1.05);
  }
}
</style>

<style lang="scss">
.menu-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110px;
  list-style: none;
  padding: 10px 0 0 0;
  margin: 0;
  border-radius: 5px;
  box-shadow: 1px 1px 3px 1px gray, -1px -1px 3px 1px gray;
  font-size: 14px;
  .menu-item {
    width: 100px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 5px;
    transition: all 0.2s;
    &:hover {
      cursor: pointer;
      box-shadow: 1px 1px 3px 1px gray, -1px -1px 3px 1px gray;
      font-weight: 600;
    }
  }
}
</style>
