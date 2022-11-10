/** 문제
 * 문자열 my_string이 매개변수로 주어집니다.
 * my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
 * 연속된 숫자도 각각 한 자리 숫자로 취급합니다.
 * "aAb1B2cC34oOp" ->  10
 * "1a2b3c4d123"   -> 16
 */
function solution(my_string) {
    var answer = 0;
    let split_str = my_string.split("");

    for(let str of split_str) {
        if(!isNaN(str)) {
            answer += parseInt(str);
        }
    }

    console.log(answer);
    return answer;
}

solution('aAb1B2cC34oOp');