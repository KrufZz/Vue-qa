<template>
 <div>
     温度:{{weathers.temp}}
     天气:{{weathers.text}}
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
     <el-button type="primary" style="width: 20%;background: #505458;border: none" v-on:click="issue">查询</el-button>
     <br/><br/>
     <el-button type="primary" style="width: 20%;background: #505458;border: none" v-on:click="randomissue">随机</el-button>
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
                countNumber:'',
                realname:'',
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
            this.realname=this.$route.params.realname
            this.countNumber=this.$route.params.countNumber
            console.log(this.username)
            console.log(this.countNumber)
        },
        mounted() {
            this.test()
        },
        methods:{
            issue(){
                this.$axios
                .post('/issue',{
                    question:this.issues.question
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
                    this.weathers.text=resp.data.now.text
                    this.weathers.temp=resp.data.now.temp
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


</style>