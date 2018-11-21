import React, { Component } from 'react';
import './style.scss';

export default class TableComponent extends Component {
    getCalories(eatingTime) {
        return (eatingTime.productsDescription || [])
            .reduce((calories, { weight, product }) => calories + (product.calories / 100) * weight, 0);
    }

    getProtein(eatingTime) {
        return (eatingTime.productsDescription || [])
            .reduce((calories, { weight, product }) => calories + (product.protein / 100) * weight, 0);
    }

    getFat(eatingTime) {
        return (eatingTime.productsDescription || [])
            .reduce((calories, { weight, product }) => calories + (product.fat / 100) * weight, 0);
    }

    getCarbohydrates(eatingTime) {
        return (eatingTime.productsDescription || [])
            .reduce((calories, { weight, product }) => calories + (product.carbohydrates / 100) * weight, 0);
    }
    
    getAllCalories(eatingTimes) {
        return (eatingTimes || []).reduce((allCalories, eatingTime) => allCalories + this.getCalories(eatingTime), 0);
    }

    getAllProtein(eatingTimes) {
        return (eatingTimes || []).reduce((allProtein, eatingTime) => allProtein + this.getProtein(eatingTime), 0);
    }

    getAllFat(eatingTimes) {
        return (eatingTimes || []).reduce((allFat, eatingTime) => allFat + this.getCarbohydrates(eatingTime), 0);
    }

    getAllCarbohydrates(eatingTimes) {
        return (eatingTimes || []).reduce((allCarbohydrates, eatingTime) => allCarbohydrates + this.getCarbohydrates(eatingTime), 0);
    }
    
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
                                {this.getCalories(eatingTime)}
                            </td>
                            <td className='result-table-column'>
                                {this.getProtein(eatingTime)}
                            </td>
                            <td className='result-table-column'>
                                {this.getFat(eatingTime)}
                            </td>
                            <td className='result-table-column'>
                                {this.getCarbohydrates(eatingTime)}
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className=''>
                    <tr>
                        <td className='result-table-column'>
                        </td>
                        <td className='result-table-column'>
                            {this.getAllCalories(eatingTimes)}
                        </td>
                        <td className='result-table-column'>
                            {this.getAllProtein(eatingTimes)}
                        </td>
                        <td className='result-table-column'>
                            {this.getAllFat(eatingTimes)}
                        </td>
                        <td className='result-table-column'>
                            {this.getAllCarbohydrates(eatingTimes)}
                        </td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}