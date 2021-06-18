import headerLayoutsImage from "../assets/choose-your-fighter.svg"
import suggestions from "../assets/SUGGESTIONS.svg"
import headerSchemeImportImage from "../assets/scheme-import-en.svg";

const cn = {
  layoutSelection: {
    headerImage: headerLayoutsImage,
    headerText: "选择是要使用扩展布局还是原始的经典布局。",
    bottomText: [
      "更多定制选项即将推出！如果您有好点子，或者想提前体验新功能，请加入我们的 ",
      "Discord",
      " !"
    ],
  },
  languageSelection: {
    headerText: ["注意!", " 调色板名称将根据所选语言进行更改。"],
    bottomText: [
      "缺少您所使用的语言？不用担心，您可以帮忙添加您的语言的翻译！前往我们的 ",
      "Discord",
      " 以便与我们合作。"
    ],
  },
  menu: {
    layoutSwitch: "切换布局",
    languageSwitch: "语言",
    help: "帮助 & 关于",
    colorPicker: "取色器",
    motd: " 每日消息",
    hide: "隐藏",
    show: "显示",
  },
  palettesModal: {
    modalName: "色板",
    description: "自定义您的建议",
    disableAll: "禁用全部",
    enableAll: "启用全部",
  },
  importModal: {
    modalName: "导入配色方案",
    description: "在下面输入代码",
    textArea: [
      "在这里粘贴你的",
      "颜色代码",
      "或",
      "游戏内配色截图",
      "..."
    ],
    manualUpload: "手动上传",
    accept: "确定"
  },
  schemeImport: {
    headerImage: headerSchemeImportImage,
    headerText: "警告: 这将覆盖您当前的配色方案。选择是要保留当前配色方案，还是从链接中导入新配色方案。",
    currentScheme: "当前方案",
    newScheme: "新方案",
    confirm: "确定",
    bottomText: "别担心: 离开此页面不会丢失你当前的配色方案。"
  },
  colorPicker: {
    targetScheme: {
      targetScheme: "目标配色方案",
      default: "DEFAULT",
      manual: "MANUAL",
      primary: "主要颜色",
      secondary: "次要颜色",
      tertiary: "军械库第三色彩",
      quaternary: "军械库高亮颜色",
      emissive: "放射颜色 1, 2",
      energy: "能量颜色 1, 2",
      import: "导入",
      export: "导出",
      copied: "已复制分享链接!"
    },
    suggestions: {
      suggestions,
      scroll: "滚动查看更多!",
      palettes: "色板",
    },
    selectedColor: {
      selectedColor: "选中的颜色",
    }
  },
  palettes: {
    "Agony": "Agony",
    "Bastille": "Bastille",
    "Beach": "Beach",
    "Cherub": "Cherub",
    "Classic Saturated": "Classic Saturated",
    "Classic": "Classic",
    "Conquest": "Conquest",
    "Corpus": "Corpus",
    "Darkness": "Darkness",
    "Daybreak": "Daybreak",
    "Discord": "Discord",
    "Dojo": "Dojo",
    "Easter": "Easter",
    "Eminence": "Eminence",
    "Eximus": "Eximus",
    "Fear": "Fear",
    "Fire": "Fire",
    "Grineer": "Grineer",
    "Hallow'S Eve": "Hallow'S Eve",
    "Halloween": "Halloween",
    "Hatred": "Hatred",
    "Ice": "Ice",
    "Infested": "Infested",
    "Ki'Teer": "Ki'Teer",
    "Lotus": "Lotus",
    "Matisse": "Matisse",
    "Orokin": "Orokin",
    "Pride": "Pride",
    "Red White Blue": "Red/White/Blue",
    "Rollers": "Rollers",
    "Rot": "Rot",
    "Shamrock": "Shamrock",
    "Smoke Colors": "Smoke Colors",
    "Spektaka": "Spektaka",
    "Storm": "Storm",
    "Tenno II": "Tenno II",
    "Tenno": "Tenno",
    "Transmission": "Transmission",
    "Twilight": "Twilight",
    "Twitch": "Twitch",
    "Undying": "Undying",
    "Valentine": "Valentine",
  }
}

export default cn
