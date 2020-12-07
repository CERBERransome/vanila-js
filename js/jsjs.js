//if, else, elif
//if else else if는 간단하게 조건이 만족되면 실행되고(true:if) 모두 불만족하면 실해되고(false:else) if는 불만족이고 이다른 조건이 맞았을떄(false but this is true:else if)로 조정할수있다
//문법
const conditon = true;
if(conditon){
    alert('it is if');
} else if (conditon === false){
    alert('it is elif');
} else{
    alert('it is not a boolen')
}
//이런식으로 쓸수있다 그리고 &&는 and즉 모두 true면 true가되고 ||는 or즉 둘중 하나라도 true면 true가 된다 예:
if(20 > 5 && 5 === 20){
    console.log('?')
} else if (20 > 5 || 5 === 20){
    console.log('good')
}
//예:
const speekEn = prompt('You can speek En?> ')
//prompt는 유저에게 무었을 물어보는 겄이다
const canEatKimch = prompt('Can you eat kimch?> ')

if(speekEn === 'yes' && canEatKimch == 'yes'){
    console.log('합격!')
} else if(speekEn != 'yes' && speekEn != 'no'){
    console.log('only yes or no')
} else{
    console.log('불합격!')
}