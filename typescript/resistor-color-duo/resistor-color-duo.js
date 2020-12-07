"use strict";
/* The program will take color names as input and output a two
 digit number, even if the input is more than two colors!*/
exports.__esModule = true;
exports.ResistorColor = void 0;
var ResistorColor = /** @class */ (function () {
    function ResistorColor(colors) {
        this.colors = colors;
    }
    ResistorColor.prototype.set = function (str) {
        if (str == "brown") {
            str = "1";
        }
        else if (str == "red") {
            str = "2";
        }
        else if (str == "orange") {
            str = "3";
        }
        else if (str == "yellow") {
            str = "4";
        }
        else if (str == "green") {
            str = "5";
        }
        else if (str == "blue") {
            str = "6";
        }
        else if (str == "violet") {
            str = "7";
        }
        else if (str == "grey") {
            str = "8";
        }
        else if (str == "white") {
            str = "9";
        }
        else {
            str = "0";
        }
        return str;
    };
    ResistorColor.prototype.value = function () {
        // collects first two colors
        var one = this.colors[0].toLowerCase();
        var two = this.colors[1].toLowerCase();
        // sets values
        var num = this.set(one) + this.set(two);
        // returns answer
        return parseInt(num);
    };
    return ResistorColor;
}());
exports.ResistorColor = ResistorColor;
var R = new ResistorColor(["brown", "black"]);
console.log(R.value());
