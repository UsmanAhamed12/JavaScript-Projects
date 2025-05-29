// const input = new Date(document.getElementById('dob').value);
// const output = document.getElementById('output');
const btn = document.getElementById('btn');



// btn.addEventListener('click', () => {

//     const today = new Date();

//     let age = today.getFullYear() - input.getFullYear();

//     output.innerHTML = age;
// })

// function getAge() {
//   const input = document.getElementById("dob").value;
//   const output = document.getElementById("output");

//   if (!input) {
//     output.innerHTML = "❌ Please select your date of birth.";
//     return;
//   }

//   const dob = new Date(input);
//   const today = new Date();

//   let years = today.getFullYear() - dob.getFullYear();
//   let months = today.getMonth() - dob.getMonth();
//   let days = today.getDate() - dob.getDate();

//   // Adjust for negative days
//   if (days < 0) {
//     months -= 1;
//     const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
//     days += prevMonth.getDate(); // number of days in the previous month
//   }

//   // Adjust for negative months
//   if (months < 0) {
//     years -= 1;
//     months += 12;
//   }

//   output.innerHTML = `🗓️ You are ${years} years, ${months} months and ${days} days old.`;
// }

let input = document.getElementById('dob');
input.max = new Date().toISOString().split('T')[0];



btn.addEventListener('click', () => {

    

    let birthdate = new Date(input.value);

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1){
        m3 = m2 - m1
    }else{
        y3--;
        m3 = 12 + m2 - m1
    }

    if (d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getdaysinmonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0){
        m3 = 11;
        y3--;
    }

    console.log(y3, m3, d3)

    function getdaysinmonth(year, month){
        return new Date(year, month, 0).getDate();
    }

    if (!input) {
    output.innerHTML = "❌ Please select your date of birth.";
}else{
    output.innerHTML = `🗓️ You are ${y3} years, ${m3} months and ${d3} days old.`;
    }
})
