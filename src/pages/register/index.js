import React from "react"
import { Section } from "./styled"
import {registerNode} from "api/users"
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
                    <div className="iconfont back">&#xe609;</div>
                    <span>用户注册</span>
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
                        <input type="password" placeholder="请输入密码"  ref="pwd" onInput={this.handleColor.bind(this)}/>
                    </div>
                    <div className="pwd">
                        <div className="icons">
                            <i className="iconfont">&#xe64a;</i>
                        </div>
                        <input placeholder="验证码" onFocus={this.verify.bind(this)} ref="code"  onInput={this.handleColor.bind(this)}/>
                        <span ref="verifycode">{this.state.code}</span>
                    </div>
                </div>
                <div className="deal">
                    <span className="check">✔</span>
                    <span>我已阅读并同意<a href="https://m.9ji.com/doc/1/44">《九机网用户协议》</a></span>
                </div>
                <div className={this.state.color===true?'loginbtn color':'loginbtn'} onClick={this.handleRegister.bind(this)}>注册</div>
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
        if(this.refs.account.value&&this.refs.pwd.value&&this.refs.code.value){
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
        let pwd =this.refs.pwd.value;
        let code=this.refs.code.value;
        let verifycode=this.refs.verifycode.innerText
        if(code!==verifycode){
            alert('验证码错误')
            return
        }
        let data =await registerNode(username,pwd)
        if(data.data.status === 1){
            alert(data.data.info)
            this.props.history.push("/login")
        }else{
              alert(data.data.info)
        }
        
    }
}

export default Register