// console.log("Hello Typescript")

let firstName: string = " ronnie"
let age: number = 21
let good: boolean = false

// firstName = 4 not valid

let fruit: string[]=[
    "bananna",
    "apple"
]

console.log(`
    First Name: ${firstName}
    Your Age: ${age}
    you have many ${fruit}
`)

enum taxForm{
    standard = "1040",
    childCredit = "1065",
    SCorp =  "1121",
    CCorp = "1120s"
}

console.log(`
    you need form ${taxForm.childCredit}
`)


// let fruit: string[]=[
//     "bananna",
//     "apple"
// ]

function getFruit( index: number): string {
    return fruit[index]
}

let chooseFruit: string = getFruit(0)

console.log(` you choose an ${getFruit(0)}`)