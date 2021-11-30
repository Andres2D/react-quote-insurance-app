import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {capitalize} from '../helpers/calculator';

const ContainerSummary = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Summary = ({data}) => {

    const {trademark, year, plan} = data;

    if(trademark === '' || year === '' || plan === ''  ) return null;
    return ( 
        <ContainerSummary>
            <h2>Summary of quote</h2>
            <ul>
                <li>Trademark: {capitalize(trademark)}</li>
                <li>Plan: {capitalize(plan)}</li>
                <li>Year of car: {year}</li>
            </ul>
        </ContainerSummary>
     );
}

Summary.propTypes = {
    data: PropTypes.object.isRequired
}
 
export default Summary;