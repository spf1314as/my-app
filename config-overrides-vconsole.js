const webpack = require('webpack');
module.exports = function override(config,env) {
    console.log("_____________________________")
   console.log(env)
    console.log("_____________________________")
    config.plugins.push(new webpack.DefinePlugin({
        VCONSOLE: JSON.stringify(true)
    }))

    return config
}