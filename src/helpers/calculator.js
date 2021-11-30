
export const getDifferenceYear = (year) => new Date().getFullYear() - year;

// calculate the total to pay by the trademark
export const calculateByTrademark = (trademark) => {
    let increase;
    switch(trademark){
        case 'european':
            increase = 1.30;
        break;
        case 'american':
            increase = 1.15;
        break;
        case 'assian':
            increase = 1.05;
        break;
        default:
            break;
    }
    return increase;
}

export const calculateByPlan = (plan) => {
    return plan === 'basic' ? 1.20 : 1.50;
}
