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
        let cell = document.getElementById(targetNum + "-" + (i + 2));
        let inputValue = parseInt(document.getElementById("input-value-" + (i + 1)).value);
        if (!isNaN(inputValue)) {
            cell.innerText = parseInt(cell.innerText) + inputValue;
        }
    }
}

function judge() {
    let score = [0, 0, 0, 0, 0];
    let weight = [1, 1/5, 1/5000];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = document.getElementById((i + 1) + "-" + (j + 2));
            score[i] += weight[j] * parseInt(cell.innerText);
        }
    }

    console.log(score);

}
