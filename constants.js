COST_TYPE = {
    FIXED: 0
};

TECH_TYPE = {
    UPGRADE: 0,
    UNLOCK: 1
};

BUILDING_TYPE = {
    PRODUCER: 0
};

RESOURCE_OBSERVER_TYPE = {
    CURRENT_VALUE: 0,
    SPECIFIC_VALUE: 1,
    CAPACITY: 2,
    PER_SECOND: 3
};

RESOURCE = {
	Energy: 'energy',
	Plasma: 'plasma',
	Uranium: 'uranium',
	Lava: 'lava',
	Oil: 'oil',
	Metal: 'metal',
	Gem: 'gem',
	Charcoal: 'charcoal',
	Wood: 'wood',
	Silicon: 'silicon',
	Lunarite: 'lunarite',
	Methane: 'methane',
	Titanium: 'titanium',
	Gold: 'gold',
	Silver: 'silver',
	Hydrogen: 'hydrogen',
	Helium: 'helium',
	Ice: 'ice',
	Meteorite: 'meteorite',
	Science: 'science',
	RocketFuel: 'rocketFuel'
};

BUILDING = {
	Heater: 'heater',
	Plasmatic: 'plasmatic',
	Bath: 'bath',
	CharcoalEngine: 'charcoalEngine',
	SolarPanel: 'solarPanel',
	MethaneStation: 'methaneStation',
	NuclearStation: 'nuclearStation',
	Magmatic: 'magmatic',
	FusionReactor: 'fusionReactor',
	Pump: 'pump',
	Pumpjack: 'pumpjack',
	OilField: 'oilField',
	OilRig: 'oilRig',
	Miner: 'miner',
	HeavyDrill: 'heavyDrill',
	GigaDrill: 'gigaDrill',
	QuantumDrill: 'quantumDrill',
	GemMiner: 'gemMiner',
	AdvancedDrill: 'advancedDrill',
	DiamondDrill: 'diamondDrill',
	CarbyneDrill: 'carbyneDrill',
	Woodburner: 'woodburner',
	Furnace: 'furnace',
	Kiln: 'kiln',
	Fryer: 'fryer',
	Woodcutter: 'woodcutter',
	LaserCutter: 'laserCutter',
	Deforester: 'deforester',
	Infuser: 'infuser',
	MoonWorker: 'moonWorker',
	MoonDrill: 'moonDrill',
	MoonQuarry: 'moonQuarry',
	PlanetExcavator: 'planetExcavator',
	Vacuum: 'vacuum',
	SuctionExcavator: 'suctionExcavator',
	SpaceCow: 'spaceCow',
	Vent: 'vent',
	Explorer: 'explorer',
	LunariteDrill: 'lunariteDrill',
	PentaDrill: 'pentaDrill',
	TitanDrill: 'titanDrill',
	Droid: 'droid',
	Destroyer: 'destroyer',
	DeathStar: 'deathStar',
	Actuator: 'actuator',
	Scout: 'scout',
	SpaceLaser: 'spaceLaser',
	Bertha: 'bertha',
	Cannon: 'cannon',
	Blowtorch: 'blowtorch',
	Scorcher: 'scorcher',
	Annihilator: 'annihilator',
	Desert: 'desert',
	Grinder: 'grinder',
	Cubic: 'cubic',
	Enricher: 'enricher',
	Recycler: 'recycler',
	Crucible: 'crucible',
	Extractor: 'extractor',
	Extruder: 'extruder',
	Veluptuator: 'veluptuator',
	Collector: 'collector',
	Magnet: 'magnet',
	ECell: 'eCell',
	Hindenburg: 'hindenburg',
	Drone: 'drone',
	Tanker: 'tanker',
	Compressor: 'compressor',
	Skimmer: 'skimmer',
	IcePick: 'icePick',
	IceDrill: 'iceDrill',
	Freezer: 'freezer',
	MrFreeze: 'mrFreeze',
	Printer: 'printer',
	Web: 'web',
	PlanetNuke: 'planetNuke',
	Condensator: 'condensator',
	Fossilator: 'fossilator',
	MultiDrill: 'multiDrill',
	DiamondChamber: 'diamondChamber',
	MicroPollutor: 'microPollutor',
	Forest: 'forest',
	Cloner: 'cloner',
	InterCow: 'interCow',
	Club: 'club',
	Philosopher: 'philosopher',
	Werewolf: 'werewolf',
	Tardis: 'tardis',
	Harvester: 'harvester',
	Cage: 'cage',
	Overexchange: 'overexchange',
	Lab: 'lab',
	LabT2: 'labT2',
	LabT3: 'labT3',
	LabT4: 'labT4',
	LabT5: 'labT5',
	ChemicalPlant: 'chemicalPlant',
	Oxidisation: 'oxidisation',
	Hydrazine: 'hydrazine',
	Smasher: 'smasher',
	Nebulous: 'nebulous'
};

INDEX_NONE = -1;

Game.constants = (function(){

    var instance = {};
    instance.iconPath = "Icons/";
    instance.iconExtension = "png";
    instance.rank = ["太空旅行者", "太空探险家", "太阳旅行者", "太空船飞行员", "戴森斯技术员", "奇迹建设者", "霸主助手", "反物质测试仪", "火箭工程师", "远距离星际空间", "舰队指挥官", "阵营外交官", "控制台骗子", "保存文件编辑器", "源代码黑客", "威望"]
//    instance.rank = ["Space Noob", "Space Explorer", "Solar Traveler", "Spaceship Pilot", "Dyson Sphere Technician", "Wonder Builder", "Overlord Associate", "Antimatter Tester", "Rocket Engineer", "Interstellar Space Farer", "Fleet Commander", "Faction Diplomat", "Console Cheater", "Save File Editor", "Source Code Hacker", "The Prestiged"]
    instance.achievementMax = 1000;
    instance.achievementIconsPerRow = 4;
    instance.achievementResourceBrackets = [50, 5000, 500000, 50000000, 5000000000];
    instance.achievementProducerBrackets = [10, 50, 100, 500, 1000];
    instance.achievementBracketColors = ["#9d9d9d", "#1eff00", "#0070dd", "#a335ee", "#ff8000"];

    instance.achievementCategoryResources = "资源";
    instance.achievementCategoryProducers = "生产";

    instance.statisticCategoryGeneral = "总结";
    instance.statisticCategoryUnlockable = "解锁";
    instance.statisticCategoryTiming = "计时";

    instance.maxTier = 6;

    instance.enableStorageNotifications = false;
    instance.enableMachineTab = false;

    return instance;
}());
