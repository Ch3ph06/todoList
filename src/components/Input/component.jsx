import React, { Component } from 'react';

import styles from './styles.css';

export default class Input extends Component {

  render() {
    return (
      <div>
        <input className={styles.control} /><br />
      </div>
    );
  }
}
