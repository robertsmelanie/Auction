
import '../styles/Components.css';
// import '../styles/style.css';

import React, { useState } from 'react';

const Calc = () => {
    const [birthMonth, setBirthMonth] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [result, setResult] = useState('');

    const currentYear = new Date().getFullYear();

    const handleCalculate = () => {
        const month = parseInt(birthMonth);
        const year = parseInt(birthYear);
        const today = new Date();
        const currentMonth = today.getMonth() + 1;

        if (
            isNaN(month) ||
            isNaN(year) ||
            month < 1 ||
            month > 12 ||
            year < 1900 ||
            year > currentYear
        ) {
            setResult('Please enter a valid birth date.');
            return;
        }

        const ageInMonths = (currentYear - year) * 12 + (currentMonth - month);
        const humanYears = ageInMonths / 12;

        let catYears = 0;
        if (humanYears <= 1) {
            catYears = humanYears * 15;
        } else if (humanYears <= 2) {
            catYears = 15 + (humanYears - 1) * 9;
        } else {
            catYears = 24 + (humanYears - 2) * 4;
        }

        setResult(
            `Your cat is approximately ${humanYears.toFixed(1)} human years old and ${catYears.toFixed(1)} cat years old.`
        );
    };

    const renderMonthOptions = () =>
        Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
                {i + 1}
            </option>
        ));

    const renderYearOptions = () =>
        Array.from({ length: currentYear - 1994 }, (_, i) => {
            const year = currentYear - i;
            return (
                <option key={year} value={year}>
                    {year}
                </option>
            );
        });

    return (
        <div className="container">
            <h2>Cat Age Calculator</h2>
            <div className="form">
                <label>
                    Birth Month:
                    <select value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)}>
                        <option value="">--</option>
                        {renderMonthOptions()}
                    </select>
                </label>
                <label>
                    Birth Year:
                    <select value={birthYear} onChange={(e) => setBirthYear(e.target.value)}>
                        <option value="">--</option>
                        {renderYearOptions()}
                    </select>
                </label>
                <button onClick={handleCalculate}>Calculate</button>
            </div>
            {result && <p className="result">{result}</p>}
        </div>
    );
};

export default Calc;