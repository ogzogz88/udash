//generate random data
function generateData(count, start, growth) {
    const data = [];
    for (let i = 1; i <= count; i++) {
        data.push(start + (Math.round(Math.random()) * i) * 5)
    }
    return data;
}

export const chartData = [
    {
        name: 'Phones',
        data: generateData(12, 30, 2),
        color: '#A6A8DD'
    },
    {
        name: 'Services',
        data: generateData(12, 26, .3),
        color: '#5C60C1'
    },
    {
        name: 'Laptops',
        data: generateData(12, 20, .2),
        color: '#2D2F76'
    },
    {
        name: 'Tablets',
        data: generateData(12, 15, 15),
        color: '#11122D'
    }
];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function format(num) {
    return `$${num} Billions`;
}
export const tableRows = months.map((month, i) => {
    return {
        month,
        phones: format(chartData[0].data[i]),
        services: format(chartData[1].data[i]),
        laptops: format(chartData[2].data[i]),
        tablets: format(chartData[3].data[i])
    };
})

export const tableColumns = [
    {
        width: 240,
        label: 'Month',
        dataKey: 'month'
    },
    {
        width: 240,
        label: 'Phones',
        dataKey: 'phones',
        numeric: true
    },
    {
        width: 240,
        label: 'Services',
        dataKey: 'services',
        numeric: true

    },
    {
        width: 240,
        label: 'Laptops',
        dataKey: 'laptops',
        numeric: true

    },
    {
        width: 240,
        label: 'Tablets',
        dataKey: 'tablets',
        numeric: true

    },
]