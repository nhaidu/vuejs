<template>
    <div class="profile">
        <Header />
        <img src="@/static/img/bgtop.png" alt="" class="img-top">
        <img src="@/static/img/Group.png" alt="" class="img-center">
        <div class="body">
            <div class="content">
                <Sidebar />
                <nuxt />
            </div>
            <img src="@/static/img/bgbottom.png" alt="" class="img-bottom">
        </div>
    </div>
</template>
<script>
    import Header from '../components/shared/Header.vue';
    import Sidebar from '../components/shared/LeftSideBar.vue';

    export default {
        components: {
            Header,
            Sidebar,
        },
    };

</script>
<style scoped>
    .profile{
        max-width: 1440px;
        margin: 0 auto;
        position: relative;
        background-color: #FEF9F2;
    }
    .img-center{
        margin: 0 auto;
        margin-top: 92px;
        height: 754px;
        width: 754px;
    }
    .body{
        position: absolute;
        top: 0;
    }
    .content{
        display: flex;
    }
    .img-bottom{
        position: relative;
        top: -143px;
    }
</style>
