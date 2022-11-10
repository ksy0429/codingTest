function solution (s) {
   var answer = [];
   let split_str = s.split("");
   let split_point = 0;


   let res = [];

   for(let i=0; i<split_str.length; i++) {
       if(split_str[i] === split_str[i-1] || split_str[i] === split_str[i+1]) { // 이전, 다음 알파벳이랑 동일하다는 말
           split_point = i-1;
           answer.push('');
       } else {
           answer.push(split_str[i]);
       }
   }
   //console.log(answer);

   let pass_point = '';
   for(let f=0; f<answer.length; f++) {
       if(answer[f] !== '' && f !== pass_point) {
           pass_point = f+1;
           if(answer.length-1 == f) {
               res.push(answer[f]);
           } else {
               res.push(answer[f] + answer[f + 1]);
           }
       }
   }
   console.log(res);

}

solution("mississippi");