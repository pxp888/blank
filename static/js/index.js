const say = msg => console.log(msg);

const URL="/test";

function doSomething(data) {
	say(data);
	const p = document.createElement('p');
	p.innerText = data['payload'];
	$('#form').append(p);
}

async function postmsg(e) {
	e.preventDefault();
	const msg = $("#msgLine").val();
	
	const response = fetch('/test', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			data: { "msg": msg }
		})
	})

	.then(response => response.json())
	.then(data => doSomething(data))
	.catch(error => console.error('Error sending data:', error));
}

$('#form').on('keydown', 'input[type="text"]', function(e) {
	if (e.which == 13) { // 13 is the keycode for Enter
		e.preventDefault();
	}
});

$("#submit").on("click", postmsg);
