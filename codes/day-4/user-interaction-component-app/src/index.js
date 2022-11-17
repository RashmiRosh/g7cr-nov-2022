import { add, subtract } from "./calculation";

const createTd = (value) => {
    const td = document.createElement('td')
    td.innerText = value
    return td
}
const generateHistory = (firstValue, secondValue, resultValue) => {
    const hRow = document.createElement('tr')
    hRow.append(
        createTd(firstValue.toString()),
        createTd(secondValue.toString()),
        createTd(resultValue.toString())
    )

    document.getElementById('tbodyHistory').appendChild(hRow)
}

const calculate = () => {
    console.log('clicked')
    const first = Number(document.getElementById('txtFirst').value)
    const second = Number(document.getElementById('txtSecond').value)

    let result
    if (document.getElementById('radioAdd').checked) {
        console.log('1 checked')
        result = add(first, second)
    }

    if (document.getElementById('radioSubtract').checked) {
        console.log('1 checked')
        result = subtract(first, second)
    }

    if (result) {
        if (!document.getElementById('trResult')) {
            const tr = document.createElement('tr')
            tr.id = 'trResult'

            const tdLabel = document.createElement('td')
            tdLabel.innerHTML = 'Result is: &nbsp;&nbsp;'

            tr.appendChild(tdLabel)

            const tdInput = document.createElement('td')
            const txtResult = document.createElement('input')
            txtResult.type = 'text'
            txtResult.value = result.toString()
            txtResult.readOnly = true
            txtResult.id = 'txtResult'

            tdInput.appendChild(txtResult)
            tr.append(tdLabel, tdInput)

            document.getElementById('tblCalculation').appendChild(tr)
        } else {
            document.getElementById('txtResult').value = result.toString()
        }
        generateHistory(first, second, result)
    }

}


const btnObj = document.getElementById('btnCalculate')
btnObj.addEventListener(
    'click',
    calculate
)


/*
import { calculationForm } from "./components/calculation-form/calculation-form";

const form = calculationForm()
//render(document.getElementById('root'),form.template)
document.getElementById('root').innerHTML = form.template
form.controller()
*/
