export const SET_COUNTRIES = '@@country/SET_COUNTRIES';
export const SET_LOADING = '@@country/SET_LOADING';
export const SET_ERROR = '@@country/SET_ERROR';

const setCountries = (countries) => ({
	type: SET_COUNTRIES,
	payload: countries,
});

const setLoading = () => ({
	type: SET_LOADING
});

const setError = (error) => ({
	type: SET_ERROR,
	payload: error,
});

export const loadCoutries = () => (dispatch, _, { client, api }) => { // client:axios, api: all config
	console.log(loadCoutries);

	dispatch(setLoading());
	client.get(api.ALL_COUNTRIES)
		.then(({ data }) => dispatch(setCountries(data)))
		.catch((err) => dispatch(setError(err.message)))
}