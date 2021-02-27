<template>
    <el-form  ref="form" :model="form" label-width="80px">
        <el-form-item label="业务名称">
            <el-col :span="3">
            <el-input v-model="form.name"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="角色名">
            <el-col :span="3">
            <el-input type="text" maxlength="10"  v-model="form.roleName"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="战网账号">
            <el-col :span="5">
                <el-input type="text" maxlength="20"  v-model="form.battle"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="装等">
            <el-col :span="3">
                <el-input type="text" maxlength="10"  v-model="form.grade"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="联系电话">
            <el-col :span="3">
                <el-input type="text" maxlength="15"  v-model="form.phone"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="子账号">
            <el-select v-model="form.account" placeholder="选择子账号">
                <el-option label="WOW1" value="WOW1"></el-option>
                <el-option label="WOW2" value="WOW2"></el-option>
                <el-option label="WOW3" value="WOW3"></el-option>
                <el-option label="WOW4" value="WOW4"></el-option>
                <el-option label="WOW5" value="WOW5"></el-option>
                <el-option label="WOW6" value="WOW6"></el-option>
                <el-option label="WOW7" value="WOW7"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="fillOrder">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "Order",
        data() {
            return {
                form: {
                    name: '',
                    account: '',
                    roleName:'',
                    grade:'',
                    phone:'',
                    battle:''

                }
            }
        },
        methods: {
            fillOrder(){
            this.$axios
                .post('/order',{
                    name:this.form.name,
                    account:this.form.account,
                    roleName:this.form.roleName,
                    grade:this.form.grade,
                    phone: this.form.phone,
                    battle:this.form.battle
                })
              .then(resp =>{
                  if (resp.data.code === 200){
                      this.$alert('订单提交成功', '订单', {
                          confirmButtonText: '确定'
                      })
                  }
              })
            }
        }
    }
</script>

<style scoped>

</style>