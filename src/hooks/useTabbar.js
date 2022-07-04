import { reactive, ref } from "vue";



let useProps = reactive({
    isIndex: 0,
    showDialog: false,
    style: '',
    recordIndex: 0
})

function handleClick(e) {
    useProps.isIndex = e;
}

let useFun = {
    handleClick
}
export { useProps, useFun };
