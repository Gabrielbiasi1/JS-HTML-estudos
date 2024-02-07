class Sprite{
    constructor({
        position,
        imageSrc,
        scale=1,
        frameMax=1,
        offset = {x: 0, y:0}

    }) {
        this.position = position
        this.width = 50
        this.height = 150
        this.image = new Image
        this.image.src = imageSrc
        this.scale = scale
        this.frameMax = frameMax
        this.frameAgr = 0
        this.frameElp = 0
        this.frameSeg = 5
        this.offset = offset
    }

    draw(){
        c.drawImage(
            this.image,
            this.frameAgr * (this.image.width / this.frameMax), 0,
            this.image.width / this.frameMax,
            this.image.height,
            this.position.x - this.offset.x,
            this.position.y -this.offset.y,
            (this.image.width / this.frameMax) * this.scale,
            this.image.height * this.scale
        )

    }


    animator(){
        this.frameElp++

        if(this.frameElp % this.frameSeg === 0){
            if(this.frameAgr < this.frameMax - 1){
                this.frameAgr++
            } else{
                this.frameAgr = 0
            }
        }
    }
    
    update(){
        this.draw()
        this.animator()
    }
}

class Player extends Sprite {
    constructor({
        position,
        velocity,
        color = 'red',
        imageSrc,
        scale = 1,
        frameMax = 1,
        offset = {x: 0, y: 0},
        sprites,
        hitbox = { offset: {},width: undefined, height: undefined}
    }) {
        super({
            position,
            imageSrc,
            scale,
            frameMax,
            offset
        })

    this.velocity = velocity
    this.width = 50;
    this.height = 150;
    this.comando
    this.hitbox = {
        position: {
        x: this.position.x,
        y: this.position.y
    },
    offset: hitbox.offset,
    width: hitbox.width,
    height: hitbox.height
    }
    this.cor = cor;
    this.AAnimation;
    this.hp = 250;
    this.frameAgr = 0;
    this.frameElp = 0;
    this.frameSeg =5;
    this.sprites = sprites;
    this.dead = false;

    for(const sprite in this.sprites) {
        sprites[sprite].image = new Image()
        sprites[sprite].image.src = sprites[sprite]

        }
    }

    update(){
        this.draw()
        if(!this.dead) this.animator()
        this.hitbox.position.x = this.postMessage.x + this.hitbox.offset.x
        this.hitbox.position.y = this.postMessage.y + this.hitbox.offset.y
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if(this.position.y + this.height + this.velocity.y >= canvas.height - 96){
            this.velocity.y = 0
            this.position.y = 330
        } else this.velocity.y += gravity
    }

    attack(){
        this.switchSprite('attack1')
        this.AAnimation = true
    }

    takeHit(){
        this.hp -= 20
        if(this.hp<=0){
            this.switchSprite('death')
        } else this.switchSprite('takeHit')
    }

    switchSprite(sprite){
        if(this.image === this.sprites.death.image)
        {
            if(this.frameAgr === this.sprites.death.frameMax - 1)
                this.dead = true
            return
        }
        if(
            this.image === this.sprites.attack1.image &&
            this.frameAgr < this.sprites.attack1.frameMax -1
        )
        return
        if(
            this.image === this.sprites.takeHit.image &&
            this.frameAgr < this.sprite.takeHit.frameMax -1
        )
        return
        switch(sprite){
            case 'idle':
                if(this.image !== this.sprites.idle.image){
                    this.image = this.sprites.idle.image
                    this.frameMax = this.sprites.idle.frameMax
                    this.frameAgr = 0
                }
                break

            case 'run':
                if(this.image !== this.sprites.run.image){
                    this.image = this.sprites.run.image
                    this.frameMax = this.sprites.run.frameMax
                    this.frameAgr = 0
                }
                break
            
            case 'jump':
                if(this.image !== this.sprites.jump.image){
                    this.image = this.sprites.jump.image
                    this.frameMax = this.sprites.jump.frameMax
                    this.frameAgr = 0 
                }
                break

            case 'fall':
                if (this.image !== this.sprite.fall.image){
                    this.image = this.sprites.fall.image
                    this.frameMax = this.sprites.fall.frameMax
                    this.frameAgr = 0
                }
                break

            case 'attack1':
            if(this.image !== this.sprites.attack1.image) {
                this.image = this.sprites.attack1.image
                this.frameMax = this.sprites.attack1.frameMax
                this.frameAgr = 0
            }
            break

        case 'death':
            if(this.image !== this.sprite.death.image){
                this.image = this.sprites.death.image
                this.frameMax = this.sprites.death.frameMax
                this.frameAgr = 0
            }
            break
        }
    }
}