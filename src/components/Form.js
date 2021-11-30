import React, {useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { getDifferenceYear, calculateByTrademark, calculateByPlan } from '../helpers/calculator';


const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: flex;
    width: 100%;
    padding: 1rem;
    border: 1px solid #E1E1E1;
    border-radius: 5px;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFF;
    text-transform: uppercase;
    border: none;
    transition: all .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({saveSummary, saveLoading}) => {

    const [data, saveData] = useState({
        trademark: '',
        year: '',
        plan: 'basic'
    });

    const [error, saveError] = useState(false);

    // Extract the value of the state
    const {trademark, year, plan} = data;

    // Read data from form and save on the state
    const getFormData = e => {
        saveData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    // When user press submit
    const quoteInsurance = e => {
        e.preventDefault();

        if(trademark.trim() === '' || year.trim() === '' || plan.trim() === '') {
            saveError(true);
            return;
        }

        saveError(false);

        // get the diference of years
        const difference = getDifferenceYear(year);
        
        // a base of 2000
        let result = 2000;

        // for each year need to substract the 3%
        result -= ((difference * 3) * result) / 100;

        // American 15%
        // Assian 5%
        // European 30%
        result = calculateByTrademark(trademark) * result;

        // Basic 20%
        // Complete 50%
        const increasePlan = calculateByPlan(plan); 
        result = parseFloat(increasePlan * result).toFixed(2);
    
        // total

        saveLoading(true);

        setTimeout(() => {
            saveLoading(false);
            saveSummary({
                quote: Number(result),
                data
            });
        }, 3000);
    }

    return ( 
        <form
            onSubmit={quoteInsurance}
        >

            {error ? 
                <Error>All fields are required</Error>
            : null}

            <Field>
                <Label>Trademark</Label>
                <Select
                    name="trademark"
                    value={trademark}
                    onChange={getFormData}
                >
                    <option value="">-- Select --</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="assian">Assian</option>
                </Select>
            </Field>

            <Field>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getFormData}
                >
                    <option value="">-- Select --</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>

            <Field>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={plan === 'basic'}
                    onChange={getFormData}
                /> Basic

                <InputRadio
                    type="radio"
                    name="plan"
                    value="complete"
                    checked={plan === 'complete'}
                    onChange={getFormData}
                /> Complete
            </Field>

            <Button type="submit">Quote</Button>
        </form>
     );
}

Form.propTypes = {
    saveSummary: PropTypes.func.isRequired,
    saveLoading: PropTypes.func.isRequired
}

export default Form;