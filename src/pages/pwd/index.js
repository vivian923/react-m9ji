import React from "react"
import { Section } from "./styled"
import {changePwd} from "api/users"
import {withRouter} from "react-router-dom"
@withRouter
class Register extends React.Component {
    constructor() {
        super()
        this.state={
            code:'',
            color:false
        }
    }
    render() {
        return (
            <Section>
                <header>
                    <div className="iconfont back" onClick={this.handleBack.bind(this)}>&#xe609;</div>
                    <span>修改密码</span>
                    <div className="management">
                        <i className="iconfont">&#xe655;</i>
                    </div>
                </header>
                <div className="login">
                    <div className="username">
                        <div className="icons">
                            <i className="iconfont">&#xe616;</i>
                        </div>
                        <input placeholder="用户名/手机号" ref="account" onInput={this.handleColor.bind(this)}/>
                    </div>
                    <div className="expire">
                        <div className="icons">
                            <i className="iconfont">&#xe646;</i>
                        </div>
                        <input type="password" placeholder="请输入原密码"  ref="pwd" onInput={this.handleColor.bind(this)}/>
                    </div>
                    <div className="expire">
                        <div className="icons">
                            <i className="iconfont">&#xe646;</i>
                        </div>
                        <input type="password" placeholder="请输入新密码"  ref="npwd" onInput={this.handleColor.bind(this)}/>
                    </div>
                    
                </div>
                <div className={this.state.color===true?'loginbtn color':'loginbtn'} onClick={this.handleRegister.bind(this)}>提交</div>
            </Section>
        )
    }
    verify(){
        var newarr=[];
        for(var j=0;j<4;j++){
            newarr.push(parseInt(Math.random()*(9+1-1)+1));
            var res=newarr.join("");
        }
        this.setState({
            code:res
        })
    }
    handleColor(){
        if(this.refs.account.value&&this.refs.pwd.value&&this.refs.npwd.value){
            this.setState({
                color:true
            })
        }else{
            this.setState({
                color:false
            })
        }
    }
    async handleRegister(){
        let username=this.refs.account.value;
        let oPwd =this.refs.pwd.value;
        let nPwd=this.refs.npwd.value;
        let data =await changePwd(username,oPwd,nPwd)
        console.log(data)
        if(data.data.code===1){
            alert("修改成功")
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            this.props.history.push("/login")
        }else{
            alert("修改失败")
        } 
    }
    handleBack(){
        this.props.history.goBack()
    }
}

export default Register