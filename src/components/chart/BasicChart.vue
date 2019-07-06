<template>
    <div>
        <div :id="'myChart'+changeIndex" style="width: auto;height: 500px;padding: 40px" ></div>
    </div>
</template>

<script>
    export default {
        name: "BasicChart",
        data(){
          return{

              myChart:'',
              /** 左侧图表 列表*/

              formData:'',
              nowNode:{},


          }
        },
        props:{
            chartsData:Object,
            changeIndex:Number,
        },
        methods:{
            getData(data){
                this.formData = data
                this.nowNode = JSON.parse(JSON.stringify(this.chartsData.option[this.formData.componentType][this.formData.componentIndex]))
                let  cnt ={formData:this.formData,nowNode:this.nowNode,nowIndex:this.changeIndex}
                this.$emit('getChildData',cnt)
            },
            drawLine(){

                this.myChart.setOption(this.chartsData.option)

                this.myChart.on('click',(params)=>{
                    this.getData(params)
                })
            },
            // checkChartBtn(item,_index){
            //     this.drawLine(item)
            //     this.checkIndex = _index
            //     this.nowNode = {}
            //     this.nodeVal =''
            // },
            // saveDataBtn(){
            //     this.chartsList[this.checkIndex].option[this.formData.componentType][this.formData.componentIndex].data[this.formData.dataIndex] =    this.nodeVal
            //     this.drawLine( this.chartsList[this.checkIndex])
            // }
        },
        mounted(){
            let str = 'myChart'+this.changeIndex
            this.myChart = this.$echarts.init(document.getElementById(str))

            this.drawLine()
        }
    }
</script>

<style scoped>

</style>
