export default function(number){
    number += 1;
    return{
        type: 'INCREMENT_NUMBER',
        payload: number
    }
}