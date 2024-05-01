const charactersName = ["荒井 マリカ", "高橋 和美", "新庄 絵里", "山本 かおる", "奈良 林凜"];

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
    let score = {};
    let weight = [1, 1/5, 1/5000];
    let len = charactersName.length;

    for (let i = 0; i < len; i++) {
        score[charactersName[i]] = 0;
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = document.getElementById((i + 1) + "-" + (j + 2));
            score[charactersName[i]] += weight[j] * parseInt(cell.innerText);
        }
    }

    let sortedScore = Object.keys(score).map((k)=>({key:k, value:score[k]}));
    sortedScore.sort((a, b)=> b.value - a.value);

    let ranking = document.getElementById("ranking");
    let rankingText = "";
    let rankNum = 1;

    for (let i = 0; i < len; i++) {
        rankingText += rankNum + "位　" + sortedScore[i]["value"].toFixed(2) + "点　" + sortedScore[i]["key"] + "\n";
        if (i < len - 1 && sortedScore[i]["value"] != sortedScore[i + 1]["value"]) {
            rankNum++;
        }
    }

    ranking.innerText = rankingText;

    let dialog = document.getElementById("result-dialog");
    dialog.style.visibility = "visible";

    let back = document.getElementById("dialog-background");
    back.style.visibility = "visible";
}

function hiddenDialog() {
    let dialog = document.getElementById("result-dialog");
    dialog.style.visibility = "hidden";

    let back = document.getElementById("dialog-background");
    back.style.visibility = "hidden";   
}