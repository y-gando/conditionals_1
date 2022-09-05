
// HTML内のselect要素を宣言したselectに代入
const select = document.querySelector('select');
// HTML内のhtmlを宣言dいたhtmlに代入
const html = document.querySelector('html');
// bodyに10pxのpaddingをつける
document.body.style.padding = '10px';

// update関数を定義
function update(bgColor,textColor) {
    // backgroundColorをbgColorに書き換える
    html.style.backgroundColor = bgColor,
    // colorをtextColorに書き換える
    html.style.color = textColor,
}

// onechangeが選択された時に関数が動く
select.onchange = function() {
    // 選ばれた値がbrackと同等の場合、黒を白に、白を黒にする
    (select.value === 'black')? update('black','white');
    update('black','white');
}