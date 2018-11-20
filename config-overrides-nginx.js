module.exports = function override(config,env) {
    console.log("_____________________________")
   console.log(env)
    console.log("_____________________________")
    if(env === "production"){
        config.output.publicPath = "./";
    }
    console.log(config.output.publicPath)
    return config
}