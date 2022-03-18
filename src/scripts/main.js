import { getComputers, getEmployees, getDepartments } from "./data/DataManager.js";

const promise1 = new Promise((resolve, reject) => {
                                resolve(getEmployees()
                                .then(employeeData => {
                                console.log("Employee Data", employeeData);

                                const htmlElement = document.querySelector(".employeeList");
                                let renderHTML = []
                                for (let i = 0; i < employeeData.length; i++) {
                                    renderHTML += `<tr>
                                                        <td>
                                                            <div class="employee-info">
                                                                <p class="employee-name">Name: ${employeeData[i].firstName} ${employeeData[i].lastName}</p>
                                                                <p class="employee-age">Age: ${employeeData[i].age}</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    `
                                                    ;
                                }
                                htmlElement.innerHTML = renderHTML;

                                return employeeData;
                            }))
                        })

const promise2 = new Promise((resolve, reject) => {
                                resolve(getComputers()
                                .then(computerData => {
                                console.log("Computer Data", computerData)

                                const htmlElement = document.querySelector(".computerList");
                                let renderHTML = []
                                for (let i = 0; i < computerData.length; i++) {
                                    renderHTML += `<tr>
                                                        <td>
                                                            <div class="employee-info">
                                                                <p class="computer-model">Model: ${computerData[i].model}</p>
                                                                <p class="computer-year">Year: ${computerData[i].year}</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    `
                                                    ;
                                }
                                htmlElement.innerHTML = renderHTML;

                                return computerData
                            }))
                        })

const promise3 = new Promise((resolve, reject) => {
                                resolve(getDepartments()
                                .then(departmentData => {
                                    console.log("Department Data", departmentData)
                                
                                    const htmlElement = document.querySelector(".departmentList");
                                    let renderHTML = []
                                    for (let i = 0; i < departmentData.length; i++) {
                                        renderHTML += `<tr>
                                                            <td>
                                                                <div class="department-info">
                                                                    <p class="department-name">${departmentData[i].name}</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        `
                                                        ;
                                    }
                                    htmlElement.innerHTML = renderHTML;

                                    return departmentData;
                                }))
                            })

Promise.all([promise1, promise2, promise3]).then((results) => {
    promise1.then((empData) => {
        promise2.then((compData) => {
            promise3.then((deptData) => {
            
                console.log("inside promise all");

                let htmlElement = document.querySelector(".mixedInfo");
                let renderHTML = '';
                const newEmpArr = []

                for (let i = 0; i < empData.length; i++) {
                    const tmpCompObj = compData.find(v => v.id === parseInt(empData[i].computerId));
                    newEmpArr.push({makeYear: tmpCompObj.year, compModel: tmpCompObj.model, firstName: empData[i].firstName, lastName: empData[i].lastName, deptName: deptData.find(v => v.id === parseInt(empData[i].departmentId)).name})
                    // newEmpArr.push({makeYear: compData[compData.findIndex(v => v.id === parseInt(empData[i].computerId))].year, compModel: compData[compData.findIndex(v => v.id === parseInt(empData[i].computerId))].model, firstName: empData[i].firstName, lastName: empData[i].lastName, deptName: deptData[deptData.findIndex(v => v.id === parseInt(empData[i].departmentId))].name})
                }

                // for (let i = 0; i < empData.length; i++) {
                //     for (let j = 0; j < compData.length; j++) {
                //         let tmpEmp = {}
                //         if (parseInt(empData[i].computerId) === parseInt(compData[j].id)) {
                //             for (let j = 0; j < deptData.length; j++) {
                //                 if (parseInt(empData[i].departmentId) === parseInt(deptData[j].id)) {
                //                     newEmpArr.push({makeYear: compData[j].year, compModel: compData[j].model, firstName: empData[i].firstName, lastName: empData[i].lastName, deptName: deptData[j].name})
                //                 }
                //             }
                //         }
                //     }
                // }

                console.log(newEmpArr);

                for (const emp of newEmpArr) {
                    renderHTML += `
                        <div class="employee">
                            <header class="employee__name">
                                <h1>${emp.firstName} ${emp.lastName}</h1>
                            </header>
                            <section class="employee__computer">
                                Currently using a ${emp.makeYear} ${emp.compModel}
                            </section>
                            <section class="employee__department">
                                Works in the ${emp.deptName} department
                            </section>
                        </div>`
                }
                htmlElement.innerHTML = renderHTML;
            })
        })
    });
})
