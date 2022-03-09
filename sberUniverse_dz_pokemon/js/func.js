export function alertFunc(inputSearch){
    if(inputSearch.value!=''){
        alert(inputSearch.value)
        inputSearch.value = '';
    }
}
export function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}