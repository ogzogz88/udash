import React, { useContext } from 'react'
import Card from './Card'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { chartData } from './Data'
import { ThemeContext } from './Dashboard'
import { darkerGrey, darkGrey, lightGrey } from './GlobalStyle'


function getOptions(dark) {
    return {
        chart: {
            type: 'column',
            height: '360px',
            backgroundColor: dark ? darkerGrey : 'white',

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
                },

            },

        },
        title: {
            text: 'Revenue by Product',
            style: {
                color: dark ? lightGrey : 'black'
            },
        },
        xAxis: {
            labels: {
                style: {
                    color: dark ? lightGrey : 'black',
                    fontSize: '12px',
                }
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Thousands of Dollars',
                style: {
                    color: dark ? lightGrey : 'black'
                }
            },
            labels: {
                style: {
                    color: dark ? lightGrey : 'black'
                }
            },
            gridLineColor: dark ? 'grey' : lightGrey,
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: dark ? lightGrey : darkGrey
                }
            }
        },
        legend: {
            align: 'center',
            x: 0,
            verticalAlign: 'bottom',
            y: 0,
            floating: false,
            itemStyle: {
                color: dark ? lightGrey : 'black',
            },
            backgroundColor:
                dark ? darkGrey : 'white',
            //Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}, ({point.percentage:.0f}%)<br/>',
            shared: true,
            style: {
                color: dark ? lightGrey : 'black',

            },
            backgroundColor: dark ? darkGrey : 'white'
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
}



function Chart() {
    const [theme] = useContext(ThemeContext);
    const dark = theme === 'dark';
    return (
        <Card height={400} dark={dark}>
            <HighchartsReact
                highcharts={Highcharts}
                options={getOptions(dark)}
            />
        </Card>
    );
}


export default Chart
