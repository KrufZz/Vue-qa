<template>
    <div>
        <el-button
                :plain="true"
                type="primary"
                @click="show"
        >添加</el-button
        >
        <el-table :data="testData">
            <el-table-column property="min" label="最小" />
            <el-table-column property="max" label="最大"/>
            <el-table-column property="price" label="运费"/>
        </el-table>
        <el-button type="primary" @click="test">确定</el-button>

        <el-dialog :visible.sync='openData'>
          <el-form ref="formData"  :model="formData">
              <el-form-item label="最小多少件">
                  <el-input v-model="formData.min" />
              </el-form-item>

              <el-form-item label="最大多少件">
                  <el-input v-model="formData.max" />
              </el-form-item>

              <el-form-item label="运费">
                  <el-input v-model="formData.price" />
              </el-form-item>

          </el-form>

           <div slot="footer" class="dialog-footer">

            <el-button type="primary" @click="Add">确定</el-button>
    </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                Link:'',
                openData:false,
                loading:[],
                value: '',
                testData:[
                ],


                formData:{
                    max:'',
                    min:'',
                    price:''
                },

// 加载层信息
            }
        },
        created() {

          //   this.open();
          // setTimeout(
          //     this.getData,
          //     2000
          // )

        },
        methods: {
            Add(){
                // this.testData.push(this.formData);
               this.testData.push({max:this.formData.max,min:this.formData.min,price:this.formData.price})
                console.log(this.testData)
                this.openData = false;
            },
            show(){
                this.openData = true;
            },
            open() {
                // eslint-disable-next-line no-unused-vars
                this.loading = this.$loading({
                    lock: false,
                    text: "拼命读取中",
                    spinner: "el-icon-loading",
                    background: "rgba(0, 0, 0, 0.7)"
                })
            },
            getData(){
               this.$axios
                .get('/test',{
                })
                .then(resp =>{
                    this.Link = resp.data
                    console.log(resp.data)
                    // eslint-disable-next-line no-undef
                    this.loading.close();
                })
            },
            test(){
                this.$axios
                .post('/testData',{
                   dto:this.testData
                })
                .then(rsp => {
                    console.log(rsp)
                })
            }
        }
    }

</script>

<style scoped>


</style>
