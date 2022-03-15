import { getComputers, getEmployees } from "./data/DataManager.js";

getComputers()
.then(computerData => {
    console.log("Computer Data", computerData)

    const htmlElement = document.querySelector(".computerList");
      let renderHTML = []
      for (let i = 0; i < computerData.length; i++) {
          renderHTML += `<td>
                            <div class="employee-info">
                                <p class="computer-model">Model: ${computerData[i].model}</p>
                                <p class="computer-year">Year: ${computerData[i].year}</p>
                            </div>
                        </td>
                        `
                        ;
      }
      htmlElement.innerHTML = renderHTML;
})

getEmployees()
.then(employeeData => {
    console.log("Employee Data", employeeData)

    const htmlElement = document.querySelector(".employeeList");
      let renderHTML = []
      for (let i = 0; i < employeeData.length; i++) {
          renderHTML += `<td>
                            <div class="employee-info">
                                <p class="employee-name">Name: ${employeeData[i].firstName} ${employeeData[i].lastName}</p>
                                <p class="employee-age">Age: ${employeeData[i].age}</p>
                            </div>
                        </td>
                        `
                        ;
      }
      htmlElement.innerHTML = renderHTML;
})

getEmployees()

getComputers()