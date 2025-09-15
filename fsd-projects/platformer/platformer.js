$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(300, 650, 100, 30);
    createPlatform(400, 550, 100, 30);
    createPlatform(500, 450, 100, 30);
    createPlatform(700, 450, 100, 30);
    createPlatform(1000, 450, 100, 30);

    // TODO 3 - Create Collectables
    createCollectable("database", 700, 170, 1, 0.2);
    createCollectable("database", 400, 170, 1, 0.2);
    createCollectable("database", 1000, 170, 1, 0.2);

    // TODO 4 - Create Cannons
    createCannon("top", 700, 1000);
    createCannon("top", 900, 1000);
    createCannon("top", 1000, 1100);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
