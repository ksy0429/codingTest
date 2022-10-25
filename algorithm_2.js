// 1번문제
// 티켓총수 , [등급, 구매하고싶은 티켓 수]
// 등급이 높은 순으로 티켓 구매 가능
// 등급이 같으면 더많은 구매티켓 수로 순서 정렬
// 남은 티켓보다 구매를 원하는 티켓이 많으면 구매 불가
// 티켓 판매 수 결과로 출력
function solution(tickets, requests) {
    let remainTicketCnt = tickets;
    let ticketCnt = 0;

    requests.sort( (a,b) => {
        if(a[0] == b[0]) {
            b[1] - a[1];
        } else {
            a[1] - b[1];
        }
    })

    requests.forEach(item => {
        if(remainTicketCnt >= item[1] && item[1] <= tickets) {
            remainTicketCnt -= item[1];
            ticketCnt += item[1];
        }
    })

    return ticketCnt;

}