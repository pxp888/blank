const say = msg => console.log(msg);

const URL="/test";

async function sendmsg(data) {
	const response = fetch('/test', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			data
		})
	})

	.then(response => response.json())
	.then(data => getmsg(data))
	.catch(error => console.error('Error sending data:', error));
}


function getmsg(data) {
	say(data);
}


async function postmsg(e) {
	e.preventDefault();
	const msg = $("#msgLine").val();

	const data = {'msg': msg};
	sendmsg(data);
}


$('#form').on('keydown', 'input[type="text"]', function(e) {
	if (e.which == 13) { // 13 is the keycode for Enter
		e.preventDefault();
	}
});

$("#submit").on("click", postmsg);

