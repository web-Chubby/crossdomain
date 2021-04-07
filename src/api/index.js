const api ={
    content:{
        /*推荐*/
        recommended:{
            method:'GET',
            url:'/api/personalized'
        },
        /*最新音乐*/
        latestsong:{
            method: 'GET',
            url:'/api/personalized/newsong'
        }
    }
}
export default api
