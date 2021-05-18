<template>
    <body id="poster">
    <el-form class="login-container" label-position="left"
             label-width="0px">
        <h3 class="login_title">questions and answers</h3>
        <el-form-item>
            <el-input type="text" v-model="loginForm.username"
                      auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="password" v-model="loginForm.password"
                      auto-complete="off" placeholder="密码" @keyup.enter.native="login"></el-input>
        </el-form-item>

        <el-form-item prop="code">
            <el-col :span="11">
                <el-input placeholder="验证码" v-model="loginForm.code"></el-input>
            </el-col>
            <el-col class="line" :span="1">&nbsp;</el-col>
            <el-col :span="8">
                <!--加载验证码-->
                <img width="160px" @click="getCode"   :src="codeUrl"/>
            </el-col>
        </el-form-item>

        <el-form-item style="width: 100%">
            <el-button type="primary"  round style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
        </el-form-item>
    </el-form>
    </body>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                codeUrl:'',
                loginForm: {
                    username:'zt',
                    password:'123',
                    number:'',
                    realname:'',
                    code:'',
                    uid:''
                },
                responseResult:[]
            }
        },
        created() {
            this.getCode();
        }
        ,
        methods:{
            login(){
                this.$axios
                .post('/login',{
                    username:this.loginForm.username,
                    password:this.loginForm.password,
                    code:this.loginForm.code,
                    uid:this.loginForm.uid
                })
                .then(successCode =>{
                    console.log(successCode)

                    if (successCode.data.code == 401){
                        console.log("401 error")
                        this.getCode();

                        this.$notify.error({
                            title:'错误',
                            message: successCode.data.data
                        })
                    }
                    if (successCode.data.code === 200){
                        if (successCode.data.data  == 'taozi'){
                            this.$router.push('/oubao')
                            return
                        }



                        this.username = successCode.data.data
                        this.$router.push({name:'Appindex',params:{loginUserName:this.username}})

                        // eslint-disable-next-line no-empty
                    }else {
                        this.$alert(successCode.data.data, '提示', {
                            confirmButtonText: '确定'
                        })
                    }
                })
            },
            getCode(){
                console.log("!!!")
                this.$axios
                .get('/createImageCode',{
                }).then(res =>{

                    this.codeUrl = "data:image/gif;base64," + res.data.img;
                    this.loginForm.uid=res.data.uid;
                    console.log(this.uid)
                    }
                )
            }
        }
    }
</script>

<style scoped>

    #poster {
        background:url("../assets/eva.jpg") no-repeat;
        background-position: center;
        height: 100%;
        width: 100%;
        background-size: cover;
        position: fixed;
    }
    body{
        margin: 0px;
    }

    .login-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 90px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .login_title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }

</style>
