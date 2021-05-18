<template>
  <div>

    <el-table v-if="order==''?false:true"
              :data="order"
              style="width: 100%">
        <el-table-column
                prop="name"
                label="业务名称"
                width="180">
        </el-table-column>
        <el-table-column
                prop="roleName"
                label="角色名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="account"
                label="子账号"
                width="180">
        </el-table-column>
        <el-table-column
                prop="grade"
                label="装等"
                width="180">
        </el-table-column>
        <el-table-column
                prop="phone"
                label="手机号"
                width="180">
        </el-table-column>
        <el-table-column
                prop="battle"
                label="战网号"
                width="180">
        </el-table-column>
    </el-table>

      <el-button type="info" @click="jump()">填写订单</el-button>
  </div>
</template>

<script>
    export default {
        name: "OrderList",
        data(){
            return {
                order:[]
            }
        },
        mounted() {
            this.orderlist()
        },
        methods:{
            orderlist(){
                this.$axios
                    .post('/orderlist',{
                    })
                    .then(resp =>{
                        if (resp.status ===200){
                            console.log(resp.data)
                            this.order=resp.data
                        }
                    })
            },
            jump(){
                this.$router.push('/order')
            }
        }

    }
</script>

<style scoped>

</style>