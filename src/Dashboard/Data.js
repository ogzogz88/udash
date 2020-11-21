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
]