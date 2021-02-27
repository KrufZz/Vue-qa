<template>
 <div>
     <link rel="preconnect" href="https://fonts.gstatic.com">
     <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
     温度:{{weathers.temp}}
     天气:{{weathers.text}}
     名字:{{username}}
            <el-input type="text" v-model="issues.question" auto-complete="off" placeholder="提问" @keyup.enter.native="issue"></el-input>
     <template>
         <el-table v-if="answer==''?false:true"
                 :data="answer"
                 style="width: 100%">
             <el-table-column
                     prop="question"
                     label="问题"
                     width="180">
             </el-table-column>
             <el-table-column
                     prop="answer"
                     label="答案"
                     width="180">
             </el-table-column>
         </el-table>
     </template>
     <br/><br/>
     <button type="primary" v-on:click="issue">query now</button>
     <br/><br/>
<!--     <el-button type="primary" style="width: 20%;background: #505458;border: none" v-on:click="randomissue">随机</el-button>-->
     <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
     &copy;
 </div>
</template>

<script>

    export default {
        name: "Appindex",

        data(){
            return {
                username:'',
                issues:{
                    question:''
                },
                weathers:{
                    temp:'',
                    text:''
                },
                answer:[]
            }
    },
        created() {
            this.username=this.$route.params.loginUserName
            console.log(this.username)
        },
        mounted() {
            this.test()
        },
        methods:{
            issue(){

                // eslint-disable-next-line no-empty
                if(this.issue.question.length > 10){
                    this.$alert('问题过长', 'Tips', {
                        confirmButtonText: '确定'
                    })
                }

                this.$axios
                .post('/issue',{
                    question:this.issues.question,
                    username:this.username
                })
                .then(resp =>{
                if (resp.status ===200){
                    console.log(resp.data)
                    this.answer=resp.data
                }
                })
            },
            randomissue(){
                this.$axios
                    .post('/randomissue',{
                        question:this.issues.question
                    })
                    .then(resp =>{
                        if (resp.status ===200){
                            console.log(resp.data)
                            this.answer=resp.data
                        }
                    })
            },
            test() {
                this.$axios
                    .get('https://devapi.qweather.com/v7/weather/now?location=101040100&key=086f4e52b84c4d23a2a5e6fef9005562', {
                    })
                .then(resp =>{

                    console.log(resp)
                    if (resp.data.code == 200){
                        this.weathers.text=resp.data.now.text
                        this.weathers.temp=resp.data.now.temp
                    }
                })
            }

            }

        }


</script>

<style scoped>
    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #F8F005;
    }


    button, button::after {
        width: 380px;
        height: 86px;
        font-size: 36px;
        font-family: 'Bebas Neue', cursive;
        background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
        border: 0;
        color: #fff;
        letter-spacing: 3px;
        line-height: 88px;
        box-shadow: 6px 0px 0px #00E6F6;
        outline: transparent;
        position: relative;
    }

    button::after {
        --slice-0: inset(50% 50% 50% 50%);
        --slice-1: inset(80% -6px 0 0);
        --slice-2: inset(50% -6px 30% 0);
        --slice-3: inset(10% -6px 85% 0);
        --slice-4: inset(40% -6px 43% 0);
        --slice-5: inset(80% -6px 5% 0);

        content: 'query now';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
        text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
        clip-path: var(--slice-0);
    }

    button:hover::after {
        animation: 1s glitch;
        animation-timing-function: steps(2, end);
    }

    @keyframes glitch {
        0% {
            clip-path: var(--slice-1);
            transform: translate(-20px, -10px);
        }
        10% {
            clip-path: var(--slice-3);
            transform: translate(10px, 10px);
        }
        20% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 10px);
        }
        30% {
            clip-path: var(--slice-3);
            transform: translate(0px, 5px);
        }
        40% {
            clip-path: var(--slice-2);
            transform: translate(-5px, 0px);
        }
        50% {
            clip-path: var(--slice-3);
            transform: translate(5px, 0px);
        }
        60% {
            clip-path: var(--slice-4);
            transform: translate(5px, 10px);
        }
        70% {
            clip-path: var(--slice-2);
            transform: translate(-10px, 10px);
        }
        80% {
            clip-path: var(--slice-5);
            transform: translate(20px, -10px);
        }
        90% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 0px);
        }
        100% {
            clip-path: var(--slice-1);
            transform: translate(0);
        }
    }

</style>