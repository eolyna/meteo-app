import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {
	const [search, setSearch] = useState(null);

	const sleep = (ms) =>
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(undefined);
			}, ms);
		});

	async function loadOptions(search) {
		await sleep(1000);

		const response = await fetch(
			`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${search}`,
			geoApiOptions
		);
		const responseJSON = await response.json();

		return {
			options: responseJSON.data.map((city) => {
				return {
					value: `${city.latitude} ${city.longitude}`,
					label: `${city.name}, ${city.countryCode}`,
				};
			}),
		};
	}

	const handleOnChange = (searchData) => {
		setSearch(searchData);
		onSearchChange(searchData);
	};

	return (
		<AsyncPaginate
			placeholder="Search for city"
			debounceTimeout={600}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
		/>
	);
};

export default Search;
