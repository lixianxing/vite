import { ref } from "vue";
let isIndex = ref(0);
let tabList = ref([1, 2]);
let showDialog = ref(false);



function handleClick(e) {
    isIndex.value = e;
}


export { isIndex, tabList, handleClick, showDialog };
