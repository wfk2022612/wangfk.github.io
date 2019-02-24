var imgs = {
  play: './assets/images/play.png',
  logo: './assets/images/logo2.png',
  indexBg: './assets/images/index-bg1.jpg',
  introduceBg: './assets/images/introduce-bg.jpg',
  detailBg: './assets/images/detail-bg.jpg',
  teamBg: './assets/images/team-bg1.jpg',
  introTitle: './assets/images/intro-title.png',
  friendTitle: './assets/images/friend-title.jpg',
  // detailTitle: './assets/images/detail-title.png',
  // detailTitle1: './assets/images/detail-title2.png',
  // detailTitle2: './assets/images/detail-title3.png',
  entry: './assets/images/entry.png',
  arrow: './assets/images/arrow.png',
  like: './assets/images/like.png',
  point: './assets/images/point.png',
  back: './assets/images/back.png',
  index: './assets/images/index.png',
  videoPoster: "./assets/images/video-poster.png",
  //mask: './assets/images/mask.png',

  msg: './assets/images/msg1.png',
  title1: './assets/images/title1-2.png',
  c1: './assets/images/c1.jpg',
  c12: './assets/images/c12.jpg',
  c13: './assets/images/c13.jpg',
  c2: './assets/images/c2.jpg',
  c22: './assets/images/c22.jpg',
  c3: './assets/images/c3.jpg',
  c32: './assets/images/c32.jpg',
  //head1: './assets/images/head2.jpg',
  head2: './assets/images/head1.jpg',
  heart: './assets/images/heart.jpg',

  head: './assets/images/head.png',
  edit: './assets/images/edit.png',

}

var texts = {
  zlmIntro: '2019年2月20日，中央宣传部向全社会发布北京榜样优秀群体的先进事迹，授予他们“时代楷模”称号。',
  zlmName: '北京榜样优秀群体',
  zlmIntroContent: [
    '为深入推进社会主义核心价值观建设，自2014年以来，北京市持续开展北京榜样学习宣传活动，推出了一大批立得住、叫得响、传得开的榜样人物。北京榜样优秀群体，就是这些人物中事迹厚重、影响较大的50位年榜荣誉获得者。',
    '他们有的勇攀科技高峰，致力关键核心技术自主创新，在重大科技领域实现原创性突破；有的扎根城乡基层，服务一方百姓，办了许多暖民心、解民忧的好事实事；有的身残志坚，以永不言弃的精神拼搏奋斗，在人生的赛场上取得了骄人成绩；有的见义勇为，危急时刻挺身而出，用大无畏的行动保护了国家和他人生命财产安全；有的热心社会公益，积极参加岗位学雷锋和志愿服务，用爱和奉献帮助了群众、温暖了京城。'
  ],
}

var aigangjingye = {//爱岗敬业
  //title: imgs.detailTitle,
  //videoPoster: imgs.videoPoster,
  //videoUrl: './assets/video/5M.mp4',
  content: [
    { img: imgs.c1, title: '贺玉凤在收捡垃圾。（新华社发 2017年5月23日摄）' },
    '在永定河支流妫水河畔，张山营镇小河屯村的贺玉凤从1996年沿河捡垃圾，一捡就是20多年。一开始，家人觉得捡垃圾“丢人”，在她的坚持下，不仅村民理解了她对青山绿水的爱，还吸引来素不相识的志愿者成立了“志愿服务队”，共同传递环保理念。',
    '在朝阳区呼家楼街道殷金凤工作室的接待簿上，一桩桩、一件件居民的诉求与解决办法清晰可见。工作18年，这位社区书记心里装着居民的苦与乐，让原本怨气多，矛盾多的老旧社区面貌焕然一新。',
    { img: imgs.c12, title: '刘宝中检查车辆情况。（新华社发 2017年6月20日摄）' },
    '作为偏僻的公交线路上唯一的驾驶员，刘宝中10年来坚持在“孤独”中服务群众。他说，公交车就是他的舞台, 让每一位乘客安全出行、满意乘车是他最大的心愿。',
    '因意外失去双臂的女孩夏虹，凭着顽强意志成了运动健将，多次参加全省、全国残疾人运动会并夺得冠军。她还学习非物质文化遗产剪纸技艺，培训了上千名剪纸学员。',
    '普通家庭主妇田琴，十几年来照顾着父母、公婆、爷爷等7位身患重病的老人，用孝心与毅力为濒临绝境的家庭撑起一片天。',
    { img: imgs.c13, title: '夏伯渝在北京房山区霞云岭攀冰。（新华社发 2017年1月17日摄）' },
    '因截肢而中断运动员生涯的夏伯渝，69岁登上珠峰之巅，成为极少数登上珠峰的双腿截肢者之一……',
    '平凡中见伟大——“北京榜样”优秀群体的故事令人动容。',
  ]
}
var yongyuchuangxin = { //勇于创新
  //title: imgs.detailTitle1,
  content: [
    '“一周工作7天，从早7点到晚7点”——生物制药领域专家谢良志带领团队，用整整15年时间，成功研制出治疗血友病的平价药，挽救了很多患者的生命。',
    '“时代给了我机遇，我深感责任重大。”谢良志说。',
    '将生命融入国家发展、人民所需，是“北京榜样”优秀群体可贵的精神追求。',
    { img: imgs.c2, title: "技术工人高凤林在工作中。（新华社发 2015年4月30日摄）" },
    '作为我国运载火箭大喷管焊接领域的专家，技术工人高凤林先后为130多枚火箭焊接过“心脏”，攻克了航天焊接200多项难关。这位大国工匠说：“岗位不同，作用不同，心中只要装着国家，什么岗位都光荣。”',
    '古建技师吴书瑞，从事古建彩画工作40余个春秋；李东方20余年扎根戈壁，为国宝造像……',
    '72岁的超声科专家陈敏华说:“爱祖国、爱医学事业、爱我们的患者，争取在医学领域有更多的世界领先，造福患者，为国争光——这是一种责任和信仰。”'
  ]
}

