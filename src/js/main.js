document.querySelector('.sub a').onclick = function () {
    document.querySelector('#left-block').classList.toggle('vis');
    document.querySelector('.sub').classList.toggle('active');

    /*let blocks = document.querySelectorAll( ".subsub" ); // находим все элементы с классом block
    for( let i = 0; i < blocks.length; i++){ // проходим циклом по всем элементам объекта
        blocks[i].onclick = function () {
            this.classList.toggle('active');
        };
    }*/

    let dropDowns = Array.from(document.querySelectorAll('.subsub'));

    const handleClick = (e) => {
        e.preventDefault();
        dropDowns.forEach(node => {
            node.classList.remove('active');
        });
        e.currentTarget.classList.toggle('active');
    }

    dropDowns.forEach(node => {
        node.addEventListener('click', handleClick)
    });

};

document.querySelector('.header-search svg').onclick = function () {
    document.querySelector('input').classList.toggle('active');
    document.querySelector('.header-search').classList.toggle('visible');
}

document.querySelector('.right-part__block.pr .link').onclick = function () {
    document.querySelector('.right-part__block.pr').classList.toggle('active');
}
document.querySelector('.right-part__block.lang .link').onclick = function () {
    document.querySelector('.right-part__block.lang').classList.toggle('active');
}