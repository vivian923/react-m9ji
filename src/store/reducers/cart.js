import {handleActions} from "redux-actions"
import {handleChecked,handleCheckedItem,handleCartRecommend,handleAdd,handleReduce,handleSum,handleDel} from "../../actions/actionType"
const defaultState={
    selectAll:true,
    recommend:[],
    allnum:0,
    allprice:0,
    goodsList:[
        {
            img:"https://img2.ch999img.com/pic/product/440x440/20191122215703319.jpg",
            title:"华为 Mate 30 （TAS-AL00）全网通4G版 亮黑色 6GB+128GB ",
            config:"亮黑色 6GB+128GB  官方标配",
            price:3999,
            id:1,
            flag:true,
            num:1
        },
        {
            img:"https://img2.ch999img.com/pic/product/440x440/20191122215703319.jpg",
            title:"华为 Mate 30 （TAS-AL00）全网通4G版 亮黑色 6GB+128GB ",
            config:"亮黑色 6GB+128GB  官方标配",
            price:3999,
            id:2,
            flag:true,
            num:1
        }
    ]
}

export default handleActions({
    [handleChecked]:(state,ation)=>{
        let checkedState=Object.assign({},state);
        checkedState.selectAll=!checkedState.selectAll;
        checkedState.goodsList.forEach((item)=>{
            item.flag=checkedState.selectAll
        })
        return checkedState
    },
    [handleCheckedItem]:(state,action)=>{
        let checkedItemState=JSON.parse(JSON.stringify(state));
        checkedItemState.goodsList[action.payload.index].flag=!checkedItemState.goodsList[action.payload.index].flag
        let sign=true;
        for(var i=0;i<checkedItemState.goodsList.length;i++){
            if(!checkedItemState.goodsList[i].flag){
                sign=false;
                break;
            }
        }
        checkedItemState.selectAll=sign;
        return checkedItemState
    },
    [handleCartRecommend]:(state,action)=>{
        let recommendState=JSON.parse(JSON.stringify(state));
        recommendState.recommend=action.payload.data;
        return recommendState
    },
    [handleAdd]:(state,action)=>{
        let addState=JSON.parse(JSON.stringify(state));
        addState.goodsList[action.payload.index].num++;
        return addState
    },
    [handleReduce]:(state,action)=>{
        let reduceState=JSON.parse(JSON.stringify(state));
        if(reduceState.goodsList[action.payload.index].num<=1){
            reduceState.goodsList[action.payload.index].num=1;
        }else{
            reduceState.goodsList[action.payload.index].num--;
        }
        return reduceState
    },
    [handleSum]:(state,action)=>{
        let sumState=JSON.parse(JSON.stringify(state));
        let allnum=0, allprice=0;
        for(var i=0;i<sumState.goodsList.length;i++){
            if(sumState.goodsList[i].flag){
                allnum+=sumState.goodsList[i].num;
                allprice+=(sumState.goodsList[i].price*sumState.goodsList[i].num)
            }
        }
        sessionStorage.setItem("num",allnum)
        sessionStorage.setItem("price",allprice)
        sumState.allnum=allnum;
        sumState.allprice=allprice
        return sumState
    },
    [handleDel]:(state,action)=>{
        let delState=JSON.parse(JSON.stringify(state));
        delState.goodsList.splice(action.payload.index,1);
        return delState
    }
},defaultState)
