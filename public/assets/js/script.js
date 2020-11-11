const saveBtn = document.querySelector("#btnSave");


function speakOut() {
    const $teamName = document.querySelector("#team");
    const $managerName = document.querySelector("#name");
    const $phoneNumber = document.querySelector("#cellphone");
    const $startDay = document.querySelector("#calendar_01");
    const $endDay = document.querySelector("#calendar_02");
    const $txtMemo = document.querySelector("#memo");
    const managerObj = { }

    console.log(`팀이름 ${$teamName.value} \n이름 ${$managerName.value} \n핸드폰 번호 ${$phoneNumber.value} \n시작일 ${$startDay.value} \n종료일 ${$endDay.value} \n메모 ${$txtMemo.value}`)
    //데이터 확인 
    if ($teamName.value === '' || $managerName.value === ''|| $phoneNumber.value === '' || $startDay.value === '' || $endDay.value === '') {
        alert('입력 필수 항목입니다.');
        return false;
    }


    //데이터 삽입
    dataInputCalendar ($teamName.value, $managerName.value, $phoneNumber.value, $startDay.value, $endDay.value , $txtMemo.value );

    //초기화
    $("#team option:eq(0)").attr("selected", "selected");
    $managerName.value = ''
    $phoneNumber.value = ''
    $startDay.value = ''
    $endDay.value = ''
    $txtMemo.value = ''
    
    //팝업 닫기
    $(".layer-close-button").click();
}

function dataInputCalendar(teamName, name, phonenum, startDay, endDay, txtmemo) {
    
    const $calendarName = document.querySelector(".schedule-calendar .nameWrap i.name");
    const $calendarDate = document.querySelectorAll(".cal-wrap td button");
    $calendarDate.forEach(function(dateBtn){// dateBtn == $calendarDate
        const dateVal = dateBtn.getAttribute("data-date")
        const calDateVal = to_date(dateVal);
        const inputStartDateVal = to_date(startDay);
        const inputEndDateVal = to_date(endDay);
        
        
        console.log(startDay)
        if(inputStartDateVal < calDateVal && inputEndDateVal < endDay) alert(calDateVal)
    })
    //날짜값을 확인해서 해당 날짜에 담당자이름을 넣는다.
    const p_tag = document.createElement("p");
    p_tag.name = name;
    $calendarName.innerText = p_tag.name;

    
    console.log($calendarName)

}

function to_date(date_str) {
    //date_str 을 받아서 - 삭제한 값으로 만들기
    let date_str_raw = date_str.replace(/-|./g,"")
    let yyyyMMdd = String(date_str_raw);
    let sYear = yyyyMMdd.substring(0,4);
    let sMonth = yyyyMMdd.substring(4,6);
    let sDate = yyyyMMdd.substring(6,8);

    console.log(date_str_raw)
    return new Date(Number(sYear), Number(sMonth)-1, Number(sDate));
}

function init () {
    saveBtn.addEventListener("click",function(e) {
        e.preventDefault();
        speakOut();
    })
}
init ()