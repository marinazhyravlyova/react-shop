import React, { Component } from 'react';
import CaloriesService from '../service';
import './style.scss';

export default class ReportGenerator extends Component {
    state = {
        report: '',
    };

    onReportChange = (event) => this.setState({ report: event.target.value });
    
    getEatingTimeReport(eatingTime) {
        return (eatingTime.productsDescription || []).reduce((eatingTimeReport, productDescription) => {
            return `${eatingTimeReport}\t${productDescription.product.name} - ${productDescription.weight} г;\n`;
        }, `${eatingTime.name}: \n`);
    }
    
    generateReport = () => {
        const { day } = this.props;
        const date = new Date(day.date);
        let report = (day.eatingTimes || []).reduce((report, eatingTime) => {
            const eatingTimeReport = this.getEatingTimeReport(eatingTime);
            
            return `${report}\n${eatingTimeReport}`;
        }, `Отчет ${date.getDay()}.${date.getMonth()}.${date.getFullYear()}:`);
        const calories = CaloriesService.getAllCalories(day.eatingTimes);
        report = `${report}\n Каллории: ${calories} ккал;`;
        
        this.setState({ report });
    };
    
    render() {
        const { report } = this.state;
        
        return (
            <div className='report-generator'>
                <div className='action-panel'>
                    <button onClick={this.generateReport}>Сгенерировать отчет</button>
                </div>
                <div className='report-area'>
                    <textarea
                        value={report}
                        onChange={this.onReportChange}
                    >
                    </textarea>
                </div>
            </div>
        );
    }
}