/** 문제
 * 문자열 my_string이 매개변수로 주어집니다 my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
 * my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
 * 연속된 수는 하나의 숫자로 간주합니다.
 * 000123과 같이 0이 선행하는 경우는 없습니다.
 * 문자열에 자연수가 없는 경우 0을 return 해주세요.
 * "aAb1B2cC34oOp" -> 37
 * "1a2b3c4d123Z"  -> 133
 */
function solution(my_string) {
    let answer = 0;
    let num = my_string.replace(/[a-zA-Z]/g, " ");
    let num_arr = num.split(" ");

    for(let n of num_arr) {
        if(n > 0) {
            answer += parseInt(n);
        }
    }

    console.log(answer);
    return answer;
}

solution('1a2b3c4d123Z');
