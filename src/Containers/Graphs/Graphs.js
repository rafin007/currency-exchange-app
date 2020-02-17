import React, { useEffect } from 'react';
import Chart from 'chart.js';
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
    }, [dispatch])

    useEffect(() => {

        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates.map(date => date.id),
                datasets: [{
                    label: `${firstCurrency && secondCurrency ? `1 ${firstCurrency} = ${secondCurrency}` : ''}`,
                    data: dates.map(date => date.values[secondCurrency]),
                    backgroundColor: dates.map(date => `rgba(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, 0.2)`),
                    // [
                    //     'rgba(255, 99, 132, 0.2)',
                    //     'rgba(54, 162, 235, 0.2)',
                    //     'rgba(255, 206, 86, 0.2)',
                    //     'rgba(75, 192, 192, 0.2)',
                    //     'rgba(153, 102, 255, 0.2)',
                    //     'rgba(255, 159, 64, 0.2)'
                    // ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
            }
        });


        // const chart = document.getElementById('myChart');

        // let mq = window.matchMedia('(max-width: 31.25em)');

        // if (mq.matches) {
        //     chart.style.height = `40rem`;
        //     chart.style.width = '100%';
        // }


    }, [dispatch, dates])

    // console.log(limitedRates);

    const dateChangedHandler = (days) => {
        const date = new Date();
        date.setDate(date.getDate() - days);

        const startDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        const endDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;

        if (firstCurrency && secondCurrency) {
            dispatch(actions.retrieveRangedDates(startDate, endDate));
        }
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
                <canvas id="myChart" ></canvas>
            </div>
        </div>
    );
}

export default Graphs;