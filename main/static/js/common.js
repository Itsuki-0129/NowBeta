window.addEventListener('load', (event) => {
	console.log("Onload is worked!!");
	let data = {
		title: "たいとる００１",
		description: "せつめい００１"
	};

	const tileNode = document.createElement('div');
	tileNode.setAttribute('class', 'single_tile');
	const titleNode = document.createElement('p');
	titleNode.setAttribute('class', 'tile_title');
	titleNode.appendChild(document.createTextNode(data.title));
	const mainNode = document.createElement('p');
	mainNode.setAttribute('class', 'tile_main');
	mainNode.appendChild(document.createTextNode(data.description));
	
	tileNode.appendChild(titleNode);
	tileNode.appendChild(mainNode);

	tileNode.style.top = '90px';
	tileNode.style.left = '160px';
	
	document.getElementsByClassName('main').item(0).appendChild(tileNode);

});

let dragNode;
dragNode = document.getElementsByClassName('single_tile').item(1);

dragNode.onmousedown = function (event) {
	//ドラッグした要素を変数に格納
	//dragNode = event.target;
	//dragNode = document.getElementsByClassName('single_tile').item(1);
	//console.log(dragNode);

	//クリックした座標を取得
	let adjustX = 
		event.clientX - dragNode.getBoundingClientRect().left;
	let adjustY = 
		event.clientY - dragNode.getBoundingClientRect().top;
		console.log(adjustX, adjustY);
	
	//この位置まで移動
	function moveAt(x, y) {
		dragNode.style.top = y - adjustY +  "px";
		dragNode.style.left = x - adjustX + "px";
		console.log( x-adjustX + "px", y-adjustY + "px");
	}

	//mousemoveしてる時の処理
	function onMouseMove(event) {
		moveAt(event.x, event.y);
	}

	document.addEventListener('mousemove', onMouseMove);

	//マウスボタンを話した時の処理
	dragNode.onmouseup = function () {
		document.removeEventListener('mousemove', onMouseMove);
		dragNode.onmouseup = null;
	}
	
};

