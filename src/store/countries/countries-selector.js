export const selectCoutriesInfo = (state) => ({
	status: state.countries.status,
	error: state.countries.error,
	qty: state.countries.list.length
});

export const selectAllCoutries = (state) => state.countries.list;