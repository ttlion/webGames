import React from 'react';
import Phaser from 'phaser';
import logoImg from './../assets/logo.png';

class MyGame extends Phaser.Scene {

    constructor() {
        debugger;
        super();
    }

    preload() {
        this.load.image('logo', logoImg);
    }

    create() {
        const logo = this.add.image(400, 150, 'logo');
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'ChickenCatchEggRootApp',
    width: 800,
    height: 600,
    scene: MyGame
};



export class ChickenCatchEggRootApp extends React.PureComponent {

    componentDidMount = () => new Phaser.Game(config);
    render = () => <></>;

}
