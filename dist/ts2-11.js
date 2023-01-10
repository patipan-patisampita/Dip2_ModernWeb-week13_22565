"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
    Direction[Direction["Left"] = 6] = "Left";
    Direction[Direction["Right"] = 10] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
var AppStatus;
(function (AppStatus) {
    AppStatus["Active"] = "Yes";
    AppStatus[AppStatus["InActive"] = 1] = "InActive";
    AppStatus[AppStatus["OnHolding"] = 2] = "OnHolding";
    AppStatus["OnStop"] = "STOP";
})(AppStatus || (AppStatus = {}));
function checkStatus(status) {
    console.log(status);
}
checkStatus(AppStatus.Active);
checkStatus(AppStatus.OnHolding);
checkStatus(AppStatus.OnStop);
checkStatus(AppStatus.InActive);
