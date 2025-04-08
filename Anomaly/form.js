function submitReport(event) {
    event.preventDefault();
    const mark1 = document.getElementById("checkImageSpecial").checked;
    const mark2 = document.getElementById("checkTitle").checked;
    const mark3 = document.getElementById("checkComment").checked;
    const mark4 = document.getElementById("checkDarktoSpecial").checked;
    const mark5 = document.getElementById("checkURLHome").checked;
    const mark6 = document.getElementById("checkHome").checked;
    const unmark2 = (!document.getElementById("checkDetailNormal").checked);
    const unmark3 = (!document.getElementById("checkDetailSpecial").checked);
    const unmark4 = (!document.getElementById("checkImageNormal").checked);
    const unmark5 = (!document.getElementById("checkImageDark").checked);
    const unmark6 = (!document.getElementById("checkURLSecond").checked);
    const unmark7 = (!document.getElementById("checkSpecialtoDark").checked);
    const unmark8 = (!document.getElementById("checkSortedbHome").checked);
    const unmark9 = (!document.getElementById("checkSortedbSecond").checked);
    const unmark10 = (!document.getElementById("checkTotal").checked);
    const unmark11 = (!document.getElementById("checkAccess").checked);
    const unmark12 = (!document.getElementById("checkDetailDark").checked);

    if (mark1 && mark2 && mark3 && mark4 && mark5 && mark6 && unmark2 && unmark3 && unmark4 && unmark5 && unmark6 && unmark7 && unmark8 && unmark9 && unmark10 && unmark11 && unmark12) {
        alert("เก่งมากๆเลย คุณทำหน้าที่ได้ดีมาก และนี่คือของรางวัล");
        NavigatetoA();
    }
    else {
        alert("OH ON!!!");
        NavigatetoB();
    }
}

function NavigatetoA() {
    let a = "ht"
    let b = "tp";
    let s = "s://";
    let o = "itc-";
    let l = "web-"
    let u = "fl";
    let t = "ag0";
    let e = "vercel.";
    document.location.href=a+b+s+o+l+u+t+"3."+e+"app/";
}

function NavigatetoB() {
    document.location.href="./RedFlag.html";
}