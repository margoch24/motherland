function readMore(text, en) {
    var currentText = document.getElementById('read_more_text' + text);
    var btnText = document.querySelector('.btn_more_text' + text);
    var arrow = document.getElementById('arrow' + text);
    if(currentText.className.includes('read-more-text')) {
        currentText.classList.remove('read-more-text');
        btnText.textContent = 'read less';
        arrow.classList.add('read-more-text')
    } else {
        currentText.classList.add('read-more-text');
        btnText.textContent = 'read more';
        arrow.classList.remove('read-more-text')
    } 
}


window.onscroll = function() {
    var header = document.getElementById("header");

    if (window.pageYOffset > 1) {
        header.classList.add("scroll-head");
        document.querySelector(".nav-item-en div a").classList.add('black');
    } else {
        header.classList.remove("scroll-head");
        document.querySelector(".nav-item-en div a").classList.remove('black');
    }
};

document.querySelector('#home-item').addEventListener('click', function() {
    window.scrollTo(0, 0);
})
document.querySelector('#letters-item').addEventListener('click', function() {
    window.scrollTo(0, document.querySelector('#letter_components').scrollHeight + 700);
})
document.querySelector('#contacts-item').addEventListener('click', function() {
    window.scrollTo(0, document.body.scrollHeight);
})

function addHover(nameLink) {
    document.querySelector('#' + nameLink + ' p').classList.add("white");
    document.querySelector('#' + nameLink + '-item').classList.add('white-li');
}
function removeHover(nameLink) {
    document.querySelector('#' + nameLink + ' p').classList.remove("white");
    document.querySelector('#' + nameLink + '-item').classList.remove('white-li');
}

