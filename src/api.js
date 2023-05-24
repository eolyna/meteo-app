export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const WEATHER_API_URL ="https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "b0b1389d0f359224673a8a4a408e399e";
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79c755a32dmsh06456a427b3f99ep1a8e1ejsn8c77f6596df1',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

try {
	const response = (async () => {
		await fetch(GEO_API_URL, geoApiOptions).then((response) => {console.log(response.text())})
	});
	//const result = await response.text();
	//console.log(result);
} catch (error) {
	console.error(error);
}