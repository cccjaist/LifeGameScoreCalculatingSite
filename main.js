window.addEventListener("load", (event) => {
    let table = document.getElementById("calc-table");

    let rnum = 0;
    for (let row of table.rows) {
        let cnum = 0;
        for(let cell of row.cells){
            cell.id = rnum + "-" + cnum;
            cnum++;
        }
        rnum++;
    }
});

function changeStatus() {
    let nameNum = document.getElementsByName("name-num");
    let len = nameNum.length;
    let targetNum = 0;
    
    for (let i = 0; i < len; i++) {
        if (nameNum.item(i).checked) {
            targetNum = nameNum.item(i).value;
            break;
        }
    }

    for (let i = 0; i < 3; i++) {
        let cell = document.getElementById((targetNum + 1) + "-" + (i + 2));
        let inputValue = parseInt(document.getElementById("input-value-" + (i + 1)).value);
        cell.innerText = parseInt(cell.innerText) + inputValue;
    }
}
