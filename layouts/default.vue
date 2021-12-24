<template>
    <div class="container">
        <Header></Header>
        <nuxt />
    </div>
</template>
<script>
    import Header from '../components/shared/Header.vue';

    export default {
        components: {
            Header,
        },
    };
</script>
<style scoped>

</style>
