<template>
    <div>

        <el-row :gutter="20" style="padding: 10px">
            <el-col :span="16">
            <span  v-for="(item,index ) in list" :key="index" @click="changeIndex(index)">
                {{index}}
                <basic-chart :chartsData="item" :changeIndex="index"  @getChildData="getChartData"></basic-chart>
            </span>

            </el-col>
            <!--数据编辑器-->
            <el-col :span="8">
                <el-row style="border: 1px solid #eee;border-radius: 5px;">
                    <el-col :span="12" style="border-right: 1px solid #eee;padding-bottom: 20px">
                        <el-col :span="24">
                            <div class="ware-title">
                                选择输出图形
                            </div>
                            <div class="ware-list">
                            <span v-for="(item,index) in chartsList" :key="index">
                                <img :src="item.image" :title="item.text" :alt="item.text" class="ware-image-box" @click="checkChartBtn(item)">
                            </span>
                            </div>
                        </el-col>
                        <el-col :span="24" style="text-align: center;margin-top: 20px">
                            <el-button type="primary" @click="addChartBtn" size="small"> 新增图表</el-button>
                        </el-col>
                    </el-col>
                    <el-col :span="12">
                        <div class="ware-title">
                            选择渲染数据源
                        </div>

                    </el-col>
                </el-row>
                <el-row >
                    1111
                    <el-col :span="24"
                            v-if="nowIndex !=-1"
                            style="border: 1px solid #eee;padding: 10px;border-radius: 5px">
                        <span >
                            <el-form>
                                <el-form-item label="字段名称" label-width="100px">
                                    <el-input v-model="formData.name" :disabled="true"></el-input>
                                </el-form-item>
                                <el-form-item label="分类名称" label-width="100px">
                                    <el-input v-model="nowNode.name" :disabled="true"></el-input>
                                </el-form-item>
                                 <el-form-item label="输出值" label-width="100px">
                                    <el-input v-model="nodeVal" type="number" ></el-input>
                                </el-form-item>
                            </el-form>
                        </span>

                        <el-col :span="24" >
                            <el-button type="primary" @click="saveDataBtn"> 保存当前修改</el-button>

                        </el-col>

                    </el-col>

                </el-row>




            </el-col>
        </el-row>


    </div>
</template>

<script>
    import BasicChart from '@/components/chart/BasicChart'
    export default {
        name: "showCharts",
        data(){
            return{

                chartsList:[],
                list:[],

                checkIndex:0,

                /** 子组件更改值 父组件的传值*/
                formData: '',
                nowNode:'',
                nowIndex:'-1',

                nodeVal:''
            }
        },
        components:{
            BasicChart
        },
        computed:{

        },
        methods:{
            saveDataBtn(){
                this.nowNode.data[this.formData.dataIndex] = this.nodeVal
                let arr =JSON.parse(JSON.stringify(this.list[this.nowIndex]))

                arr.option[this.formData.componentType][this.formData.componentIndex].data[this.formData.dataIndex] = parseFloat(this.nodeVal)
                // this.list.splice(this.nowIndex,1,arr)
                this.$set(this.list,this.nowIndex,arr)

                this.$nextTick(function () {
                    console.log(this.list) // => '已更新'
                })


            },

            getChartData(data){
                console.log('33333');
                console.log(data)
                this.nowNode = data.nowNode
                this.formData = data.formData
                this.nowIndex = data.nowIndex
                this.nodeVal = this.nowNode.data[this.formData.dataIndex]

            },
            changeIndex(_index){
                console.log(_index)
              this.checkIndex = _index
            },
            addChartBtn(){

                // this.$set( this.list, this.checkIndex+1,JSON.parse(JSON.stringify( this.chartsList[0])))
                this.list[ this.checkIndex+1 ] = JSON.parse(JSON.stringify( this.chartsList[0]))
                this.checkIndex =this.list.length-1
                this.$nextTick(function () {
                    console.log(this.list)
                })

            },
            checkChartBtn(item){
                console.log(this.checkIndex)
                this.list.splice(this.checkIndex,1,item)

            }
        },
        mounted(){
            this.chartsList = JSON.parse(JSON.stringify(this.$constData.chartsList))
            this.list[0] = JSON.parse(JSON.stringify( this.chartsList[0]))

            this.list.checkIndex = 0




        }
    }
</script>

<style scoped lang="scss">
    .ware-title{
        width: auto;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        color: #666;
        font-weight: 600;
    }
    .ware-list{
        width: auto;
        margin-top: 10px;
    }
    .ware-image-box{
        float: left;
        margin-left: 20px;
        margin-top: 20px;
        width: 70px;
        height: 40px;
        cursor: pointer;
    }
</style>
