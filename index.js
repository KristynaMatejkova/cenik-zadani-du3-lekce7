const selectPlan = (planNumber) => {
    const planOne = document.querySelector('#plan1')
    const planTwo = document.querySelector('#plan2')
    const planThree = document.querySelector('#plan3')
    if (planNumber === 1){
        planOne.classList.add('plan--selected')
        planTwo.classList.remove('plan--selected')
        planThree.classList.remove('plan--selected')
    }else if (planNumber === 2){
        planTwo.classList.add('plan--selected')
        planOne.classList.remove('plan--selected')
        planThree.classList.remove('plan--selected')
    }else if (planNumber === 3){
        planThree.classList.add('plan--selected')
        planOne.classList.remove('plan--selected')
        planTwo.classList.remove('plan--selected')
    }else{
        return 'Chyba'
    }

}

/*
const selectPlan = (planNumber) => {
    const planOne = document.querySelector('#plan1')
    const planTwo = document.querySelector('#plan2')
    const planThree = document.querySelector('#plan3')
    switch (planNumber) {
        case 1:
        planOne.classList.add('plan--selected');
        planTwo.classList.remove('plan--selected');
        planThree.classList.remove('plan--selected');
        break;
        case 2:
        planTwo.classList.add('plan--selected');
        planOne.classList.remove('plan--selected');
        planThree.classList.remove('plan--selected');
        break;
        case 3:
        planThree.classList.add('plan--selected');
        planOne.classList.remove('plan--selected');
        planTwo.classList.remove('plan--selected');
        break;
        default:
        return 'Chyba'
        }
    }
    */