/** 문제
 * 숫자들이 공백으로 구분된 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다.
 * 이 때 "Z”가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다.
 * 숫자와 “Z”로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.
 * "1 2 Z 3" -> 4
 * "10 20 30 40" -> 100
 * "10 Z 20 Z 1" -> 1
 */
function solution(s) {
    let answer = 0;
    let s_arr = s.split(" ");
    let prev = 0;

    for(let idx in s_arr) {
        if(s_arr[idx].toLowerCase() == 'z') {
            if(s_arr[idx-1].toLowerCase() == 'z') {
                for(let n=idx-2; n>0; n--) {
                    prev++;
                    if(s_arr[n] > 0) {
                        break;
                    }
                }
                answer -= parseInt(s_arr[idx-1]);
            } else {
                answer -= parseInt(s_arr[idx-1]);
            }
        } else {
            answer += parseInt(s_arr[idx]);
        }
    }

    return answer;
}

solution('10 Z 20 Z 1');



