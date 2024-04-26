window.addEventListener("load", (event) => {
    let table = document.getElementById("table");

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
