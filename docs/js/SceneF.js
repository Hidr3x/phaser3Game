var Boot4 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Boot() {
    Phaser.Scene.call(this, { key: "boot4", active: true });
  },

  preload: function () {
    this.load.image("atari1111", "assets/minidress.png");
    this.load.image("atari2222", "assets/minicostum.png");
    this.load.image("girl1111", "assets/Girls_new_pl 333.png");
    this.load.image("choose11", "assets/choose.png");
    this.load.image("girl-in-minicostum1", "assets/girl-in-minicostum.png");
    this.load.image("background44", "assets/background.png");
  },

  create: function () {
    this.scene.start("sceneA4");
    this.scene.launch("sceneB4");
  
  },
});

var Scene8 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Scene8() {
    Phaser.Scene.call(this, { key: "sceneA4" });
  },

  create: function () {
    var image0 = this.add
    .sprite(0, 0, "background44")
    .setOrigin(0, 0).setAlpha(0)
    this.tweens.add({
        targets: image0,
        alpha:1 ,
        depth:1,
        duration:200,
        delay: 40000,
        depth:1
    })
    var image5 = this.add.sprite(300, 550, "girl-in-minicostum1").setAlpha(0).setScale(0.5);
    this.tweens.add({
      targets: image5,
      alpha: 1,
      delay: 40000,
      ease: "Power1",
      duration: 1300,
      depth:2
    });
    var image6 = this.add.sprite(300, 50, "choose11").setAlpha(0).setScale(0.5);
    this.tweens.add({
      targets: image6,
      alpha: 1,
      delay: 40000,
      ease: "Power4",
      duration: 400,
      depth:2
    });
    var image = this.add
      .sprite(150, 700, "atari1111")
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
      delay: 40000,
      ease: "Sine.easeInOut",
      duration: 400,
      depth:3
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

var Scene9 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Scene9() {
    Phaser.Scene.call(this, { key: "sceneB4" });
  },

  create: function () {
    var image = this.add
      .sprite(450, 700, "atari2222")
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
      delay: 40000,
      ease: "Sine.easeInOut",
      duration: 400,
      depth:3
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
  
    // var destX = 450;

 


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