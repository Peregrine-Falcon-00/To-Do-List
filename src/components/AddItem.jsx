import { useState } from 'react';
import styles from './AddItem.module.css';

function AddItem({ onAddItem }) {
      const [text, setText] = useState('');  // State to store the text input
      const [date, setDate] = useState('');  // State to store the date input

      const handleText = (event) => {
            setText(event.target.value);  // Update the text state
      };

      const handleDate = (event) => {
            setDate(event.target.value);  // Update the date state
      };

      const handleAddClick = () => {
            if (text && date) {
                  onAddItem(text, date);  // Pass the current values (text and date) to the parent
                  setText('');  // Clear the text input after adding
                  setDate('');  // Clear the date input after adding
            }
      };

      return (
            <div className={styles.container}> {/* Apply container styling */}
                  <input
                        type="text"
                        className={styles.text}
                        placeholder="Type Here To Add"
                        value={text}
                        onChange={handleText}
                  />
                  <input
                        type="date"
                        className={styles.date}  {/* Apply date input styling */}
                        value={date}  // Bind input value to the state
                        onChange={handleDate}  // Update state when date changes
                  />
                  <button
                        type="button"
                        className={`${styles.btn} btn btn-success`}  {/* Apply button styling */}
                        onClick={handleAddClick}  // Call handleAddClick when button is clicked
                  >
                        Add
                  </button>
            </div>
      );
}

export default AddItem;
