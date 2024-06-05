// script.js

function drawOmikuji() {
    // ランダムな数値を生成（1から4まで）
    var resultNumber = Math.floor(Math.random() * 4) + 1;
    
    // おみくじの結果を決定
    var resultText;
    switch(resultNumber) {
        case 1:
            resultText = "大吉";
            break;
        case 2:
            resultText = "吉";
            break;
        case 3:
            resultText = "小吉";
            break;
        case 4:
            resultText = "厄災";
            break;
    }
    
    // 結果を表示
    document.getElementById("result").textContent = "結果：" + resultText;
}
