import React from "react"
import { Section } from "./styled"
import { List, Switch } from 'antd-mobile';
import {Link} from "react-router-dom"
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            checked1: true,
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
                        <input placeholder="用户名/手机号" />
                        <a href="true">x</a>
                    </div>
                    <div className="pwd">
                        <div className="icons">
                            <i className="iconfont">&#xe646;</i>
                        </div>
                        <input placeholder="请输入密码" />
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
                <a className="loginbtn" href="true">登录</a>
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
}

export default Login