// Variables in save function

var versionNumber = "V0.5.0.0 Beta"; var companyName = "太空";
var researchUnlocked = false; var researched = []; var available = []; var explored = [];
var tabsUnlocked = []; var resourcesUnlocked = []; var noBorder = []; var rocketLaunched = false; var buttonsHidden = [];
var activated = []; var techUnlocked = false; var meteoriteUnlocked = false;
var globalEnergyLock = false;
var plasma = 0; var plasmaps = 0;
var heater = 0; var heaterLunariteCost = 75000; var heaterGemCost = 68000; var heaterSiliconCost = 59000; var heaterToggled = true;
var plasmatic = 0; var plasmaticLunariteCost = 810000; var plasmaticSiliconCost = 720000; var plasmaticMeteoriteCost = 970; var plasmaticToggled = true;
var bath = 0; var bathLunariteCost = 6200000; var bathSiliconCost = 5900000; var bathMeteoriteCost = 12100; var bathToggled = true;
var energy = 0; var energyps = 0;
var battery = 0; var batteryMetalCost = 50000; var batteryGemCost = 50000; var batteryLunariteCost = 30000;
var batteryT2 = 0; var batteryT2MetalCost = 550000; var batteryT2GemCost = 550000; var batteryT2LunariteCost = 330000;
var batteryT3 = 0; var batteryT3MetalCost = 5500000; var batteryT3GemCost = 5500000; var batteryT3LunariteCost = 3300000;
var batteryT4 = 0; var batteryT4MetalCost = 55000000; var batteryT4GemCost = 55000000; var batteryT4LunariteCost = 33000000;
var PSU = 0; var PSUSilverCost = 770000; var PSUGoldCost = 770000; var PSUUraniumCost = 550000;
var PSUT2 = 0; var PSUT2SilverCost = 9300000; var PSUT2GoldCost = 9300000; var PSUT2UraniumCost = 6800000;
var charcoalEngine = 0; var charcoalEngineMetalCost = 50; var charcoalEngineGemCost = 25; var charcoalEngineOutput = 2;
var solarPanel = 0; var solarPanelMetalCost = 30; var solarPanelGemCost = 35; var solarPanelOutput = 1.5;
var methaneStation = 0; var methaneStationLunariteCost = 110; var methaneStationTitaniumCost = 90;
var nuclearStation = 0; var nuclearStationLunariteCost = 20000; var nuclearStationTitaniumCost = 10000;
var magmatic = 0; var magmaticLunariteCost = 25000; var magmaticGemCost = 20000; var magmaticSilverCost = 15000;
var fusionReactor = 0; var fusionReactorLunariteCost = 30000; var fusionReactorTitaniumCost = 20000; var fusionReactorSiliconCost = 15000;
var oil = 0; var oilStorage = 50; var oilNextStorage = 100; var oilps = 0;
var pump = 0; var pumpMetalCost = 60; var pumpGemCost = 20;
var pumpjack = 0; var pumpjackMetalCost = 250; var pumpjackGemCost = 80; var pumpjackOilCost = 50; var pumpjackOutput = 5;
var oilField = 0; var oilFieldLunariteCost = 2400; var oilFieldTitaniumCost = 2700; var oilFieldSiliconCost = 3900;
var oilRig = 0; var oilRigLunariteCost = 19400; var oilRigTitaniumCost = 16800; var oilRigMeteoriteCost = 760;
var metal = 0; var metalStorage = 50; var metalNextStorage = 100; var metalps = 0;
var miner = 0; var minerMetalCost = 10; var minerWoodCost = 5;
var heavyDrill = 0; var heavyDrillMetalCost = 160; var heavyDrillGemCost = 60; var heavyDrillOilCost = 50; var heavyDrillOutput = 8;
var gigaDrill = 0; var gigaDrillLunariteCost = 2800; var gigaDrillGemCost = 3400; var gigaDrillSiliconCost = 4100;
var quantumDrill = 0; var quantumDrillLunariteCost = 29000; var quantumDrillGoldCost = 18700; var quantumDrillMeteoriteCost = 900;
var gem = 0; var gemStorage = 50; var gemNextStorage = 100; var gemps = 0;
var gemMiner = 0; var gemMinerMetalCost = 15; var gemMinerGemCost = 10;
var advancedDrill = 0; var advancedDrillMetalCost = 120; var advancedDrillGemCost = 200; var advancedDrillOilCost = 60; var advancedDrillOutput = 4;
var diamondDrill = 0; var diamondDrillLunariteCost = 3400; var diamondDrillGemCost = 8000; var diamondDrillSiliconCost = 4500;
var carbyneDrill = 0; var carbyneDrillLunariteCost = 21000; var carbyneDrillGemCost = 27000; var carbyneDrillMeteoriteCost = 800;
var charcoal = 0; var charcoalStorage = 50; var charcoalNextStorage = 100; var charcoalps = 0; var charcoalToggled = true;
var woodburner = 0; var woodburnerMetalCost = 10; var woodburnerWoodCost = 5;
var furnace = 0; var furnaceMetalCost = 80; var furnaceWoodCost = 40; var furnaceOilCost = 100; var furnaceWoodInput = 6; var furnaceOutput = 4;
var kiln = 0; var kilnLunariteCost = 3500; var kilnGemCost = 6200; var kilnSiliconCost = 3800;
var fryer = 0; var fryerLunariteCost = 15800; var fryerLavaCost = 12500; var fryerMeteoriteCost = 560;
var wood = 0; var woodStorage = 50; var woodNextStorage = 100; var woodps = 0;
var woodcutter = 0; var woodcutterMetalCost = 10; var woodcutterWoodCost = 5;
var laserCutter = 0; var laserCutterMetalCost = 50; var laserCutterGemCost = 90; var laserCutterOilCost = 40; var laserCutterOutput = 6;
var deforester = 0; var deforesterLunariteCost = 3000; var deforesterTitaniumCost = 2700; var deforesterSiliconCost = 2500;
var infuser = 0; var infuserLunariteCost = 16000; var infuserOilCost = 31200; var infuserMeteoriteCost = 490;
var lunarite = 0; var lunariteStorage = 50; var lunariteNextStorage = 100; var lunariteps = 0;
var methane = 0; var methaneStorage = 50; var methaneNextStorage = 100; var methaneps = 0;
var titanium = 0; var titaniumStorage = 50; var titaniumNextStorage = 100; var titaniumps = 0;
var gold = 0; var goldStorage = 50; var goldNextStorage = 100; var goldps = 0;
var silver = 0; var silverStorage = 50; var silverNextStorage = 100; var silverps = 0;
var silicon = 0; var siliconStorage = 50; var siliconNextStorage = 100; var siliconps = 0;
var moonWorker = 0; var moonWorkerGemCost = 500;
var moonDrill = 0; var moonDrillMetalCost = 1000; var moonDrillGemCost = 600; var moonDrillOilCost = 400;
var moonQuarry = 0; var moonQuarryLunariteCost = 8000; var moonQuarryGemCost = 5000; var moonQuarrySiliconCost = 3500;
var planetExcavator = 0; var planetExcavatorTitaniumCost = 45000; var planetExcavatorIceCost = 37000; var planetExcavatorMeteoriteCost = 500;
var vacuum = 0; var vacuumLunariteCost = 50; var vacuumGemCost = 500;
var suctionExcavator = 0; var suctionExcavatorLunariteCost = 100; var suctionExcavatorGemCost = 800; var suctionExcavatorOilCost = 600;
var spaceCow = 0; var spaceCowLunariteCost = 10000; var spaceCowTitaniumCost = 9000; var spaceCowSiliconCost = 4100;
var vent = 0; var ventLunariteCost = 52000; var ventHeliumCost = 47000; var ventMeteoriteCost = 390;
var explorer = 0; var explorerGemCost = 1000;
var lunariteDrill = 0; var lunariteDrillLunariteCost = 200; var lunariteDrillGemCost = 800; var lunariteDrillOilCost = 1000;
var pentaDrill = 0; var pentaDrillLunariteCost = 14000; var pentaDrillGemCost = 11000; var pentaDrillSiliconCost = 5600;
var titanDrill = 0; var titanDrillLunariteCost = 63000; var titanDrillGoldCost = 27000; var titanDrillMeteoriteCost = 600;
var droid = 0; var droidLunariteCost = 200; var droidMethaneCost = 50;
var destroyer = 0; var destroyerLunariteCost = 500; var destroyerGemCost = 1500; var destroyerOilCost = 1000;
var deathStar = 0; var deathStarLunariteCost = 17000; var deathStarSilverCost = 11500; var deathStarSiliconCost = 8200;
var actuator = 0; var actuatorLunariteCost = 61000; var actuatorHeliumCost = 15700; var actuatorMeteoriteCost = 600;
var scout = 0; var scoutLunariteCost = 100; var scoutTitaniumCost = 20;
var spaceLaser = 0; var spaceLaserLunariteCost = 350; var spaceLaserGemCost = 900; var spaceLaserOilCost = 1200;
var bertha = 0; var berthaLunariteCost = 19500; var berthaTitaniumCost = 18200; var berthaSiliconCost = 11000;
var cannon = 0; var cannonLunariteCost = 85100; var cannonOilCost = 93800; var cannonMeteoriteCost = 520;
var blowtorch = 0; var blowtorchLunariteCost = 150; var blowtorchTitaniumCost = 30;
var scorcher = 0; var scorcherLunariteCost = 500; var scorcherGemCost = 1200; var scorcherOilCost = 1600;
var annihilator = 0; var annihilatorLunariteCost = 3000; var annihilatorGemCost = 8300; var annihilatorSilverCost = 2400;
var desert = 0; var desertLunariteCost = 20000; var desertSiliconCost = 17700; var desertMeteoriteCost = 400;
var uranium = 0; var uraniumStorage = 50; var uraniumNextStorage = 100; var uraniumps = 0;
var grinder = 0; var grinderTitaniumCost = 2000; var grinderLunariteCost = 4000; var grinderGoldCost = 2000;
var cubic = 0; var cubicUraniumCost = 80; var cubicLunariteCost = 10000; var cubicOilCost = 10000;
var enricher = 0; var enricherLunariteCost = 21700; var enricherTitaniumCost = 23000; var enricherSiliconCost = 13500;
var recycler = 0; var recyclerLunariteCost = 93100; var recyclerMethaneCost = 47000; var recyclerMeteoriteCost = 830;
var lava = 0; var lavaStorage = 50; var lavaNextStorage = 100; var lavaps = 0;
var crucible = 0; var crucibleGemCost = 8000; var crucibleLunariteCost = 4000;
var extractor = 0; var extractorLunariteCost = 16000; var extractorTitaniumCost = 12000; var extractorSiliconCost = 6000;
var extruder = 0; var extruderLunariteCost = 69000; var extruderTitaniumCost = 57000; var extruderSiliconCost = 39000;
var veluptuator = 0; var veluptuatorLunariteCost = 298000; var veluptuatorGoldCost = 121000; var veluptuatorMeteoriteCost = 750;
var hydrogen = 0; var hydrogenStorage = 50; var hydrogenNextStorage = 100; var hydrogenps = 0;
var collector = 0; var collectorLunariteCost = 6000; var collectorTitaniumCost = 4800;
var magnet = 0; var magnetLunariteCost = 10800; var magnetTitaniumCost = 9600; var magnetGoldCost = 6600;
var eCell = 0; var eCellSilverCost = 37200; var eCellGoldCost = 34200; var eCellSiliconCost = 25800;
var hindenburg = 0; var hindenburgLunariteCost = 172000; var hindenburgMethaneCost = 134000; var hindenburgMeteoriteCost = 710;
var helium = 0; var heliumStorage = 50; var heliumNextStorage = 100; var heliumStorageCost = 100; var heliumps = 0;
var drone = 0; var droneLunariteCost = 8400; var droneSiliconCost = 6000;
var tanker = 0; var tankerLunariteCost = 12600; var tankerTitaniumCost = 10200; var tankerSiliconCost = 8400;
var compressor = 0; var compressorLunariteCost = 63000; var compressorTitaniumCost = 43800; var compressorSiliconCost = 35400;
var skimmer = 0; var skimmerLunariteCost = 255000; var skimmerTitaniumCost = 173000; var skimmerMeteoriteCost = 770;
var ice = 0; var iceStorage = 50; var iceNextStorage = 100; var iceStorageCost = 100; var iceps = 0;
var icePick = 0; var icePickLunariteCost = 17800; var icePickGemCost = 19300;
var iceDrill = 0; var iceDrillLunariteCost = 23900; var iceDrillTitaniumCost = 21200; var iceDrillSiliconCost = 19600;
var freezer = 0; var freezerLunariteCost = 117000; var freezerTitaniumCost = 86000; var freezerSiliconCost = 73000;
var mrFreeze = 0; var mrFreezeWoodCost = 379000; var mrFreezeHeliumCost = 14000; var mrFreezeMeteoriteCost = 1500;
var meteorite = 0; var meteoriteStorage = 50; var meteoriteNextStorage = 100; var meteoriteStorageCost = 100; var meteoriteps = 0; var meteoriteToggled = true;
var printer = 0; var printerLunariteCost = 100000; var printerSiliconCost = 50000;
var web = 0; var webLunariteCost = 930000; var webUraniumCost = 490000; var webSiliconCost = 510000;

