var list, abr;


list = ['http://www.codeyourfuture.io', 'https://twitter.com/?lang=en', 'https://www.youtube.com/'];
abr = ['CYF', 'Youtube', 'Twitter'];
let element_list = document.getElementById('list');
while (!!list.length) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let new_li = document.createElement('li');
  new_li.setAttribute("href", list.shift());
  let new_a = document.createElement('a');
  new_a.innerText = abr.shift();

  new_li.appendChild(new_a);

  element_list.appendChild(new_li);
}
