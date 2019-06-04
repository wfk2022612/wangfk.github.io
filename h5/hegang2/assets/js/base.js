var imgs = {
  play: './assets/images/play.png',
  logo: './assets/images/logo2.png',
  indexBg: './assets/images/index-bg1.jpg',
  introduceBg: './assets/images/introduce-bg.jpg',
  detailBg: './assets/images/detail-bg.jpg',
  teamBg: './assets/images/team-bg1.jpg',
  introTitle: './assets/images/intro-title.png',
  //friendTitle: './assets/images/friend-title.jpg',
  detailTitle1: './assets/images/detail-title1.png',
  detailTitle2: './assets/images/detail-title2.png',
  detailTitle3: './assets/images/detail-title3.png',
  entry: './assets/images/entry.png',
  arrow: './assets/images/arrow.png',
  like: './assets/images/like.png',
  point: './assets/images/point.png',
  back: './assets/images/back.png',
  //index: './assets/images/index.png',
  //videoPoster: "./assets/images/test.jpg",
  //mask: './assets/images/mask.png',

  msg: './assets/images/msg1.png',
  // title1: './assets/images/title1-2.png',
  c11: './assets/images/c11.jpg',
  c21: './assets/images/c21.jpg',
  c31: './assets/images/c31.jpg',

  heart: './assets/images/heart.jpg',

  // head: './assets/images/head.png',
  edit: './assets/images/edit.png',

}

var texts = {
  zlmIntro: '2019年4月25日，中央宣传部授予塞尔维亚管理团队“时代楷模”荣誉称号。',
  zlmName: '',
  zlmIntroContent: [
    '中国河钢集团与塞尔维亚斯梅代雷沃钢厂合作运营项目启动三年来，河钢集团塞尔维亚公司管理团队9名工作人员勇于担当、忠诚履职，把发挥中方企业营销服务网络优势与挖掘塞方企业内部潜力结合起来，使企业扭亏为盈、重获新生，成为塞尔维亚就业人数最多的企业和第一大出口企业。',
    '他们面对跨文化企业整合难题，因地制宜、善作善成，创造性提出用人本地化、利益本地化、文化本地化的海外经营策略，营造了中塞员工通力合作、共同奋斗的良好局面，促进了“中塞一家亲”。他们扎根异国他乡，自觉把个人追求融入党和人民的事业之中，艰苦奋斗、敬业奉献，展现了国企党员干部的责任担当和中国人民的良好形象。'
  ],
}

