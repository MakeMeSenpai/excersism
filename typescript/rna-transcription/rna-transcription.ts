class Transcriptor {
    toRna(dna:string):string {
        const rna:Array<string> = []
        dna = dna.toUpperCase()
        const nucleotides:Array<string> = dna.split("")
        for (let n in nucleotides) {
            if (nucleotides[n] === "G") {
                n = "C";
            } else if (nucleotides[n] === "C") {
                n = "G";
            } else if (nucleotides[n] === "T") {
                n = "A";
            } else if (nucleotides[n] === "A") {
                n = "U";
            } else {
                throw(console.error("Unacceptable input"));
            }
            rna.push(n)
        }
        return rna.join("")
    }
}

const t = new Transcriptor()
console.log(t.toRna("GCTA"))

export default Transcriptor