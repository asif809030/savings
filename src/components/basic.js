import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function DynamicTable() {
  // State for input values
  const [amount, setAmount] = useState(9300);
  const [startYear, setStartYear] = useState(new Date().getFullYear());
  const [endYear, setEndYear] = useState(new Date().getFullYear() + 2);
  const [maxAmount, setMaxAmount] = useState(22490);  // Max amount cap
  const [savingsPercentage, setSavingsPercentage] = useState(16); // Savings percentage

  // Function to generate table data
  const generateTableData = () => {
    let currentAmount = amount;
    const rows = [];
    const savingsRate = savingsPercentage / 100;

    // Loop through each year and calculate basic amount & savings
    for (let year = startYear; year <= endYear; year++) {
      const savings = currentAmount * savingsRate;
      rows.push({ year, basic: currentAmount.toFixed(2), savings: savings.toFixed(2) });
      currentAmount = Math.min(currentAmount * 1.05, maxAmount); // Apply 5% increment, capped at maxAmount
    }
    return rows;
  };

  // Calculate total savings
  const totalSavings = generateTableData().reduce((total, row) => total + parseFloat(row.savings), 0);

  return (
    <div className="container mt-4 col-lg-6">
      <Form>
        {/* Basic Amount Input */}
        <div className="row mb-3">
          <Form.Label className="col-4 col-form-label">Basic Amount:</Form.Label>
          <div className="col-8">
            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
            />
          </div>
        </div>

        {/* Start Year Input */}
        <div className="row mb-3">
          <Form.Label className="col-4 col-form-label">Start Year:</Form.Label>
          <div className="col-8">
            <Form.Control
              type="number"
              value={startYear}
              onChange={(e) => setStartYear(+e.target.value)}
            />
          </div>
        </div>

        {/* End Year Input */}
        <div className="row mb-3">
          <Form.Label className="col-4 col-form-label">End Year:</Form.Label>
          <div className="col-8">
            <Form.Control
              type="number"
              value={endYear}
              onChange={(e) => setEndYear(+e.target.value)}
            />
          </div>
        </div>

        {/* Maximum Amount Input */}
        <div className="row mb-3">
          <Form.Label className="col-4 col-form-label">Maximum Amount:</Form.Label>
          <div className="col-8">
            <Form.Control
              type="number"
              value={maxAmount}
              onChange={(e) => setMaxAmount(+e.target.value)}
            />
          </div>
        </div>

        {/* Savings Percentage Input */}
        <div className="row mb-3">
          <Form.Label className="col-4 col-form-label">Savings Percentage:</Form.Label>
          <div className="col-8">
            <Form.Control
              type="number"
              value={savingsPercentage}
              onChange={(e) => setSavingsPercentage(+e.target.value)}
            />
          </div>
        </div>
      </Form>

      {/* Table displaying the data */}
      <table className="table table-bordered table-striped mt-3">
        <thead>
          <tr>
            <th>Sl.</th>
            <th>Year</th>
            <th>Basic Amount</th>
            <th>Savings ({savingsPercentage}%)</th>
          </tr>
        </thead>
        <tbody>
          {generateTableData().map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.year}</td>
              <td>{row.basic}</td>
              <td>{row.savings}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="text-end fw-bold">Total Savings:</td>
            <td className="fw-bold">{totalSavings.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
