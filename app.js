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

        const percVal = parseInt(evt.target.value) / 100;
        const noOfPpl = parseInt(numPpl.value);
        const billVal = parseInt(bill.value);

        spanVal.innerHTML = `$${((percVal * billVal) / noOfPpl).toFixed(2)}`;
        spanVal1.innerHTML = `$${((billVal + (percVal * billVal)) / noOfPpl).toFixed(2)}`;
        evt.target.value = ''

    }

    else {
        
        const percVal = parseInt(evt.target.innerHTML) / 100;
        const noOfPpl = parseInt(numPpl.value);
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

    tipTopZero();

    if (evt.target.value === '') {
        Reset();
    }


    numPpl.addEventListener('change', (evt) => {

        initialSetting();
        select.innerHTML = '';
        mainOperationBeg();
            
    })

    if (numPpl.value === '' || numPpl.value <= "0") {
        select.innerHTML = `<b style="color:red;">Can't be zero <b>`;
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

    tipTopZero();
    initialSetting();
    select.innerHTML = '';
    bill.value = ''
    numPpl.value = ''  

}

reset.addEventListener('click', Reset);