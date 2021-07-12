import React from "react";

const Table = () => {
  return (
    <>
      <div className="table">
        <table className="content-table">
          <thead>
            <th>Questions</th>
            <th>Type</th>
            <th>Responses</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" id="checkbox-input1" />
              </td>
              <td>
                <label for="checkbox-input1">
                  Are you above 18 years of age?
                </label>
              </td>
              <td>
                <input type="radio" id="radio-input1" /> 
              </td>
              <td>
                <label for="radio-input1">Multiple Choice</label>
              </td>
              <td>Yes, No</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" id="checkbox-input2" />
              </td>
              <td>
                <label for="checkbox-input2">What is your gender?</label>
              </td>
              <td>
                <input type="radio" id="radio-input2" /> 
                <label for="radio-input2">Multiple Choice</label>
              </td>
              <td>Male, Female, Other</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" id="checkbox-input3" />
              </td>
              <td>
                <label for="checkbox-input3">
                  Are you taking any medication for diabetes?
                </label>
              </td>
              <td>
                <input type="radio" id="radio-input3" /> 
                <label for="radio-input3">Multiple Choice</label>
              </td>
              <td>Yes, No</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" id="checkbox-input4" />
              </td>
              <td>
                <label for="checkbox-input4">How old are you?</label>
              </td>
              <td>
                <input type="number" id="radio-input4" /> 
                <label for="radio-input4">Numeric Input</label>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" id="checkbox-input5" />
              </td>
              <td>
                <label for="checkbox-input5">
                  What medications do you take?
                </label>
              </td>
              <td>
                <input type="checkbox" id="radio-input5" /> 
                <label for="radio-input5">Checkbox</label>
              </td>
              <td>Meglitnides, Metformin, Insulin, Other</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" id="checkbox-input6" />
              </td>
              <td>
                <label for="checkbox-input6">Explain your condition</label>
              </td>
              <td>
                <input type="text" id="radio-input6" /> 
                <label for="radio-input6">Text Input</label>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" id="checkbox-input7" />
              </td>
              <td>
                <label for="checkbox-input7">What is your weight?</label>
              </td>
              <td>
                <input type="radio" id="radio-input7" /> 
                <label for="radio-input7">Multiple Choice</label>
              </td>
              <td>Yes, No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
