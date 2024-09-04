let url = "../data/search-user.json";
const person = document.querySelector("#result");

async function loadJson(url) {
	// (1)
	let response = await fetch(url); // (2)
	console.log(response);

	if (response.status === 200) {
		let json = await response.json(); // (3)
		console.log(json);
		return json;
	} else {
		throw new Error(response.status);
	}
}

function final() {
	loadJson(url)
		// .then((response) => console.log(response))
		.then((response) => {
			for (let i = 0; i < response.length; ++i) {
				person.innerHTML += `
									<div id="people">
										<p>Identité de la personne: ${response[i].firstname} <b>${response[i].lastname}</b></p>
										<p>Adresse: ${response[i].address.details_add}, ${response[i].address.zip_code} ${response[i].address.city}</p>
									</div>
									`;
			}
		})
		.catch(alert); // Error: 404 (4)
}

final();
