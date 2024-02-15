class MainChar extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super (scene, x, y, texture, frame)
        
        scene.add.existing(this)
        jumping = false
        scene.physics.add.existing(this)

        this.PLAYER_VELOCITY = 100;
        this.body.setSize(32, 32);
        this.scene = scene
    }
    


    create() {


    }

    update() {

        if (!jumping) {
            this.body.velocity.y += 10; 
        }

        // Jumping
        if (Phaser.Input.Keyboard.JustDown(keyW)) {
            this.jump();
        }


    }

    jump() {
        this.scene.sound.play('jump')
        jumping = true;
        this.body.velocity.y = -this.PLAYER_VELOCITY * 3; 
        this.scene.time.delayedCall(250, () => {
            jumping = false;
        });

        //this.play('jumpingAnimation')
    }

    isOutside() {
        if (this.y <= 0 - this.width || this.y >= game.config.height + this.width) {
            return true
        }
    }


}