var aigangjingye = { //爱岗敬业
  title: imgs.detailTitle1,
  //videoPoster: imgs.videoPoster,
  //videoUrl: './assets/video/ts.mp4',
  content: [
    '2016年收购塞尔维亚斯梅代雷沃钢厂后，河北钢铁集团（以下简称“河钢”）先后选派宋嗣海、赵军等9名管理和技术骨干人员，组成河北钢铁集团塞尔维亚公司管理团队，扎根异国他乡。',
    {
      img: imgs.c11,
      title: '河北钢铁集团塞尔维亚公司中方管理团队成员。'
    },
    '宋嗣海永远忘不了2015年五一假期时接到的那通电话。“中国和塞尔维亚两国政府都在积极推进河钢集团收购斯梅代雷沃钢厂的工作，集团决定把执行董事、首席执行官的任务交给你！”宋嗣海深知这项任务的重要意义，2016年1月，他依依不舍地辞别家人前往塞尔维亚，为正式收购做前期准备。',
    '踏进斯梅代雷沃钢厂的大门，面对眼前的“烂摊子”他感到震惊：生产装备是上世纪70年代的；管理处于真空状态；产品结构不优、档次不高……这没有动摇宋嗣海在多瑙河边二次创业的信心。2016年4月18日，河钢集团与塞尔维亚政府签署了斯梅代雷沃钢厂收购协议。',
    '收购工作完成后，河钢唐山钢铁公司炼铁部部长赵军接到了派往塞尔维亚公司担任总经理的通知。他着实放心不下年迈的父母。然而，父亲大手一挥：“让你去塞尔维亚，是组织对你的信任，是国家的大事。我和你母亲身体硬朗着呢，你就放心地去吧！”就这样，赵军从渤海之滨飞到了多瑙河畔。'
  ]
}
var yongyuchuangxin = { //勇于创新
  title: imgs.detailTitle2,
  content: [
    '“如果是10分制的话，您给河钢团队打多少分？”“我会给他们打11分，我们就像真诚的朋友一样无话不谈，所有斯梅代雷沃人和他们都互为朋友。”斯梅代雷沃市长亚斯娜·阿夫拉莫维奇提起河钢团队，赞美之情溢于言表。在她看来，河钢团队的到来，不仅让濒临破产的钢厂起死回生，更是让斯梅代雷沃这座小城重新焕发了勃勃生机。',
    {
      img: imgs.c21,
      title: '塞尔维亚河钢（塞尔维亚）钢铁有限公司厂区内的工人们。'
    },
    '当地很多家庭几代人都在斯梅代雷沃钢厂工作，他们对这座工厂的情感早已融入了生命、浸入了灵魂。河钢在此基础上明确了“利益本地化、用人本地化、文化本地化”的“三个本地化”原则。塞钢有员工5000多人，中方员工常驻人员不过9人，日常生产经营主要依靠当地员工。紧接着，河钢输入先进管理经验和技术，配置全球优势资源，让钢厂走上了健康可持续发展道路。',
    '“三个本地化”，确保了钢厂接手后的平稳过渡和良好开局。河钢塞钢不仅实现了5000多名员工收入的稳定增长，还通过延伸产业链条，为更多的居民创造了新的就业机会。目前，斯梅代雷沃市平均每5人中，就有1人直接或间接围绕河钢塞钢在工作。',
    '在中方团队的忘我工作下，河钢塞钢交出了一份漂亮的答卷：2017年产钢147.3万吨，实现销售收入7.4亿美元，创出历史最高水平。2018年产钢178万吨，实现销售收入10.5亿美元，比上年提高42%，成为塞尔维亚第一大出口企业。2019年一季度，河钢塞钢共产钢46.17万吨。'
  ]
}

var ganyufengxian = { //甘于奉献
  title: imgs.detailTitle3,
  content: [
    /*{img:'',title:''} */
    {
      img: imgs.c31,
      title: '河钢塞尔维亚有限公司副总经理王连玺（前右）和塞方工作人员一同检查钢铁厂运行情况。'
    },
    '在签署收购协议后仅仅10天，宋嗣海意外地接到了母亲病逝的噩耗。等他赶回万里之遥的家里时，母亲已经安葬。因为河钢在塞尔维亚公司刚刚起步，作为首席执行官，许多事情需要他处理，宋嗣海在家里仅仅待了5天时间，强忍悲痛登上了返航的飞机。',
    '宋嗣海回忆，那一段特别忙，只有到了深夜，才能稍稍静下心来，独自行走在多瑙河畔，寄托对母亲的怀念。“如此重大的项目交到了我们团队手中，只能成功，不能失败！”这是他在最困难、最痛苦时，心中最强大的声音。',
    '静静流淌的多瑙河水，也承载着唐娟的思念。唐娟是河钢塞尔维亚公司的财务总监，9人管理团队中唯一的“女将”。自从丈夫患病离世后，她与女儿相依为命。唐娟被调到塞尔维亚公司后，女儿便独自一人生活。“妈，您在国外一定要按时吃饭、按时睡觉，多多保重身体。”女儿电话里的嘱托让她既欣慰、又内疚。'

  ]
}
//【扎根异国】【重现生机】【舍小为大】
var indexMenu = [{
    name: '扎根异国',
    value: 'aigangjingye'
  },
  {
    name: '重现生机',
    value: 'yongyuchuangxin'
  },
  {
    name: '舍小为大',
    value: 'ganyufengxian'
  },
]

var comments = [{
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


var mainImgList = [{
  url: imgs.img1,
  type: 'rect'
}, {
  url: imgs.img2,
  type: 'circle'
}, {
  url: imgs.img3,
  type: 'circle'
}];

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