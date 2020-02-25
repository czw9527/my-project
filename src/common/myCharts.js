 /* jshint esversion: 6 */

import echarts from 'echarts';
    // var dataAxis = ['周大福', '周生生', '六福珠宝', '老凤祥', '未知', '未知', '未知','未知','未知'];
    // var data =[8674, 8509, 8321, 8152, 8123,8011,7954,7852,7561];
    // var yMax = 9000;
    var dataShadow = [];

    // for (var i = 0; i < data.length; i++) {
    //     dataShadow.push(yMax);
    // }
const install = function(Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    //画一条简单的线
                    line1: function (id,title,data,dataAxis) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = {
                            title: {
                                text: title
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
                                min:7000,
                                Max:9000
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
                        };
                        this.chart.setOption(optionData);
                    },
                };
            }
        }
    });
};

export default {
    install
};