form = document.forms["create"]

function createTable(data)
{   
    let tbody = document.getElementById('table-body')
    data.forEach(e => 
    {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${e.firstname}</td>
        <td>${e.lastname}</td>
        <td>${e.address}</td>
        <td>${e.pincode}</td>
        <td>${e.gender}</td>
        <td>${e.State}</td>
        <td>${e.Country}</td>`
        tbody.append(tr)
    });
}

function getValues()
{

        let student = 
        {
            firstname:form.firstname.value,
            lastname:form.lastname.value,
            address:form.address.value,
            pincode:form.pincode.value,
            gender:form.gender.value,
            State:form.State.value,
            Country:form.Country.value
            
        }

        createTable(student)

    
}


form.addEventListener('submit',getValues)

createTable()
