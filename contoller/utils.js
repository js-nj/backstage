var utils = {
    checkLoginByCas:function(cookie){
        if(cookie._cas_ && cookie._cas_.indexOf('cas_')>-1){
            return true;
        }else {
            return false;
        }
    },
    checkLoginByIdPw:function(params){
    	if (params.pw && params.id) {
	        return true;
	    }else {
	    	return false;
	    }
    },
    creatLoginCas:function(params){
        return "cas_" + params.id + params.pw;
    }
};
module.exports = utils;