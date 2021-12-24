<template>
    <div class="resgister-succes">
        <img src="../../../static/img/bgtop.png" alt="">
        <div class="resgister-succes-body">
            <div class="register-succes-content">
                <img src="../../../static/img/dragoncenter.png" alt="" class="img-main">
                <div class="frame">
                    <el-row><img src="../../../static/img/succes.png" class="img-succes" alt=""></el-row>
                    <el-row>
                        <span>Chúc mừng bạn đã đăng ký thành công, Ông Nguyễn Văn Anh - Trưởng họ sẽ xem xét và duyệt tài khoản của bạn trong thời gian ngắn nhất.</span>
                    </el-row>
                    <el-row>
                        <span>Nếu việc chờ duyệt quá lâu, bạn có thể liên hệ Ông Nguyễn Văn Anh để biết thêm thông tin chi tiết.</span>
                    </el-row>
                    <el-row>
                        <el-button class="btn-5" icon="el-icon-phone">
                            0986.568.475
                        </el-button>
                    </el-row>
                </div>
            </div>
        </div>
        <img src="../../../static/img/bgbottom.png" alt="">
    </div>
</template>

<script>
    export default {
        layout: 'auth',
    };
</script>

<style scoped>
* {
    margin: 0;
    padding: auto;
    list-style: none;
    text-decoration: none;
}
.resgister-succes {
    margin: 0 auto;
    background-color: #FEF9F2;
    max-width: 1440px;
}
.resgister-succes-body{
    display: flex;
    justify-content: center;
}
.register-succes-content{
    position: relative;
    width: 529px;
    display: inline;
    margin: 104px 0 104px 0;
}
.frame{
    position:absolute;
    top:110px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}
.frame img{
    width: 210px;
    height: 76px;
    display: inline;
}
span{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #252733;
}
.el-row{
    margin-bottom: 16px;
    text-align: center;
}
.btn-5{
    background-color: #E79000;
    width: 552px;
    height: 48px;
    margin-top: 34px;
    border-radius: 4px;
    padding: 11px 10px 11px 10px;
    color: #FFFFFF;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
}
</style>
