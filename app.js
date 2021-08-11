const inpVal1 = document.querySelector('#total');
const buttons = document.querySelectorAll('.color1');
const inp2 = document.querySelector('.color2');
const spanVal = document.querySelector('.amount');
const spanVal1 = document.querySelector('.amount1');
const numPpl = document.querySelector('#people');
const reset = document.querySelector('.reset');


inpVal1.addEventListener('input', (evt) => {

    const billVal = parseInt(evt.target.value) / 100;

    for (let btn of buttons) {
        btn.addEventListener('click', (evt) => {
            const button = parseInt(evt.target.innerHTML);
            spanVal.innerHTML = (button * billVal).toFixed(2);
        })
    };

    inp2.addEventListener('change', (evt) => {
        const set = parseInt(evt.target.value);
        spanVal.innerHTML = (set * billVal).toFixed(2);
    });

});


function Reset(evt) {
    spanVal1.innerHTML = `$0.00`;
    spanVal.innerHTML = `$0.00`;
}

reset.addEventListener('click', Reset);
