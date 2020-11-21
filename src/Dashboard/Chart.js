import React from 'react'
import Card from './Card'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'TOTAL']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage of Products(%)'
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
            stacking: 'percent',
            dataLabels: {
                enabled: false
            }
        },
        series: {
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Phones',
            data: [15, 13, 24, 7, 2, 5, 3, 4, 7, 25, 10, 33],
            color: '#A6A8DD'
        },
        {
            name: 'Services',
            data: [2, 12, 3, 2, 21, 6, 6, 5, 8, 22, 7, 12],
            color: '#5C60C1'
        },
        {
            name: 'Laptops',
            data: [13, 14, 14, 2, 5, 25, 3, 4, 7, 6, 8, 27],
            color: '#2D2F76'
        },
        {
            name: 'Tablets',
            data: [23, 24, 14, 12, 15, 5, 23, 4, 7, 10, 8, 7],
            color: '#11122D'
        }
    ]
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
