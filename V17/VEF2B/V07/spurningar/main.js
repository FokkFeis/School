var ele1 = document.getElementById('one');
var ele2 = document.getElementById('two').textContent;
var ele3 = document.getElementById('three').textContent;

var replace_ele2 = ele2.replace(ele2,"Jakob");
document.getElementById('two').textContent = replace_ele2;

ele1.classList.add('active');

document.getElementById('three').remove();
