var Log = (function () {
    function Log() {
    }
    var d = __define,c=Log,p=c.prototype;
    Log.trace = function (str) {
        console.log(str);
    };
    return Log;
}());
egret.registerClass(Log,'Log');
//# sourceMappingURL=Log.js.map