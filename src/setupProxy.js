const proxy = require("http-proxy-middleware");
module.exports  = (app)=>{
    app.use("/ajax",proxy({
        target:"https://m.9ji.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    })),
    app.use("/users",proxy({
        target:"http://10.60.13.245:9000",
        changeOrigin:true,
    }))
}