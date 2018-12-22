function init (params) {
    //console.log(params);
    var result = {};
    if (params.pw && params.id) {
        result.code = "ok";
        result.id="cas_"+params.id+params.pw;
    } else {
        result.code = "error";
    }
    return result;
}


module.exports = init;