// 2번 문제
// 다이어트
// 아침,점심,저녁 중 연속으로 3끼를 굶을 수 없음
// 총 최소 칼로리만 먹어야 함
// 1일차 [360,138,338]
// 2일차 [230,102,311]
// 3일차 [320,474,214]
// 4일차 [131,498,484]
// 5일차 [366,176,249]
// 6일차 [323,407,116]
// 7일차 [265,433,317]
// 무조건 최종 칼로리가 1645값이 나와야 함
function solution(diet) {
    let totalKcal = 0;
    let minusDay = 0;
    let minkcal = 0;

    diet.forEach((item, idx) => {
        let chkDay = 0;
        console.log('번호 인덱스 = ' + idx + ' / 마지막 끼니일자 = ' + minusDay + ' / 체크' + Number(minusDay + 3));

        if( (Number(minusDay + 3) > 3)) {
            minkcal = Math.min(item[0], item[1]);
        } else if((idx != 0 && Number(minusDay) < 1)) {
            minkcal = Math.min(item[0]);
        } else {
            minkcal = Math.min(item[0], item[1], item[2]);
        }

        let kcal = Math.min(item[0], item[1], item[2]);

        for (let i = 0; i < item.length; i++) {
            if (item[i] === kcal) {
                minusDay = i;
            }
        }

        console.log('실제최소' + kcal);
        console.log('선택최소' + minkcal);

        totalKcal += minkcal;

    });

    console.log(totalKcal);
}

console.log(solution([ [360,138, 338], [230,102,311], [320, 474, 214], [131,498,484], [366,176,249], [323,407,116], [265,433,317] ]));

