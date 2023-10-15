onEvent("item.tooltip", (tooltip) => {
  tooltip.add(
    ["ae2:inscriber", "ae2things:advanced_inscriber"],
    [
      Text.red(
        "压印器已被禁用，且被机械动力的序列组装代替。"
      ),
      Text.red(
        "如果你还有它，它现在还能正常用，但是无法再合成了。"
      ),
    ]
  );
});
