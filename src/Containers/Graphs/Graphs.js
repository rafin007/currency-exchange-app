import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import classes from './Graphs.scss';

import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/actions/index';

import sprite from '../../assets/sprite.svg';
import DropDown from '../../Components/DropDown/DropDown';

const Graphs = props => {

    const limitedRates = useSelector(state => state.limitedRates);

    const firstCurrency = useSelector(state => state.firstCurrency);
    const secondCurrency = useSelector(state => state.secondCurrency);

    const dates = useSelector(state => state.dates);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.retrieveLimitedRates());
    }, [dispatch]);

    const lineChart = dates.length && <Line data={{
        labels: dates.map(date => date.id),
        datasets: [{
            label: `${firstCurrency && secondCurrency ? `1 ${firstCurrency} = ${secondCurrency}` : ''}`,
            data: dates.map(date => date.values[secondCurrency]),
            backgroundColor: dates.map(date => `rgba(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, 0.2)`),
            fill: true
        }],
    }} options={{
        responsive: true,
        title: { text: `Comparison of ${firstCurrency} and ${secondCurrency}`, display: true },
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false
                    }
                }
            ]
        }
    }} />;

    // const [startDate, setStartDate] = useState('');
    // const [endDate, setEndDate] = useState('');

    const startDate = useSelector(state => state.startDate);
    const endDate = useSelector(state => state.endDate);


    useEffect(() => {
        if (firstCurrency && secondCurrency) {
            dispatch(actions.retrieveRangedDates(startDate, endDate));
        }
    }, [startDate, endDate, firstCurrency, secondCurrency, dispatch]);

    const dateChangedHandler = (days) => {
        const date = new Date();
        date.setDate(date.getDate() - days);

        // setStartDate(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
        // setEndDate(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`);

        const startDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        const endDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;

        dispatch(actions.saveDates(startDate, endDate));
    }


    return (
        <div className={classes.Graphs} >

            <div className={classes.Time} >
                <div className={classes.Time__period} onClick={() => { dateChangedHandler(7) }} >1 W</div>
                <div className={classes.Time__period} onClick={() => { dateChangedHandler(30) }} >1 M</div>
                <div className={classes.Time__period} onClick={() => { dateChangedHandler(90) }} >3 M</div>
                <div className={classes.Time__period} onClick={() => { dateChangedHandler(150) }} >5 M</div>
                <div className={classes.Time__period} onClick={() => { dateChangedHandler(365) }} >1 Y</div>
                <div className={classes.Time__period} onClick={() => { dateChangedHandler(1825) }} >5 Y</div>
                <div className={classes.Time__period} onClick={() => { dateChangedHandler(3650) }} >10 Y</div>
            </div>

            <div className={classes.dropDowns} >

                <DropDown symbols={limitedRates} ins="Choose a currency" num="1" />

                <svg className={classes.Graphs__icon} >
                    <use xlinkHref={`${sprite}#icon-arrow-long-right`} ></use>
                </svg>

                <DropDown symbols={limitedRates} ins="Choose a currency" num="2" />

            </div>

            <div className={classes.Chart} >
                {lineChart ? lineChart : null}
            </div>
        </div>
    );
}

export default Graphs;