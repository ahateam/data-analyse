<template>
    <div class="body">
        <div>
            <el-select v-model="value" placeholder="请选择" class="autoSelect">
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
            <div class="addButton">
                <el-button type="success" plain>添加</el-button>
                <div class="clearBoth"></div>
            </div>
        </div>

        <div style="margin: 10px; ">
            <canvas id="ca" style="background-color: #0086b3;margin: 0 auto;display: block"  width="700" height="400" ></canvas>
        </div>
    </div>

</template>

<script>

    export default {
        name: "addRelationship",

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
                value1: '',
                value2: '',
                value3: '',
                value4: '',
            }
        },
        mounted() {

            var canvas = document.getElementById('ca');


            var stage = new JTopo.Stage(canvas);

            console.log(stage)
            console.log('222')
            //显示工具栏
            //showJTopoToobar(stage);

            var scene = new JTopo.Scene(stage);
            //scene.background = 'http://www.jtopo.com/demo/img/bg.jpg';
            scene.backgroundColor = '#FF8080';

            // 节点
            function newNode(x, y, w, h, text) {
                var node = new JTopo.Node(text);
                node.setLocation(x, y);
                node.setSize(w, h);
                node.textPosition = 'Middle_Center';
                scene.add(node);
                return node;
            }

            // 简单连线
            function newLink(nodeA, nodeZ, text, dashedPattern) {
                var link = new JTopo.Link(nodeA, nodeZ, text);
                link.lineWidth = 3; // 线宽
                link.dashedPattern = dashedPattern; // 虚线
                link.bundleOffset = 60; // 折线拐角处的长度
                link.bundleGap = 20; // 线条之间的间隔
                link.textOffsetY = 3; // 文本偏移量（向下3个像素）
                link.strokeColor = '0,200,255';
                scene.add(link);
                return link;
            }

            var from = newNode(100, 60, 96, 48, "UserInfo");
            var to = newNode(300, 60, 96, 48, "Location");
            var link = newLink(from, to, 'rel_1', 5);
            link.arrowsRadius = 10;

            var from = newNode(300, 200, 96, 48, "Product");
            var link = newLink(from, to, 'rel_2', 3);

            var from = newNode(500, 150, 96, 48, "Order");
            var link = newLink(from, to, 'rel_3', 2);
        }
    }
</script>

<style lang="scss" scoped>
    .clearBoth{
        clear: both;
    }

    .body {
        padding: 10px;
    }

    .autoSelect {
        width: 15%;
        margin-right:2vw;
    }

    .addButton{
        margin-top: 20px;
        margin-left: 30px;
        button{
            width: 15%;
            float: right;
        }
    }
</style>
