function classifies_students(score){
    for(let student in score){
      let grade = score[student] >= 90? "A":
                  score[student] >= 80 && score[student]< 90 ? "B":
                  score[student] >= 70 && score[student]< 80 ? "C" :
                  score[student] >= 60 && score[student]< 70 ? "D" : "F";
      console.log(`${student} - ${grade}`);                  
    }
}
  let studentScores = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
  };
  
  classifies_students(studentScores);
  