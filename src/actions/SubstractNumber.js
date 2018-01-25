export default function(number){
    number -= 1;
    return{
        type: 'DECREMENT_NUMBER',
        payload: number
    }
}