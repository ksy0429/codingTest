/** 문제
 * 영어 소문자로 이루어진 문자열 s가 주어집니다. s를 같은 글자들이 2개이상 연속해서 이어지는 구간을 기점으로 분할(split)하여
 * 차례대로 배열에 담아 return 하도록 solution함수를 완성해주세요.
 * 단, aabbb 같이 여러개의 구간(aa, bbb)이 일렬로 이어진 것은 하나의 구간으로 칩니다.
 * s = aabbb 라면 정답은 ["", ""]가 됩니다.
 * pizza -> ["pi","a"]
 * mississippi -> ["mi", "i", "i", "i"]
 */
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

//pizza
//aabcdddefggg
//mississippi
//abyyy
//kkkkkk

solution("pizza");