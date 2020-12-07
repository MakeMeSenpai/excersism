class spaceAge {
    seconds:number
    earthDays:number
    earthYears:number

    constructor(seconds:number) {
        this.seconds = seconds
        this.earthDays = this.seconds / 86400
        this.earthYears = this.onEarth()
    }

    onEarth():number {
        return this.earthDays / 365.25
    }

    onMercury():number {
        const mercuryDays:number = this.earthDays * 0.2408467
        const calc:number = this.earthYears * this.earthDays
        return calc / mercuryDays
    }

    onVenus():number {
        const venusDays:number = this.earthDays * 0.61519726
        const calc:number = this.earthYears * this.earthDays
        return calc / venusDays
    }

    onMars():number {
        const marsDays:number = this.earthDays * 1.8808158
        const calc:number = this.earthYears * this.earthDays
        return calc / marsDays
    }

    onJupiter() {
        const jupiterDays:number = this.earthDays * 11.862615
        const calc:number = this.earthYears * this.earthDays
        return calc/ jupiterDays
    }

    onSaturn():number {
        const saturnDays:number = this.earthDays * 29.447498
        const calc:number = this.earthYears * this.earthDays
        return calc / saturnDays
    }

    onUranus():number {
        const uranusDays:number = this.earthDays * 84.016846
        const calc:number = this.earthYears * this.earthDays
        return calc / uranusDays
    }

    onNeptune():number {
        const neptuneDays:number = this.earthDays * 164.79132
        const calc:number = this.earthYears * this.earthDays
        return calc / neptuneDays
    }
}

// 599594400 seconds old -> 19 earth years old
const AIS:number = 599594400
const s = new spaceAge(AIS)
console.log(s.onEarth())

export default spaceAge