<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<script>
export default {

}
</script>

<style scoped>
dialog {
    position: fixed;
    top: 20vh;
    left: 30%;
    width: 40%;
    border: 1px solid red;
    padding: 1rem;
    margin: 0;
    background-color: #f8d7da;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    color: #721c24;
}
</style>