<template>
    <div class="content">
        <el-row class="sub">
            <span>Trang chủ</span>
            <span>></span>
            <span>Cá nhân</span>
            <span>></span>
            <span>Thông tin cá nhân</span>
        </el-row>
        <el-row class="title">
            <img src="../../../static/img/info.png" alt="">
        </el-row>
        <el-row class="btn">
            <button>Thông tin cá nhân</button>
            <button class="active">
                Quan hệ gia đình
            </button>
            <button>Học vấn & nghề nghiệp</button>
        </el-row>
        <el-row class="tab">
            <img src="../../../static/img/relaship.png" alt="" class="img-rela">
            <el-row>
                <span class="span1">Vợ / Chồng</span>
            </el-row>
            <el-row>
                <span class="span2">Lê Văn Lộc</span>
            </el-row>
            <el-row>
                <span class="span3">2/9/1954 - 20/4/2003</span>
            </el-row>
            <el-row>
                <span class="span4">Đời thứ 7 - Chi thứ 2</span>
            </el-row>
        </el-row>
    </div>
</template>
<script>
    export default {
        layout: 'profile',
    };
</script>
<style scoped>
    .content{
        width: 768px;
        margin: 104px 0 0 226px;
        display: block;
    }
    span{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        margin-right: 13.67px;
        color:#606266;;
    }
    span:last-child{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
    }
    .sub{
        margin-bottom: 24px;
    }
    .title{
        display: flex;
        justify-content: center;
        margin-bottom: 24px;
    }
    .btn{
        display: flex;
        justify-content: center;
    }
    button{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        color: #474953;
        padding: 10px 40px;
    }
    button.active{
        background-color: #BF1014;
        color: #ffffff;
        border-radius: 20px 20px 0px 0px;
    }
    .tab{
        background-color: #ffffff;
        width: 768px;
        height: 610px;
        padding: 40px 40px 40px 40px;
    }
    .img-rela{
        margin-bottom: 16px;
    }
</style>
