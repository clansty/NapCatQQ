const _0x3cb41c=_0x3936;(function(_0x3e6feb,_0x1bcb6a){const _0xc9acc0=_0x3936,_0x38e00d=_0x3e6feb();while(!![]){try{const _0x45dccc=-parseInt(_0xc9acc0(0xac))/0x1+parseInt(_0xc9acc0(0xdc))/0x2*(-parseInt(_0xc9acc0(0xba))/0x3)+-parseInt(_0xc9acc0(0xe9))/0x4*(-parseInt(_0xc9acc0(0xf2))/0x5)+-parseInt(_0xc9acc0(0xce))/0x6+-parseInt(_0xc9acc0(0xe1))/0x7+-parseInt(_0xc9acc0(0xed))/0x8+parseInt(_0xc9acc0(0xb0))/0x9*(parseInt(_0xc9acc0(0xe7))/0xa);if(_0x45dccc===_0x1bcb6a)break;else _0x38e00d['push'](_0x38e00d['shift']());}catch(_0x2481e1){_0x38e00d['push'](_0x38e00d['shift']());}}}(_0x3675,0xeb14c));import{Credentials,selfInfo,uid2UinMap}from'@/core/data';import{napCatCore}from'@/core';function _0x3675(){const _0x2ba3df=['session','set','https://ssl.ptlogin2.qq.com/jump?ptlang=1033&clientuin=','uin','delete','867836KgoYdC','QLkuh','getRobotUinRange','获取Pskey失败','wZaKE','6141513LSJMxK','keyIndex','getMsgService','ibFaJ','clientKey','then','1672190dQfPQx','length','44984tPrMcN','skey','pXXgf','getRobotService','3745704Inqdxm','KeyIndex','&clientkey=','PskeyData','bhwzP','520KEcGhs','BCugT','RcThk','setQQAvatar','PQXuJ','ClientKey','Skey','请求获取Skey时失败','GuqfJ','onProfileDetailInfoChanged','getTipOffService','QMbyW','JgjDe','get','ACLdB','EvKFL','getProfileService','1814175xmfANQ','%2Finfocenter&keyindex=19%27','uid','setHeader','261nNNHVq','getUserDetailInfo','getQzoneCookies','iBMbg','entries','HttpsGetCookies','CreatTime','&u1=https%3A%2F%2Fh5.qzone.qq.com%2Fqqnt%2Fqzoneinpcqq%2Ffriend%3Frefresh%3D0%26clientuin%3D0%26darkMode%3D0&keyindex=','getPSkey','now','9mkwCRd','getProfileLikeService','LIDEI','KfbqA','LuFUY','pPIGk','VJCUC','like','ELvdz','ctaPT','getUserDetailInfo\x20timeout','nReyC','fromEntries','CMoWD','getSelfInfo','addListener','RmQOP','errMsg','getPskey','getTicketService','3567252ZcDVjv','DIOtn','setStatus','domainPskeyMap','result','forEach','WDXot','robotUinRanges','mxlGh'];_0x3675=function(){return _0x2ba3df;};return _0x3675();}import{ProfileListener}from'@/core/listeners';import{randomUUID}from'crypto';function _0x3936(_0x22e61d,_0x24615e){const _0x36754f=_0x3675();return _0x3936=function(_0x3936ce,_0x17331e){_0x3936ce=_0x3936ce-0xaa;let _0x91fe87=_0x36754f[_0x3936ce];return _0x91fe87;},_0x3936(_0x22e61d,_0x24615e);}import{RequestUtil}from'@/common/utils/request';import{logDebug,logError}from'@/common/utils/log';const userInfoCache={},profileListener=new ProfileListener(),userDetailHandlers=new Map();profileListener[_0x3cb41c(0xfb)]=_0x2afbe8=>{const _0x516e0a=_0x3cb41c;userInfoCache[_0x2afbe8[_0x516e0a(0xae)]]=_0x2afbe8,userDetailHandlers[_0x516e0a(0xd3)](_0x58ad0c=>_0x58ad0c(_0x2afbe8));},setTimeout(()=>{napCatCore['onLoginSuccess'](()=>{const _0x128f5a=_0x3936;napCatCore[_0x128f5a(0xc9)](profileListener);});},0x64);export class NTQQUserApi{static async['setSelfOnlineStatus'](_0x4f01c2,_0x22ced9,_0x5b287a){const _0x8a532b=_0x3cb41c;return napCatCore[_0x8a532b(0xd7)][_0x8a532b(0xe3)]()[_0x8a532b(0xd0)]({'status':_0x4f01c2,'extStatus':_0x22ced9,'batteryStatus':_0x5b287a});}static async[_0x3cb41c(0xc1)](_0x5cdf30,_0x48d47c=0x1){const _0x1315e1=_0x3cb41c;return napCatCore['session'][_0x1315e1(0xbb)]()['setBuddyProfileLike']({'friendUid':_0x5cdf30,'sourceId':0x47,'doLikeCount':_0x48d47c,'doLikeTollCount':0x0});}static async[_0x3cb41c(0xf5)](_0x562c24){const _0x4e0e7c=_0x3cb41c,_0x3aedc5=napCatCore[_0x4e0e7c(0xd7)][_0x4e0e7c(0xab)]()[_0x4e0e7c(0xaf)](_0x562c24);return{'result':_0x3aedc5?.[_0x4e0e7c(0xd2)],'errMsg':_0x3aedc5?.['errMsg']};}static async[_0x3cb41c(0xc8)](){}static async['getUserInfo'](_0x3986f0){}static async[_0x3cb41c(0xb1)](_0x3cf6f2){const _0x55887=_0x3cb41c,_0x2f6d90={'bhwzP':function(_0x32bd02,_0x12b688){return _0x32bd02(_0x12b688);},'PQXuJ':_0x55887(0xc4),'KfbqA':function(_0x1252fd){return _0x1252fd();}},_0x373321=napCatCore[_0x55887(0xd7)][_0x55887(0xab)]();return new Promise((_0x1d04b0,_0x393af0)=>{const _0x83030e=_0x55887,_0x3e2700={'ELvdz':function(_0x36fcdb,_0x3aba24){const _0x549cc3=_0x3936;return _0x2f6d90[_0x549cc3(0xf1)](_0x36fcdb,_0x3aba24);},'pXXgf':_0x2f6d90[_0x83030e(0xf6)]},_0x438fb9=_0x2f6d90[_0x83030e(0xbd)](randomUUID);let _0xb86fe7=![],_0x36c494=undefined,_0x37d325=!![];setTimeout(()=>{const _0x1dc3e5=_0x83030e;!_0xb86fe7&&(_0x36c494?_0x3e2700[_0x1dc3e5(0xc2)](_0x1d04b0,_0x36c494):_0x3e2700[_0x1dc3e5(0xc2)](_0x393af0,_0x3e2700[_0x1dc3e5(0xeb)])),userDetailHandlers[_0x1dc3e5(0xdb)](_0x438fb9);},0x1388),userDetailHandlers[_0x83030e(0xd8)](_0x438fb9,_0x5053ba=>{const _0x18c3de=_0x83030e;_0x5053ba[_0x18c3de(0xae)]===_0x3cf6f2&&(uid2UinMap[_0x3cf6f2]=_0x5053ba['uin'],_0x37d325?(_0x36c494=_0x5053ba,_0x37d325=![]):(_0xb86fe7=!![],_0x1d04b0(_0x5053ba)));}),_0x373321['getUserDetailInfoWithBizInfo'](_0x3cf6f2,[0x0])[_0x83030e(0xe6)](_0x54b53d=>{});});}static async[_0x3cb41c(0xb8)](_0x2a9bc2,_0x30fe6c=!![]){const _0xaeed02=_0x3cb41c,_0x651a3={'mZVgI':function(_0x30e83d,_0x943944){return _0x30e83d||_0x943944;},'BCugT':function(_0x4c785a,_0x578748){return _0x4c785a-_0x578748;},'QLkuh':function(_0x5acf01,_0x465eeb){return _0x5acf01*_0x465eeb;},'JgjDe':function(_0x16cb7b,_0x212c45){return _0x16cb7b>_0x212c45;},'ctaPT':function(_0x19bd67,_0x46a8ba){return _0x19bd67===_0x46a8ba;},'WDXot':function(_0x5d7197,_0x5316ab,_0x3f719f){return _0x5d7197(_0x5316ab,_0x3f719f);},'QMbyW':_0xaeed02(0xdf)},_0x2895e0=[],_0x2dcb60={};for(const _0x2deaf5 in _0x2a9bc2){const _0x22c83d=Credentials[_0xaeed02(0xf0)][_0xaeed02(0xff)](_0x2a9bc2[_0x2deaf5]),_0x31c391=Credentials['PskeyTime'][_0xaeed02(0xff)](_0x2a9bc2[_0x2deaf5]);_0x651a3['mZVgI'](!_0x22c83d,!_0x31c391)||_0x651a3[_0xaeed02(0xf3)](Date['now'](),_0x31c391)>_0x651a3[_0xaeed02(0xdd)](0x708,0x3e8)||!_0x30fe6c?_0x2895e0['push'](_0x2a9bc2[_0x2deaf5]):_0x2dcb60[_0x2a9bc2[_0x2deaf5]]=_0x22c83d;}let _0x2c8563={'result':0x0,'errMsg':'','domainPskeyMap':new Map()};_0x651a3[_0xaeed02(0xfe)](_0x2895e0[_0xaeed02(0xe8)],0x0)&&(_0x2c8563=await napCatCore[_0xaeed02(0xd7)][_0xaeed02(0xfc)]()[_0xaeed02(0xcc)](_0x2895e0,!![]));const _0x132b0b=_0x2c8563[_0xaeed02(0xd1)];for(const _0x3d0f58 of _0x132b0b[_0xaeed02(0xb4)]()){Credentials[_0xaeed02(0xf0)]['set'](_0x3d0f58[0x0],_0x3d0f58[0x1]),Credentials['PskeyTime'][_0xaeed02(0xd8)](_0x3d0f58[0x0],Date['now']());}const _0x492baa=Object['assign'](Object[_0xaeed02(0xc6)](_0x132b0b),_0x2dcb60);if(_0x651a3[_0xaeed02(0xc3)](_0x2c8563[_0xaeed02(0xd2)],0x0))return _0x492baa;else _0x651a3[_0xaeed02(0xd4)](logError,_0x651a3[_0xaeed02(0xfd)],_0x2c8563[_0xaeed02(0xcb)]);return{};}static async[_0x3cb41c(0xde)](){const _0x116ebe=_0x3cb41c,_0x13068b=await napCatCore['session'][_0x116ebe(0xec)]()[_0x116ebe(0xde)]({'justFetchMsgConfig':'1','type':0x1,'version':0x0,'aioKeywordVersion':0x0});return _0x13068b?.['response']?.[_0x116ebe(0xd5)];}static async[_0x3cb41c(0xb2)](){const _0x349bbe=_0x3cb41c,_0x3ccedf={'yvHKD':function(_0x26a19b,_0x4af1bd){return _0x26a19b+_0x4af1bd;},'DIOtn':function(_0x4921b1,_0x5895ca){return _0x4921b1+_0x5895ca;},'mxlGh':function(_0x43356b,_0x1908da){return _0x43356b+_0x1908da;},'pPIGk':function(_0x35c4d7,_0x3a2b9d){return _0x35c4d7+_0x3a2b9d;},'wZaKE':_0x349bbe(0xd9),'VJCUC':_0x349bbe(0xef),'nReyC':'&u1=https%3A%2F%2Fuser.qzone.qq.com%2F','RcThk':_0x349bbe(0xad),'LuFUY':function(_0xc9218d,_0x312ea1,_0x1519a5){return _0xc9218d(_0x312ea1,_0x1519a5);},'xAKql':'请求获取Cookies时失败'},_0x369ef2=_0x3ccedf['yvHKD'](_0x3ccedf[_0x349bbe(0xcf)](_0x3ccedf[_0x349bbe(0xd6)](_0x3ccedf[_0x349bbe(0xbf)](_0x3ccedf[_0x349bbe(0xbf)](_0x3ccedf[_0x349bbe(0xe0)],selfInfo[_0x349bbe(0xda)]),_0x3ccedf[_0x349bbe(0xc0)]),Credentials['ClientKey']),_0x3ccedf[_0x349bbe(0xc5)]),selfInfo[_0x349bbe(0xda)])+_0x3ccedf[_0x349bbe(0xf4)];let _0x4ecc1b={};try{_0x4ecc1b=await RequestUtil[_0x349bbe(0xb5)](_0x369ef2);}catch(_0x5c92f2){_0x3ccedf[_0x349bbe(0xbe)](logDebug,_0x3ccedf['xAKql'],_0x5c92f2),_0x4ecc1b={};}return _0x4ecc1b;}static async['getSkey'](_0x506203=!![]){const _0x42f3a8=_0x3cb41c,_0x3929e4={'RmQOP':function(_0x4b0a84,_0x3c7449){return _0x4b0a84-_0x3c7449;},'CMoWD':function(_0x3a36d2,_0x40d9f2){return _0x3a36d2*_0x40d9f2;},'LIDEI':function(_0x3f4c69,_0x3f6ea1){return _0x3f4c69+_0x3f6ea1;},'iBMbg':function(_0x4e502d,_0x16231d){return _0x4e502d+_0x16231d;},'EvKFL':function(_0x38c9a3,_0x3ecc83){return _0x38c9a3+_0x3ecc83;},'ibFaJ':_0x42f3a8(0xd9),'GuqfJ':_0x42f3a8(0xef),'radTM':_0x42f3a8(0xb7),'ACLdB':_0x42f3a8(0xf9)};try{if(Credentials[_0x42f3a8(0xb6)]==0x0||_0x3929e4[_0x42f3a8(0xca)](Date[_0x42f3a8(0xb9)](),Credentials[_0x42f3a8(0xb6)])>_0x3929e4[_0x42f3a8(0xc7)](0x3e8,0xe10)||!_0x506203){const _0x328abb=await napCatCore[_0x42f3a8(0xd7)][_0x42f3a8(0xcd)]()['forceFetchClientKey']('');if(_0x328abb[_0x42f3a8(0xd2)]!==0x0)return'';const _0x3027b7=_0x328abb[_0x42f3a8(0xe5)],_0x5b17d7=_0x328abb[_0x42f3a8(0xe2)],_0x131ba1=_0x3929e4[_0x42f3a8(0xbc)](_0x3929e4[_0x42f3a8(0xb3)](_0x3929e4['LIDEI'](_0x3929e4[_0x42f3a8(0xaa)](_0x3929e4[_0x42f3a8(0xe4)],selfInfo[_0x42f3a8(0xda)]),_0x3929e4[_0x42f3a8(0xfa)]),_0x3027b7),_0x3929e4['radTM'])+_0x5b17d7;let _0x5141e1={};try{_0x5141e1=await RequestUtil[_0x42f3a8(0xb5)](_0x131ba1);}catch(_0x2421b8){logDebug(_0x3929e4[_0x42f3a8(0x100)],_0x2421b8),_0x5141e1={};}const _0x45657a=_0x5141e1[_0x42f3a8(0xea)];if(!_0x45657a)return'';return Credentials[_0x42f3a8(0xf7)]=_0x3027b7,Credentials[_0x42f3a8(0xee)]=_0x5b17d7,Credentials[_0x42f3a8(0xb6)]=Date[_0x42f3a8(0xb9)](),Credentials[_0x42f3a8(0xf8)]=_0x45657a,_0x45657a;}return Credentials[_0x42f3a8(0xf8)];}catch(_0x544522){}return undefined;}}