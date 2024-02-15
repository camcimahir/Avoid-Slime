// name: Mahir Camci
// Game Name: Avoid Slime
// Hours Spent: 10
// Creative Tilt: Not creative in the sense of new mechanics but I figured out how
// to move my character in sine waves to make dodging more intersting also I am adding
// more enemies as the level progresses. I drew the background myself its mostly abstract but I
// tried to make it visually pleasing.
// I tried adding animation but couldnt figure it out. you can see me attempting in the cod e=

"use strict"

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    backgroundColor: '#12372A',
    render: {
        pixelArt: true
    },
    scene: [ Menu, Play, Instructions],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
}
let game = new Phaser.Game(config)

let keyX, menuConfig, keyW, gameOver, keyR, keyQ, keyM, keyMouse, keyI, playing, jumping

let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3