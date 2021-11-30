import React, {useState} from 'react';
import styled from '@emotion/styled';

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

const Form = () => {

    const [data, saveData] = useState({
        trademark: '',
        year: '',
        plan: ''
    });

    // Extract the value of the state
    const {trademark, year, plan} = data;

    // Read data from form and save on the state
    const getFormData = e => {
        saveData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return ( 
        <form>
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
                    <option value="asian">Asian</option>
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

            <Button type="button">Quote</Button>
        </form>
     );
}
 
export default Form;