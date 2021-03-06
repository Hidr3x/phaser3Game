class SceneC extends Phaser.Scene {
  constructor() {
    super("SceneC");
  }
  preload() {
    this.load.image("rick", "assets/firstrman.png");
    this.load.image("lesy", "assets/girlinhome.png");
    this.load.image("lesy-face1", "assets/surprise.png");
    this.load.image("lesy-face2", "assets/joy.png");
    this.load.image("background", "assets/background.png");
    // this.load.image("Paul-message", "assets/Paul.png");
    this.load.image("Lexy-message1", "assets/phrases1.png");
    this.load.image("Lexy-message2", "assets/phrases2.png");
    this.load.image("Idea", "assets/idea.png");
    this.load.image("lamp", "assets/pngwing.com.png");
    this.load.spritesheet("fullscreen", "assets/fullscreen.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create() {
    var button = this.add
      .image(590, 10, "fullscreen")
      .setOrigin(1, 0)
      .setInteractive()
      .setScale(0.6)
      .setDepth(50);

    button.on(
      "pointerup",
      function () {
        if (this.scale.isFullscreen) {
          button.setFrame(0);

          this.scale.stopFullscreen();
        } else {
          button.setFrame(1);

          this.scale.startFullscreen();
        }
      },
      this
    );
    var image0 = this.add
      .sprite(0, 0, "background")
      .setOrigin(0, 0)
      .setAlpha(0.2);
    var image1 = this.add.image(-500, 500, "rick").setScale(0.8);
    var image2 = this.add.image(900, 550, "lesy").setScale(0.55);
    // var image3 = this.add
    //   .image(300, 700, "Paul-message")
    //   .setScale(0.4)
    //   .setAlpha(0);
    var image4 = this.add
      .image(300, 700, "Lexy-message1")
      .setScale(0.4)
      .setAlpha(0);
    var image5 = this.add
      .image(300, 550, "lesy-face1")
      .setScale(0.55)
      .setAlpha(0);
    var image6 = this.add
      .image(300, 700, "Lexy-message2")
      .setScale(0.4)
      .setAlpha(0);
    var image7 = this.add
      .image(300, 550, "lesy-face2")
      .setScale(0.55)
      .setAlpha(0);

    var image8 = this.add.image(300, 550, "Idea").setScale(0.55).setAlpha(0);
    var image9 = this.add.image(500, 100, "lamp").setScale(0.1).setAlpha(0);

    this.tweens.add({
      targets: image0,
      ease: "Power2",
    });

    this.tweens.add({
      targets: image1,
      x: 300,
      duration: 2400,
      ease: "Power2",
      yoyo: true,
      repeat: 0,
      hold: 1500,
    });

    // this.tweens.add({
    //   targets: image3,
    //   x: 300,
    //   delay: 1400,
    //   duration: 1500,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 0,
    //   alpha: 1,
    // });
    this.tweens.add({
      targets: image2,
      x: 300,
      delay: 7000,
      duration: 2400,
      ease: "Power2",
      yoyo: true,
      repeat: 0,
      hold: 6400,
    });
    this.tweens.add({
      targets: image4,
      x: 300,
      delay: 8300,
      duration: 1900,
      ease: "Power2",
      yoyo: true,
      repeat: 0,
      alpha: 1,
      depth: 3,
    });
    this.tweens.add({
      targets: image5,
      x: 300,
      delay: 9500,
      duration: 250,
      ease: "Power2",
      yoyo: true,
      repeat: 2,
      alpha: 1,
      repeatDelay: 180,
    });
    this.tweens.add({
      targets: image6,
      x: 300,
      delay: 12000,
      duration: 1500,
      ease: "Power2",
      yoyo: true,
      repeat: 0,
      alpha: 1,
      depth: 3,
    });
    this.tweens.add({
      targets: image7,
      x: 300,
      delay: 12500,
      duration: 250,
      ease: "Power2",
      yoyo: true,
      repeat: 2,
      alpha: 1,
      repeatDelay: 180,
    });
    this.tweens.add({
      targets: image8,
      yoyo: true,
      delay: 15000,
      hold: 680,
      duration: 250,
      ease: "Power2",
      alpha: 1,
      repeat: 0,
      repeatDelay: 200,
      depth: 15,
    });
    this.tweens.add({
      targets: image9,
      yoyo: true,
      hold: 680,
      delay: 15000,
      ease: "Power2",
      duration: 250,
      alpha: 1,
    });
  }
}
