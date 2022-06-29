var Boot1 = new Phaser.Class({
    Extends: Phaser.Scene,
  
    initialize: function Boot() {
      Phaser.Scene.call(this, { key: "boot1", active: true });
    },
  
    preload: function () {
      this.load.image("atari11", "assets/minidress.png");
      this.load.image("atari12", "assets/minicostum.png");
      this.load.image("girl1", "assets/Girls_new_pl 333.png");
      this.load.image("background2", "assets/background.png");
      this.load.image("stripe", "assets/stripe.png");
      
    },
  
    create: function () {
      this.scene.start("sceneB2");
      this.scene.launch("sceneA1");
      this.scene.launch("sceneB1");
     
    },
  });
  
  var Scene1 = new Phaser.Class({
    Extends: Phaser.Scene,
  
    initialize: function Scene1() {
      Phaser.Scene.call(this, { key: "sceneA1" });
    },
  
    create: function () {
 
      var image = this.add
        .sprite(150, 700, "atari11")
        .setInteractive()
        .setScale(0.18)
        .setAlpha(0);
  
      image.once(
        "pointerup",
        function () {
          this.scene.switch("SceneE");
          this.scene.switch("Boot3");
        },
        this
      );
      this.tweens.add({
        targets: image,
        alpha: 1,
        delay: 26500,
        ease: "Power4",
        duration: 500
      });
  
      this.input.setDraggable(image);
  
      image.on("dragstart", function (pointer) {
        this.setTint(0x00FF00);
      });
  
      image.on("drag", function (pointer, dragX, dragY) {
        this.x = dragX;
        this.y = dragY;
      });
  
      image.on("dragend", function (pointer) {
        this.clearTint();
      });
    },
  });
  
  var Scene2 = new Phaser.Class({
    Extends: Phaser.Scene,
  
    initialize: function SceneB() {
      Phaser.Scene.call(this, { key: "sceneB1" });
    },
  
    create: function () {
      
      var image = this.add
        .sprite(450, 700, "atari12")
        .setInteractive()
        .setScale(0.18)
        .setAlpha(0);
      image.once(
        "pointerup",
        function () {
          this.scene.switch("SceneF");
        },
        this
      );
      this.tweens.add({
        targets: image,
        alpha: 1,
        delay: 26500,
        ease: "Power4",
        duration: 500
      });
  
      this.input.setDraggable(image);
  
      image.on("dragstart", function (pointer) {
        this.setTint(0x00FF00);
      });
  
      image.on("drag", function (pointer, dragX, dragY) {
        this.x = dragX;
        this.y = dragY;
      });
  
      image.on("dragend", function (pointer) {
        this.clearTint();
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
  
  var Scene5 = new Phaser.Class({
    Extends: Phaser.Scene,
  
    initialize: function Scene5() {
      Phaser.Scene.call(this, { key: "sceneB2" });
    },
  
    create: function () {
      
      
         var image0 = this.add
        .sprite(0, 0, "background2")
        .setOrigin(0, 0)
        .setAlpha(0);
        this.tweens.add({
          targets: image0,
          alpha: 1,
          delay: 26000,
          duration: 300
         
          
        });
      var image1 = this.add.sprite(300, 550, "girl1").setAlpha(0).setScale(0.55);
      this.tweens.add({
        targets: image1,
        alpha: 1,
        delay: 26000,
        ease: "Power1",
        duration: 300
        
      });
      var image2 = this.add.sprite(300, 30, "stripe").setAlpha(0).setScale(1);
      this.tweens.add({
        targets: image2,
        alpha: 1,
        delay: 26000,
        ease: "Power1",
        duration: 300
        
      });
    }
  });