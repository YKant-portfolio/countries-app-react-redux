export const selectCoutriesInfo = (state) => ({
	status: state.countries.status,
	error: state.countries.error,
	qty: state.countries.list.length
});

export const selectAllCoutries = (state) => state.countries.list;

export const selectVisibleCoutries = (state, { search = '', region = '' }) => {
	return state.countries.list.filter(
		country => (country.name.toLowerCase().includes(search.toLowerCase()) &&
			country.region.includes(region))
	)
}; 