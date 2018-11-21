import React, { Component } from 'react';
import CaloriesService from '../service';
import './style.scss';

export default class TableComponent extends Component {
    render() {
        const { day = {} } = this.props;
        const { eatingTimes } = day;
        
        return (
            <table className='result-table'>
                <thead className=''>
                    <tr>
                        <th className='result-table-column'>
                            Name
                        </th>
                        <th className='result-table-column'>
                            Каллории
                        </th>
                        <th className='result-table-column'>
                            Белки
                        </th>
                        <th className='result-table-column'>
                            Жиры
                        </th>
                        <th className='result-table-column'>
                            Углеводы
                        </th>
                    </tr>
                </thead>
                <tbody className=''>
                    {(eatingTimes || []).map(eatingTime => (
                        <tr className=''>
                            <td className='result-table-column'>
                                {eatingTime.name}
                            </td>
                            <td className='result-table-column'>
                                {CaloriesService.getCalories(eatingTime)}
                            </td>
                            <td className='result-table-column'>
                                {CaloriesService.getProtein(eatingTime)}
                            </td>
                            <td className='result-table-column'>
                                {CaloriesService.getFat(eatingTime)}
                            </td>
                            <td className='result-table-column'>
                                {CaloriesService.getCarbohydrates(eatingTime)}
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className=''>
                    <tr>
                        <td className='result-table-column'>
                        </td>
                        <td className='result-table-column'>
                            {CaloriesService.getAllCalories(eatingTimes)}
                        </td>
                        <td className='result-table-column'>
                            {CaloriesService.getAllProtein(eatingTimes)}
                        </td>
                        <td className='result-table-column'>
                            {CaloriesService.getAllFat(eatingTimes)}
                        </td>
                        <td className='result-table-column'>
                            {CaloriesService.getAllCarbohydrates(eatingTimes)}
                        </td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}