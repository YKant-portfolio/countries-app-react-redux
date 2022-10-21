import { useNavigate } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectAllCoutries, selectCoutriesInfo } from '../store/countries/countries-selector';
import { loadCoutries } from '../store/countries/countries-actions';

export const HomePage = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const countries = useSelector(selectAllCoutries);
	const { status, error, qty } = useSelector(selectCoutriesInfo);

	useEffect(() => {
		if (!qty) {
			dispatch(loadCoutries());
		}
	}, [qty, dispatch]);

	return (
		<>
			<Controls />

			{error && <h2>Can't fetch data</h2>}
			{status === 'loading' && <h2>loading...</h2>}

			{status === 'received' && (
				< List >
					{
						countries.map((c) => {
							const countryInfo = {
								img: c.flags.png,
								name: c.name,
								info: [
									{
										title: 'Population',
										description: c.population.toLocaleString(),
									},
									{
										title: 'Region',
										description: c.region,
									},
									{
										title: 'Capital',
										description: c.capital,
									},
								],
							};

							return (
								<Card
									key={c.name}
									onClick={() => navigate(`/country/${c.name}`)}
									{...countryInfo}
								/>
							);
						})
					}
				</List>
			)}
		</>
	);
};
