class Panoram {
    str: string

    constructor(str: string) {
        this.str = str.toLowerCase()
    }

    isPanorama(): boolean {
        if (this.str.includes("a")) {
            if (this.str.includes("b")) {
                if (this.str.includes("c")) {
                    if (this.str.includes("d")) {
                        if (this.str.includes("e")) {
                            if (this.str.includes("f")) {
                                if (this.str.includes("g")) {
                                    if (this.str.includes("h")) {
                                        if (this.str.includes("i")) {
                                            if (this.str.includes("j")) {
                                                if (this.str.includes("k")) {
                                                    if (this.str.includes("l")) {
                                                        if (this.str.includes("m")) {
                                                            if (this.str.includes("n")) {
                                                                if (this.str.includes("o")) {
                                                                    if (this.str.includes("p")) {
                                                                        if (this.str.includes("q")) {
                                                                            if (this.str.includes("r")) {
                                                                                if (this.str.includes("s")) {
                                                                                    if (this.str.includes("t")) {
                                                                                        if (this.str.includes("u")) {
                                                                                            if (this.str.includes("v")) {
                                                                                                if (this.str.includes("w")) {
                                                                                                    if (this.str.includes("x")) {
                                                                                                        if (this.str.includes("y")) {
                                                                                                            return this.str.includes("z")
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return false
    }
}

const p = new Panoram("")
console.log(p.isPanorama())

export default Panoram