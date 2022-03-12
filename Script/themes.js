const btnTheme = document.querySelector('.switch');
const container_main = document.querySelector('.container-main')
const container_btns = document.querySelector('.filas-botones')
const bolita = document.querySelector('.bolita')
const btnResult = document.querySelector('.btnResult')
const screen = document.getElementById('resultado');
const btnsDelete = document.querySelectorAll('.btnDelete')
const title = document.querySelector('h1')
const btns = document.querySelectorAll('.btns')
const numerosTemas = document.querySelectorAll('p');


btnTheme.addEventListener('click', (e) => {
    if (e.target.classList.contains('switch')) {

        // Dracula Theme
        if (btnTheme.classList.contains('light')) {
            btnTheme.classList.remove('light');
            btnTheme.classList.add('dracula');
            bolita.style.left = 'unset';
            bolita.style.right = '2px';
            bolita.style.background = '#00DECF'
            numerosTemas.forEach(element => {
                element.style.color = '#F9E458';
            })
            btns.forEach(element => {
                element.style.background = '#331B4D'
                element.style.boxShadow = '0px 3px 1px #76228D'
                element.style.color = '#F9E458'
            })
            btnsDelete.forEach(element => {
                element.style.boxShadow = '0px 3px 1px #76228D'
                element.style.background = '#56077C';
                element.style.fontSize = '20px'
                element.style.color = 'white';
            })
           
            btnResult.style.background = '#00DECF'
            btnResult.style.color = '#1D0836'
            btnResult.style.boxShadow = '0px 3px 1px ##68FCF2'
            btnTheme.style.background = '#1D0836';
            container_main.style.background = '#17062A';
            container_btns.style.background = '#1D0836'
            screen.style.background = '#1D0836'
            screen.style.color = '#F9E458';
            title.style.color = '#F9E458'
        }

        // Light Theme
        else if (btnTheme.classList.contains('dark')) {
            btnTheme.classList.remove('dark');
            btnTheme.classList.add('light');
            bolita.style.left = 'unset';
            bolita.style.right = '22px';
            bolita.style.background = '#C85401';
            numerosTemas.forEach(element => {
                element.style.color = 'black';
            })
            btns.forEach(element => {
                element.style.background = '#E6E6E6'
                element.style.boxShadow = '0px 3px 1px rgba(0, 0, 0, 0.611)'
                element.style.color = 'black'
            })
            btnsDelete.forEach(element => {
                element.style.boxShadow = '0px 3px 1px #1B6067'
                element.style.background = '#398188';
                element.style.fontSize = '20px'
                element.style.color = 'white';
            })
           
            btnResult.style.background = '#C85401'
            btnResult.style.color = 'white'
            btnResult.style.boxShadow = '0px 3px 1px ##863700'
            btnTheme.style.background = '#D2CECD';
            container_main.style.background = '#E6E6E6';
            container_btns.style.background = '#D2CECD'
            screen.style.background = 'white'
            screen.style.color = 'black';
            title.style.color = 'black'
        }

        // Dark Theme
        else if (btnTheme.classList.contains('dracula')) {
            btnTheme.classList.remove('dracula');
            btnTheme.classList.add('dark');
            bolita.style.left = '2px';
            bolita.style.right = 'unset';
            bolita.style.background = '#D13F30';
            numerosTemas.forEach(element => {
                element.style.color = 'white';
            })
            btns.forEach(element => {
                element.style.background = '#EAE3DC'
                element.style.boxShadow = '0px 3px 1px #B5A69A'
                element.style.color = '#484B58'
            })
            btnsDelete.forEach(element => {
                element.style.boxShadow = '0px 3px 1px #404E75'
                element.style.background = '#64719A';
                element.style.fontSize = '20px'
                element.style.color = 'white';
            })
           
            btnResult.style.background = '#D13F30'
            btnResult.style.color = 'white'
            btnResult.style.boxShadow = '0px 3px 1px #91281E'
            btnTheme.style.background = '#252D44';
            container_main.style.background = '#3B4664';
            container_btns.style.background = '#252D44'
            screen.style.background = '#181F32'
            screen.style.color = 'white';
            title.style.color = 'white'
        }
    }


})