 //   const domElement = document.createElement(ReractElement.type)
//     domElement.innerHTML = ReractElement.children
//     domElement.setAttribute('href',ReractElement.props.href)
//     domElement.setAttribute('terget', ReractElement.props.target)
//     containor.appendChild(domElement)
// }

// const ReractElement = {
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target :'_blank'
//     },
//     children:'clickme to visit google'
// }

// const maincontainor= document.querySelector('#root')


// data tipe

// let name = "sanju"
// let age = 22
// let isLogin = true

//number => 2 to power 53
//bigint
//string = ""
//boolean = true/false
//null => standalone value
//undefine => valunot given
//sumbol => unique

// console.log(typeof null) //output object
// console.log(typeof undefined) //output undefine


//++++++++++++++++++++++++++++++ sec ++++++++++++++++++++++++++++++


//let score = "450abc"
// let score = null

// console.log(typeof(score))
// console.log(typeof score)

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true/false => 1 or 0



// let isLogin = " sanju"

// let booleanIsLoggedIn = Boolean(isLogin)
// console.log(booleanIsLoggedIn)

// 1 => true ; 0 => folse
// "" =>folse ; "sanju" => true


// let soumNumber = 333

// let stringNumber = String(soumNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)


//++++++++++++++++++++++++++++++ why string to numbers? (operation)++++++++++++++++++++++++++++++


let value = 3 
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**2)
// console.log(2%3)




let str1 = "sanju"
let str2 = "ghosh"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log(1 + "2" + 3)//output 123
// console.log(1 + 2 + "3")//output 33
// console.log("1" + 2 + 3)//output 123

//++++++++++++++++++++++++++++++ compareson ++++++++++++++++++++++++++++++

// console.log("1" > 2)
// console.log("02" > 1)


// console.log(null < 0) comparation operatior
// console.log(null==0)   equality operater
// console.log(null===0) equality operater
// console.log(null>=0) comparation operatior

//in equality check and comparison check work defferantly .
//comparition contain null to a number and equality treat it as a 0. thise why (3) null >= 0 is true and (1)>0 is false

//+++++++++++++++++++++++++( intervew perspective )++++++++++++++++++++++++++++++

// call by valu / call by referance

//premetive(call by valu)
// 7 types : Strings , Number , Booleant , null ,undefine ,Symbal ,Bigint
const score = 100
const scoreValu = 100.03
const id = Symbol('123')
const anatherId = Symbol('123')//output deferent

const BigNumber = 3264832384n

//non-premetive(referance tipe)
//array , object, Function


const inVoiceNumber = new String("sanju ghosh")

// console.log(inVoiceNumber)
// console.log(inVoiceNumber.length)
// console.log(inVoiceNumber.at)

//all stings methord                 not recomanded => can be doun by css
// anchor() not recomanded  /\it is use for link semelar as <a> tag in html
// at()       /\need to define an index = integer(pos/neg) at()coll that index valu
// big()    not recomanded   
// blink()  not recomanded
// bold()   not recomanded
// charAt()
// charCodeAt()
// codePointAt()
// concat()
// String()
// endsWith()
// fixed()     not recomanded
// fontcolor() not recomanded
// fontsize()  not recomanded
// includes()
// indexOf()
// isWellFormed()
// italics()    not recomanded
// lastIndexOf()
// link()       not recomanded
// localeCompare()
// match()
// matchAll()
// padEnd()
// padStart()
// repeat()
// replace()
// replaceAll()
// search()
// slice()
// small()     not recomanded
// split()
// startsWith() 
// strike()    not recomanded
// sub()       not recomanded 
// substr()    not recomanded
// substring()
// sup()       not recomanded 
// toLocaleLowerCase()
// toLocaleUpperCase()
// toLowerCase() 
// toString()
// toUpperCase()
// toWellFormed()
// trim()
// trimEnd()
// trimStart() 
// valueOf()

//++++++++++++++++++++++++++++++ MAth /precicon ++++++++++++++++++++++++++++++

const sco = 400
// console.log(sco)

const Balance =new Number(100)
// console.log(Balance)

// console.log(Balance.toString().length)
// console.log(Balance.toFixed(1))

// presection 
const otherNumber = 125.6564

// console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'))



//  console.log(Math.floor((Math.random() * 100) + 1))
//  console.log((Math.random() * 10) + 1 )//to avoid zero
//  console.log(Math.random())


 let min = 10
 let max = 20
//  console.log(Math.floor(Math.random() * (max - min + 1)) + min)
