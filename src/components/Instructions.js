import React from 'react';

import './instructions.css';

const Instructions = props => (
  <div className="modal-wrapper">
    <div className="instructions">
      <h3>Objective</h3>
      <p>
        We would like you to create a small app powered by React and Redux with a 2-column layout with a list of people
        on the left and a form to edit a specific person on the right. The left column should be 200px wide and the
        right column should fill up the remaining width. There should be a select component to filter the list of people
        by “favoriteFruit”. The list of people should be sorted by name. Selecting a person on the left should show the
        person’s data in the form on the right. Updating form fields should update the store. We have included a large
        list of people in the store, for you to use.
      </p>
      <p>
        Remove <strong>&lt;Instructions /&gt;</strong> from <strong>App.js</strong> to hide these instructions and get
        started.
      </p>
      <p>
        Check the <strong>README.md</strong> file at any time for the instructions.
      </p>
    </div>
  </div>
);

export default Instructions;
