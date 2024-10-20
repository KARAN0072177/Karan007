let value1=0;
let winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count=0;
function clicked(value) {
    let b = document.querySelectorAll(".box");
    if (value1%2!=0){
        b[value-1].innerHTML="O";
    }
    else
    {
        b[value-1].innerHTML="X";
    }
    value1=value1+1;
    let result1 = check1();
    if (result1==true) {
        let win = document.querySelector("h2");
        win.innerHTML = win.innerHTML+" Player 1 Wins!"
    }
    else
    {
        count=count+1;
    }
    let result2 = check2();
    if (result2==true) {
        let win = document.querySelector("h2");
        win.innerHTML = win.innerHTML+" Player 2 Wins!"
    }
    else
    {
        count=count+1;
    }
    b[value-1].disabled=true;
    if(count==18)
    {
        let win = document.querySelector("h2");
        win.innerHTML = win.innerHTML+"Game Draw!"
    }
}
function check1()
{
    let flag = false;
    for (let index = 0; index <8; index++) {
        let result = 0;
        for (let index2 = 0; index2 <3; index2++) {
            let idx = winner[index][index2];
            let a = document.querySelectorAll(".box");
            let pop = a[idx].innerHTML;
            if(pop=='X')
            {
                result=result+1;
            }
            else
            {
                result=0;
            }
        }
        if (result==3) {
            flag=true;
            let a = document.querySelectorAll(".box");
            for (let index = 0; index <9; index++) {
                a[index].disabled=true;                
            }
            break;
        }        
        else
        {
            flag=flag;
        }
    }
    return flag;
}
function check2()
{
    let flag = false;
    for (let index = 0; index <8; index++) {
        let result = 0;
        for (let index2 = 0; index2 <3; index2++) {
            let idx = winner[index][index2];
            let a = document.querySelectorAll(".box");
            let pop = a[idx].innerHTML;
            if(pop=='O')
            {
                result=result+1;
            }
            else
            {
                result=0;
            }
        }
        if (result==3) {
            flag=true;
            let a = document.querySelectorAll(".box");
            for (let index = 0; index <9; index++) {
                a[index].disabled=true;                
            }
            break;
        }        
        else
        {
            flag=flag;
        }
    }
    return flag;
}
function refresh()
{
    location.reload();
}
check1();

