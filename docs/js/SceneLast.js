class SceneL1 extends Phaser.Scene {
  constructor() {
    super("SceneL1");
  }
  preload() {
    this.load.image("rick1", "assets/manincostum.png");
    this.load.image("lesy1", "assets/dressglasesjoypng.png");
    this.load.image("lesy-face1", "assets/surprise.png");
    this.load.image("lesy-face2", "assets/joy.png");
    this.load.image("club", "assets/club.png");
    this.load.image("Paul-message", "assets/Paul_2.png");
    this.load.image("Lexy-message1", "assets/phrases1.png");
    this.load.image("Lexy-message2", "assets/phrases2.png");
    // this.load.image("Idea", "assets/idea.png");
    // this.load.image("lamp", "assets/pngwing.com.png");
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
      .sprite(0, 0, "club")
      .setScale(1.75)
      .setOrigin(0, 0)
      .setAlpha(1);
    var image1 = this.add.image(900, 550, "rick1").setScale(0.65);
    var image2 = this.add.image(-500, 550, "lesy1").setScale(0.4);
    var image3 = this.add
      .image(300, 700, "Paul-message")
      .setScale(0.4)
      .setAlpha(0);
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

    // var image8 = this.add.image(300, 550, "Idea").setScale(0.55).setAlpha(0);
    // var image9 = this.add.image(500, 100, "lamp").setScale(0.1).setAlpha(0);

    this.tweens.add({
      targets: image0,
      ease: "Power2",
    });

    this.tweens.add({
      targets: image1,
      x: 450,
      duration: 2400,
      ease: "Power2",
      yoyo: false,
      repeat: 0,
      hold: 1500,
    });

    this.tweens.add({
      targets: image3,
      x: 300,
      delay: 7400,
      duration: 1500,
      ease: "Power2",
      yoyo: false,
      repeat: 0,
      alpha: 1,
    });
    this.tweens.add({
      targets: image2,
      x: 150,
      delay: 5000,
      duration: 2400,
      ease: "Power2",
      yoyo: false,
      repeat: 0,
      hold: 6400,
    });
    // this.tweens.add({
    //   targets: image4,
    //   x: 300,
    //   delay: 8300,
    //   duration: 1900,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 0,
    //   alpha: 1,
    //   depth: 3,
    // });
    // this.tweens.add({
    //   targets: image5,
    //   x: 300,
    //   delay: 9500,
    //   duration: 250,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 2,
    //   alpha: 1,
    //   repeatDelay: 180,
    // });
    // this.tweens.add({
    //   targets: image6,
    //   x: 300,
    //   delay: 12000,
    //   duration: 1500,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 0,
    //   alpha: 1,
    //   depth: 3,
    // });
    // this.tweens.add({
    //   targets: image7,
    //   x: 300,
    //   delay: 12500,
    //   duration: 250,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 2,
    //   alpha: 1,
    //   repeatDelay: 180,
    // });
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


class SceneL2 extends Phaser.Scene {
  constructor() {
    super("SceneL2");
  }
  preload() {
    this.load.image("rick2", "assets/manincostum.png");
    this.load.image("lesy2", "assets/chokerjoy.png");
    this.load.image("lesy-face1", "assets/surprise.png");
    this.load.image("lesy-face2", "assets/joy.png");
    this.load.image("club", "assets/club.png");
    this.load.image("Paul-message", "assets/Paul_2.png");
    this.load.image("Lexy-message1", "assets/phrases1.png");
    this.load.image("Lexy-message2", "assets/phrases2.png");
    // this.load.image("Idea", "assets/idea.png");
    // this.load.image("lamp", "assets/pngwing.com.png");
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
      .sprite(0, 0, "club")
      .setScale(1.75)
      .setOrigin(0, 0)
      .setAlpha(1);
    var image1 = this.add.image(900, 550, "rick2").setScale(0.65);
    var image2 = this.add.image(-500, 550, "lesy2").setScale(0.4);
    var image3 = this.add
      .image(300, 700, "Paul-message")
      .setScale(0.4)
      .setAlpha(0);
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

    // var image8 = this.add.image(300, 550, "Idea").setScale(0.55).setAlpha(0);
    // var image9 = this.add.image(500, 100, "lamp").setScale(0.1).setAlpha(0);

    this.tweens.add({
      targets: image0,
      ease: "Power2",
    });

    this.tweens.add({
      targets: image1,
      x: 450,
      duration: 2400,
      ease: "Power2",
      yoyo: false,
      repeat: 0,
      hold: 1500,
    });

    this.tweens.add({
      targets: image3,
      x: 300,
      delay: 7400,
      duration: 1500,
      ease: "Power2",
      yoyo: false,
      repeat: 0,
      alpha: 1,
    });
    this.tweens.add({
      targets: image2,
      x: 150,
      delay: 5000,
      duration: 2400,
      ease: "Power2",
      yoyo: false,
      repeat: 0,
      hold: 6400,
    });
    // this.tweens.add({
    //   targets: image4,
    //   x: 300,
    //   delay: 8300,
    //   duration: 1900,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 0,
    //   alpha: 1,
    //   depth: 3,
    // });
    // this.tweens.add({
    //   targets: image5,
    //   x: 300,
    //   delay: 9500,
    //   duration: 250,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 2,
    //   alpha: 1,
    //   repeatDelay: 180,
    // });
    // this.tweens.add({
    //   targets: image6,
    //   x: 300,
    //   delay: 12000,
    //   duration: 1500,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 0,
    //   alpha: 1,
    //   depth: 3,
    // });
    // this.tweens.add({
    //   targets: image7,
    //   x: 300,
    //   delay: 12500,
    //   duration: 250,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 2,
    //   alpha: 1,
    //   repeatDelay: 180,
    // });
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


class SceneL11 extends Phaser.Scene {
  constructor() {
    super("SceneL11");
  }
  preload() {
    this.load.image("rick11", "assets/manincostum.png");
    this.load.image("lesy11", "assets/costumglasesjoy.png");
    this.load.image("lesy-face1", "assets/surprise.png");
    this.load.image("lesy-face2", "assets/joy.png");
    this.load.image("club", "assets/club.png");
    this.load.image("Paul-message", "assets/Paul_2.png");
    this.load.image("Lexy-message1", "assets/phrases1.png");
    this.load.image("Lexy-message2", "assets/phrases2.png");
    // this.load.image("Idea", "assets/idea.png");
    // this.load.image("lamp", "assets/pngwing.com.png");
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
      .sprite(0, 0, "club")
      .setScale(1.75)
      .setOrigin(0, 0)
      .setAlpha(1);
    var image1 = this.add.image(900, 550, "rick11").setScale(0.65);
    var image2 = this.add.image(-500, 550, "lesy11").setScale(0.4);
    var image3 = this.add
      .image(300, 700, "Paul-message")
      .setScale(0.4)
      .setAlpha(0);
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

    // var image8 = this.add.image(300, 550, "Idea").setScale(0.55).setAlpha(0);
    // var image9 = this.add.image(500, 100, "lamp").setScale(0.1).setAlpha(0);

    this.tweens.add({
      targets: image0,
      ease: "Power2",
    });

    this.tweens.add({
      targets: image1,
      x: 450,
      duration: 2400,
      ease: "Power2",
      yoyo: false,
      repeat: 0,
      hold: 1500,
    });

    this.tweens.add({
      targets: image3,
      x: 300,
      delay: 7400,
      duration: 1500,
      ease: "Power2",
      yoyo: false,
      repeat: 0,
      alpha: 1,
    });
    this.tweens.add({
      targets: image2,
      x: 150,
      delay: 5000,
      duration: 2400,
      ease: "Power2",
      yoyo: false,
      repeat: 0,
      hold: 6400,
    });
    // this.tweens.add({
    //   targets: image4,
    //   x: 300,
    //   delay: 8300,
    //   duration: 1900,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 0,
    //   alpha: 1,
    //   depth: 3,
    // });
    // this.tweens.add({
    //   targets: image5,
    //   x: 300,
    //   delay: 9500,
    //   duration: 250,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 2,
    //   alpha: 1,
    //   repeatDelay: 180,
    // });
    // this.tweens.add({
    //   targets: image6,
    //   x: 300,
    //   delay: 12000,
    //   duration: 1500,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 0,
    //   alpha: 1,
    //   depth: 3,
    // });
    // this.tweens.add({
    //   targets: image7,
    //   x: 300,
    //   delay: 12500,
    //   duration: 250,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 2,
    //   alpha: 1,
    //   repeatDelay: 180,
    // });
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


class SceneL22 extends Phaser.Scene {
  constructor() {
    super("SceneL22");
  }
  preload() {
    this.load.image("rick22", "assets/manincostum.png");
    this.load.image("lesy22", "assets/costumchokerjoy.png");
    this.load.image("lesy-face1", "assets/surprise.png");
    this.load.image("lesy-face2", "assets/joy.png");
    this.load.image("club", "assets/club.png");
    this.load.image("Paul-message", "assets/Paul_2.png");
    this.load.image("Lexy-message1", "assets/phrases1.png");
    this.load.image("Lexy-message2", "assets/phrases2.png");
    // this.load.image("Idea", "assets/idea.png");
    // this.load.image("lamp", "assets/pngwing.com.png");
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
      .sprite(0, 0, "club")
      .setScale(1.75)
      .setOrigin(0, 0)
      .setAlpha(1);
    var image1 = this.add.image(900, 550, "rick22").setScale(0.65);
    var image2 = this.add.image(-500, 550, "lesy22").setScale(0.4);
    var image3 = this.add
      .image(300, 700, "Paul-message")
      .setScale(0.4)
      .setAlpha(0);
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

    // var image8 = this.add.image(300, 550, "Idea").setScale(0.55).setAlpha(0);
    // var image9 = this.add.image(500, 100, "lamp").setScale(0.1).setAlpha(0);

    this.tweens.add({
      targets: image0,
      ease: "Power2",
    });

    this.tweens.add({
      targets: image1,
      x: 450,
      duration: 2400,
      ease: "Power2",
      yoyo: false,
      repeat: 0,
      hold: 1500,
    });

    this.tweens.add({
      targets: image3,
      x: 300,
      delay: 7400,
      duration: 1500,
      ease: "Power2",
      yoyo: false,
      repeat: 0,
      alpha: 1,
    });
    this.tweens.add({
      targets: image2,
      x: 150,
      delay: 5000,
      duration: 2400,
      ease: "Power2",
      yoyo: false,
      repeat: 0,
      hold: 6400,
    });
    // this.tweens.add({
    //   targets: image4,
    //   x: 300,
    //   delay: 8300,
    //   duration: 1900,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 0,
    //   alpha: 1,
    //   depth: 3,
    // });
    // this.tweens.add({
    //   targets: image5,
    //   x: 300,
    //   delay: 9500,
    //   duration: 250,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 2,
    //   alpha: 1,
    //   repeatDelay: 180,
    // });
    // this.tweens.add({
    //   targets: image6,
    //   x: 300,
    //   delay: 12000,
    //   duration: 1500,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 0,
    //   alpha: 1,
    //   depth: 3,
    // });
    // this.tweens.add({
    //   targets: image7,
    //   x: 300,
    //   delay: 12500,
    //   duration: 250,
    //   ease: "Power2",
    //   yoyo: true,
    //   repeat: 2,
    //   alpha: 1,
    //   repeatDelay: 180,
    // });
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
