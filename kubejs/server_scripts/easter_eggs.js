onEvent("player.logged_in", (event) => {
  let player = event.player;

  //Birthdays
  let currentDate = new Date();
  let today =
    currentDate.getMonth() +
    1 + //[0,11] so +1
    "-" +
    currentDate.getDate(); //[0,31]
  //Syntax, max is [12-31]
  let birthdays = [
    ["Gaz", "3-9", "模组开发者"],
    ["OfficialyMax", "3-10", "任务笔者"],
    ["Dinnerbeef & UnRealDinnerbone", "6-8", "内测员"],
    ["Slowpoke101", "6-19", "我们滴神"],
    ["manmaed", "6-30", "内测员"],
    ["Loneztar", "7-15", "测试团队总监"],
    ["Mikey", "10-11", "模组开发总监"],
    ["5ully_", "10-15", "内测员"],
    ["Sunekaer", "10-20", "整合包作者"],
    ["aaronhowser1", "12-2", "任务笔者"],
  ];

  birthdays.forEach((birthday) => {
    let birthdayPerson = birthday[0];
    let birthdayDate = birthday[1];

    if (birthdayDate == today) {
      player.tell([
        Component.string(birthdayPerson),
        Component.string("祝你生日快乐！")
          .underlined()
          .hover(Component.string(birthday[2])),
      ]);
    }
  });
});
