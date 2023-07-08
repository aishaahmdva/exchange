let aze = prompt ('Dəyişmək istədiyiniz məbləği yazın');
let usd = aze /  1.7;
let euro = aze /  1.85;
let tl = aze / 0.06523
let rus = aze / 0.01861

document.getElementById('aise').innerHTML = aze + ' m = ' + usd.toFixed() + ' $ ' ;

document.getElementById('a').innerHTML = aze + ' m = ' + euro.toFixed() + ' € ' ;

document.getElementById('i').innerHTML = aze + ' m = ' + tl.toFixed() + ' 	₺ ' ;

document.getElementById('s').innerHTML = aze + ' m = ' + rus.toFixed() + ' 	₽ ' ;


