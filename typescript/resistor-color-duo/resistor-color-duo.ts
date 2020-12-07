/* The program will take color names as input and output a two
 digit number, even if the input is more than two colors!*/

import { kMaxLength } from "buffer";

export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    this.colors = colors;
   }
  
  set(str:string):string {
    if (str == "brown") {
      str = "1"
    } else if (str == "red") {
      str = "2"
    } else if (str == "orange") {
      str = "3"
    } else if (str == "yellow") {
      str = "4"
    } else if (str == "green") {
      str = "5"
    } else if (str == "blue") {
      str = "6"
    } else if (str == "violet") {
      str = "7"
    } else if (str == "grey") {
      str = "8"
    } else if (str == "white") {
      str = "9"
    } else {
      str = "0"
    }
    return str
  }

  value():number {
    // collects first two colors
    const one:string = this.colors[0].toLowerCase();
    const two:string  = this.colors[1].toLowerCase();

    // sets values
    const num:string = this.set(one) + this.set(two)

    // returns answer
    return parseInt(num)
  }
}

const R = new ResistorColor(["brown", "black"])
console.log(R.value())