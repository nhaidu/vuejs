<template>
    <div class="resgister">
        <img src="../../static/img/bgtop.png" alt="">
        <div class="resgister-body">
            <div class="content">
                <div class="content-left">
                    <div class="img-dragon">
                        <img src="../../static/img/dragon.png" alt="">
                    </div>
                </div>
                <div class="content-right">
                    <el-row class="text">
                        <div class="check">
                            <span class="text-1">Bạn đã có tài khoản?</span>
                            <span class="text-2">Đăng nhập</span>
                        </div>
                    </el-row>
                    <el-row class="detail">
                        <img src="../../static/img/detail.png" alt="">
                    </el-row>
                    <el-row v-model="code" class="text-sub">
                        <p class="sub">
                            Nhập mã tài khoản để đăng ký nhanh. Mã tài khoản là mã được thành viên trong dòng họ đã tạo giúp bạn
                        </p>
                    </el-row>
                    <el-row>
                        <el-input placeholder="Nhập mã tài khoản" v-model="code"></el-input>
                    </el-row>
                    <el-row>
                        <el-button class="btn-5">
                            Xác nhận
                        </el-button>
                    </el-row>
                    <el-row class="tex-6">
                        <a class="text-6">
                            Bỏ qua
                        </a>
                    </el-row>
                </div>
            </div>
        </div>
        <img src="../../static/img/bgbottom.png" alt="">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                code: '',
            };
        },
    };
</script>

<style scoped>
* {
    margin: 0;
    padding: auto;
    list-style: none;
    text-decoration: none;
}

.resgister {
    background-color: #980C0F;
}

.resgister-body {}

.content {
    margin: 69px auto;
    width: 856px;
    height: 600px;
    display: flex;
}

.content-left {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    justify-content: center;
    height: 600px;
    width: 328px;
    background-color: #BF1014;
}

.img-dragon {
    margin: 167px auto;
}

.content-right {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #FEF9F2;
    width: 528px;
}

.text {
    margin-bottom: 62px;
    margin-top: 24px;
}

.check {
    float: right;
    padding-right: 48px;
}

.text-1 {
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #75767E;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    margin-right: 8px;
}

.text-2 {
    color: #E79000;
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
}

.detail {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

.text-sub.el-row {
    padding: 0 48px;
    margin-bottom: 40px;
}

.sub {
    font-size: 16px;
    font-weight: 400;
    color: #75767E;
    text-align: justify;
}

.el-input {
    margin-left: 48px;
    width: 432px;
    height: 48px;
    color: A3A4A9;
    font-weight: 700;
    font-size: 16px;
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 26px;
    margin-bottom: 40px;
}

.btn-5 {

    margin-left: 48px;
    width: 432px;
    height: 48px;
    color: white;
    font-weight: 700;
    font-size: 18px;
    background-color: #BF1014;
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 26px;
    margin-bottom: 40px;
}

.tex-6 {
    text-align: center;
}

.text-6 {
    color: #BF1014;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
