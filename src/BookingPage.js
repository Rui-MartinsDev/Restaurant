import { useState } from "react"
import './App.css'
export default function BookingForm(){

  const [form, setForm]= useState({
    date: getTodayDateString(),
    time: '18:00',
    guests:'2',
    occasion:'Anniversary',
  });
  function getTodayDateString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  const handleInputChange = (name, value,e) => {
    setForm({ ...form, [name]:value});
    
  }
  
  
  return(
      <div>
      
      <div id="center">
      
      <form className="reservation-form" >
      <h1 id="h2">Make your reservation</h1>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" name="date"
          value={form.date} onChange={(e) => handleInputChange(e.target.name, e.target.value)}/>

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name="time"
          value={form.time} onChange={(e) => handleInputChange(e.target.name, e.target.value)}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests"
          value={form.guests} onChange={(e) => handleInputChange(e.target.name, e.target.value)}/>

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion"
          value={form.occasion} onChange={(e) => handleInputChange(e.target.name, e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
      </div>
      </div>
  )
};