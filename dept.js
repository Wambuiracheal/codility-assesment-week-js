function solution(A){
    let counts = A.reduce((map, dept) => (map[dept] = (map[dept] || 0) + 1, map), {});
    return Math.max(...Object.values(counts))
  }

console.log(solution(["Cardiology", "Orthopaedics", "Neurology", "Cardiology", "Orthopaedics", "Cardiology"]))
console.log(solution( ["Oncology", "Gynaecology", "Orthopaedics", "Oncology", "Gynaecology", "Orthopaedics"]))
console.log(solution( ["Neurology", "Cardiology", "Oncology"]))