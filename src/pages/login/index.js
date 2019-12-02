import React from "react"
import { Section } from "./styled"
import { List, Switch } from 'antd-mobile';
import {Link} from "react-router-dom"
import {loginNode} from "api/users"
import {withRouter} from "react-router-dom"

@withRouter
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            checked1: true,
            color:false
        };
    }
    render() {
        return (
            <Section>
                <header>
                    <a className="iconfont back" href="true">&#xe609;</a>
                    <span>登录</span>
                    <div className="management">
                        <i className="iconfont">&#xe655;</i>
                    </div>
                </header>
                <div className="checkoutLogin">
                    <div>短信验证码登录</div>
                    <div>|</div>
                    <div>账号密码登录</div>
                </div>
                <div className="login">
                    <div className="username">
                        <div className="icons">
                            <i className="iconfont">&#xe616;</i>
                        </div>
                        <input placeholder="用户名/手机号" ref="account" onInput={this.handleColor.bind(this)}/>
                        <a href="true">x</a>
                    </div>
                    <div className="pwd">
                        <div className="icons">
                            <i className="iconfont">&#xe646;</i>
                        </div>
                        <input type="password" placeholder="请输入密码"  ref="pwd" onInput={this.handleColor.bind(this)}/>
                        <a href="true">x</a>
                    </div>
                    <div className="expire">
                        <span>三个月内免登录</span>
                        <List.Item
                            extra={<Switch
                                checked={this.state.checked}
                                onChange={() => {
                                    this.setState({
                                        checked: !this.state.checked,
                                    });
                                }}
                            />}
                        ></List.Item>
                    </div>
                </div>
                <div className={this.state.color===true?'color loginbtn':'loginbtn'} onClick={this.handleLogin.bind(this)}>登录</div>
                <div className="pushRegister">
                    <Link className="register" to="/register">新用户注册</Link>
                    <a href="true">忘记密码</a>
                </div>
                <div className="third">
                    <span>第三方登录</span>
                    <div>
                        <a href="true">
                            <img alt="true" src="//img2.ch999img.com/spa-static/mall-m/jiuji/assets/qq.7df9dcd2828ad5eaeee0e76ce8f7d917.png"></img>
                        </a>
                    </div>
                </div>
            </Section>
        )
    }
   async handleLogin(){
        let username=this.refs.account.value;
        let pwd=this.refs.pwd.value;
        let data=await loginNode(username,pwd)
        if(data.data.code===1){
            alert("登录成功")
            console.log(this.props.location.params)
            let path=this.props.location.params?this.props.location.params.from:"/home";
            this.props.history.push(path)
        }else{
            alert("登录失败")
        }
    }
    handleColor(){
        if(this.refs.account.value&&this.refs.pwd.value){
            this.setState({
                color:true
            }) 
        }else{
            this.setState({
                color:false
            }) 
        }
        
    }
}

export default Login