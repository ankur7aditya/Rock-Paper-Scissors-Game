let user=JSON.parse(localStorage.getItem('user'))|| {win:0,lose:0,tie:0};

function playGame(userMove)
{
    const computerMove=generateMove();
    let result;
    if (userMove===computerMove)
    {
        result='Tie';
        user.tie++;
    }
    else if ((userMove==='rock' && computerMove==='scissors') || (userMove==='paper' && computerMove==='rock') || (userMove==='scissors' && computerMove==='paper'))
    {
        user.win++;
        result='Win';
    }
    else
    {
        user.lose++;
        result='Lose';
    }
    localStorage.setItem('user',JSON.stringify(user));
    const resultElem=document.querySelector('.js-result');
    resultElem.innerHTML=result;

    const moveElem=document.querySelector('.js-move');
    moveElem.innerHTML=`You <img src="./images/${userMove}-emoji.png" class="move-icon">  <img src="./images/${computerMove}-emoji.png" class="move-icon"> Computer`

    showScore();

}
    

function showScore()
{
    const scoreElem=document.querySelector('.js-score');
    scoreElem.innerHTML = `Win:${user.win} Loss:${user.lose} Tie:${user.tie}`; 
}

function generateMove()
{
    const temp=Math.random();
    if (temp<0.34) return 'rock';
    else if(temp<0.67) return 'paper';
    else return 'scissors';
}

