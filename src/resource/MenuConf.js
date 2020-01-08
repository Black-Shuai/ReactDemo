export default [
    {
        title: '首页',
        key: '/main',
    },
    {
        title:'组件显示',
        key:'/home',
        children:[
            {
                title:'按钮显示',
                key:'/buttons',
            },
            {
                title:'图标显示',
                key:'/BarGraph',
            },
            {
                title:'图形显示',
                key:'/VisitNumber',
            }
        ]
    }
]
