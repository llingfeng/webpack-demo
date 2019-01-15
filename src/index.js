import _ from 'lodash';

function component(){
	var doc = document.createElement('div');
	doc.innerHTML = _.join(['hello','webpack'],' ');
	console.log(doc)
	return doc;
}

document.body.appendChild(component());