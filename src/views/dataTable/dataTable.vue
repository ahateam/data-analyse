<template>
    <div style="width: 100%;padding: 15px">
        <div class="checkBox">
            <el-checkbox-group v-model="checkList">
                <el-checkbox style="display: block;margin:10px 0;width: 80%" v-for="(item,index) in list" :key="index" :label="item.dataName" border></el-checkbox>
                <el-button style="float: right;margin-right: 20%" type="success" @click="add" plain>添加</el-button>
                <div class="clearBoth"></div>
            </el-checkbox-group>
        </div>

    </div>
</template>

<script>
    export default {
        name: "dataTable",
        data () {
            return {
                checkList: [],
                list:[
                    {
                        dataName:'表单名'
                    },
                    {
                        dataName:'表单名2'
                    },
                    {
                        dataName:'表单名3'
                    },
                    {
                        dataName:'表单名4'
                    },
                    {
                        dataName:'表单名5'
                    },
                    {
                        dataName:'表单名6'
                    },
                    {
                        dataName:'表单名7'
                    }
                ]
            };
        },
        methods:{
            add(){
                console.log(this.checkList)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .clearBoth{
        clear:both;
    }

.checkBox{
    width: 50vw;
    margin: 0 auto;
}
</style>
