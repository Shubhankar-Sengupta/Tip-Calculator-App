const bill = document.querySelector('#total');
const buttons = document.querySelectorAll('.color1');
const inp2 = document.querySelector('.color2');
const spanVal = document.querySelector('.amount');
const spanVal1 = document.querySelector('.amount1');
const numPpl = document.querySelector('#people');
const reset = document.querySelector('.reset');
const select = document.querySelector('#warning');



function Add(evt) {

    if (evt.target === inp2) {

        const noOfPpl = parseInt(numPpl.value);
        const percVal = parseInt(evt.target.value) / 100;
        const billVal = parseInt(bill.value);

        spanVal.innerHTML = `$${((percVal * billVal) / noOfPpl).toFixed(2)}`;
        spanVal1.innerHTML = `$${((billVal + (percVal * billVal)) / noOfPpl).toFixed(2)}`;
        evt.target.value = ''

    }

    else {
        const noOfPpl = parseInt(numPpl.value);
        const percVal = parseInt(evt.target.innerHTML) / 100;
        const billVal = parseInt(bill.value);

        spanVal.innerHTML = `$${((percVal * billVal) / noOfPpl).toFixed(2)}`;
        spanVal1.innerHTML = `$${((billVal + (percVal * billVal)) / noOfPpl).toFixed(2)}`;
    }

}


function runListener() {

    for (let btn of buttons) {
        btn.addEventListener('click', Add);
    }

    inp2.addEventListener('change', Add);
}



function removeListener() {

    for (let btn of buttons) {
        btn.removeEventListener('click', Add);
    }

    inp2.removeEventListener('change', Add);

}


bill.addEventListener('input', function main(evt) {

    if (evt.target.value === '') {
        Reset();
    }

    numPpl.addEventListener('change', (evt) => {

        select.innerHTML = '';

        if (numPpl.value === '' || numPpl.value === "0") {
            removeListener();
            select.innerHTML = `<b style="color:red;">No of People Can't be zero <b>`;
        }

        else runListener();

    })

    if (numPpl.value === '' || numPpl.value === "0") {
        select.innerHTML = `<b style="color:red;">No of People Can't be zero <b>`;
    }

})


function Reset() {

    spanVal1.innerHTML = `$0.00`;
    spanVal.innerHTML = `$0.00`;
    select.innerHTML = '';
    bill.value = ''
    numPpl.value = ''
    inp2.value = ''
    removeListener();

}

reset.addEventListener('click', Reset);