/********************
** Tier 5 Machines **
********************/

var planetNuke = 0; var planetNukeTitaniumCost = 0; var planetNukeSiliconCost = 0; var planetNukeIceCost = 0;
var condensator = 0; var condensatorLunariteCost = 0; var condensatorGemCost = 0; var condensatorIceCost = 0;
var fossilator = 0; var fossilatorUraniumCost = 0; var fossilatorCharcoalCost = 0; var fossilatorLavaCost = 0;
var multiDrill = 0; var multiDrillTitaniumCost = 0; var multiDrillGoldCost = 0; var multiDrillOilCost = 0;
var diamondChamber = 0; var diamondChamberUraniumCost = 0; var diamondChamberCharcoalCost = 0; var diamondChamberMeteoriteCost = 0;
var microPollutor = 0; var microPollutorMetalCost = 0; var microPollutorWoodCost = 0; var microPollutorLavaCost = 0;
var forest = 0; var forestMetalCost = 0; var forestGemCost = 0; var forestHydrogenCost = 0;
var cloner = 0; var clonerTitaniumCost = 0; var clonerGoldCost = 0; var clonerMethaneCost = 0;
var interCow = 0; var interCowLunariteCost = 0; var interCowGoldCost = 0; var interCowHydrogenCost = 0;
var club = 0; var clubUraniumCost = 0; var clubWoodCost = 0; var clubHeliumCost = 0;
var philosopher = 0; var philosopherMetalCost = 0; var philosopherSilverCost = 0; var philosopherMeteoriteCost = 0;
var werewolf = 0; var werewolfUraniumCost = 0; var werewolfGemCost = 0; var werewolfMethaneCost = 0;
var tardis = 0; var tardisTitaniumCost = 0; var tardisSiliconCost = 0; var tardisMeteoriteCost = 0;
var harvester = 0; var harvesterLunariteCost = 0; var harvesterWoodCost = 0; var harvesterOilCost = 0;
var cage = 0; var cageLunariteCost = 0; var cageSiliconCost = 0; var cageMeteoriteCost = 0;
var overexchange = 0; var overexchangeMetalCost = 0; var overexchangeSilverCost = 0; var overexchangeHeliumCost = 0;

