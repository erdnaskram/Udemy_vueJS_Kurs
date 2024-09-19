<template>
    <section>
        <h2>Active User: {{ user.name }}</h2>
        <h3>Age: {{ user.age }}</h3>
    </section>
</template>
<script>
export default {
    name: 'ActiveUser',
    props: {
        user: {
            type: Object,
            required: true,
            default: () => {
                return {
                    name: '',
                    age: 0
                }
            },
            validator: (value) => {
                return typeof value.name === 'string'
                    && typeof value.age === 'number';
            }
        }
    }
}
</script>