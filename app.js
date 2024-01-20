//1) დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.

const salaryage =( man,women) => {
 let myage= 23;
 let pensionage = 50;

 let leftyear = `${pensionage -myage}`
 console.log(`i have ${leftyear} until my first pension`)

}

salaryage(60,50)


//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.

const calculator  = (num1,num2,stin) => {
if (stin === "+"){
    console.log(`${num1 + num2}`)
} else if (stin === "-") {
    console.log(`${num1-num2}`)
} else if (stin === "/"){
    console.log (`${num1/num2}`)
} else if (stin === "*"){
    console.log (num1 * num2)
}
else {
    console.log("enter number")
}
}

calculator( prompt("enter your number"))

//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.

const checkPasswordStrength = (password) => {
    if(password > 16 ) {
        console.log("password must be less than 16")
    } else if (password< 8){
        console.log("password must be more than 8")
     
    }  else if (password === "")
    console.log("enter your password")

    else {
       console.log("error")
    }
    
}

checkPasswordStrength(prompt ("enter the password"))

//4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში 
//ეს ყვავილი ნაპოვნია!!
const flowertype = (flowers) => {
    switch (flowers) {
        case "vardi" :
        console.log("kvavili napovnia")
            break;
        case " gvirila":
            console.log("kvavili napovnia")
            break;
            case "tita":
                console.log("kvavili napovnia")
            break;
        default:
            console.log(" es kvavili ar arsebobs")
            break;
    }
}
flowertype(prompt("sheikvane kvavilis saxeli"))

//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!

const inputs  = () => {

let input1 = prompt ("enter number")
let input2 = prompt ("enter number")
let input3 = prompt ("enter number")

 if(input1 > input2 && input1 > input3){
    console.log("input1 is the biggest number")
 }  else if (input2 > input1 && input2 > input3) {
    console.log("input1 is the biggest number")
 } else if (input3 >input1 && input3 > input2)  {
    console.log ("input3 is the biggest number")
 } else {
    console.log ("enter number")
 }
}
inputs() 

