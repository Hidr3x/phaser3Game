var Boot3 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Boot() {
    Phaser.Scene.call(this, { key: "boot3", active: true });
  },

  preload: function () {
    this.load.image("atari111", "assets/minidress.png");
    this.load.image("atari222", "assets/minicostum.png");
    this.load.image("girl111", "assets/Girls_new_pl 333.png");
    this.load.image("choose1", "assets/choose.png");
    this.load.image("girl-in-minidress1", "assets/girl-in-minidress.png");
    this.load.image("background4", "assets/background.png");
  },

  create: function () {
    this.scene.start("sceneA3");
    this.scene.launch("sceneB3");
  
  },
});

var Scene6 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Scene6() {
    Phaser.Scene.call(this, { key: "sceneA3" });
  },

  create: function () {
    var image0 = this.add
    .sprite(0, 0, "background4")
    .setOrigin(0, 0).setAlpha(0)
    this.tweens.add({
        targets: image0,
        alpha:1 ,
        depth:1,
        duration:200,
        // delay: 40000,
        depth:1
    })
    var image5 = this.add.sprite(300, 550, "girl-in-minidress1").setAlpha(0).setScale(0.5);
    this.tweens.add({
      targets: image5,
      alpha: 1,
      // delay: 40000,
      ease: "Power1",
      duration: 1300,
      depth:2
    });
    var image6 = this.add.sprite(300, 50, "choose1").setAlpha(0).setScale(0.5);
    this.tweens.add({
      targets: image6,
      alpha: 1,
      // delay: 40000,
      ease: "Power4",
      duration: 400,
      depth:2
    });
    var image = this.add
      .sprite(150, 700, "atari111")
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
      // delay: 40000,
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

var Scene7 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Scene7() {
    Phaser.Scene.call(this, { key: "sceneB3" });
  },

  create: function () {
    var image = this.add
      .sprite(450, 700, "atari222")
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
      // delay: 40000,
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