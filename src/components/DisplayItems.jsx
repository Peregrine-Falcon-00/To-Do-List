import React from 'react';
import styles from './DisplayItems.module.css';  // Import the CSS module

function DisplayItems({ items }) {
      return (
            <div className={styles.container}> {/* Apply the container style */}
                  <ul className={styles.list}> {/* Apply the list style */}
                        {items.map((item, index) => (
                              <li key={index} className={styles.listItem}> {/* Apply the listItem style */}
                                    <span className={styles.text}>{item.text}</span> - {/* Apply the text style */}
                                    <span className={styles.date}>{item.date}</span> {/* Apply the date style */}
                              </li>
                        ))}
                  </ul>
            </div>
      );
}

export default DisplayItems;
