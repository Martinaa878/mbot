const _0x5451cb=_0x149f;(function(_0x36a9ce,_0x3a00b3){const _0xff0c11=_0x149f,_0x466239=_0x36a9ce();while(!![]){try{const _0x23ab73=parseInt(_0xff0c11(0x153))/0x1+-parseInt(_0xff0c11(0x15c))/0x2*(parseInt(_0xff0c11(0x163))/0x3)+parseInt(_0xff0c11(0x14e))/0x4*(parseInt(_0xff0c11(0x14f))/0x5)+-parseInt(_0xff0c11(0x14b))/0x6+-parseInt(_0xff0c11(0x15d))/0x7+-parseInt(_0xff0c11(0x155))/0x8*(parseInt(_0xff0c11(0x15f))/0x9)+parseInt(_0xff0c11(0x158))/0xa;if(_0x23ab73===_0x3a00b3)break;else _0x466239['push'](_0x466239['shift']());}catch(_0x3c525a){_0x466239['push'](_0x466239['shift']());}}}(_0x1bb7,0xab985));function _0x1bb7(){const _0x479e30=['10718920VhBCQh','test','link','linkgroup','1346PbeSuX','195104ZFatkL','💋\x20No\x20soy\x20administrador','36lPjOsH','chat','find','https://chat.whatsapp.com/','1464KbcFiX','botAdmin','4406808EwaHjZ','help','participants','2536728GFNAbh','5NDWzUL','reply','user','admin','480795DQWyLo','tags','786504cOOOJE','groupMetadata','command'];_0x1bb7=function(){return _0x479e30;};return _0x1bb7();}import{areJidsSameUser}from'@adiwajshing/baileys';let handler=async(_0x4ee7f9,{conn:_0xe7f413,args:_0x5351a7})=>{const _0x28db30=_0x149f;let _0x1ba99b=_0x4ee7f9[_0x28db30(0x160)];if(/^[0-9]{5,16}-?[0-9]+@g\.us$/[_0x28db30(0x159)](_0x5351a7[0x0]))_0x1ba99b=_0x5351a7[0x0];if(!/^[0-9]{5,16}-?[0-9]+@g\.us$/[_0x28db30(0x159)](_0x1ba99b))throw'📵\x20Sólo\x20se\x20puede\x20usar\x20en\x20grupos';let _0x5a4b3e=await _0xe7f413[_0x28db30(0x156)](_0x1ba99b);if(!_0x5a4b3e)throw'groupMetadata\x20is\x20undefined\x20:\x5c';if(!('participants'in _0x5a4b3e))throw'participants\x20no\x20está\x20definido\x20:(';let _0x5b42cd=_0x5a4b3e[_0x28db30(0x14d)][_0x28db30(0x161)](_0x1e7ddb=>areJidsSameUser(_0x1e7ddb['id'],_0xe7f413[_0x28db30(0x151)]['id']));if(!_0x5b42cd)throw'🧑🏻‍💻\x20No\x20estoy\x20en\x20ese\x20grupo\x20:(';if(!_0x5b42cd[_0x28db30(0x152)])throw _0x28db30(0x15e);_0x4ee7f9[_0x28db30(0x150)](_0x28db30(0x162)+await _0xe7f413['groupInviteCode'](_0x1ba99b));};handler[_0x5451cb(0x14c)]=['link'],handler[_0x5451cb(0x154)]=['group'],handler[_0x5451cb(0x157)]=[_0x5451cb(0x15a),_0x5451cb(0x15b)],handler['admin']=!![],handler['group']=!![],handler[_0x5451cb(0x14a)]=!![];function _0x149f(_0x302558,_0x2f66cf){const _0x1bb772=_0x1bb7();return _0x149f=function(_0x149fc5,_0x2a405e){_0x149fc5=_0x149fc5-0x14a;let _0x589379=_0x1bb772[_0x149fc5];return _0x589379;},_0x149f(_0x302558,_0x2f66cf);}export default handler;