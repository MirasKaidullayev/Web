import React, { useState } from 'react';

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    dateTime: '',
    sum: '',
    category: '',
    comment: '',
  });

  const categories = ['Food', 'Transport', 'Entertainment'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const author = 'TestUser'; // temporary value

    const response = await fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, author }),
    });

    if (response.ok) {
      const data = await response.json();
      alert('Transaction saved!');
      console.log(data);
    } else {
      alert('Error saving transaction.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Sum:
        <input
          type="number"
          name="sum"
          value={formData.sum}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select category
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <label>
        Comment:
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;
