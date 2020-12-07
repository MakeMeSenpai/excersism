function isLeapYear(year:number):boolean {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true
            }
            return false
        }
        return true
    }
    return false
}

const years:Array<number> = [2015, 2016, 1900, 2000, 1978, 1992, 2400]
console.log(isLeapYear(years[0]))
export default isLeapYear