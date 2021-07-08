module.exports = {
    lintOnSave: false,
    devServer: {
        disableHostCheck:true,
        proxy: {
            '/api': {
                target: 'http://114.117.194.152:8081',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/api': ''  // rewrite path
                }
            },
        },
    }
};
