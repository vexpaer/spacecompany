# 概述:
太空公司是一个科幻小说增量游戏，您可以从地球上的谦逊的起点开始，在星系之间旅行，搭建戴森星球（Dyson Spheres）以及几乎整个星系的殖民地(ies?)

目前，游戏是Beta版，这意味着游戏中经常有积极的发展，现有功能的大多数bug都将被修复。你不必担心你的储存被擦掉。不过，偶尔会有bug，我会尽力修改。

# 未来的计划
- 查看 https://www.reddit.com/r/SpaceCompany/wiki/futureplans
- 加载游戏时，您剩下的标签是您现在开始的标签
- 随机事件
- [把界面从bootstrap变为我自己的]

# 路线图

v0.6.0 知识更新
https://www.reddit.com/r/SpaceCompany/wiki/futureplans#wiki_v0.6

- 在每个建筑物上添加知识，以及对您的太空公司的介绍
- 重新平衡所有成本，不要使用太多的土地 / 宝石
- 加载屏幕风味文字随着进度而改变
- 机器概览选项卡

v0.5.0 星际更新
https://www.reddit.com/r/SpaceCompany/wiki/futureplans#wiki_v0.5

- 暗物质
- 声望 (https://www.reddit.com/r/SpaceCompany/comments/6lcgzu/plan_for_prestige/)
- 未知的行星，你必须探索，知道它上面有什么
- 每个星系都比最后直到声望重新起伏，
- 将行星推入太阳将获得声望
- 质量转换能量
- 购买X按钮
- 购买最大/自定义按钮
- 降低存储成本
- 更改数字格式化开始于100K
- 重新平衡科学
- 更换图标（带有图标的白色圆圈）

# Changelog:

### v0.5.0
##### Features

- Offline Production
- Screen Notifications Graphics Option
- Kongregate Leaderboard
- 7 New Themes
- Random Loading Messages (100)
- Communication Wonder
- Rocket Wonder
- Antimatter Wonder
- Portal Room
- Stargate
- Plasma Storage Units
- Buying Multiple Dyson Parts
- Option to Hide Gain Buttons
- Achievements for Rings and Swarms
- Time Until Storage Full Display
- Max Emc Conversion Button
- Tier 3 Batteries
- Tier 4 Labs
- Tier 4 Batteries
- Custom Company Name
- Copy Export to Clipboard
- Update Log On Page Load
- Battery Efficiency Research
- Coloured Destroy Button Option
- Hydrazine Catalyst - T3 Rocket Fuel
- Interstellar Radar Scanner
- Achievement Ranks
- Renamed Space Metal as Lunarite
- The Wonder Tab hides itself when completed (makes space for more tabs)
- Rebuilt Achievement Tooltips
- Dark Matter
- Hide Completed Tabs Button
- Added Astronomical Breakthrough
- Seperate Option for Autosave Notifications

##### Small Changes

- Individual buttons to turn off Plasma and Meteorite Machines
- Turn-off switch for all energy producers/consumers
- Alternative scientific formatting
- Made it clear that Dyson Sections Costs reset when used
- 'Off' Option For Autosaving
- Science Forced 1 Decimal Until 100
- Cleared Up Misconceptions With 'NB:' Notes
- Uranium + Plasma Achievements
- Changed Some Descriptions
- Made Red Bold Costs Also Underlined
- Allow decreasing EMC amount with right click
- Changed Version Number System to include 4th digit
- Made EMC Max By Default
- Import Checks For Empty Field To Refuse Load
- Fixed Typos
- Fixed Interstellar Backwards Compatibility
- Changed Dyson Parts Buying To Buy Parts And Build Dyson
- Destroy Alcubierre Drive Button
- Nerfed Energy Efficiency to be 1000x cheaper, but only go up to 25%
- Changed Multibuy researches to show current level instead of next level
- Buffed Battery Efficiency to 200 levels instead of 50
- Nerfed Rocket Fuel Research Costs
- Buffed Hydrazine Production
- Achievement Number Formatting
- Rocket Fuel Machine Achievements
- Refactored EMC (behind the scenes)
- Optimised Saving and Loading
- Time until storage full now shows until empty if negative gain
- Reset achievements
- Standardised gainResource() function
- Achievement Stars are worth their position

##### Bug Fixes

- Fixed Bug With Solar System Sidebar
- Fixed Unlocked Tabs Statistic Bug
- Fixed Rocket Launching Costs Not Being Red
- Fixed Antimatter Tab Highlighting Sticking
- Fixed Typos
- Fixed Rocket Wonder Not Working
- Fixed Solar Panel Showing Incorrect Output
- Fixed Interstellar Tab Not Loading Values
- Fixed Collapse Outer Solar System SideBarTab Visual Bug
- Fixed Portal Room Helium Bug
- Fixed Whitespace Bug on Plasma Tab
- Fixed Infinite Meteorite Bug
- Fixed Stargate Not Deducting Resources
- Fixed Dyson Sections Cost Bug
- Fixed Plasma EMC Display Bug
- Fixed Stargate Red Costs Bug
- Fixed T3 Battery Lunarite Cost Not Saving
- Fixed UI Bug With Certain Themes
- Fixed Rocket Building Not Saving
- Fixed Antimatter Decimals Not Being Uniform
- Fixed Batteries Not Unlocking Without Refresh
- Fixed Interstellar Backwards Compatibility
- Fixed Browser Compatibility Problem
- Fixed Antimatter Not Turning Green On Full Storage
- Fixed Hydrazine Research Cost Not Turning Red
- Fixed Antimatter Going Above 100k
- Fixed Buying Multiple Solar System Rockets
- Fixed T4 Science unlocking only after refresh
- Fixed Hydrazine Not Getting Resource Efficiency
- Fixed Exponential Notation UI
- Fixed Typos
- Fixed Stargaze not showing up until refresh
- Fixed Silicon Achievement not existing
- Fixed Logo not animating

### v0.4.4
##### Features
- Dyson Ring
- Infinite Research
- Overhauled Behind The Scenes Stuff - Made everything data driven
- Notifications
- Game Now Works in an Inactive Tab
- Tier 2 Batteries
- Tier 2 Rocket Fuel
- Sidebar Nav Compression
- Options For Number Format

##### Small Changes
- Reworked EMC UI
- Energy Conversion Changes
- Reworded Chemical Plant Description
- Reprogrammed Charcoal Production
- Changed Laboratory Names and Descriptions
- Destruction of Rocket Fuel Machines
- Changed Order of Achievements
- Prevented Building Multiple Dyson Spheres
- Made All Numbers >1000 4 Digits Long
- Changed Ice T4 to use Wood
- Days on Time Stats
- Changed Links in FAQ to open in new tab
- Notifications for Achievements and Autosaving and for when Storage is full
- Reduced Info Overload on Getting Started Tab
- Added LICENCE.txt

##### Bug Fixes
- Fixed Oil Rig Costs
- Fixed Helium T4 Red Costs
- Fixed Dyson Section Reset Costs
- Fixed Cyborg UI Bug
- Fixed Dyson Costs Resetting
- Fixed Exploring Wonder Showing '!' on Resources Tab
- Fixed Importing Without Data Wiping Saves
- Fixed Highlighting Bugs
- Fixed Charcoal Burners Not Using Wood
- Fixed Oxidisation UI Bug
- Fixed Session Time Not Resetting
- Fixed Meteorite Filling Storage Bug
- Fixed Typos

### v0.4.3
- Completed Achievements
- Changed Achievements System
- 100,000x Conversion Option

##### Bug Fixes
- Fixed Destruction of Machines Research Red Cost Bug
- Fixed Meteorite Wonder Cost Bug
- Fixed Titanium T4 Energy Costs
- Fixed Dyson Costs Jumping to 3rd from 1st
- Fixed Metal Icon not being transparent

v0.4.2
- Option for bold text on red costs
- Nerfed Battery Costs

v0.4.1
- Bug Fix with Sphere to Swarm Conversion

v0.4.0 The Hot and Cold Update
- Achievements
- Research from Sol Center
- Meteorite
- Meteorite Tier of resource machines (4th Tier)
- Dyson Sections
- Dyson Swarm
- Dyson Sphere
- Per Second Display on Science
- Ability to Destroy Machines
- Increased Width of Resources List to reduce vertical scrolling
- Tiered Laboratories
- Batteries
- Changed Silicon from an inner planet resource to an earth resource
- Altered Cyborg Theme
- Stats for Time Keeping
- Merged "More" and "Settings" Tabs
- Tier 2 for Plasma and Meteorite

v0.3.5
- Number Formatting for large numbers
- Made Selected Tab Blue

v0.3.4
- New Solar Theme
- New United Theme

v0.3.3
- Collapsibility for the Solar System Tab
- Notifications on tabs when there is something new in them

v0.3.2
- Made per second text red when negative
- Dark Cyborg Theme

v0.3.1
- Rebalanced Fusion Reactor and Magmatic Dynamo
- Rebalanced Tier 3 Machines For Some Resources

v0.3.0 The Tech Update [Pushed to Beta]
- Sol Scientific Center
- Computerized Tier of resource machines
- Exploration of the outer planets
- Energy-Mass Conversion
- Hydrogen and Helium
- Ice
- Plasma
- Tech Wonder
- Fusion Reactor
- More Statistics
- Loading Screen
- Fixed Typos
- Fixed Wood/Charcoal Bugs

v0.2.2
- If you do not have enough resources for something, the number will be red
- You can collapse resources into earth and space categories
- Buffed Charcoal Engines and Solar Panels to stop people falling into a 'negative energy hole'
- Nuclear & Magmatic Power
- Nerfed Methane Station

v0.2.1
- Fixed Bugs

v0.2.0 The Wondrous Update [Released To The Public]
- Wonder Tab
- two different wonders - Precious Wonder & Energetic Wonder
- ability to upgrade Wonders
- Uranium & Lava
- Widened resources navigation so that storage could be displayed on one line
- Solar Panel and Charcoal Engine Upgrades
- Statistics
- Settings
- Import and Export

v0.1.2
- Auto-saving
- Finished Beginner's Guide

v0.1.1
- Fixed bugs from the 0.1.0 update

v0.1.0 The Space Update
- Space travel to The Moon, Venus, Mars and the Asteroid Belt
- New resources: Lunarite, Methane Gas, Titanium, Silver, Gold and Silicon
- Methane-based power
- Commas to all numbers more than 1000
- Fixed negative energy
- Saving
- Donations through paypal
- Updated Beginner's Guide

v0.0.7
- Resource Technology Upgrade to double resource machines output
- Nerfed Science
- Changed the per second display to be zero if the storage is full

v0.0.6
- Icons for the rest of the resources
- Help / FAQ Tab
- Beginner Guide, FAQ and Credits
- Made resource numbers scroll up instead of jumping to the current value

v0.0.5
- Space Tab
- Chemical plants that produce rocket fuel
- Rocket that uses rocket fuel to launch into space

v0.0.4 
- Balanced Game More (to not take 2 minutes to complete)
- Fixed Wood/sec bug
- Made all resource gatherers increase in cost as you buy them
- Fixed Resource Machines not using energy
- Changed storage upgrades to cost metal as well

v0.0.3
- Removed cap on energy
- Solar Panels
- Resource Gathering Machine were added that use a constant supply of energy
- Oil was made a component in building machines
- Fixed storage costs bug

v0.0.2
- Merged Crafting and Resources tabs
- Reworked Science Techs
- Balanced Science Tab
- Removed the ability for science to be clicked - it can only be gained slowly
- Energy and Charcoal engines
- Charcoal
- Removed Gas

v0.0.1
- Basic mechanics and basic Bootstrap theme implemented
- Initial release
