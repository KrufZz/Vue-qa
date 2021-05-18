<template>
    <div>
        <el-select v-model="options.value" placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                Link:'',
                loading:[],
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
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
            }
        }
    }

</script>

<style scoped>


</style>
