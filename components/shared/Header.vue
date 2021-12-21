<template>
    <div class="header">
        <div class="content">
            <div class="header-logo">
                <img src="../../static/img/logo.png" alt="">
            </div>
            <div class="menu">
                <div>
                    <a>Sự kiện</a>
                </div>
                <div class="title-sub-menu">
                    <a>Thông tin dòng tộc</a>
                    <div class="sub-menu">
                        <ul>
                            <li>Cây gia phả</li>
                            <li>Thông tin</li>
                            <li>Ban liên lạc</li>
                            <li>Tìm phần mộ</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <a>Báo cáo</a>
                </div>

                <div>
                    <a>Thư viện</a>
                </div>

                <div>
                    <a>Tin tức</a>
                </div>
            </div>
            <div class="end">
                <el-button>Đăng nhập</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>

<style scoped>
.header {
    height: 72px;
    background-color: #980C0F;
    text-align: center;
    line-height: 72px;
    display: flex;
    justify-content: center;
}
.content{
    width: 80%;
    display: flex;
    justify-content: space-around;
}
.header-logo {
    width: 20%;
    margin: auto 0;
}

.menu {
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: white;
    display: flex;
    width: 50%;
    justify-content: space-between;
}
.title-sub-menu:hover .sub-menu{
    display: block;
}
.sub-menu{
    display: none;
    position: relative;
    top: 10px;
    left: 20px;
    background-color: #980C0F;
    border-radius: 7px;
}
ul{
    padding-top: 10px;
    padding-bottom: 10px;
}

.sub-menu li{
    padding-left: 24px;
    text-align: left;
    width: 180px;
    font-size: 16px;
    line-height: 58px;

}
.sub-menu li:hover{
    font-weight: bold;
    background-color: #AD3D3F;
}
.el-button {
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 146px;
    height: 48px;
    background-color: #E79000;
    border: none;
    border-radius: 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: white;
}
.end{
    width: 20%;
}
</style>
