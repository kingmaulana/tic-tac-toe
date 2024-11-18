let array = ['x', '', 'x'];

for(let i = 0; i < array.length; i++) {
    if(array[i] === array[i + 1] && array[i + 1] == array[i + 2] && array[i] !== '') {
        console.log('xsame');
    } 
}
