function rectangularCollision({rectangle1 , rectangle2}) {
    return(
        rectangle1.hitbox.position.x + rectangle1.hitbox.width <=
         rectangle2.position.x &&
        rectangle1.hitbox.position.x <=
         rectangle2.position.x + rectangle2.width &&
        rectangle1.hitbox.position.y + rectangle1.hitbox.height >=
         rectangle2.position.y &&
        rectangle1.hitbox.position.y <= rectangle2.position.y + rectangle2.height
    )
}

function determineWinner({player, enemy, timerID}) {
    clearTimeout(timerID)
    document.querySelector('#displayText').computedStyleMap.display = 'flex'
    if (player.hp === enemy.hp){
        document.querySelector('#displayText').innerHTML = 'Empate'
    } else if(player.hp < enemy.hp) {
        document.querySelector('#displayText').innerHTML = 'Jogador 1 Vence!'
    } else if (player.health > enemy.hp) {
        document.querySelector('#displayText').innerHTML = 'Jogador 2 Vence!'
    }
}

let timer = 60
let timerID
function decreaseTimer(){
    if(timer>0){
        timerID =setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer
    }

    if(timer === 0){
        determineWinner({player,enemy,timerID})
    }
}