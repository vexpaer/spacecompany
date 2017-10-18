Game.stargazeCategoryData = (function () {

    var instance = {};

    instance.general = {
        title: '概述',
        category: 'general'
    };

    instance.faction = {
        title: '阵营',
        category: 'faction',
    };

    return instance;

}());

Game.stargazeData = (function(){

	var instance = {};

	instance.intro = {
		name: "介绍",
		para1: '“所以在这里，我们是在你的旅程结束，似乎没有意识到，这只是一个开始，看着星星，你想知道你能做什么与所有的 您的新发现的财富和您的帝国在太阳系中。',
		para2: '突然间，霸主向你伸出援手，并说：“你在你的时间里已经远远了，我觉得你的生活在长期的帝国建设之后，终于慢下来了，但是你没有达到我以为你的期望 将。”',
		para3: '“尽管让我失望，并没有像我所希望的那样实现尽可能多的伟大，因为你的忠诚和对我的奉献，我准备再给你再生一次机会。”',
		para4: '“你会有很多机会给我留下深刻的印象，因为当你感到时间到了，牺牲是必要的时候，我会给你一个救赎的能力，你的帝国将比每次重生之前都要大得多，只要你的联盟 在我身上，我会向你展示银河统治的方式。”',
		para5: '“你会重新开始，一个新的生活，但为了换取你的灵魂，我将奖励你的下一个自我，在你在这个宇宙的时间里获得的知识，以及这个多面体的一些最可怜的材料：暗物质”',
		category: "general",
		unlocked: true
	};

	instance.darkMatter = {
		name: "暗物质",
		desc: "在这里，您可以看到您所获得的黑暗事物多少以及重置时收到的收益（括号中）。 您可以了解DM的获取方式，并且可以将其用于特定于Dark-Matter的升级。",
		current: 0,
		count: 0,
		category: "general",
		unlocked: true
	};

	instance.carnelian = {
		name: "红磨石",
		desc: "一个愤怒的愤怒的愤怒愤怒的权力，最值得注意的是普拉斯尼亚帝国。 他们不断反对，全力集中攻击敌人。 正因为如此，他们所提供的内容主要是升级，更趋向于更加活跃的游戏。",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.prasnian = {
		name: "Prasnian Empire",
		desc: "The current leader in the galaxy and the faction most focused on keeping things as they are. Opposed to change, they have an authoritarian regime and offer mainly upgrades concerning structures such as the Dysons or Wonders",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.hyacinite = {
		name: "Hyacinite Congregation",
		desc: "The Hyacinite Congregationg is a science loving society, proud of all advances in technology and always looking to the future. They fight for the truth and are welcoming to anyone who shares their beliefs.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.kitrinos = {
		name: "Kitrinos Corporation",
		desc: "This private company has grown powerful over the galaxy and is inspired by profits, with allies to those who can support their aims. Upgrades offered focus on passive gains, with a large amount of automation.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.moviton = {
		name: "Moviton Syndicate",
		desc: "The Moviton Syndicate is an expansionist centred faction, with a goal of conquest over the galaxy. They often play both sides of a conflict, hoping to gain from the chaos. They offer improvements in your travel, including rocket building and interstellar travel.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.overlord = {
		name: "Overlord Cult",
		desc: "This faction is shrowded in mystery. While not much is known, a great sense of power overlooks the whole galaxy, seemingly above the other 5 factions and their 'petty' squables. The upgrades from your loyalty to the Overlord are not constrained to a type and vary greatly.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};


	return instance;

}());

Game.darkMatter = (function(){

	var instance = {};

	/************
	** DM Gain **
	************/

	instance.wonder = {
		name: "奇迹",
		desc: "您会在您完成的奇迹站的楼层获得黑暗物质。 在重新设置之前，您可能会在第一次运行中完成所有这些操作。 每个完成的楼层都会有4个暗物质，而最后一层楼只有2个（只有一个奇迹）。",
	};

	instance.sphere = {
		name: "领域",
		desc: "为了在家庭系统中建立一个球体，从而完成它，你会得到15个暗物质。 对于另一个系统中的每个球体，你会获得5个暗物质。"
	};

	instance.research = {
		name: "研究效率",
		desc: "对于任何可回购研究中的每25个研究效率，您将获得2个暗物质。",
	};

	instance.rank = {
		name: "成就等级",
		desc: "对于每一个成就等级，你会得到2个暗物质。 由于前几个成绩级别难以实现，这将是您早期运行的主要黑暗物质来源。",
	};

	instance.swarm = {
		name: "虫洞",
		desc: "一个更复杂的系统，你的黑暗物质从虫洞中获得是以一个旧的数学序列：帕斯卡的三角形来判断的。 你会得到1个暗物质，以传递每个三角形数量的群组。 例如：1,3,6,10,15,21 ...",
	};

	return instance;

}());

Game.prestigeData = (function(){

	var instance = {};

	/************
	** General **
	************/

	instance.rebirth = {
		name: "重生",
		desc: "踏入新的生活是一项伟大的事业，而不是想要做的事情。 一旦确定，你可以重新开始，保持你从以前的生活中获得的知识和经验，并更新自己，实现比以前更大更快的速度。 您将保留任何未用的黑暗物质，以及您的升级。<br><b>注意：即使在第二次运行中，你也不能重生。<br>注意：您将失去在上一次购买的所有升级版本，因此请确保您比上次更多的暗物质。</b>",
		cost: 0,
		category: "intro",
	};

	instance.unlockStargaze = {
		name: "重生升级",
		desc: "采取这一步是不只是这个生活中的巨大飞跃，而是你曾经拥有的每一次重生。 一旦激活，你永远不会再感到无能为力了。",
		cost: 1,
		category: "intro",
		onApply: function(){
			for(var id in Game.stargaze.entries){
	            var data = Game.stargaze.getStargazeData(id);
	            data.unlocked = true;
	            data.displayNeedsUpdate = true;
	        }
	    },
	    remove: function(){
	    	for(var id in Game.stargaze.entries){
	            var data = Game.stargaze.getStargazeData(id);
	            data.unlocked = false;
	            data.displayNeedsUpdate = true;
	        }
	    },
		achieved: false,
	};

	instance.respec = {
		name: "遵守",
		desc: "当您犯了错误或想要更改升级时，您可以针对暗物质进行每次升级。 不幸的是，这个巨大的力量只能有限次地释放出来。 霸主慷慨地给你3个免费的机会兑换，但其余的必须通过重生获得（每3次额外1次）。<br><b>注意：您将失去通过升级获得的机器，包括所有T5机器。 如果您有起始存储空间，您还将把存储分配128。 （6400/50 = 128）。</b>",
		cost: 0,
		category: "intro",
	};

	instance.increaseProd1 = {
		name: "暗物质提升",
		desc: "对于您没有花费的每个黑暗物质，这为所有资源（包括科学）提供了1％的提升。",
		cost: 30,
		category: "darkMatter",
		onApply: function(){
	        dmBoost += 0.01;
	    },
	    remove: function(){
	    	dmBoost -= 0.01;
	    },
		achieved: false,
	};

	/**************
	** Carnelian **
	**************/

	instance.empowerManualGains = {
		name: "授权手动增益",
		desc: "将所有增益按钮增加到每次点击20次而不是1次。",
		cost: 5,
		category: "carnelian",
		opinion: 3,
		onApply: function(){
			// old
			gainNum = 20;
			for(var resource in RESOURCE){
				if(RESOURCE[resource] != "science")$('#' + RESOURCE[resource] + 'Gain').text(gainNum);
			}

			// new
			// for(var id in Game.resources.entries){
			// 	Game.resources.entries[id].perClick = 20;
			// 	Game.resources.entries[id].displayNeedsUpdate = true;
			// }
		},
		remove: function(){
	    	gainNum = 1;
			for(var resource in RESOURCE){
				if(RESOURCE[resource] != "science")$('#' + RESOURCE[resource] + 'Gain').text(gainNum);
			}
	    },
		achieved: false
	};

	instance.startingStorage = {
		name: "启动存储",
		desc: "从重新生活的一切开始，拥有6,400个最大存储空间。 （如果超过6,400不影响）",
		cost: 8,
		category: "carnelian",
		opinion: 6,
		onApply: function(){
			// old
			var newStorage = 6400;
			for(var i = 0; i < resources.length; i++){
				if(window[resources[i] + "Storage"] <= 6400){
					window[resources[i] + "Storage"] = newStorage;
					window[resources[i] + "NextStorage"] = newStorage * 2;
				}
			}

			// new
		},
		remove: function(){
	    	for(var i = 0; i < resources.length; i++){
				if(window[resources[i] + "Storage"] <= 6400){
					window[resources[i] + "Storage"] = 50;
					window[resources[i] + "NextStorage"] = 50 * 2;
				} else {
					window[resources[i] + "Storage"] /= 128;
					window[resources[i] + "NextStorage"] /= 128;
				}
			}
	    },
		achieved: false
	};

	instance.storageDiscount = {
		name: "存储折扣",
		desc: "所有储量不再具有成本主要资源的100％，而是75％。",
		cost: 21,
		category: "carnelian",
		opinion: 14,
		onApply: function(){
			// old
			storagePrice -= 0.25;

			// new
		},
		remove: function(){
	    	storagePrice += 0.25;
	    },
		achieved: false
	};

	/*************
	** Prasnian **
	*************/

	instance.T3Plasma = {
		name: "第3级等离子",
		desc: "解锁电子浴",
		cost: 11,
		category: "prasnian",
		opinion: 4,
		onApply: function(){
			document.getElementById("plasmaTier3").className = "";
		},
		remove: function(){
	    	document.getElementById("plasmaTier3").className = "hidden";
	    	bath = 0;
	    	updateCost();
	    },
		achieved: false
	};

	instance.floor1Discount = {
		name: "Floor 1 Discount",
		desc: "All Wonders on the First Floor recieve a 15% price reduction.",
		cost: 16,
		category: "prasnian",
		opinion: 10,
		onApply: function(){
			floor1Price -= 0.15;
		},
		remove: function(){
	    	floor1Price += 0.15;
	    },
		achieved: false
	};

	instance.floor23Discount = {
		name: "Floor 2 & 3 Discount",
		desc: "All Wonders on the Second and Third Floor recieve a 20% price reduction.",
		cost: 19,
		category: "prasnian",
		opinion: 15,
		onApply: function(){
			floor23Price -= 0.2;
		},
		remove: function(){
	    	floor23Price += 0.2;
	    },
		achieved: false
	};

	instance.autoEmc = {
		name: "Automated EMC",
		desc: "Check a box on an EMC resource and have that resource be 'EMCed' to the max every second.",
		cost: 24,
		category: "prasnian",
		opinion: 17,
		onApply: function(){
			var updateList = document.getElementsByClassName("autoEmcHide");
			for(var i = updateList.length-1; i >= 0; i--){
				updateList[i].className = "autoEmcHide";
			}
		},
		remove: function(){
	    	var updateList = document.getElementsByClassName("autoEmcHide");
			for(var i = updateList.length-1; i >= 0; i--){
				updateList[i].className = "autoEmcHide hidden";
			}
	    },
		achieved: false
	}

	/**************
	** Hyacinite **
	**************/

	instance.startingLabs = {
		name: "Starting Labs",
		desc: "Start with 20 T1 Labs on rebirth.",
		cost: 7,
		category: "hyacinite",
		opinion: 3,
		rebirthStart: {lab:20},
		onApply: function(){
			lab += 20;
		},
		remove: function(){
	    	lab -= 20
	    },
		achieved: false
	};

	instance.labDiscount = {
		name: "Lab Discount",
		desc: "T2+ Labs are 20% cheaper with this upgrade.",
		cost: 16,
		category: "hyacinite",
		opinion: 12,
		onApply: function(){
			// old
			labT1Multi -= 0.2;
			updateLabCost();

			// new
		},
		remove: function(){
	    	labT1Multi += 0.2;
			updateLabCost();
	    },
		achieved: false
	};

	instance.T5Labs = {
		name: "Tier 5 Laboratories",
		desc: "Unlock the Space Scientific Satellite Station",
		cost: 24,
		category: "hyacinite",
		opinion: 14,
		onApply: function(){
			document.getElementById("labTier5").className = "";
		},
		remove: function(){
	    	document.getElementById("labTier5").className = "hidden";
	    	labT5 = 0;
	    	updateLabCost();
	    },
		achieved: false
	};

	instance.energyEff = {
		name: "Energy Efficiency Cap",
		desc: "Increase Energy Efficiency research cap to 50% instead of 25%.",
		cost: 36,
		category: "hyacinite",
		opinion: 25,
		onApply: function(){
			Game.tech.entries["energyEfficiencyResearch"].maxLevel += 25;
		},
		remove: function(){
	    	Game.tech.entries["energyEfficiencyResearch"].maxLevel = 25;
	    },
		achieved: false
	};


	/*************
	** Kitrinos **
	*************/

	instance.T1Discount = {
		name: "Tier 1 Machine Discount",
		desc: "All Tier 1 machines on every resource (in resources tab) are 10% cheaper.",
		cost: 8,
		category: "kitrinos",
		opinion: 4,
		onApply: function(){
			T1Price -= 0.1;
		},
		remove: function(){
	    	T1Price += 0.1;
	    },
		achieved: false
	};

	instance.T5Batteries = {
		name: "Tier 5 Batteries",
		desc: "Unlock the fifth tier of batteries for all your energy storage needs.",
		cost: 14,
		category: "kitrinos",
		opinion: 17,
		onApply: function(){
			document.getElementById("batteriesT5").className = "";
		},
		remove: function(){
	    	document.getElementById("batteriesT5").className = "hidden";
	    	batteryT5 = 0;
	    	updateCost();
	    },
		achieved: false
	};

	instance.T5Machines = {
		name: "Tier 5 Machines",
		desc: "Gain access to a fifth tier of machines to produce resources.",
		cost: 35,
		category: "kitrinos",
		opinion: 20,
		onApply: function(){
			unlockTier5();
		},
		remove: function(){
	    	removeTier5();
	    },
		achieved: false
	};

	// instance.recycling = {
	// 	name: "Recycling",
	// 	desc: "Instead of destroying machines, recycle them for 50% of the cost!",
	// 	cost: 29,
	// 	category: "hyacinite",
	// 	achieved: false
	// };

	/************
	** Moviton **
	************/

	instance.chemicalBoost = {
		name: "Chemical Plant Boost",
		desc: "Produce 100% more rocket fuel per chemical plant.",
		cost: 11,
		category: "moviton",
		opinion: 7,
		onApply: function(){
			chemicalBoost += 1;
		},
		remove: function(){
	    	chemicalBoost -= 1;
	    },
		achieved: false
	};

	instance.rocketDiscount = {
		name: "Rocket Discount",
		desc: "Rocket Parts Cost 35% less.",
		cost: 23,
		category: "moviton",
		opinion: 28,
		onApply: function(){
			rocketPrice -= 0.35;
		},
		remove: function(){
	    	rocketPrice += 0.35;
	    },
		achieved: false
	};

	instance.meteoriteTier3 = {
		name: "Meteorite Tier 3",
		desc: "Unlock the Planet Smasher building.",
		cost: 37,
		category: "moviton",
		opinion: 29,
		onApply: function(){
			document.getElementById("meteoriteTier3").className = "";
		},
		remove: function(){
	    	document.getElementById("meteoriteTier3").className = "hidden";
	    	smasher = 0;
			updateCost();
	    },
		achieved: false
	}

	instance.meteoriteTier4 = {
		name: "Meteorite Tier 4",
		desc: "Unlock the Nebulous Synthesizer building.",
		cost: 49,
		category: "moviton",
		opinion: 36,
		onApply: function(){
			document.getElementById("meteoriteTier4").className = "";
		},
		remove: function(){
	    	document.getElementById("meteoriteTier4").className = "hidden";
	    	nebulous = 0;
			updateCost();
	    },
		achieved: false
	}

	// instance.spaceElevator = {
	// 	name: "Space Elevator",
	// 	desc: "Build a giant elevator to reduce antimatter costs by 20%",
	// 	cost: 42,
	// 	category: "moviton",
	// 	achieved: false
	// }

	/*************
	** Overlord **
	*************/

	return instance;

}());