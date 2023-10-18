import React, { useState, useEffect } from 'react';
import sol from '../../../assets/images/detail/sol04.png'

import '../../../styles/detail/detailGlobal.css'
import styles from './Finance.module.css';
import { summaryData, annualData, quarterlyData, aiReport } from '../../../data/detail/mockFinance';  // 경로는 적절하게 변경

function Finance(props) {
    const [activeTab, setActiveTab] = useState('annual');
    const [annualFinanceData, setAnnualFinanceData] = useState(props.financeCrawlingData["최근 연간 실적"]);
    const [quarterlyFinanceData, setQuaterlyFinanceData] = useState(props.financeCrawlingData["최근 분기 실적"]);
    const [statementComment, setStatementComment] = useState(props.statementComment);

    return (
        <div className='container'>

        <div className={styles.finance}>
              <div className="component-header">
                <h2>재무</h2>
                <p>우리 기업은 어떻게 영업하고 있을까요?</p>
           </div>
            <div className={styles['tabs-container']}>
          
            <div className={styles.tabs}>
            </div>

                    <div className={styles['sub-tabs']}>
                        <button className={activeTab === 'annual' ? styles.active : ''} onClick={() => setActiveTab('annual')}>연간실적</button>
                        <button className={activeTab === 'quarterly' ? styles.active : ''} onClick={() => setActiveTab('quarterly')}>분기실적</button>
                    </div>
                
            </div>
                    <table>
                        <thead>
                            <tr>
                                <th>{activeTab === 'annual' ? 'Year' : 'Quarter'}</th>
                                {Object.keys(activeTab === 'annual' ? annualFinanceData : quarterlyFinanceData).map(period => (
                                    <th key={period}>{period}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {(activeTab === 'annual' ? annualFinanceData : quarterlyFinanceData) &&
                                Object.keys((activeTab === 'annual' ? annualFinanceData : quarterlyFinanceData)[Object.keys((activeTab === 'annual' ? annualFinanceData : quarterlyFinanceData))[0]]).map(key => (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        {Object.keys(activeTab === 'annual' ? annualFinanceData : quarterlyFinanceData).map(period => (
                                            <td key={period}>{(activeTab === 'annual' ? annualFinanceData : quarterlyFinanceData)[period][key]}</td>
                                        ))}
                                    </tr>
                                ))}
                        </tbody>
                    </table>


            <div className="component-header">
                <h2>AI REPORT</h2>
                <p>차트 해석이 어렵다면 신한AI분석을 참고!해보세요.</p>
            </div>
            <div className={styles['ai-report']}>
                <hr /> 
                <div className={styles['textarea-container']}>
                    <img src={sol} alt="AI Icon" className={styles['ai-image']} />
                    <textarea value={statementComment.statement_short_comment} readOnly />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Finance;
