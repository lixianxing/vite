<script setup>
import { defineEmits, toRefs, toRef } from "vue";
import { useFun, useProps } from "../hooks/useTabbar";

console.log(useProps, useFun);
let emit = defineEmits([
  "show",
  "close",
  "allClose",
  "leftClose",
  "rightClose",
]);
let props = defineProps({
  tabList: {
    type: Array,
    required: true,
  },
  bgColor: {
    type: String,
    required: false,
  },
});
let { tabList, bgColor } = toRefs(props);

useProps.style = `background: ${bgColor.value};`;

function show(e) {
  console.log(e);
  if (e.target && e.target.nodeName.toUpperCase() == "LI") {
    useProps.recordIndex = e.target.dataset.index;
  }
  useProps.showDialog = false;
  setTimeout(() => {
    useProps.showDialog = true;
  }, 200);
}

function leftClose() {
  emit("leftClose", useProps.recordIndex);
}

function tabClose(index) {
  emit("close", index);
}

function allClose() {
  emit("allClose");
  useProps.showDialog = false;
}

function rightClose() {
  emit("rightClose", useProps.recordIndex);
}
</script>

<template>
  <div>
    <ul class="tab-content" @contextmenu.prevent="show">
      <li
        v-for="(item, index) in tabList"
        :key="item.id"
        :data-index="index"
        :class="['tab-item', { active: index === useProps.isIndex }]"
        :style="useProps.style"
        @click="useFun.handleClick(index)"
      >
        <div>{{ item.tabName }}</div>
        <div class="close" @click="tabClose(index)"></div>
      </li>
    </ul>
  </div>
  <teleport v-if="useProps.showDialog" to="body">
    <ul class="menu-list">
      <li class="menu-item" @click="allClose">关闭所有</li>
      <li class="menu-item" @click="leftClose">关闭左侧</li>
      <li class="menu-item" @click="rightClose">关闭右侧</li>
    </ul>
  </teleport>
</template>

<style lang="scss" scoped>
.tab-content {
  list-style: none;
  margin: 0;
  display: flex;
  padding: 5px;
  box-shadow: 1px 1px 5px 1px rgb(148, 133, 133);

  .tab-item {
    width: 100px;
    height: 30px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 3px;
    border-radius: 5px;
    transition: all 0.3s;
    &:hover .close {
      display: block;
    }
    .close {
      display: none;
      width: 20px;
      height: 20px;
      background-image: url("../images/close.png");
      background-size: 20px 20px;
      &:hover {
        transform: scale(1.05);
        // background-image: url("../images/close\ \(1\).png");
        cursor: pointer;
      }
    }
  }

  .active {
    color: #fff;
    font-size: 16px;
    background-color: rgb(230, 143, 137) !important;
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
