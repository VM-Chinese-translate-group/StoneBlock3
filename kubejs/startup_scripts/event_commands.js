onEvent("command.registry", (event) => {
  const {
    commands: Commands,
    arguments: Arguments,
    builtinSuggestions: Suggestions,
  } = event;
  event.register(
    Commands.literal("events").then(
      Commands.literal("toggle").then(
        Commands.argument("event", Arguments.RESOURCE_LOCATION.create(event))
          .suggests((ctx, builder) =>
            Suggestions.suggest(eventSuggestions, builder)
          )
          .executes((ctx) => {
            const e = Arguments.RESOURCE_LOCATION.getResult(ctx, "event");
            const player = ctx.source.getPlayerOrException().asKJS();
            var disabledEvents = player.persistentData.disabledEvents;

            if (!eventSuggestions.includes(e.toString())) {
              ctx.source.sendSuccess(
                Text.of(["未找到事件！"]).red(),
                false
              );
              return 0;
            }

            if (disabledEvents) {
              let disabledEventsList = [];
              for (let i = 0; i < disabledEvents.length; i++) {
                disabledEventsList.push(disabledEvents[i]);
              }

              if (disabledEventsList.includes(e.toString())) {
                player.persistentData.disabledEvents =
                  disabledEventsList.filter((item) => item !== e.toString());
                ctx.source.sendSuccess(
                  Text.of(["将" + e + "开启"]),
                  false
                );

                return 1;
              } else {
                player.persistentData.disabledEvents.push(e.toString());
                ctx.source.sendSuccess(
                  Text.of(["将" + e + "关闭"]),
                  false
                );

                return 1;
              }
            } else {
              player.persistentData.disabledEvents = [e.toString()];
              ctx.source.sendSuccess(Text.of(["将" + e + "关闭"]), false);

              return 1;
            }
          })
      )
    )
  );
});

const eventSuggestions = [
  "ftbstoneblock:loot_bee",
  "ftbstoneblock:wandering_trader",
  "ftbstoneblock:stick",
  "ftbstoneblock:tea",
];
