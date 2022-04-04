import React from 'react';
import { useState } from 'react';
import './Search.css';
import { DateRangePicker } from 'react-date-range';


// search for an available date
function Search() {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const DATE_RANGE = {
    start: start,
    end: end,
    key: "selection"
  }

  function handleSelect(ranges) {
    setStart(ranges.selection.start);
    setEnd(ranges.selection.end);
  }

  return (
    <div className='search'>
      <DateRangePicker ranges={[DATE_RANGE]} onChange={handleSelect} />
      }
    </div>
  )
}

export default Search;
