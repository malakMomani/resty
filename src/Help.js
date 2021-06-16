import React from 'react';
import './scss/Help.scss';

const Help = () => {
  return (
    <>
      <h4>This web site to fetch tha data from APIs that you want</h4>
      <hr />
      <ol> <b>Using Form</b>
        <li>
          Choose your method that you want and add API URL with cors policy and no Authentication methods(keys , Oauth)
        </li>
        <li>
          Click on Go! button to Show the result
        </li>
      </ol>
      <hr />
      <ol> <b>Using your Histoy</b>
        <li>
          Go to the Histoty tab
        </li>
        <li>
          click on the operation that you want to use
        </li>
        <li>
          if you want to return back go to Home tab
        </li>
      </ol>
    </>

  );
}

export default Help;