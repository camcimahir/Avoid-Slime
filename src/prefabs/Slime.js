class Slime extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super (scene, x, y, texture, frame)


        scene.add.existing(this)     
        this.moveSpeed = game.settings.slimeSpeed     
        scene.physics.add.existing(this)
        this.zigzagDistance = 70; 
        this.body.setSize(8, 8).setOffset(2, 10)

    }

    update() {
        this.x -= this.moveSpeed

        this.y += this.moveSpeed*  Math.sin(this.x / this.zigzagDistance);

        // this.x -= this.moveSpeed
        // if (this.up == true){
        //     this.y += this.moveSpeed
        // } else {
        //     this.y -= this.moveSpeed
        // }

        // wrap from left to right edge
        if (this.x <= 0 - this.width) {
            this.reset()
        }
    }

    reset(){
        this.x = game.config.width
        this.y = Phaser.Math.Between(10, this.scene.game.config.height - 10);
        
    }

}