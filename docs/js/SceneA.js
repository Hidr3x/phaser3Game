var Boot2 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Boot() {
    Phaser.Scene.call(this, { key: "boot", active: true });
  },

  preload: function () {
    this.load.image("atari1", "assets/minidress.png");
    this.load.image("atari2", "assets/minicostum.png");
    this.load.image("girl", "assets/Girls_new_pl 333.png");
    this.load.image("choose", "assets/choose.png");
    this.load.image("hang", "assets/hand png 2.png");
    // this.load.image("background3", "assets/background.png");
  },

  create: function () {
    this.scene.start("sceneA");
    this.scene.launch("sceneB");
  
  },
});

var Scene3 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Scene3() {
    Phaser.Scene.call(this, { key: "sceneA" });
  },

  create: function () {

    var image5 = this.add.sprite(300, 550, "girl").setAlpha(0).setScale(0.5);
    this.tweens.add({
      targets: image5,
      alpha: 1,
      delay: 18500,
      ease: "Power1",
      duration: 1300,
    });
    var image6 = this.add.sprite(300, 50, "choose").setAlpha(0).setScale(0.5);
    this.tweens.add({
      targets: image6,
      alpha: 1,
      delay: 20000,
      ease: "Power4",
      duration: 400,
    });
    var image = this.add
      .sprite(150, 700, "atari1")
      .setInteractive()
      .setScale(0.15)
      .setAlpha(0);

    // image.once(
    //   "pointerup",
    //   function () {
    //     this.scene.switch("SceneE");
    //   },
    //   this
    // );
    this.tweens.add({
      targets: image,
      alpha: 1,
      delay: 20000,
      ease: "Sine.easeInOut",
      duration: 400,
    });

    // this.input.setDraggable(image);

    // image.on("dragstart", function (pointer) {
    //   this.setTint(0x00FF00);
    // });

    // image.on("drag", function (pointer, dragX, dragY) {
    //   this.x = dragX;
    //   this.y = dragY;
    // });

    // image.on("dragend", function (pointer) {
    //   this.clearTint();
    // });
  },
});

var Scene4 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Scene4() {
    Phaser.Scene.call(this, { key: "sceneB" });
  },

  create: function () {
    var image = this.add
      .sprite(450, 700, "atari2")
      .setInteractive()
      .setScale(0.15)
      .setAlpha(0);
    // image.once(
    //   "pointerup",
    //   function () {
    //     this.scene.switch("SceneF");
    //   },
    //   this
    // );
    this.tweens.add({
      targets: image,
      alpha: 1,
      delay: 20000,
      ease: "Sine.easeInOut",
      duration: 400,
    });

    // this.input.setDraggable(image);

    // image.on("dragstart", function (pointer) {
    //   this.setTint(0x00FF00);
    // });

    // image.on("drag", function (pointer, dragX, dragY) {
    //   this.x = dragX;
    //   this.y = dragY;
    // });

    // image.on("dragend", function (pointer) {
    //   this.clearTint();
    // });
    var image9 = this.add.image(150, 750, 'hang').setInteractive().setScale(0.5).setAlpha(0);
    // var destX = 450;

   this.tweens.add({
        targets: image9,
        alpha:1,
        x:500,
        duration: 1500,
        yoyo: true,
        repeat: 3,
        repeatDelay:500,
        ease: 'Sine.easeInOut',
delay:20000,


        // x: {

        //     getEnd: function (target, key, value)
        //     {
        //         destX -= 30;

        //         return destX;
        //     },

        //     getStart: function (target, key, value)
        //     {
        //         return value + 30;
        //     }

        // }

    });
    //   this.input.on(
    //     "pointerdown",
    //     function () {
    //       this.input.stopPropagation();
    //       this.scene.switch("SceneC");
    //     },
    //     this
    //   );
  },
});

// class SceneHang extends Phaser.Scene {

//   constructor ()
//   {
//       super('SceneHang');
//   }

//   preload ()
//   {
//       this.load.image('minidress', 'assets/girl-in-minidress.png');
//       this.load.image("background1", "assets/background.png");
   
//   }

//   create ()
//   {