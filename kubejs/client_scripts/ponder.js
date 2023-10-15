onEvent("ponder.registry", (event) => {
  event
    .create("ftbstoneblock:millstone_dummy_block")
    .scene("basic_millstone_setup", "基础石磨已搭建！", (scene, util) => {
      scene.showStructure();

      scene.world.setBlock([1, 1, 2], "create:cogwheel", false);
      scene.world.setBlock([1, 2, 2], "create:hand_crank", false);
      scene.world.modifyBlock(
        [1, 2, 2],
        (curState) => curState.with("facing", "up"),
        false
      );
      scene.world.setBlock([2.5, 1, 2.5], "create:millstone", false);
      scene.effects.indicateSuccess([2.5, 1, 2.5]);

      scene.world.setKineticSpeed([1, 1, 2], 10);
      scene.world.setKineticSpeed([1, 2, 2], 10);
      scene.world.setKineticSpeed([2.5, 1, 2.5], -10);
    });
});
