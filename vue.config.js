module.exports = {
    devServer:{
        proxy: {
            '/api':{
                target:'https://backed-todo-app.herokuapp.com',
                secure: false
            }
        }
    }
}