import React from "react"
import { Section } from "./styled"
class Register extends React.Component {
    constructor() {
        super()
        this.state={
            code:''
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
                        <input placeholder="用户名/手机号" />
                    </div>
                    <div className="pwd">
                        <div className="icons">
                            <i className="iconfont">&#xe64a;</i>
                        </div>
                        <input placeholder="验证码" onFocus={this.verify.bind(this)} />
                        <span>{this.state.code}</span>
                    </div>
                    <div className="expire">
                        <div className="icons">
                            <i className="iconfont">&#xe646;</i>
                        </div>
                        <input placeholder="请输入密码" />
                    </div>
                </div>
                <div className="deal">
                    <span className="check">✔</span>
                    <span>我已阅读并同意<a href="https://m.9ji.com/doc/1/44">《九机网用户协议》</a></span>
                </div>
                <div className="loginbtn">注册</div>
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
}

export default Register