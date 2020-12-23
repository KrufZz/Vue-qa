<template>
 <div>
     登录用户:{{realname}}
     提问次数:{{countNumber}}
            <el-input type="text" v-model="issues.question" auto-complete="off" placeholder="提问"></el-input>
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
                answer:[]
            }
    },
        created() {
            this.realname=this.$route.params.realname
            this.countNumber=this.$route.params.countNumber
            console.log(this.username)
            console.log(this.countNumber)
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