var science = 0; var scienceps = 0;
var lab = 0; var labMetalCost = 20; var labGemCost = 15; var labWoodCost = 10;
var labT2 = 0; var labT2MetalCost = 1000; var labT2GemCost = 200; var labT2WoodCost = 500;
var labT3 = 0; var labT3MetalCost = 17000; var labT3GemCost = 4700; var labT3WoodCost = 9600;
var labT4 = 0; var labT4MetalCost = 610000; var labT4GemCost = 370000; var labT4WoodCost = 926000;
var labT5 = 0; var labT5MetalCost = 12400000; var labT5GemCost = 7300000; var labT5WoodCost = 15900000;
var rocket = 0; var rocketFuel = 0; var rocketFuelps = 0; var rocketFuelToggled = true;
var chemicalPlant = 0; var chemicalPlantMetalCost = 1000; var chemicalPlantGemCost = 750; var chemicalPlantOilCost = 500;
var oxidisation = 0; var oxidisationMetalCost = 12000; var oxidisationGemCost = 8300; var oxidisationOilCost = 6800;
var hydrazine = 0; var hydrazineTitaniumCost = 140000; var hydrazineSiliconCost = 96300; var hydrazineGoldCost = 78600;

var dyson = 0; var dysonTitaniumCost = 300000; var dysonGoldCost = 100000; var dysonSiliconCost = 200000; var dysonMeteoriteCost = 1000; var dysonIceCost = 100000;
var ring = 0; var swarm = 0; var sphere = 0;

