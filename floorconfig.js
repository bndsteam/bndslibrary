let SharedResources = {
    floortranslatedata:{
        "二层":2,
        "三层":3,
        2:"二层",
        3:"三层",
    },
    locationtranslatedata:{
        "西北":1,
        "东北":2,
        "西南":3,
        "东南":4,
        1:"西北",
        2:"东北",
        3:"西南",
        4:"东南",
    },
    floortranslate: function (name){
        return this.floortranslatedata[name];
    },
    locationtranslate: function (name){
        return this.locationtranslatedata[name];
    },
    geturlparam: function (name) {
        var search = location.search.substring(1);
        return search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) }):{}
    },
    getresourcebyfloor: function (floorid){
        if(floorid == 2) return Resources2;
        if(floorid == 3) return Resources3;
    },
}
let Resources2 = {
    full:"resources/f2/full.jpg",
    1:["resources/f2/xibei.jpg","resources/f2/xibeifenbu.jpg",[
        ["数学",""]
    ]],
    2:["resources/f2/dongbei.jpg","resources/f2/dongbeifenbu.jpg",[
        ["医学类","R"],
        ["珍藏图书",""],
        ["人物传记",""],
        ["风俗习惯","K89"],
        ["地理","K9"],
        ["K0 K1 K103",""],
        ["K109 K203",""],
        ["K204 K27 K207",""],
        ["K209 K209",""],
        ["阅读课专柜",""],
        ["K22 K23 K24",""],
        ["K25 K26",""],
        ["K3 K4 K5 K6 K7",""]
    ]],
    3:["resources/f2/xinan.jpg","resources/f2/xinanfenbu.jpg",[
        ["物理",""],
        ["生物",""],
        ["化学",""],
        ["自然科学","V"],
        ["天文学 地球科学","P"],
        ["综合性图书","Z228"],
        ["环境科学、安全科学","X"],
        ["工业技术","T"],
        ["美食","T97M"]
    ]],
    4:["resources/f2/dongnan.jpg","resources/f2/dongnanfenbu.jpg",[
        ["学生必读",""],
        ["军事类",""],
        ["杂志",""],
        ["十一教师专著",""],
        ["计算机","TPS3"]
    ]],
}
let Resources3 = {
    "full":"resources/f3/full.jpg",
    1:["resources/f3/xibei.jpg","resources/f3/xibeifenbu.jpg",[
        ["外文图书",""],
        ["法国小说","I565.4 I565.7"],
        ["作品集","I21"],
        ["美国小说","I712.4"],
        ["文学评论和研究","I207"],
        ["文学史文学思想","I109 I209"],
        ["儿童文学","I18"],
        ["各时代散文","I26 I216"],
        ["各时代作品集","I217"],
        ["民间文学","I17 I27"],
        ["各类作品评论及研究","I106 I206"],
        ["戏剧文学","I13 I23"],
        ["文学理论","I0"],
        ["语言类、文学","H"],
        ["英文小说","H319.4"],
        ["各国文化","G1"],
        ["信息与知识传播","G2"],
        ["体育","G8"]
    ]],
    2:["resources/f3/dongbei.jpg","resources/f3/dongbeifenbu.jpg",[
        ["俄罗斯小说","I512.4"],
        ["日、韩小说","I312.4 I313.4"],
        ["当代散文","I267.1"],
        ["近代短篇小说","I246.7"],
        ["史传小说","I247.53"],
        ["诗歌韵文","I222"],
        ["现代诗歌","I12 I226"],
        ["故事","I247.8"],
        ["英国小说","I561.4"],
        ["当代散文","I267"],
        ["中国报告文学","I25 I251 I253"],
        ["当代短篇小说","I247.7"],
        ["章回小说","I242.4"],
        ["中长篇小说","I247.5"],
        ["儿童文学","I287"]
    ]],
    3:["resources/f3/xinan.jpg","resources/f3/xinanfenbu.jpg",[
        ["鲁迅作品","I210"],
        ["科幻小说",""],
        ["德国小说","I516.4"],
        ["世界散文杂文","I16"],
        ["美国小说",""],
        ["诺贝尔文学奖",""],
        ["茅盾文学奖",""],
        ["中国哲学","B2*"],
        ["工具书",""],
        ["心理学","B84"],
        ["道德哲学","B82"],
        ["教育教学","G类"],
        ["家庭教育","G78"],
        ["个性心理学","B848"],
        ["宗教","B9*"],
        ["自学","G79"],
        ["作文","G类"],
        ["社科类","C5 C93 C912 C913"],
        ["政法类","D0 D4 D5 D6 D8 D9"],
        ["经济类","F0 F1 F2 F4 F7"],
        ["欧洲哲学","B5"],
        ["佛教","B94"],
        ["思维哲学","B80"],
        ["电影电视艺术","J9"],
        ["各国绘画作品","J23"],
        ["艺术理论","J0"],
        ["漫画、连环画","J228"],
        ["音乐","J6"]
    ]],
    4:["resources/f3/dongnan.jpg","resources/f3/dongnanfenbu.jpg",[
        ["古籍",""],
        ["世界报告文学","I15"],
        ["世界小说","I14"],
        ["世界散文杂文","I16"],
        ["马列毛邓","A类"]
    ]],
}