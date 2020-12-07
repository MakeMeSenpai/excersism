"use strict";
exports.__esModule = true;
var Transcriptor = /** @class */ (function () {
    function Transcriptor() {
    }
    Transcriptor.prototype.toRna = function (dna) {
        var rna = [];
        dna = dna.toUpperCase();
        var nucleotides = dna.split("");
        for (var n in nucleotides) {
            if (nucleotides[n] === "G") {
                n = "C";
            }
            else if (nucleotides[n] === "C") {
                n = "G";
            }
            else if (nucleotides[n] === "T") {
                n = "A";
            }
            else if (nucleotides[n] === "A") {
                n = "U";
            }
            else {
                throw (console.error("Unacceptable input"));
            }
            rna.push(n);
        }
        return rna.join("");
    };
    return Transcriptor;
}());
var t = new Transcriptor();
console.log(t.toRna("GCTA"));
exports["default"] = Transcriptor;
