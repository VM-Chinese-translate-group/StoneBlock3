onEvent('rei.information', (event) => {
	event.addItem(['ftbstoneblock:stonepebble'], '石子', [
		'用手敲碎石头，得到石子',
	])
	event.addItem('ftbstoneblock:mob_soul', '灵魂', [
		'怪物死亡时有80%的几率产生',
	])
	event.addItem('ftbstoneblock:ritual_starter', 'Rituals', [
		'可以在末地城里找到',
	])
	event.addItem(
		'ftbstoneblock:cold_silverfish_shard',
		'寒冷蠹虫碎片',
		['可以在石头区域中的地牢找到']
	)
	event.addItem(
		'ftbstoneblock:warm_silverfish_shard',
		'温暖蠹虫碎片',
		['可以在下界区域的地牢中找到']
	)
	event.addItem(
		'ftbstoneblock:silverfish_heart',
		'蠹虫之心',
		[
			'掉落自蠹虫之母',
			' ',
			'在末地环的Boss地牢召唤'
		]
	)

	event.addItem(
		'mob_grinding_utils:mob_swab_used',
		'已保存的怪物棉签',
		[
			'对一个生物使用怪物棉签'
		]
	)

	event.addItem(
		'mob_grinding_utils:golden_egg',
		'金蛋',
		[
			'给一只鸡喂营养丰富鸡饲料'
		]
	)

	event.addItem(
		'mob_grinding_utils:gm_chicken_feed_cursed',
		'诅咒 GM 鸡饲料',
		[
			'给鸡喂诅咒 GM 鸡饲料'
		]
	)
	
	event.addItem(
		[
			'ars_nouveau:starbuncle_shards',
			'ars_nouveau:whirlisprig_shards',
			'ars_nouveau:drygmy_shard'
		],
		'魔艺碎片',
		[
			'他们像普通的动物一样通常都生成在平原',
			' ',
			'查询破旧的笔记本获得更多信息'
		]
	)

	event.addItem('bloodmagic:weak_tau',
		'血命果',
		[
			'在简单的地牢中很难找到',
			' ',
			'可以从耕地上收获'
		]
	)

	event.addItem('bloodmagic:strong_tau',
		'饱满血命果',
		[
			'在简单的地牢中很难找到',
			' ',
			'如果血命果生长时周围有动物，它就会吸血长成饱满血命果'
		]
	)

	event.addItem(["ae2:inscriber", "ae2things:advanced_inscriber"],
		'压印器',
		[
			Text.red("压印器已被禁用，且被机械动力的序列组装代替。"),
			Text.red("如果你还有它，它现在还能正常用，但是无法再合成了。"),
		]
	)

	event.addItem(Item.of('chickens:chicken_item', '{ChickenType:{id:"chickens:smart_chicken"}}'),
		'智慧鸡',
		[
			'手持书右击原版鸡，可将原版鸡转化为智慧鸡',
			' ',
			'与普通鸡类似，会产普通鸡蛋，但拥有属性值且可使用鸡舍'
		]
	)
})
