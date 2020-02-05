import React, { useEffect } from 'react';
import Chart from 'chart.js';
import classes from './Graphs.scss';

import sprite from '../../assets/sprite.svg';

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

    return (
        <div className={classes.Graphs} >
            <div className={classes.dropDowns} >
                <div className={classes.select}>
                    <select name="slct" id="slct">
                        <option selected disabled>Choose an option</option>
                        <option value="1">USD</option>
                        <option value="2">CAD</option>
                        <option value="3">BDT</option>
                    </select>
                </div>

                <svg className={classes.Graphs__icon} >
                    <use xlinkHref={`${sprite}#icon-swap`} ></use>
                </svg>

                <div className={classes.select}>
                    <select name="slct" id="slct">
                        <option selected disabled>Choose an option</option>
                        <option value="1">GBP</option>
                        <option value="2">INR</option>
                        <option value="3">SGD</option>
                    </select>
                </div>
            </div>

            <div className={classes.Chart}>
                <canvas id="myChart" ></canvas>
            </div>
        </div>
    );
}

export default Graphs;