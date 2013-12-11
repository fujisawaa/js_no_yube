var word = 'です。';

function changeColor(color) {
    chrome.tabs.executeScript(null, {
        "code": "document.body.innerHTML = document.body.innerHTML.split('" + word + "').join('" + color + "');"
    });
}

document.getElementById('nano').onclick = function() {
    changeColor('なのだ！ ');
    word = 'なのだ！ ';
}

document.getElementById('gonsu').onclick = function() {
    changeColor('でごんす。');
    word = 'でごんす。';
}
