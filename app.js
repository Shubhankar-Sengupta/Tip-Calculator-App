const bill = document.querySelector('#total');
const buttons = document.querySelectorAll('.color1');
const inp2 = document.querySelector('.color2');
const spanVal = document.querySelector('.amount');
const spanVal1 = document.querySelector('.amount1');
const numPpl = document.querySelector('#people');
const reset = document.querySelector('.reset');
const select = document.querySelector('#warning');


function Declaration(evt) {

    if (evt.target.value <= "0") tipTopZero();

    else {

        const percVal = parseInt(evt.target.value) / 100;
        const noOfPpl = parseInt(numPpl.value);
        const billVal = parseInt(bill.value);

        spanVal.innerHTML = `$${((percVal * billVal) / noOfPpl).toFixed(2)}`;
        spanVal1.innerHTML = `$${((billVal + (percVal * billVal)) / noOfPpl).toFixed(2)}`;
        evt.target.value = ''
        select.innerHTML = ''
    }


}


function Declaration1(evt) {

    const percVal = parseInt(evt.target.innerHTML) / 100;
    const noOfPpl = parseInt(numPpl.value);
    const billVal = parseInt(bill.value);

    spanVal.innerHTML = `$${((percVal * billVal) / noOfPpl).toFixed(2)}`;
    spanVal1.innerHTML = `$${((billVal + (percVal * billVal)) / noOfPpl).toFixed(2)}`;
    select.innerHTML = ''
}


function Add(evt) {

    if (evt.target === inp2) Declaration(evt);
    else Declaration1(evt);
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



function People(evt) {

    initialSetting();
    select.innerHTML = `<b style="color:red;">Select a Tip<b>`;
    mainOperationBeg();

}


bill.addEventListener('input', function main(evt) {

    if (numPpl.value && numPpl.value > "0") {
        runListener();
    }

    tipTopZero();

    if (evt.target.value === '') {
        Reset();
    }


    numPpl.addEventListener('change', People)

    if (numPpl.value === '' || numPpl.value <= "0") {
        select.innerHTML = `<b style="color:red;">Can't be zero <b>`;
    }

    else if (numPpl.value) {
        select.innerHTML = `<b style="color:red;">Select a Tip<b>`;
    }

})


function mainOperationBeg() {

    if (numPpl.value === '' || numPpl.value <= "0") {
        removeListener();
        select.innerHTML = `<b style="color:red;"> Can't be zero <b>`;
    }

    else runListener();

}

function initialSetting() {
    tipTopZero();
    removeListener();
    inp2.value = '';
}


function tipTopZero() {
    spanVal1.innerHTML = `$0.00`;
    spanVal.innerHTML = `$0.00`;
}


function Reset() {

    initialSetting();
    select.innerHTML = '';
    bill.value = ''
    numPpl.value = ''
    numPpl.removeEventListener('change', People);

}

reset.addEventListener('click', Reset);