class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    // preload() {
    //     this.load.spritesheet('cat', './assets/Cat-Sheet.png', {
    //         frameWidth: 32
    //     })
    // }


    create() {
        this.sound.play('gameStartSound')
        //background
        this.blueHills = this.add.tileSprite(0, 0, 640, 480, 'blueHills').setOrigin(0, 0)   

        this.blueHills.preFX.addBlur(2, 1, 1, 3)

        this.mainChar1 = new MainChar(this, borderUISize, game.config.height/2, 'mainChar').setOrigin(0,0)

        // this.slime1 = new Slime(this, game.config.width + borderUISize , game.config.height/4, 'slime').setOrigin(0,0).setScale(4)
        // this.slime2 = new Slime(this, game.config.width + borderUISize , 2 * game.config.height/3, 'slime').setOrigin(0,0).setScale(4)

        this.slime1 = new Slime(this, game.config.width + borderUISize , game.config.height/2, 'slime').setOrigin(0,0).setScale(4);
        this.slime2 = false; // Slime 2 initially false
        this.slime3 = false; // Slime 3 initially false


        gameOver = false

        this.scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#436850',
            color: '#FBFADA',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
              right: 10,
              left: 10,
            },
        }

        // this.anims.create({
        //     key: 'jumpingAnimation',
        //     frameRate: 1,
        //     repeat: 0,
        //     frames: this.anims.generateFrameNumbers('cat', {
        //         start: 159,
        //         end: 161
        //     })
        // })

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q)
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)

        this.physics.add.collider(this.slime1, this.mainChar1, this.handleCollision , null, this)
        this.physics.add.collider(this.slime2, this.mainChar1, this.handleCollision , null, this)
        this.physics.add.collider(this.slime3, this.mainChar1, this.handleCollision , null, this)

        this.startTime = this.time.now;

    }    
    update() {

        if(Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart()
        }
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start("menuScene")
        }

        if (!gameOver){
            this.blueHills.tilePositionX -= 1
            this.mainChar1.update()
            this.slime1.update()
            if (this.slime2){
                this.slime2.update()
            }
            if (this.slime3){
                this.slime3.update()
            }
            
            if (this.mainChar1.isOutside()) {
                this.endGame();
            }
        }
        // if (jumping) {
        //     this.mainChar1.play('jumpingAnimation');
        // }

        const elapsedTime0 = this.time.now - this.startTime;

        if (elapsedTime0 >= 15000 && !this.slime2) {
            console.log("hello")
            this.slime2 = new Slime(this,game.config.width + borderUISize, game.config.height/4 , 'slime').setOrigin(0, 0).setScale(4);
            this.physics.add.collider(this.slime2, this.mainChar1, this.handleCollision , null, this)
        } else if (elapsedTime0 >= 30000 && !this.slime3) {
            this.slime3 = new Slime(this,game.config.width + borderUISize, 3 * game.config.height/4, 'slime').setOrigin(0, 0).setScale(4);
            this.physics.add.collider(this.slime3, this.mainChar1, this.handleCollision , null, this)
        }
        
    }

    handleCollision(slime, mainChar) {
        slime.destroy();
        mainChar.destroy();
        this.endGame();
    }

    endGame() {
        gameOver = true;
        // Calculate the elapsed time
        const endTime = this.time.now;
        const elapsedTime = endTime - this.startTime;
        const seconds = Math.floor(elapsedTime / 1000);
        
        this.sound.play('explosionSound');
        this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', this.scoreConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 64, `Time: ${seconds} seconds`, this.scoreConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + 128, 'Press (R) to Restart or (M) for Menu', this.scoreConfig).setOrigin(0.5);
    }

}