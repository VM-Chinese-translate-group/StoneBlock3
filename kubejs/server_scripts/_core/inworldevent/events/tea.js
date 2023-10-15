// priority: 800
const teaEvent = {
  name: "ftbstoneblock:tea",
  chance: 0.1,
  execute(event, player, location) {
    player.tell([`[Server]： 去喝杯茶，别破坏游戏！` ]);
  },
};