var antimatter = 0; var antimatterps = 0; var antimatterStorage = 100000; var antimatterToggled = true;

// Variables not being saved

var preciousGemCost = 10000; var preciousSilverCost = 7500; var preciousGoldCost = 5000;
var preciousActivateGemCost = 30000; var preciousActivateSilverCost = 20000; var preciousActivateGoldCost = 10000;
var energeticWoodCost =  10000; var energeticCharcoalCost = 5000; var energeticUraniumCost = 200;
var energeticActivateWoodCost = 30000; var energeticActivateCharcoalCost = 15000; var energeticActivateUraniumCost = 500;
var techSiliconCost =  30000; var techGoldCost = 18000; var techGemCost = 40000;
var techActivateSiliconCost = 50000; var techActivateGoldCost = 30000; var techActivateGemCost = 60000;
var meteoriteMeteoriteCost =  5000; var meteoriteIceCost = 600000; var meteoriteSiliconCost = 1200000;
var meteoriteActivateMeteoriteCost = 10000; var meteoriteActivateIceCost = 2000000; var meteoriteActivateSiliconCost = 4000000;
var timer = 0; var timer2 = 0; var statsTimer = 0; var saveTimer = 10; var secondsLeft = 0; var saved = false; var loaded = false;
var emcAmount = "Max";

var energyLow = false;
var resources = ["uranium", "lava", "oil", "metal", "gem", "charcoal", "wood", "lunarite", "methane", "titanium", "gold", "silver", "silicon", "hydrogen", "helium", "ice", "meteorite"]
var uraniumEmcVal = 37; var lavaEmcVal = 42;
var oilEmcVal = 3; var metalEmcVal = 1; var gemEmcVal = 3; var charcoalEmcVal = 2; var woodEmcVal = 1;
var lunariteEmcVal = 15; var methaneEmcVal = 12; var titaniumEmcVal = 17; var goldEmcVal = 14; var silverEmcVal = 16; var siliconEmcVal = 23;
var hydrogenEmcVal = 33; var heliumEmcVal = 39; var iceEmcVal = 44; var meteoriteEmcVal = 3;

var windowLoaded = false;

// Rebirth Vars

var dmBoost = 0;
var gainNum = 1; var labT1Multi = 1; var T1Price = 1; var chemicalBoost = 1; var rocketPrice = 1; var floor1Price = 1; var floor23Price = 1;
