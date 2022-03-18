export const getEmployees = () => {

    return fetch("http://localhost:8088/employees")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}

export const getComputers = () => {

    return fetch("http://localhost:8088/computers")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}

export const getDepartments = () => {

    return fetch("http://localhost:8088/departments")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}