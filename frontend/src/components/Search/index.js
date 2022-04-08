import React from 'react';
import { useState } from 'react';
import './Search.css';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
// search for an available date
function Search( spot ) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }


  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const totalTime = endDate.getTime() - startDate.getTime()
  const totalDays = (totalTime / 86400000)
  const totalprice = spot.price * totalDays
  // console.log(totalDays)

  return (
    <div className='search'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>Number of guests</h2>
      <input min={0}
      defaultValue={2}
      type="numbers" />
      <button className='date_search_button'>Search LairBnB</button>

    </div>
  )
}

export default Search;
