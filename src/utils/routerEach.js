import React, { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Cookies from "js-cookie"
import Layout from "layout"
export default (routes) => {


    function isLayout(route,match) {
        if (route.meta.flag) {
            return (
                <Layout path={route.path} key={route.path}>
                    <route.component/>
                </Layout>
            )
        } else {
            return <route.component match={match}/>
        }
    }



    function isLogin(route,match) {
        if (route.path !== "/login" && route.meta.requiredAuth) {
            if (Cookies.get("token")) {
                return isLayout(route)
            } else {
                return <Redirect to={{ pathname: "/login", params: { from: route.path } }} />
            }
        } else {
            return isLayout(route,match)
        }
    }



    function childrenMap(childNodes) {
        return <Route path={childNodes.path} key={childNodes.path} render={() => {
            return (
                <Fragment>
                    <Route component={childNodes.component}  exact/>
                    <Switch>
                        {
                            childNodes.children.map((child) => {
                                if (child.children) {
                                    return childrenMap(child)
                                } else {
                                    return isLogin(child)
                                }
                            })
                        }
                        <Redirect from={childNodes.path} to={childNodes.children[0].path}  exact/>
                    </Switch>
                </Fragment>
            )
        }} />
    }


    return routes.map((route) => {
        if (route.children) {
            return childrenMap(route);
        } else {
            return <Route path={route.path} key={route.path} render={({match}) => {
                return isLogin(route,match)
            }} />
        }
    })

}