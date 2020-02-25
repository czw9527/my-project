<template>
    <div class="index" id="mainEcharts"></div>
</template>
<script>


export default {
    name:'Echarts',
    data () {
        return {
            
        }
    },
    mounted() {
        this.draw();
    },
    props :['title'],
    methods: {
        draw() {
            let myChart = this.$echarts.init(document.getElementById('mainEcharts'));
            var dataAxis = ['周大福', '周生生', '六福珠宝', '老凤祥', '未知', '未知', '未知','未知','未知'];
            var data =[8674, 8509, 8321, 8152, 8123,8011,7954,7852,7561];
            var yMax = 9000;
            var dataShadow = [];

            for (var i = 0; i < data.length; i++) {
                dataShadow.push(yMax);
            }
                        myChart.setOption ({
                            title: {
                                text: this.title
                            },
                            grid:{
                                x:0,
                                x2:0
                            },
                            xAxis: {
                                data: dataAxis,
                                axisTick: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                }
                            },
                            yAxis: {
                                show:false,
                                min:7000
                            },
                            dataZoom: [
                                {
                                    type: 'inside'
                                }
                            ],
                            series: [
                                { // For shadow
                                    type: 'bar',
                                    itemStyle: {
                                        color: 'rgba(140,191,255,0.1)'
                                    },
                                    barWidth : 61,
                                    barGap: '-100%',
                                    barCategoryGap: '40%',
                                    data: dataShadow,
                                    animation: false
                                },
                                {
                                    type: 'bar',
                                    barWidth : 61,
                                    itemStyle: {
                                        normal:{
                                            color:'#3489F3',
                                            label:{
                                                show:true,
                                                position:"top",
                                                textStyle:{
                                                    color:'#394B5A'
                                                }
                                            }
                                        },
                                        color: "#3489F3"
                                    },
                                    data: data
                                }
                            ]
                        });
        }
    }
}
</script>
<style lang="scss" scoped>
.index {
    width: 800px;
    height: 400px;
    margin-top: 51px;
}
</style>