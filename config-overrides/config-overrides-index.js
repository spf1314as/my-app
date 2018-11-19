module.exports = function override(config,env) {
    console.log("_____________________________")
   console.log(env)
    console.log("_____________________________")

    console.log(config.output.publicPath)
    config.output.publicPath = "./";
    return config
}