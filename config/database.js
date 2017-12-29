if(process.env.NODE_ENV ==='production'){
module.exports = {
    mongoURI: 'mongodb://santosh:santosh@ds235807.mlab.com:35807/vidjot-prod'
}
}else{
module.exports ={
    mongoURI: 'mongodb://localhost/vidjot-dev'
}
}