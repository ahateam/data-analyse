/** 左侧导航栏菜单生成的内容*/

/** 无权限的菜单栏展示*/
const  menu =[
    {
        path:'/dashboard',
        title:'系统首页',
        icon:'datashouye',
        child:[]
    },
    {
        path:'/showCharts',
        title:'图表配置',
        icon:'datatongji',
        child:[
            {
                path:'/showCharts',
                title:'图表配置',
            },
        ]
    },

]



export default {
    menu,
}
