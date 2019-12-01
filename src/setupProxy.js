const proxy = require("http-proxy-middleware");
module.exports  = (app)=>{
    app.use("/ajax",proxy({
        target:"https://m.9ji.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
}