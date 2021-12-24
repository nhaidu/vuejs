<template>
    <div class="sidebar">
        <div class="img-avatar" />
        <div class="name">
            <img src="../../static/img/name.png" alt="">
        </div>
        <div class="level">
            Trưởng họ
        </div>
        <div class="sub-level">
            <span>Đời thứ 8</span>
            <span>27 tuổi</span>
        </div>
        <div class="codeacc">
            Mã tài khoản: 168567
        </div>
        <div class="link">
            <a href="#">Thông tin cá nhân</a>
        </div>
        <div class="link">
            <a href="#">Thêm người thân</a>
        </div>
        <div class="footer">
            <div class="repass">
                <a href="#">Đổi mật khẩu</a>
            </div>
            <div class="btn">
                <el-button>Đăng xuất</el-button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .sidebar{
        background-color: #980C0F;
        min-height: 1024px;
        width: 240px;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 10;
    }
    .img-avatar{
        margin: 0 auto;
        margin-top: 170px;
        border: 2px solid #E9A90A;
        background-image: url('../../static/img/avatar.jpeg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 100px;
        width: 160px;
        height: 160px;
        box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .name{
        margin: 0 auto;
        margin-top: 24px;
    }
    .level{
        width: 79px;
        text-align: center;
        height: 28px;
        margin: 0 auto;
        margin-top: 16px;
        background-color: #FAE9CC;
        color: #E79000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 28px;
        border-radius: 100px;
    }
    .sub-level{
        width: 189px;
        height: 26px;
        margin: 0 auto;
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
    }
    .codeacc{
        margin: 0 auto;
        margin-top: 16px;
        width: 189px;
        height: 34px;
        border-radius: 8px;
        background-color: #E79000;
        color: #191B28;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        line-height: 34px;
        margin-bottom: 32px;
    }
    .link{
        margin-top: 24px;
        width: 176px;
        height: 26px;
        color: white;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        margin: 0 auto;
        margin-top: 16px;

    }
    .footer{
        position: absolute;
        bottom: 32px;
    }
    .repass{
        margin-top: 24px;
        width: 176px;
        height: 26px;
        color: white;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        margin: 0 auto;
    }
    .el-button{
        width: 181px;
        height: 48px;
        background: #E79000;
        border-radius: 4px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 26px;
        color: white;
        border: none;
        margin-left: 32px;
        margin-top: 16px;
    }
</style>
