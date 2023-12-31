onEvent("item.registry", (event) => {
  event
    .create("ftbstoneblock:stonepebble")
    .displayName("石子")
    .food((food) => {
      food
        .hunger(1)
        .saturation(1)
        .effect("minecraft:hunger", 200, 0, 1)
        .effect("minecraft:slowness", 200, 1, 1)
        .effect("minecraft:resistance", 200, 1, 1)
        .fastToEat();
    });

  event.create("ftbstoneblock:mob_soul").displayName("怪物灵魂");
  event.create("ftbstoneblock:press_rod_die").displayName("杆模具");
  event.create("ftbstoneblock:ritual_starter").displayName("仪式启动器");
  event.create("ftbstoneblock:cold_silverfish_shard");
  event.create("ftbstoneblock:warm_silverfish_shard");
  event.create("ftbstoneblock:silverfish_heart").glow(true);
  event
    .create("ftbstoneblock:incomplete_watch")
    .texture("projecte:item/rings/time_watch_off");

  event
    .create("ftbstoneblock:incomplete_raw_basic_processor")
    .texture("refinedstorage:item/raw_basic_processor");

  event
    .create("ftbstoneblock:incomplete_raw_improved_processor")
    .texture("refinedstorage:item/raw_improved_processor");

  event
    .create("ftbstoneblock:incomplete_raw_advanced_processor")
    .texture("refinedstorage:item/raw_advanced_processor");

  event
    .create("ftbstoneblock:incomplete_printed_logic_processor")
    .texture("ae2:item/printed_logic_processor");

  event
    .create("ftbstoneblock:incomplete_printed_calculation_processor")
    .texture("ae2:item/printed_calculation_processor");

  event
    .create("ftbstoneblock:incomplete_printed_engineering_processor")
    .texture("ae2:item/printed_engineering_processor");

  event
    .create("ftbstoneblock:millstone_dummy_block")
    .parentModel("create:block/millstone/item");

event
    .create("avaritia:addon_singularity")
    .displayName("插件: 处理阶段 2 奇点");

  event
    .create("avaritia:balloon_singularity")
    .displayName("气球奇点");

  event
    .create("avaritia:corrupted_ingot_singularity")
    .displayName("腐化金属奇点");

  event
    .create("avaritia:enderium_block_singularity")
    .displayName("末影块奇点");

  event
    .create("avaritia:filter_pet_singularity")
    .displayName("生物过滤器（宠物）奇点");

  event
    .create("avaritia:infused_enderpearl_singularity")
    .displayName("蕴魔末影珍珠奇点");

  event
    .create("avaritia:manasteel_ingot_singularity")
    .displayName("魔力钢奇点");

  event
    .create("avaritia:mob_soul_singularity")
    .displayName("怪物灵魂奇点");

  event
    .create("avaritia:nether_star_singularity")
    .displayName("下界之星奇点");

  event
    .create("avaritia:flux_block_singularity")
    .displayName("通量方块奇点");

  event
    .create("avaritia:crystal_nitro_singularity")
    .displayName("下界水晶奇点");

  event
    .create("avaritia:overclocker_node_singularity")
    .displayName("节点超频元件奇点");

  event
    .create("avaritia:palette_singularity")
    .displayName("调色板与刷子奇点");

  event
    .create("avaritia:pellet_polonium_singularity")
    .displayName("钋靶丸奇点");

  event
    .create("avaritia:pig_iron_ingot_singularity")
    .displayName("生铁奇点");

  event
    .create("avaritia:etherealslate_singularity")
    .displayName("悬幽石板奇点");

  event
    .create("avaritia:magenta_matter_singularity")
    .displayName("品红物质奇点");

  event
    .create("avaritia:source_gem_singularity")
    .displayName("魔源宝石奇点");

  event
    .create("avaritia:track_singularity")
    .displayName("列车轨道奇点");

  event
    .create("avaritia:uraninite_singularity")
    .displayName("晶质铀奇点");
  event
    .create("avaritia:wall_singularity")
    .displayName("墙奇点");
  event
    .create("avaritia:emerald_cluster_singularity")
    .displayName("绿宝石簇奇点");
  event
    .create("avaritia:xp_jelly_baby_singularity")
    .displayName("经验果冻宝宝奇点");
});

onEvent("block.registry", (event) => {
  event
    .create("ftbstoneblock:dust")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("尘土");
  event
    .create("ftbstoneblock:crushed_netherrack")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("破碎下界岩");
  event
    .create("ftbstoneblock:crushed_endstone")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("破碎末地石");
  event
    .create("ftbstoneblock:crushed_deepslate")
    .tagBlock(`minecraft:mineable/shovel`)
    .material("Sand")
    .displayName("破碎深板岩");

  for (let type in global.compressables) {
    let props = global.compressables[type];
    let maxLevel = props.maxLevel || global.maxCompress;
    let tool = props.tool || "pickaxe";
    let x = {
      1: "5.0",
      2: "10.0",
      3: "20.0",
    };
    let y = {
      1: "minecraft:needs_stone_tool",
      2: "minecraft:needs_iron_tool",
      3: "minecraft:needs_diamond_tool",
    };
    for (let i = 1; i <= maxLevel; i++) {
      event
        .create(`ftbstoneblock:${i}x_compressed_${type}`)
        .tagBlock(`minecraft:mineable/${tool}`)
        .tagBlock(y[i])
        .requiresTool(true)
        .material(props.material)
        .hardness(x[i])
        .displayName(`${i}重压缩${props.name}`);
    }
  }
});