var ganyufengxian = { //甘于奉献
  content: [
    { img: imgs.c3, title: '中日友好医院皮肤科专家张晓艳（右）在西藏林芝市医院为藏族儿童看诊。（新华社发 2017年7月摄）' },
    '中日友好医院皮肤科专家张晓艳有一个梦想：“让医疗资源匮乏地区的群众，有机会问诊知名医院的专家。”她发起成立了“全国社区医疗服务志愿团”，聚集了900多名医疗专家，为贫困地区送去关爱。',
    '这对坚守雀儿山23年的夫妇动情地讲起他们与多吉的感情。“他是信使，更是亲人。”在荒凉的生命禁区，邮车带着独特节奏的两声鸣笛是他们之间才懂的问候，他送来的报纸和家书更是滋养精神世界的唯一营养。',
    '企业家廖理纯投入千万元资金从事环保公益事业，先后带领330余批志愿者、1.2万余人次走进内蒙古，在一片片荒漠中种下希望的种子。',
    '“90后”青年团队“夕阳再晨”，热心帮助社区老人手机挂号、电子支付，带动了全国19个省市的100余所高校志愿团队，为超过20万名老人开展科技助老服务，努力实现“帮老人跨越数字鸿沟”的梦想。',
    '为了救助素不相识的人，血型为RH阴性血的韩冰无偿献血逾20年；为了帮助贫困学生求学，北京大妈孙晓兰与亲友坚持助学20年；为了帮助盲人等群体感受艺术魅力，任士荣在社区义务教琴20余年。',
    '“这生活因你淡妆清香，这古都因你浓墨飞扬……”《北京榜样》的主题歌传扬在大街小巷。北京榜样优秀群体，温暖社会，感奋人心！'
  ]
}

var indexMenu = [
  { name: '平凡中见伟大', value: 'aigangjingye' },
  { name: '成就辉煌传奇', value: 'yongyuchuangxin' },
  { name: '唱响时代之歌', value: 'ganyufengxian' },
]

var comments = [
  {
    headimgurl: imgs.head,
    name: '',
    content: '',
  },
  {
    headimgurl: imgs.head,
    name: '',
    content: ''
  }


]



var arr = [];


for (var attr in imgs) {
  arr.push(imgs[attr]);
}


var mainImgList = [
  {
    url: imgs.img1,
    type: 'rect'
  }, {
    url: imgs.img2,
    type: 'circle'
  }, {
    url: imgs.img3,
    type: 'circle'
  }
];

var musics = {
  music: {
    src: './assets/music/bg2.mp3',
    autoplay: false,
    name: 'bg',
    loop: true
  },
  photo: {
    src: './assets/music/photo.mp3',
    autoplay: false,
    name: "photo",
    loop: false
  }
};

(function () {

  if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
    handleFontSize();
  } else {
    if (document.addEventListener) {
      document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
    } else if (document.attachEvent) {
      document.attachEvent("WeixinJSBridgeReady", handleFontSize);
      document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
    }
  }

  function handleFontSize() {
    // 设置网页字体为默认大小
    WeixinJSBridge.invoke('setFontSizeCallback', {
      'fontSize': 0
    });
    // 重写设置网页字体大小的事件
    WeixinJSBridge.on('menu:setfont', function () {
      WeixinJSBridge.invoke('setFontSizeCallback', {
        'fontSize': 0
      });
    });
  }
})();