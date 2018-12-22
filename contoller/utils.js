var utils = {
    checkLogin:function(cookie){
        if(cookie._cas_ && cookie._cas_.indexOf('cas_')>-1){
            return true;
        }else {
            return false;
        }
    },
};
module.exports = utils;