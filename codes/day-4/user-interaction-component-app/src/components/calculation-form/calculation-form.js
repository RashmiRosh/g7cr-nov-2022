import { add, subtract } from "../../calculation";
export function calculationForm() {
    const deisgn = `
    <div>
        <input type="radio" id="radioAdd" name="radios"> &nbsp; Add

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <input type="radio" id="radioSubtract" name="radios">
        &nbsp; Subtract

    </div>
    <div>
        <table id="tblCalculation">
            <tr>
                <td>Enter 1st Value:&nbsp;</td>
                <td>
                    <input type="text" placeholder="enter 1st value here" id="txtFirst">
                </td>
            </tr>
            <tr>
                <td>Enter 2nd Value:&nbsp;</td>
                <td>
                    <input type="text" placeholder="enter 2nd value here" id="txtSecond">
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="button" id="btnCalculate" value="Calculate">
                </td>
            </tr>
        </table>
    </div>`
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
        }

    }
    return {
        template: deisgn,
        controller: () => {
            const btnObj = document.getElementById('btnCalculate')
            btnObj.addEventListener(
                'click',
                calculate
            )
        }
    }
}