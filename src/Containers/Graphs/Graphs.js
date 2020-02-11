import React, { useEffect } from 'react';
import Chart from 'chart.js';
import classes from './Graphs.scss';

import { useSelector } from 'react-redux';

import sprite from '../../assets/sprite.svg';
import DropDown from '../../Components/DropDown/DropDown';

const Graphs = props => {

    useEffect(() => {
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 118],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                },
                {
                    label: '# of Votes',
                    data: [18, 12, 3, 9, 15, 4],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    })

    const symbols = useSelector(state => state.symbols);

    return (
        <div className={classes.Graphs} >
            <div className={classes.dropDowns} >

                <DropDown symbols={symbols} ins="Choose an option" />

                <svg className={classes.Graphs__icon} >
                    <use xlinkHref={`${sprite}#icon-swap`} ></use>
                </svg>

                <DropDown symbols={symbols} ins="Choose an option" />

            </div>

            <div className={classes.Chart}>
                <canvas id="myChart" ></canvas>
            </div>
        </div>
    );
}

export default Graphs;