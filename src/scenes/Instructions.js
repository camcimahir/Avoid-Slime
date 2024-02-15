class Instructions extends Phaser.Scene{
    constructor() {
        super("instructions")
    }

    create() {

        let InstructionsConfig = {
            fontFamily: 'Geneva',
            fontSize: '20px',
            //backgroundColor: '#436850',
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

        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X)
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)

        this.add.text(game.config.width/2, game.config.height/2 - (borderUISize + borderPadding)*5, 'Instructions', InstructionsConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 - (borderUISize + borderPadding)*4, 'Press (W) to jump and avoid the Slime', InstructionsConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 - (borderUISize + borderPadding)*3, 'Goal is to survive for as long as you can', InstructionsConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 - (borderUISize + borderPadding)*2, 'You can restart the level In-Game with (Q) and go back to Menu with (M)', InstructionsConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 - (borderUISize + borderPadding), 'Press (M) to go back (X) to start', InstructionsConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'Credits', InstructionsConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding), 'Background Music: Peach by Sakura Girl', InstructionsConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding)*2, 'sprites made by Mahir C & Ahmet M', InstructionsConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding)*3, 'Sound Effects: Pixabay', InstructionsConfig).setOrigin(0.5)
    }

    update() {

        if(Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start("menuScene")
        }

        if(Phaser.Input.Keyboard.JustDown(keyX)) {
            game.settings = {
                slimeSpeed: 3,
                //gameTimer: 60000    
            }
            this.scene.start('playScene')
            
        }

    }


}