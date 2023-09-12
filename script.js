const judul = document.getElementById('judul');
judul.style.color='red';
judul.style.backgroundColor='blue';
judul.innerHTML='Yo Yo EH EH'

// const p = document.getElementsByTagName('p');

// for (let i=0;i<p.length; i++){
//     p[i].style.backgroundColor = 'lightgreen';
// }

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontsize='50px';

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = "Dirubah dengan javascript"; 

const p4 = document.querySelector('#b p');
p4.style.color = 'green'
p4.style.fontsize = '25px'

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'lightcoral';

// const p1 = document.querySelector('p');
// p1.innerHTML = 'ini dirubah melalui Javascript';

// const p = document.querySelector('p');

// const p = document.getElementsByTagName('p');
// for (let i=0;i<p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }