class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        //preload sprite
        this.load.image('mainChar', './assets/mainCharacter.png')
        this.load.image('slime', './assets/slime.png')
        this.load.image('blueHills', './assets/blueHills.png' )

        this.load.audio('bgMusic', './assets/BGMusic.mp3')
        this.load.audio('explosionSound', './assets/explosion-6055.mp3')
        this.load.audio('jump', './assets/cartoon-jump-6462.mp3')
        this.load.audio('pageSound', './assets/handle-paper-foley-2-172689.mp3')
        this.load.audio('gameStartSound', './assets/game-start-6104.mp3')
    }

    create() {

        if (!playing) {
            this.sound.add('bgMusic', { loop: true }).play()
            playing = true
        }


        menuConfig = {
            fontFamily: 'Geneva',
            fontSize: '28px',
            backgroundColor: '#436850',
            color: '#FBFADA',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
              right: 10,
              left: 10,
            },
            fixedWidth: 0
        }
        game.settings = {
          mouseEnabled: false
        }

        // display menu text
        this.add.text(game.config.width/2, game.config.height/2 - (borderUISize + borderPadding)*2, 'Avoid Slime', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 - (borderUISize + borderPadding), 'Use ←→ arrows to move (F) to fire', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'Press (I) for Instructions and (X) to play', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press M to include Mouse (easier)', menuConfig).setOrigin(0.5)
        //this.add.text(game.config.width/2, game.config.height/2 + borderUISize*2 + borderPadding*2, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5)
        
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X)
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I)

    }

    update() {

        if(Phaser.Input.Keyboard.JustDown(keyI)) {
            this.sound.play('pageSound')
            this.scene.start('instructions')
        }

        if (Phaser.Input.Keyboard.JustDown(keyM)){
            game.settings.mouseEnabled = !(game.settings.mouseEnabled)
        }

        if (game.settings.mouseEnabled){
            menuConfig.backgroundColor = '#ADBC9F'
            this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press M to include Mouse (easier)', menuConfig).setOrigin(0.5)
          } else {
            menuConfig.backgroundColor = '#9B4444'
            this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press M to include Mouse (easier)', menuConfig).setOrigin(0.5)
          }


        if (Phaser.Input.Keyboard.JustDown(keyX)) {
            // easy mode
            game.settings = {
              slimeSpeed: 2,
              //gameTimer: 60000    
            }
            this.scene.start('playScene')
   
        }

    }
}