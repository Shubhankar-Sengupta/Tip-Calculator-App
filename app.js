const bill = document.querySelector('#total');
const buttons = document.querySelectorAll('.color1');
const inp2 = document.querySelector('.color2');
const spanVal = document.querySelector('.amount');
const spanVal1 = document.querySelector('.amount1');
const numPpl = document.querySelector('#people');
const reset = document.querySelector('.reset');
const select = document.querySelector('#warning');
// selects all the elements above.


function standard(varValue) { // this function reduces the duplication of code.

    const noOfPpl = parseInt(numPpl.value); // takes the current value of People.
    const billVal = parseInt(bill.value); // takes the current value of the bill.

    spanVal.innerHTML = `$${((varValue * billVal) / noOfPpl).toFixed(2)}`; // values are computed and placed into span
    spanVal1.innerHTML = `$${((billVal + (varValue * billVal)) / noOfPpl).toFixed(2)}`; // values are computed and placed into span
    select.innerHTML = ''; // here the span becomes empty.

}

function Declaration(evt) { // for custom input

    if (evt.target.value <= "0") tipTopZero();

    else {

        const percVal = parseInt(evt.target.value) / 100;
        standard(percVal)
        evt.target.value = ''
    }

}

function Declaration1(evt) { // for buttons

    const percVal = parseInt(evt.target.innerHTML) / 100;
    standard(percVal); // this function passes on this percVal as a value
}


function Add(evt) { // this function  is added to the listeners whenever runlistener() runs.

    if (evt.target === inp2) Declaration(evt); // if event target becomes custom input then this function runs
    else Declaration1(evt); // else for the buttons this function runs.
}



function runListener() {// adds the listeners

    for (let btn of buttons) {
        btn.addEventListener('click', Add);
    }

    inp2.addEventListener('change', Add);

}


function removeListener() { // removes the listeners.

    for (let btn of buttons) {
        btn.removeEventListener('click', Add);
    }

    inp2.removeEventListener('change', Add);

}



function People(evt) { // now whenver we call People we execute the initial setting everytime which removes all listeners and adds them back if People is not empty. 

    initialSetting();
    select.innerHTML = `<b style="color:red;">Select a Tip<b>`; // meanwhile it has this value.
    mainOperationBeg();

}


bill.addEventListener('input', function main(evt) { //attached event listener for input inside the first input. //We only attach an event listener to buttons and input if no. of people is not empty.

    if (numPpl.value && numPpl.value > "0") runListener(); // if there is already people present and greater than zero then we attach the listeners to buttons and custom input.

    inp2.value = ''; // we always keep custom input empty at this stage, so that there is no confusion even if bill value or people is added/changed. 

    tipTopZero(); // we keep it zero up until now spans.

    if (evt.target.value === '') { // if value is totally missing then we reset evrything on the calculator.
        Reset();
    }


    numPpl.addEventListener('change', People) // here we add the change event listener here with the callback People to the no. of people. Whenever the value changes now this event pops up.

    if (numPpl.value === '' || numPpl.value <= "0") { // if anytime the value is empty or less than equal to zero then span appears.
        select.innerHTML = `<b style="color:red;">Can't be zero <b>`;
    }

    else {
        select.innerHTML = `<b style="color:red;">Select a Tip<b>`; // else select a tip would appear.
    }

    // above two conditions are for when there has been some manipulations with the bill input value.

})


function mainOperationBeg() {

    if (numPpl.value === '' || numPpl.value <= "0") { // if -ve or 0 then removeListener() and People has a span below
        removeListener();
        select.innerHTML = `<b style="color:red;"> Can't be zero <b>`;
    }

    else runListener(); // else it attaches back the listeners.

}

function initialSetting() {
    tipTopZero();
    removeListener(); // listeners are removed.
    inp2.value = ''; // custom input value is null.
}


function tipTopZero() { // Span elements become zero.

    spanVal1.innerHTML = `$0.00`;
    spanVal.innerHTML = `$0.00`;
}


function Reset() { // everything is reset

    initialSetting();
    select.innerHTML = '';
    bill.value = '';
    numPpl.value = '';
    numPpl.removeEventListener('change', People); 

}

reset.addEventListener('click', Reset); // added the function Reset