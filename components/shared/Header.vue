<template>
    <div class="header">
        <div class="content">
            <div class="logo">
                <div>
                    <img src="../../static/img/logo.png" class="img-logo">
                </div>
            </div>
            <div class="menu">
                <ul class="ul-menu">
                    <li class="li-menu">
                        Sự kiện
                    </li>
                    <div class="sub-menu">
                        <li class="li-sub-menu li-menu">
                            Thông tin dòng tộc <i class="el-icon-arrow-down" />
                            <ul class="ul-sub-menu">
                                <li>Cây gia phả</li>
                                <li>Thông tin</li>
                                <li>Ban liên lạc</li>
                                <li>Tìm mộ phần</li>
                            </ul>
                        </li>
                    </div>
                    <li class="li-menu">
                        Báo cáo
                    </li>
                    <div class="sub-menu">
                        <li class="li-sub-menu li-menu">
                            Thư viện <i class="el-icon-arrow-down" />
                            <ul class="ul-sub-menu">
                                <li>Thư viện ảnh</li>
                                <li>Tài liệu</li>
                            </ul>
                        </li>
                    </div>
                    <li class="li-menu">
                        Tin tức
                    </li>
                </ul>
            </div>
            <div class="info">
                <i class="el-icon-message-solid" />
                <div v-if="notAuth" class="notAuth">
                    <el-button class="btn-1">
                        Đăng nhập
                    </el-button>
                </div>
                <div v-else class="isAuth">
                    <span>Lê Văn Anh</span>
                    <div class="img-info">
                        <img src="../../static/img/avatar.jpeg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                notAuth: false,
            };
        },
    };
</script>
<style scoped>
    .header{
        box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
        width: 100vw;
        max-width: 1440px;
        background-color: #980C0F;
        line-height: 72px;
        position: fixed;
        z-index: 50;
    }
    .logo{
        margin-right: 50px;
    }
    .img-logo{
        margin: 12px 0 12px 50px;
    }
    .content{
        display: flex;
        justify-content: space-around;
    }
    .menu{
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        color: white;
        margin-right: 120px;
    }
    .ul-menu{
        display: flex;
        justify-content: space-around;
    }
    .ul-menu .li-menu:hover{
        font-weight: bold;
        color: #F1BC66;
    }
    .ul-menu .li-menu:hover .el-icon-arrow-down{
        transform: rotate(180deg)
    }
    li{
        margin-right: 32px;
    }
    .sub-menu {
        position: relative;
        color: white;
    }
    .li-sub-menu:hover .ul-sub-menu {
        display: block;
    }
    .ul-sub-menu {
        width: 180px;
        position: absolute;
        display: none;
        top: 80px;
        border-radius: 8px;
        padding: 8px 0 8px 0;
        background-color: #980C0F;
    }
    .ul-sub-menu li{
        width: 100%;
        color: white;
        height: 58px;
        padding-left: 24px;
        line-height: 58px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .ul-sub-menu li:hover{
        background-color: #AD3D3F;
        font-weight: bold;
    }
    .info{
        color: #fffffF;
        display: flex;
    }
    .notAuth{
    }
    .btn-1{
        width: 146px;
        height: 48px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        color: white;
        background-color: #E79000;
        border: none;
        border-radius: 4px;
    }
    .isAuth{
        display: flex;
    }
    .el-icon-message-solid{
        color: #fff;
        font-size: 20px;
        line-height: 72px;
        margin-right: 43.25px;
    }
    span{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
    }
    .img-info{
        line-height: 72px;
    }
    .img-info img{
        margin: 12px 0 12px 16px;
        width: 48px;
        height: 48px;
        border-radius: 50px;
    }
</style>
