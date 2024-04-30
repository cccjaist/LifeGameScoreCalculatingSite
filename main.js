window.addEventListener("load", (event) => {
    let table = document.getElementById("calc-table");

    let rnum = 0;
    for (let row of table.rows) {
        let cnum = 0;
        for(let cell of row.cells){
        cell.id = rnum + "-" + cnum;
        cnum++;
        console.log(cell.innerText);
        }
        rnum++;
    }

    
});

function changeStatus() {
    let nameNum = document.getElementsByName("name-num");
    let len = nameNum.length;
    
    for (let i = 0; i < len; i++) {
        if (nameNum.item(i).checked) {
            console.log(nameNum.item(i).value);
            break;
        }
    }
}
