var Greeter = (function () {
    function Greeter() {
    }
    Greeter.hello = function () {
        console.log("Hello World!");
    };
    return Greeter;
}());
///<reference path="Greeter.ts"/>
Greeter.hello();
//# sourceMappingURL=singleFile.js.map