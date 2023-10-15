// priority: 800
const stickEvent = {
  name: "ftbstoneblock:stick",
  chance: 0.3,
  names: [
    "打狗棍",//传统文化
    "杨排风的烧火棍",//杨家将
    "木箍棒",//西游记，金箍棒
    "真理之棍",//英文翻译
    "谎言之棍",//同上
    "十年树木，百年树人",
    "我不是格鲁特",//漫威
    "锲而舍之，朽木不折；锲而不舍，金石可镂。",
    "一根普通的木棍",
    "我试图退出常春藤校，但是他们说我没有碧叶",
    "我是棍子嘴豆腐心",//刀子嘴豆腐心
    "拉出去打40军棍！",//古代刑罚
    "光棍",
    "我的50米大棍差点没收住！",//网络梗
    "棍（俗謂木棍）者，材也，可以製器物甚蕃。",//来自文言版wiki
    "大铁棍子医院找捅主任"
  ],
  execute(event, player, location) {
    player.tell([`给你根木棍！`]);
    let chosenName = this.names[Math.floor(Math.random() * this.names.length)];
    player.give(
      Item.of("minecraft:stick", {
        RepairCost: 0,
        display: { Name: '{"text":"' + chosenName + '"}' },
      })
    );
  },
};
