// //QUESTION 1:COUNTRY WITH GREATEST INVESTMENT
// //  function solution(A, B) {
// //     let investmentMap = new Map();

// //     // Step 1 & 2: Extract country code and sum investments
// //     for (let i = 0; i < A.length; i++) {
// //         let countryCode = A[i].substring(0, 2); // Extract first two characters

// //         // Update total investment for this country
// //         if (investmentMap.has(countryCode)) {
// //             investmentMap.set(countryCode, investmentMap.get(countryCode) + B[i]);
// //         } else {
// //             investmentMap.set(countryCode, B[i]);
// //         }
// //     }

// //     // Step 3: Find the country with max investment
// //     let maxInvestment = 0;
// //     let maxCountry = "";

// //     for (let [country, investment] of investmentMap) {
// //         if (investment > maxInvestment) {
// //             maxInvestment = investment;
// //             maxCountry = country;
// //         }
// //     }

// //     return maxCountry;
// // }


// // // QUESTION 2:a APPEARING BEFORE b
// // function solution(S){
// //     let found_b = false;
// //     for (let i = 0; i < S.length; i++) {
// //         if (S[i] === 'b') {
// //             found_b = true;
// //         }else if (S[i] === 'a' && found_b){
// //             return false
// //         }
// //     }
// //     return true
// // }
// // console.log(solution('abba'))
// // // 'aabbb, 'ba', 'aaa', 'b', 'abba'


// // QUESTION 3-ODD AND EVEN NUMBERS
// function solution(S){
//     let map = {}
//     let count = 0
//     for(char of S){
//         if(map[char]){
//             map[char] += 1
//         }else {
//             map[char] = 1
//         }
//     }
//     for(key in map){
//         if(map[key]%2 !== 3){
//             count += 1
//         }
//     }
//     return count
// }

// // QUESTION 4: COUNT NUMBER OF DEPTS IN AN ARRAY
// function solution(A){
//     let counts = A.reduce((map, dept) => (
//         map[dept] = (map[dept] || 0) + 1, 
//         map), 
//         {});

//     return Math.max(...Object.values(counts))
//   }

// console.log(solution(["Cardiology", "Orthopaedics", "Neurology", "Cardiology", "Orthopaedics", "Cardiology"]))
// console.log(solution( ["Oncology", "Gynaecology", "Orthopaedics", "Oncology", "Gynaecology", "Orthopaedics"]))
// console.log(solution( ["Neurology", "Cardiology", "Oncology"]))

// solo's solution
// function solution(A){
//     let dict = {}
//     for(dept of A){

//         if(dict[dept]){
//             dict[dept] += 1
//         }else{
//             dict[dept] = 1
//         }
//     }

//     let max = 0
//     for(key in dict){

//         if(dict[key] > max){
//             max = dict[key]
//         }

//     }
//     return max

// }
// console.log(solution(["Cardiology", "Orthopaedics", "Neurology", "Cardiology"]))
// console.log(solution( ["Oncology", "Gynaecology", "Orthopaedics", "Oncology", "Gynaecology", "Orthopaedics"]))
// console.log(solution( ["Neurology", "Cardiology", "Oncology"]))


// QUESTION 5: GRAPH QUESTION
function solution(X, Y){
    // [1,1,3,4,7,8,8]
    let sorted = X.sort((x,y) => x - y)
    let widest = 1
    for(let i = 0; i < sorted.length; i++){
        if(sorted[i + 1] - sorted[i] > widest){
            widest = sorted[i + 1] - sorted[i]
        }
    }
    return widest

}

