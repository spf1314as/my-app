module.exports = function override(config,env) {
    console.log("_____________________________")
   console.log(env)
    console.log("_____________________________")
    let px2rem = {
        "loader": require.resolve('px2rem-loader'),
        options:{
            remUnit: 108, //设计稿的10分之一
            remPrecision: 3, //保留小数位数
            threeVersion: true, // 是否根据dpr 对没有转化成rem设置对应的字体大小
            baseDpr: 2,
        }
    }
    if(env === "production"){
        config.module.rules[2].oneOf[3].loader.push(px2rem)
        config.module.rules[2].oneOf[4].loader.push(px2rem)
        config.module.rules[2].oneOf[5].loader.splice(-1,0,px2rem)
    }else{
        config.module.rules[2].oneOf[3].use.push(px2rem)
        config.module.rules[2].oneOf[4].use.push(px2rem)
        config.module.rules[2].oneOf[5].use.splice(-1,0,px2rem)
    }
    return config
}