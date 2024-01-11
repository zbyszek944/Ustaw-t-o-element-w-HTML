console.log('WARSZTAT-USTAW TŁO ELEMENTÓW HTML')

const setBackground = () => {

   
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');

    p1.classList.add('bg-red');
    p2.classList.add('bg-yellow');
    // p1.style.bacgroundColor = 'red';
    // p2.style.bacgroundColor = 'yellow';
}

    

let btnSetBackground = document.getElementById('set-background');

btnSetBackground.addEventListener('click', setBackground);


