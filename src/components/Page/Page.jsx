import Search from '../Search/search';
import React, { Fragment } from 'react';
import useForecast from '../hook/useForecast';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import Forecast from '../forecast/forecast';

import styles from './Page.module.css';
import { debounce } from 'lodash';

function Page() {
    const { isError, isLoading, forecast, submitRequest } = useForecast();

    const handleOnSearchChange = debounce((searchData) => {
        submitRequest(searchData);
    }, 500);

    return (
        <Fragment>
            {!forecast && (
                <div className={`${styles.box} position-relative`}>
                    {!isLoading && <Search onSearchChange={handleOnSearchChange} />}

                    {isError && <Error message={isError} />}

                    {isLoading && <Loader />}
                </div>
            )}
            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    );
}

export default Page;
