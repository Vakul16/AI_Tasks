import React from "react";
import Dialpad from "../Dialpad.png";
const Table = () => {
  return (
    <>
      <div className="table-container">
        <table className="content-table">
          <thead>
            <th></th>
            <th>Questions</th>
            <th className="head-2">Type</th>
            <th>Responses</th>
          </thead>
          <tbody>
            <tr>
              <td className="checkbox-test">
                <input type="checkbox" id="checkbox-input1" />
              </td>
              <td>
                <label for="checkbox-input1">
                  Are you above 18 years of age?
                </label>
              </td>
              {/* <td>
                <input type="radio" id="radio-input1" />
                <label for="radio-input1">Multiple Choice</label>
              </td> */}
              <td>
                <label for="radio-input1" className="radio">
                  <input
                    type="radio"
                    name="myRadioField"
                    id="radio-input1"
                    className="radio-input"
                  />
                  <div className="radio-radio"></div>
                  Multiple Choice
                </label>
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
                <label for="radio-input2" className="radio">
                  <input
                    type="radio"
                    name="myRadioField"
                    id="radio-input2"
                    className="radio-input"
                  />
                  <div className="radio-radio"></div>
                  Multiple Choice
                </label>
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
                <label for="radio-input3" className="radio">
                  <input
                    type="radio"
                    name="myRadioField"
                    id="radio-input3"
                    className="radio-input"
                  />
                  <div className="radio-radio"></div>
                  Multiple Choice
                </label>
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
              <td className="check-4">
                {/* <input type="text" id="radio-input4" />  */}
                <img src={Dialpad} alt="Img" className="image-dialpad"/>
                <label for="radio-input4">Numeric Input</label>
              </td>
              <td></td>
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
              <td className="check-5">
                <input type="checkbox" id="radio-input5" className ="check-5-in"/> 
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
                {/* <input type="text" id="radio-input6" />  */}
                <i className="fas fa-text-width"></i>
                <label for="radio-input6">Text Input</label>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" id="checkbox-input7" />
              </td>
              <td>
                <label for="checkbox-input7">What is your weight?</label>
              </td>
              <td>
                <label for="radio-input7" className="radio">
                  <input
                    type="radio"
                    name="myRadioField"
                    id="radio-input7"
                    className="radio-input"
                  />
                  <div className="radio-radio"></div>
                  Multiple Choice
                </label>
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
