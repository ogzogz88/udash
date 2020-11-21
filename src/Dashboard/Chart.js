import React from 'react'
import Card from './Card'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { chartData } from './Data'


const options =
{
    chart: {
        type: 'column',
        height: '360px',
        style: {
            fontFamily: `'Blinker', 'sans-serif'`,
        },
        events: {
            load: function () {

                this.update({
                    legend: {
                        labelFormatter: function () {
                            var seriesData = this.data,
                                pointSum = 0;
                            seriesData.forEach(function (point) {
                                pointSum += point.y;
                            })
                            return this.name + '<br />Total: ' + pointSum;
                        }
                    },
                })
            }
        }
    },
    title: {
        text: 'Revenue by Product'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Thousands of Dollars'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'center',
        x: 0,
        verticalAlign: 'bottom',
        y: 0,
        floating: false,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}, ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        },
        series: {
            borderWidth: 0
        }
    },
    series: chartData
}



function Chart() {
    return (
        <Card>
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        </Card>
    );
}


export default Chart
