async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/albums');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
console.log('Fetching data async...');
fetchData();



fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log('Fetching data promise...');
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    