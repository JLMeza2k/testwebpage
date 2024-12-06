sessionStorage.setItem("apiURL", "https://pay-me-api-production.up.railway.app/")

async function get_services(){
    let apiURL = sessionStorage.getItem('apiURL') + 'services';
    let response = await fetch(apiURL);
    if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
    }
    let Services = await response.json();
    let options = '';
    Services.data.forEach(element => {
        options = options + `<p>"${element.id}: ${element.service_description}</p>`;
    });
    document.getElementById('services').innerHTML = options;
}

get_services();