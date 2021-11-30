import React, {Fragment} from 'react';

const Summary = ({data}) => {

    const {trademark, year, plan} = data;

    if(trademark === '' || year === '' || plan === ''  ) return null;
    return ( 
        <Fragment>
            <h2>Summary of quote</h2>
            <ul>
                <li>Trademark: </li>
                <li>Plan: </li>
                <li>Year of car: </li>
            </ul>
        </Fragment>
     );
}
 
export default Summary;