<template>
    <div style="padding: 10px">
        <div class="topBox">
            <p>Relationship</p>
            <el-select v-model="value" placeholder="请选择" class="autoSelect">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="contentBox">
            <el-select v-model="value0" placeholder="请选择" class="autoSelect">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>

            <el-select v-model="value1" placeholder="请选择" class="autoSelect">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>

            <el-select v-model="value2" placeholder="请选择" class="autoSelect">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>

            <el-select v-model="value3" placeholder="请选择" class="autoSelect">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>

            <el-select v-model="value4" placeholder="请选择" class="autoSelect" style="margin-right: 0">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <div class="editButton">
                <el-button type="primary" plain>修改</el-button>
                <div class="clearBoth"></div>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: "editRelationship",
        data() {
            return {
                options: [{
                    value: '1',
                    label: '黄金糕'
                }, {
                    value: '2',
                    label: '双皮奶'
                }, {
                    value: '3',
                    label: '蚵仔煎'
                }],
                value: '',
                value0: '',
                value1: '',
                value2: '',
                value3: '',
                value4: '',
            }
        },
    }
</script>

<style lang="scss" scoped>
    .contentBox {
        margin-top: 30px;
    }

    .autoSelect {
        width: 15%;
        margin-right:2vw;
    }

    .editButton{
        margin-top: 20px;
        margin-left: 30px;
        button{
            width: 15%;
            float: right;
        }
    }
</style>
