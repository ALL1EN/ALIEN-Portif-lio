
(()=>{
const LAND_B64="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA/v8/AOD//z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+///j/////79/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD//3/+//////8PAAAAgB0AABgAAAAAAH8AAAAAAAAAAAAAAAAAAAAAAAAAAPD//wf8//////8BAACA/z8AAAAAAAAAAP4AAAAAAAAAAAAAAAAAAAAAAAAQ+Izv//j///////8AAAAAfwAAAAAAAAAAAAAfAAAAAAAAAAAAAAAAAAAAAOAYABDwP+D///////8BAAAAPAQAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAHzAgPP5H8D///////8AAAAAAAAAAAAA8AAAAID/DwAAAAAAAAAAAAAAAAAAAID/g7P/DwAA/v////8AAAAAAAAAAADgDwAAwP//PwAA4B8AAAAAAAAAAAAAAAAYACD8BwAA+P////8AAAAAAAAAAAB4AAAA/P//BwAAAAAAAAAAAAAAAAAAAP8AhPM5ewAA8P///38AAAAAAAAAAAAcAADg/////4cHAAYAAAAAAAAAAAAAgP9/x3f89wAA4P///x8AAAAAAAAAAAAPAB7g//////8fAD8AAAAAAwAAAAAAgOf/B3f8/wsA4P///z8AAAAAAAAAAAAPAM////////8f//8HAAAAAAD4fwAAAMD/H/j4/38A4P///zcAAAAAAPgDAAAAgN//////////////DwAAAAD+///h/4//P+7Bh/8BwP7//w8AAAAAwP8fAAAAj9///////////////88/A8D///////8DB+zPB/8AgP///wEAAAAA8P//BwHzf57/////////////////DwD////////////vh/kPwP//BwAAAAAA/P//H/P//9///////////////////4H8////////////Afw/wP//AQAQAAAA/v+/X////+///////////////////vH///////////9fAP4YgP8fAPA/AAAA/+N/8P//////////////////////YMD7///////////Pw/8HAP8HAOAfAADA//F//v////////////////////9/AAD8///////////BBPAHAP8HAAACAADw//z///////////////////////9/AID///////////8AQ8ABAPwBAAAAAAD8P/7///////////////////////9/AMD//////////z8AwA8AAPgBAAAAAAD+H/7/////////////////////O/8DAID///z//////z8AwD8AAMABAAAAAAD+P/z///////////////////9/wH8AAAD8NwD//////x8AwH8MAAAAAAAAAAD+P+D///////////////////97cAAAAADAAwD8/////38AwP8eAAAAAAAAgACcH/D//////////////////wEAOAAAAADADADA//////8AgP8/AAAAAAAAwAMAH/T//////////////////wAAfgAAAAAwAACA//////8PgP9/AAAAAAAAwAFwD/7/////////////////PwAAfwAAAAAOAAAA//////9/wP//AAAAAAAAgAOwA/7/////////////////DwCAPwAAAAAAAAAA/v//////4///BwAAAAAAOAdg8P//////////////////HwAAHwAAAAAAAACA+P//////4///DwAAAAAAPA/8/////////////////////wUADwAAAAAAAAAA+P//////4///DwAAAAAAnD///////////////////////wcAAwAAAAAAAAAA8P//////7///DwAAAAAAgJ///////////////////////wUAAwAAAAAAAAAA8P//////////DAAAAAAAgOH//////////////////////w0AAAAAAAAAAAAA4P////////8BPAAAAAAAAPz//////////////////////wwAAAAAAAAAAAAAgP7//////38HfgAAAAAAAP///////////////////////wQAAAAAAAAAAAAAAP////////8HcAAAAAAAAP7/////////////////////fwQAAAAAAAAAAAAAAP////////+PAAAAAAAAAPz//////P//////////////PwQAAAAAAAAAAAAAAP//////////AAAAAAAAAPj////j/v//////////////HwAAAAAAAAAAAAAAAP////////8NAAAAAAAAAPj/+P8B/P//////////////DwQAAAAAAAAAAAAAAP///////z8AAAAAAAAAeP7H8/8A8P//////////////Bx4AAAAAAAAAAAAAAP///////x8AAAAAAAAA+H+gw/8A4P////////////9/AA8AAAAAAAAAAAAAAP///////x8AAAAAAAAA+H8Aj//x4f////////////8/AAEAAAAAAAAAAAAAAP///////wMAAAAAAAAA+B8wuM///////////////98fAAMAAAAAAAAAAAAAAP///////wMAAAAAAAAA+A8wEMf//////////////2cOAAMAAAAAAAAAAAAAAP7//////wEAAAAAAAAA+A8AEM7//////////////wMOgAEAAAAAAAAAAAAAAP7//////wAAAAAAAAAA+AcABob//////////////zccwAEAAAAAAAAAAAAAAPz//////wAAAAAAAAAAQOB/AAS2/////////////x888AEAAAAAAAAAAAAAAPj//////wAAAAAAAAAAQPx/AAAA/////////////w8c/gEAAAAAAAAAAAAAAPD/////fwAAAAAAAAAA4P9/AAAA/////////////w+AHwAAAAAAAAAAAAAAAMD/////HwAAAAAAAAAA8P9/AACA/////////////x/AAwAAAAAAAAAAAAAAAID/////DwAAAAAAAAAA+P//BweA/////////////x/AAAAAAAAAAAAAAAAAAID/////BwAAAAAAAAAA/P//D3/E/////////////z9AAAAAAAAAAAAAAAAAAAD5////BwAAAAAAAAAA/P///////////////////z8AAAAAAAAAAAAAAAAAAAD6/z8HBgAAAAAAAAAA/P///////8///////////z8AAAAAAAAAAAAAAAAAAAD0/w8ABgAAAAAAAAAA/v///////5///////////z8AAAAAAAAAAAAAAAAAAADu/wcADgAAAAAAAACA//////+//x///////////x8AAAAAAAAAAAAAAAAAAADI/wcADAAAAAAAAADA//////8//z/g/////////w8AAAAAAAAAAAAAAAAAAACQ/wcACAAAAAAAAADg//////9//v+I/////////wcAAAAAAAAAAAAAAAAAAAAw/wMAAAAAAAAAAADg//////9//v8cgP///////ycAAAAAAAAAAAAAAAAAAAAg/gMAAAAAAAAAAADw/////////P9/AP///////zEAAAAAAAAAAAAAAAAAAAAA/AMAPQAAAAAAAAD4////////+P//AP7/////fxAAAAAAAAAAAAAAAAAAAAAA+AcYYAAAAAAAAAD4////////+f9/APz/B///DgAAAAAAAAAAAAAAAAAAAAAA/AcewAEAAAAAAAD4////////8f8/AOD/B/9/BAAAAAAAAAAAAAAAAQAAAAAA+A8eADgAAAAAAADw////////4f8/AOD/Af4/BgAAAAAAAAAAAAAAAAAAAAAA8J8PQHgCAAAAAADw////////4/8fAOD/APw/AgAAAAAAAAAAAAAAAAAAAAAAgP8PAAAAAAAAAADw////////x/8HAOB/APx/ADAAAAAAAAAAAAAAAAAAAAAAAP4PAAAAAAAAAAD4////////h/8BAOA/APz/ADAAAAAAAAAAAAAAAAAAAAAAAID/AAAAAAAAAAD4////////j/8AAMAPAMD/ATAAAAAAAAAAAAAAAAAAAAAAAAD/AQAAAAAAAAD4////////nx8AAMAPAMD/ATAAAAAAAAAAAAAAAAAAAAAAAAD8AQAAAAAAAAD4////////vwcAAIAPAMD/AeAAAAAAAAAAAAAAAAAAAAAAAADgAQAAAAAAAAD4////////fwAAAIAPAMD8AQAAAAAAAAAAAAAAAAAAAAAAAADAAFgAAAAAAADw////////f2AAAAAPAID4AUACAAAAAAAAAAAAAAAAAAAAAADAAf5TAAAAAADg/////////38AAAAPAEDwAIAAAAAAAAAAAAAAAAAAAAAAAAAAE+9/AAAAAADA/////////38AAAAXAEAgAAAAAAAAAAAAAAAAAAAAAAAAAAAA7v//AAAAAACA/////////z8AAAASAMAAAIADAAAAAAAAAAAAAAAAAAAAAAAAyP//AQAAAACA/////////z8AAAAwAIABAEAHAAAAAAAAAAAAAAAAAAAAAAAAwP//AwAAAAAA/v///////x8AAAAwAAADAAMDAAAAAAAAAAAAAAAAAAAAAAAAwP//fwAAAAAA/A/+/////x8AAAAAAAAHgAcAAAAAAAAAAAAAAAAAAAAAAAAAgP///wAAAAAAEAD8/////w8AAAAAADAGwAMAAAAAAAAAAAAAAAAAAAAAAAAAgP///wEAAAAAAADg/////wcAAAAAAGAG4AMAAAAAAAAAAAAAAAAAAAAAAAAAwP///wEAAAAAAADA/////wMAAAAAAMAM+AMAAAAAAAAAAAAAAAAAAAAAAAAA4P///wMAAAAAAADg/////wEAAAAAAIAP/gMIAAAAAAAAAAAAAAAAAAAAAAAA8P///wMAAAAAAADg////fwAAAAAAAIAH/vMYAAAAAAAAAAAAAAAAAAAAAAAA+P///wcAAAAAAADg////PwAAAAAAAAAP/gMAAQAAAAAAAAAAAAAAAAAAAAAA+P///38AAAAAAADg////PwAAAAAAAAAe/DmAAwAAAAAAAAAAAAAAAAAAAAAA+P////8BAAAAAADA////HwAAAAAAAAA+/DkA8wEAAAAAAAAAAAAAAAAAAAAA+P////8fAAAAAACA////DwAAAAAAAAA8wCgE/g8AAAAAAAAAAAAAAAAAAAAA+P////9/AAAAAACA////BwAAAAAAAAA4AEAA+B8QAAAAAAAAAAAAAAAAAAAA+P//////AQAAAAAA////BwAAAAAAAAAwAAAAwD8OAAAAAAAAAAAAAAAAAAAA+P//////AQAAAAAA////BwAAAAAAAADAAQAAwP+AAAAAAAAAAAAAAAAAAAAA8P//////AQAAAAAA/v//BwAAAAAAAACAHwAAwH8AAAAAAAAAAAAAAAAAAAAA4P//////AQAAAAAA/v//BwAAAAAAAAAAQBYGAMcAAAAAAAAAAAAAAAAAAAAA4P//////AQAAAAAA/v//DwAAAAAAAAAAAAABAIADAAAAAAAAAAAAAAAAAAAAwP//////AAAAAAAA/v//DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP////9/AAAAAAAA/P//HwAAAAAAAAAAAAAAAQQAAAAAAAAAAAAAAAAAAAAAgP////8/AAAAAAAA/v//HyAAAAAAAAAAAACAHwQAAAAAAAAAAAAAAAAAAAAAAP////8fAAAAAAAA////HzAAAAAAAAAAAADADwwAAAAAAAAAAAAAAAAAAAAAAP////8fAAAAAAAA////HzAAAAAAAAAAAADuDxwAAAAAAAAAAAAAAAAAAAAAAP7///8fAAAAAAAA////DzwAAAAAAAAAAAD/Dx4AAAAAAAAAAAAAAAAAAAAAAPj///8fAAAAAAAA////Dz8AAAAAAAAAAAD/Pz4AAACAAAAAAAAAAAAAAAAAAPD///8fAAAAAAAA////Az8AAAAAAAAAAMD//z8AAAAAAAAAAAAAAAAAAAAAAOD///8PAAAAAAAA////AR8AAAAAAAAAAMD//z8AAAAAAAAAAAAAAAAAAAAAAMD///8PAAAAAAAA/v9/AB8AAAAAAAAAAOD///8AAAAAAAAAAAAAAAAAAAAAAMD///8PAAAAAAAA/v9/AB8AAAAAAAAAAPz///8BAAEAAAAAAAAAAAAAAAAAAMD///8HAAAAAAAA/P9/gA8AAAAAAAAAgP////8BAAIAAAAAAAAAAAAAAAAAAMD///8DAAAAAAAA/P//gA8AAAAAAAAAwP////8HAAAAAAAAAAAAAAAAAAAAAMD//38AAAAAAAAA/P//AA8AAAAAAAAAwP////8HAAAAAAAAAAAAAAAAAAAAAOD//x8AAAAAAAAA/P9/AAcAAAAAAAAA4P////8PAAAAAAAAAAAAAAAAAAAAAOD//w8AAAAAAAAA+P8fAAIAAAAAAAAAwP////8fAAAAAAAAAAAAAAAAAAAAAOD//wcAAAAAAAAA+P8fAAAAAAAAAAAAwP////8fAAAAAAAAAAAAAAAAAAAAAOD//w8AAAAAAAAA+P8fAAAAAAAAAAAAwP////8fAAAAAAAAAAAAAAAAAAAAAOD//wcAAAAAAAAA8P8PAAAAAAAAAAAAwP////8/AAAAAAAAAAAAAAAAAAAAAPD//wMAAAAAAAAA4P8HAAAAAAAAAAAAgP////8fAAAAAAAAAAAAAAAAAAAAAPD//wMAAAAAAAAA4P8HAAAAAAAAAAAAgP////8fAAAAAAAAAAAAAAAAAAAAAPD//wEAAAAAAAAAwP8DAAAAAAAAAAAAAP////8fAAAAAAAAAAAAAAAAAAAAAPD//wAAAAAAAAAAwP8BAAAAAAAAAAAAAP8D/P8PAAAAAAAAAAAAAAAAAAAAAPD/fwAAAAAAAAAAwH8AAAAAAAAAAAAAgP8A+P8PAAAAAAAAAAAAAAAAAAAAAPD/PwAAAAAAAAAAgAEAAAAAAAAAAAAAAAcA6P8HAAAAAAAAAAAAAAAAAAAAAPj/BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP8HAAACAAAAAAAAAAAAAAAAAPj/BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8DAAAEAAAAAAAAAAAAAAAAAPz/BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8DAAAIAAAAAAAAAAAAAAAAAPz/AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGwAAAA4AAAAAAAAAAAAAAAAAPg/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAPw/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAPwHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAALAAAAAAAAAAAAAAAAAPwPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAIADAAAAAAAAAAAAAAAAAPgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAMABAAAAAAAAAAAAAAAAAPwHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAP4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgAAAAAAAAAAAAAAAAAAP4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAP4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH6AAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAAAAAAAAAAAAAAAAIAfAAAAAAAeeIDEDwAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAPD/EADA/////////z8AAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAwP///wH4//////////8DAAAAAAAAAAAAAAAAAAAAAHAfAAAAAAAAAAAAAADw+////wP+////////////BwAAAAAAAAAAAAAAAAAAAPA/AAAAAAAAAAA+//v//////+D/////////////PwAAAAAAAAAAAAAAAAAAAP5+AAAAAAAA9v////////////D//////////////38AAAAAAAAAAAAAwAMAABB/AAAAAACA/////////////////////////////38AAAAAAAAAAAQA4Pf/efx/AAAAAADw/////////////////////////////x8AAAAAAAD4//8fgP////8/AAAAAADw/////////////////////////////wMAAAAAAPz///////////8HAAAAAAD+/////////////////////////////wAAAAAAAP7//////////z8AAAAAAP///////////////////////////////wAAAADA/////////////wMAAAAA8P///////////////////////////////wAAAACG////////////PwAAAPgA/////////////////////////////////wMAAAAMgP//////////fwAAAP4Bwv//////////////////////////////HwAAAAAAAP7//////////w/4wH8AwP//////////////////////////////DwAAAAAA/v////////////8HAAD8////////////////////////////////PwAAAAAA+P//////////////4f///////////////////////////////////wEAAAAA+P///////////////////////////////////////////////////x8Amg8AwP////////////////////////////////////////////////////8JAAAAwAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
const FLAGS={"us": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icons-us\" viewBox=\"0 0 512 512\"> <path fill=\"#bd3d44\" d=\"M0 0h512v512H0\"/> <path stroke=\"#fff\" stroke-width=\"40\" d=\"M0 58h512M0 137h512M0 216h512M0 295h512M0 374h512M0 453h512\"/> <path fill=\"#192f5d\" d=\"M0 0h390v275H0z\"/> <marker id=\"us-a\" markerHeight=\"30\" markerWidth=\"30\"> <path fill=\"#fff\" d=\"m15 0 9.3 28.6L0 11h30L5.7 28.6\"/> </marker> <path fill=\"none\" marker-mid=\"url(#us-a)\" d=\"m0 0 18 11h65 65 65 65 66L51 39h65 65 65 65L18 66h65 65 65 65 66L51 94h65 65 65 65L18 121h65 65 65 65 66L51 149h65 65 65 65L18 177h65 65 65 65 66L51 205h65 65 65 65L18 232h65 65 65 65 66z\"/> </svg> ", "br": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icons-br\" viewBox=\"0 0 512 512\"> <g stroke-width=\"1pt\"> <path fill=\"#229e45\" fill-rule=\"evenodd\" d=\"M0 0h512v512H0z\"/> <path fill=\"#f8e509\" fill-rule=\"evenodd\" d=\"m261.4 405.4 229.8-149.2L260 106.6l-230.7 150z\"/> <path fill=\"#2b49a3\" fill-rule=\"evenodd\" d=\"M361.5 256a97.2 97.2 0 1 1-194.3-.2 97.2 97.2 0 0 1 194.3.2\"/> <path fill=\"#ffffef\" fill-rule=\"evenodd\" d=\"m232.3 314.2-3-1.8-3.1 1.6.7-3.5-2.4-2.5 3.4-.4 1.6-3.2 1.5 3.3 3.4.6-2.6 2.4m65.7 20-3-1.8-3.2 1.6.7-3.5-2.4-2.5 3.5-.4 1.6-3.2 1.4 3.3 3.4.6-2.5 2.4m-27.6-22.9-2.6-1.5-2.7 1.3.6-3-2-2.2 2.9-.3 1.4-2.7 1.2 2.8 3 .5-2.2 2m66.2-6.4-2.6-1.5-2.6 1.3.6-2.9-2-2.1 2.9-.4 1.3-2.6 1.3 2.7 2.9.5-2.2 2m-66.6-16.7-3-1.8-3.1 1.6.7-3.5-2.4-2.5 3.4-.4 1.6-3.1 1.5 3.2 3.4.6-2.6 2.4M188 245l-3-1.8-3 1.6.6-3.5-2.4-2.5 3.5-.4 1.6-3.2 1.4 3.3 3.4.6-2.5 2.4m10.1 43.5-3-1.7-3.1 1.5.7-3.4-2.4-2.6 3.4-.4 1.6-3 1.5 3.1 3.4.7-2.6 2.3m100.6-51.3-2.6-1.5-2.8 1.3.6-3-2-2.3 3-.3 1.4-2.8 1.3 2.9 3 .5-2.3 2.1m-5 29.2L290 255l-2.1 1 .4-2.4-1.6-1.7 2.4-.3 1.1-2.2 1 2.3 2.4.4-1.8 1.6m-108.4 38.5-2-1.2-2.1 1 .4-2.3-1.6-1.7 2.4-.2 1-2 1 2 2.3.5-1.7 1.6m152.6 11.5-1.7-.8-1.7.7.4-1.7-1.3-1.3 1.9-.2.9-1.5.7 1.6 1.9.3-1.4 1.2\"/> <path fill=\"#ffffef\" fill-rule=\"evenodd\" d=\"m183.5 292.3-2-1.2-2.1 1 .5-2.3-1.7-1.7 2.3-.2 1.1-2 1 2 2.3.5-1.7 1.6\"/> <path fill=\"#ffffef\" fill-rule=\"evenodd\" d=\"m183.5 292.3-2-1.2-2.1 1 .5-2.3-1.7-1.7 2.3-.2 1.1-2 1 2 2.3.5-1.7 1.6m32.2 2.3-2-1.2-2 1 .4-2.3-1.6-1.7 2.3-.2 1-2.1 1 2.1 2.3.5-1.7 1.6m-3.7 13-2-1.2-2 1 .4-2.3-1.6-1.7 2.3-.3 1-2 1 2 2.3.5-1.7 1.6m66.7-17-2-1.2-2.1 1 .4-2.3-1.6-1.7 2.3-.2 1.1-2.1 1 2.1 2.2.4-1.7 1.6m-19.1 2.4-2-1.2-2.1 1 .5-2.3-1.6-1.7 2.3-.2 1-2.1 1 2.1 2.3.4-1.7 1.6m-52.5-4.4-1.2-.7-1.3.6.2-1.5-1-1 1.5-.2.7-1.3.5 1.4 1.5.2-1 1M333.2 310l-2-1.1-2.1 1 .5-2.3-1.6-1.7 2.3-.3 1-2 1 2 2.3.5-1.7 1.6m-16 4.4-1.6-1-1.7 1 .4-2-1.4-1.4 2-.2.8-1.7.8 1.7 2 .4-1.5 1.3m8 1.8-1.6-1-1.6.9.3-1.8-1.2-1.3 1.8-.2.8-1.6.7 1.6 1.8.3-1.3 1.3m22.2-17.4-1.5-.9-1.6.8.4-1.7-1.2-1.3 1.7-.2.8-1.5.7 1.6 1.7.3-1.3 1.2M317 322.9l-2-1.1-2 1 .5-2.2-1.6-1.5 2.2-.3 1.1-1.9 1 2 2.1.4-1.6 1.4m.4 10.9-1.8-1-1.8.9.4-2.2-1.4-1.5 2-.3 1-1.9.8 2 2 .4-1.5 1.4M302.3 312l-1.5-.9-1.6.8.4-1.8-1.2-1.2 1.7-.2.8-1.6.7 1.6 1.7.3-1.3 1.2m-13.5 1.8-1.5-.9-1.6.8.4-1.8-1.2-1.2 1.7-.2.8-1.6.7 1.6 1.7.3-1.2 1.2M265 291.4l-1.5-.9-1.6.8.4-1.7-1.2-1.3 1.7-.2.8-1.5.7 1.6 1.7.3-1.3 1.1m2.9 43.5-1.3-.7-1.3.7.3-1.5-1-1 1.4-.3.7-1.3.6 1.4 1.5.2-1.1 1m-35.2-66-3-1.7-3.1 1.5.7-3.4-2.4-2.6 3.4-.4 1.6-3.1 1.5 3.2 3.4.6-2.6 2.4\"/> <path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M355.1 291a95 95 0 0 0 4.4-15.1c-51.6-45.4-109.2-68.7-182-63.9a95 95 0 0 0-6.4 15.9 233 233 0 0 1 184 63z\"/> <path fill=\"#309e3a\" d=\"m331.9 265.4 1.8 1a2.6 2.6 0 0 0-.2 1.8c.1.4.5.9 1 1.2.6.4 1.1.6 1.6.6.4 0 .8-.3 1-.6.1-.2.2-.4.1-.7l-.3-.8-1.2-1.3a5.9 5.9 0 0 1-1.4-2.3 2.8 2.8 0 0 1 1.6-3.3 2.9 2.9 0 0 1 1.7-.2 5.3 5.3 0 0 1 2 .9 6 6 0 0 1 2 2.4 3 3 0 0 1-.5 2.6l-1.8-1.1c.2-.5.3-1 .2-1.4-.1-.3-.5-.7-1-1-.5-.4-1-.5-1.4-.5a.8.8 0 0 0-.6.3.8.8 0 0 0-.1.7c0 .4.5 1 1.2 1.7l1.5 2a3 3 0 0 1-.2 3.2 3.1 3.1 0 0 1-1.4 1.1 3 3 0 0 1-1.9.2 6 6 0 0 1-2.1-1 4.6 4.6 0 0 1-2-2.5c-.3-.9-.2-1.9.4-3m-8.8-5.7 2 1a2.6 2.6 0 0 0-.2 1.6c.1.5.5 1 1 1.3.6.4 1.1.5 1.6.4.4 0 .8-.2 1-.6a1 1 0 0 0 .1-.6c0-.3-.1-.5-.4-.8l-1.2-1.3a6 6 0 0 1-1.5-2.2 2.8 2.8 0 0 1 .3-2.4 2.8 2.8 0 0 1 1.2-1 3 3 0 0 1 1.7-.2c.6 0 1.2.3 2 .8 1 .7 1.8 1.4 2 2.3a3 3 0 0 1-.3 2.6l-1.9-1.1c.3-.5.3-1 .2-1.3-.2-.4-.5-.7-1-1a2.4 2.4 0 0 0-1.5-.5.8.8 0 0 0-.6.4.8.8 0 0 0 0 .7c0 .3.5.9 1.2 1.7.8.7 1.3 1.4 1.6 1.8a3 3 0 0 1-.1 3.3 3.2 3.2 0 0 1-3.2 1.4 6.1 6.1 0 0 1-2.2-.9 4.7 4.7 0 0 1-2.1-2.4 4.1 4.1 0 0 1 .3-3m-10.8-3 5.6-9 6.7 4-1 1.6-4.8-3-1.3 2 4.6 2.8-1 1.6-4.5-2.8-1.5 2.5 5 3-.9 1.6zm-15.8-12.9.9-1.6 4 2.2-1.9 3.7a7.2 7.2 0 0 1-4.8-.6 5.8 5.8 0 0 1-2.2-2 4.5 4.5 0 0 1-.8-2.6c0-1 .3-1.9.8-2.8a6.1 6.1 0 0 1 2-2.3c.7-.6 1.7-.9 2.7-.9.7 0 1.6.3 2.5.7a5 5 0 0 1 2.3 2.2c.4.8.5 1.7.3 2.7l-2.1-.6a2.2 2.2 0 0 0-.2-1.5 2.5 2.5 0 0 0-1.2-1.1 2.9 2.9 0 0 0-2.4-.3c-.7.3-1.4 1-2 2a4.8 4.8 0 0 0-.5 3c.2.8.7 1.4 1.6 1.8l1.3.4h1.3l.6-1.2zm-68.8-17 1.6-10.6 3.2.5.8 7.5 3-7 3.1.5-1.5 10.6-2-.3 1.2-8.3-3.3 8-2-.3-.9-8.7-1.2 8.4zm-10.7-1.3 1-10.6 7.8.7-.1 1.8-5.8-.5-.2 2.3 5.3.5-.1 1.8-5.3-.5-.3 3 5.9.5-.2 1.8z\"/> <g stroke-opacity=\".5\"> <path fill=\"#309e3a\" d=\"M181.4 218.8c0-1 .2-2 .5-2.7l1-1.4 1.5-1a5.8 5.8 0 0 1 2.3-.3 5 5 0 0 1 3.7 1.6c1 1 1.3 2.3 1.3 4 0 1.8-.6 3.1-1.5 4a5 5 0 0 1-3.8 1.4 5 5 0 0 1-3.7-1.5 5 5 0 0 1-1.3-4z\"/> <path fill=\"#f7ffff\" d=\"M183.6 218.8c0 1.2.2 2.2.8 2.8.5.7 1.2 1 2 1a3 3 0 0 0 2.2-.9c.5-.6.8-1.5.9-2.7 0-1.3-.2-2.2-.8-2.8a2.7 2.7 0 0 0-2-1c-1 0-1.7.3-2.2.9-.6.6-.9 1.5-1 2.7z\"/> </g> <g stroke-opacity=\".5\"> <path fill=\"#309e3a\" d=\"m194 224.4.1-10.7h4.5c1.2 0 2 .2 2.5.4s1 .5 1.2 1 .5 1 .5 1.7c0 .8-.3 1.4-.7 2-.5.5-1.2.8-2.2 1 .5.2.9.5 1.2.8l1.2 1.8 1.3 2H201l-1.5-2.3a16 16 0 0 0-1.2-1.6 1.6 1.6 0 0 0-.6-.4 3.5 3.5 0 0 0-1-.2h-.5v4.5z\"/> <path fill=\"#fff\" d=\"M196.2 218.2h1.6a8.1 8.1 0 0 0 2 0l.5-.5c.2-.2.3-.5.3-.8 0-.4-.1-.7-.3-.9a1.3 1.3 0 0 0-.8-.4h-3.2z\"/> </g> <g stroke-opacity=\".5\"> <path fill=\"#309e3a\" d=\"m206.2 214.2 3.9.2a7.6 7.6 0 0 1 2 .3 4 4 0 0 1 1.5 1 5 5 0 0 1 1 1.9c.2.7.2 1.5.2 2.5a5.3 5.3 0 0 1-1.7 4.1c-.4.3-.9.6-1.5.8h-2l-4-.1z\"/> <path fill=\"#fff\" d=\"m208.2 216.1-.3 7 1.6.2h1.3l.9-.5c.3-.2.4-.5.6-1l.3-2-.1-1.8c-.2-.5-.3-.8-.6-1a2 2 0 0 0-1-.6 9.6 9.6 0 0 0-1.7-.2z\"/> </g> <g stroke-opacity=\".5\"> <path fill=\"#309e3a\" d=\"m258.5 233.3 2.5-10.4 3.3.8c1.3.3 2.1.6 2.5.8.5.3 1 .7 1.2 1.3.3.7.3 1.4.1 2.2a3 3 0 0 1-1.9 2.3 3 3 0 0 1-1.1.3 12 12 0 0 1-2.2-.4l-1.4-.3-1 3.9z\"/> <path fill=\"#fff\" d=\"m262.6 225.2-.7 3 1.2.2c.8.2 1.4.3 1.7.2a1.4 1.4 0 0 0 1.2-1l-.1-1.1a1.5 1.5 0 0 0-.8-.7l-1.5-.4z\"/> </g> <g stroke-opacity=\".5\"> <path fill=\"#309e3a\" d=\"m268.4 236.3 3.5-10.1 4.3 1.5a8 8 0 0 1 2.2 1c.4.4.7.9.9 1.5s0 1.1-.2 1.7c-.2.8-.7 1.3-1.3 1.6a3 3 0 0 1-2.3.3l.8 1.2.6 2 .5 2.4-2.4-.8-.7-2.7a14.5 14.5 0 0 0-.6-1.9 1.6 1.6 0 0 0-.4-.6 3.4 3.4 0 0 0-1-.5l-.4-.1-1.5 4.2z\"/> <path fill=\"#fff\" d=\"m272.4 231.2 1.5.5 1.9.5c.3 0 .5 0 .7-.2l.5-.7v-1a1.3 1.3 0 0 0-.6-.6l-1.5-.5-1.6-.6z\"/> </g> <g stroke-opacity=\".5\"> <path fill=\"#309e3a\" d=\"M280.9 235.9a6.8 6.8 0 0 1 1.3-2.5c.3-.5.8-.8 1.3-1.1a4.2 4.2 0 0 1 1.6-.5c.7 0 1.5 0 2.3.3a5 5 0 0 1 3.2 2.5c.6 1.2.7 2.7.1 4.3a5.6 5.6 0 0 1-2.5 3.5 5 5 0 0 1-4 .2 5 5 0 0 1-3.2-2.5 5.5 5.5 0 0 1-.1-4.2\"/> <path fill=\"#fff\" d=\"M283 236.5c-.3 1.1-.3 2 0 2.8.4.8 1 1.3 1.8 1.6.8.2 1.5.1 2.2-.3.7-.4 1.3-1.2 1.7-2.4.3-1.2.3-2.1 0-2.9a2.7 2.7 0 0 0-1.8-1.5 2.7 2.7 0 0 0-2.3.3c-.7.4-1.2 1.2-1.6 2.4\"/> </g> <g stroke-opacity=\".5\"> <path fill=\"#309e3a\" d=\"m301.7 250.8 4.9-9.5 4 2c1 .6 1.7 1 2 1.4.4.5.6 1 .7 1.5s0 1.2-.4 1.7c-.3.7-.8 1.2-1.5 1.5-.7.2-1.4.2-2.3-.1.3.4.5.9.6 1.3l.3 2.1.2 2.5-2.3-1.2-.3-2.8-.3-2a1.6 1.6 0 0 0-.4-.6 3.5 3.5 0 0 0-.9-.6l-.4-.2-2 4z\"/> <path fill=\"#fff\" d=\"m306.4 246.3 1.4.7 1.8.8c.3 0 .5 0 .7-.2a1.5 1.5 0 0 0 .8-1.5 1.3 1.3 0 0 0-.6-.7 21 21 0 0 0-1.3-.8l-1.5-.7z\"/> </g> <g stroke-opacity=\".5\"> <path fill=\"#309e3a\" d=\"M341.2 270.3c.6-1 1.2-1.6 2-2a5 5 0 0 1 1.6-.7 4.2 4.2 0 0 1 1.6 0c.7.1 1.5.4 2.2 1a5 5 0 0 1 2.3 3.3 6 6 0 0 1-1.1 4.1 5.6 5.6 0 0 1-3.5 2.6 5 5 0 0 1-3.9-.9 5 5 0 0 1-2.3-3.3 5.5 5.5 0 0 1 1-4.1z\"/> <path fill=\"#fff\" d=\"M343 271.4c-.6 1-.9 2-.8 2.8a3 3 0 0 0 1.3 2 2.7 2.7 0 0 0 2.2.4c.8-.2 1.6-.8 2.3-1.9.7-1 1-1.9.8-2.7 0-.8-.5-1.4-1.2-2s-1.5-.6-2.3-.4c-.8.2-1.5.8-2.2 1.8z\"/> </g> <path fill=\"#309e3a\" d=\"m246.4 229 1.7-7.6 5.6 1.3-.3 1.3-4-1-.4 1.7 3.7.9-.3 1.3-3.7-1-.5 2.1 4.2 1-.3 1.3z\"/> </g> </svg> ", "de": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icons-de\" viewBox=\"0 0 512 512\"> <path fill=\"#fc0\" d=\"M0 341.3h512V512H0z\"/> <path fill=\"#000001\" d=\"M0 0h512v170.7H0z\"/> <path fill=\"red\" d=\"M0 170.7h512v170.6H0z\"/> </svg> ", "gb": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icons-gb\" viewBox=\"0 0 512 512\"> <path fill=\"#012169\" d=\"M0 0h512v512H0z\"/> <path fill=\"#FFF\" d=\"M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z\"/> <path fill=\"#C8102E\" d=\"m184 324 11 34L42 512H0v-3zm124-12 54 8 150 147v45zM512 0 320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z\"/> <path fill=\"#FFF\" d=\"M176 0v512h160V0zM0 176v160h512V176z\"/> <path fill=\"#C8102E\" d=\"M0 208v96h512v-96zM208 0v512h96V0z\"/> </svg> ", "jp": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icons-jp\" viewBox=\"0 0 512 512\"> <defs> <clipPath id=\"jp-a\"> <path fill-opacity=\".7\" d=\"M177.2 0h708.6v708.7H177.2z\"/> </clipPath> </defs> <g fill-rule=\"evenodd\" stroke-width=\"1pt\" clip-path=\"url(#jp-a)\" transform=\"translate(-128)scale(.72249)\"> <path fill=\"#fff\" d=\"M0 0h1063v708.7H0z\"/> <circle cx=\"523.1\" cy=\"344.1\" r=\"194.9\" fill=\"#bc002d\" transform=\"translate(-59.7 -34.5)scale(1.1302)\"/> </g> </svg> ", "sg": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icons-sg\" viewBox=\"0 0 512 512\"> <defs> <clipPath id=\"sg-a\"> <path fill-opacity=\".7\" d=\"M27.7 0h708.6v708.7H27.7z\"/> </clipPath> </defs> <g fill-rule=\"evenodd\" clip-path=\"url(#sg-a)\" transform=\"translate(-20)scale(.72249)\"> <path fill=\"#fff\" d=\"M0 0h1063v708.7H0z\"/> <path fill=\"#df0000\" d=\"M0 0h1063v354.3H0z\"/> <path fill=\"#fff\" d=\"M245.2 59.4a124.6 124.6 0 0 0 1.1 243.9 126.9 126.9 0 1 1-1.1-243.9\"/> <path fill=\"#fff\" d=\"m202 162.4-18.9-13.8 23.5-.2 7.2-22.3 7.5 22.3h23.4l-18.8 14 7.2 22.3L214 171l-19 13.8zm26 76.9-19-13.8 23.5-.2 7.3-22.3 7.4 22.2h23.5l-19 14 7.3 22.3-19-13.6-19 13.8zm86.3-.6-19-13.8 23.4-.2 7.3-22.3 7.4 22.3H357l-18.9 14 7.3 22.3-19.1-13.7-19 13.8zm25.7-76.2-19-13.8 23.5-.2 7.2-22.3 7.5 22.2h23.4l-18.8 14 7.2 22.3-19.1-13.6-19 13.8zM271.7 112l-19-13.8 23.5-.2 7.3-22.3 7.4 22.3h23.5l-19 14 7.3 22.2-19-13.6-19 13.8z\"/> </g> </svg> ", "nl": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icons-nl\" viewBox=\"0 0 512 512\"> <path fill=\"#ae1c28\" d=\"M0 0h512v170.7H0z\"/> <path fill=\"#fff\" d=\"M0 170.7h512v170.6H0z\"/> <path fill=\"#21468b\" d=\"M0 341.3h512V512H0z\"/> </svg> ", "ca": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icons-ca\" viewBox=\"0 0 512 512\"> <path fill=\"#fff\" d=\"M81.1 0h362.3v512H81.1z\"/> <path fill=\"#d52b1e\" d=\"M-100 0H81.1v512H-100zm543.4 0h181.1v512H443.4zM135.3 247.4l-14 4.8 65.4 57.5c5 14.8-1.7 19.1-6 26.9l71-9-1.8 71.5 14.8-.5-3.3-70.9 71.2 8.4c-4.4-9.3-8.3-14.2-4.3-29l65.4-54.5-11.4-4.1c-9.4-7.3 4-34.8 6-52.2 0 0-38.1 13.1-40.6 6.2l-9.9-18.5-34.6 38c-3.8 1-5.4-.6-6.3-3.8l16-79.7-25.4 14.3c-2.1.9-4.2 0-5.6-2.4l-24.5-49-25.2 50.9c-1.9 1.8-3.8 2-5.4.8l-24.2-13.6 14.5 79.2c-1.1 3-3.9 4-7.1 2.3l-33.3-37.8c-4.3 7-7.3 18.4-13 21-5.7 2.3-25-4.9-37.9-7.7 4.4 15.9 18.2 42.3 9.5 51z\"/> </svg> ", "ch": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icons-ch\" viewBox=\"0 0 512 512\"> <g fill-rule=\"evenodd\" stroke-width=\"1pt\"> <path fill=\"red\" d=\"M0 0h512v512H0z\"/> <g fill=\"#fff\"> <path d=\"M96 208h320v96H96z\"/> <path d=\"M208 96h96v320h-96z\"/> </g> </g> </svg> ", "au": "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"flag-icons-au\" viewBox=\"0 0 512 512\"> <path fill=\"#00008B\" d=\"M0 0h512v512H0z\"/> <path fill=\"#fff\" d=\"M256 0v32l-95 96 95 93.5V256h-33.5L127 162l-93 94H0v-34l93-93.5L0 37V0h31l96 94 93-94z\"/> <path fill=\"red\" d=\"m92 162 5.5 17L21 256H0v-1.5zm62-6 27 4 75 73.5V256zM256 0l-96 98-2-22 75-76zM0 .5 96.5 95 67 91 0 24.5z\"/> <path fill=\"#fff\" d=\"M88 0v256h80V0zM0 88v80h256V88z\"/> <path fill=\"red\" d=\"M0 104v48h256v-48zM104 0v256h48V0z\"/> <path fill=\"#fff\" d=\"m202 402.8-45.8 5.4 4.6 45.9-32.8-32.4-33 32.2 4.9-45.9-45.8-5.8L93 377.4 69 338l43.6 15 15.8-43.4 15.5 43.5 43.7-14.7-24.3 39.2 38.8 25.1Zm222.7 8-20.5 2.6 2.2 20.5-14.8-14.4-14.7 14.5 2-20.5-20.5-2.4 17.3-11.2-10.9-17.5 19.6 6.5 6.9-19.5 7.1 19.4 19.5-6.7-10.7 17.6zM415 293.6l2.7-13-9.8-9 13.2-1.5 5.5-12.1 5.5 12.1 13.2 1.5-9.8 9 2.7 13-11.6-6.6zm-84.1-60-20.3 2.2 1.8 20.3-14.4-14.5-14.8 14.1 2.4-20.3-20.2-2.7 17.3-10.8-10.5-17.5 19.3 6.8 7.2-19.1 6.7 19.3 19.4-6.3-10.9 17.3zm175.8-32.8-20.9 2.7 2.3 20.9-15.1-14.7-15 14.8 2.1-21-20.9-2.4 17.7-11.5-11.1-17.9 20 6.7 7-19.8 7.2 19.8 19.9-6.9-11 18zm-82.1-83.5-20.7 2.3 1.9 20.8-14.7-14.8L376 140l2.4-20.7-20.7-2.8 17.7-11-10.7-17.9 19.7 6.9 7.3-19.5 6.8 19.7 19.8-6.5-11.1 17.6z\"/> </svg> "};
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE=matchMedia('(pointer:fine)').matches;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const DPR=Math.min(2,window.devicePixelRatio||1);
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const lerp=(a,b,t)=>a+(b-a)*t;
const seg=(p,a,b)=>clamp((p-a)/(b-a));
const eo=x=>1-Math.pow(1-clamp(x),3);
const eio=x=>{x=clamp(x);return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2};
const fmt=n=>Math.round(n).toLocaleString('pt-BR');
let VW=innerWidth,VH=innerHeight;

/* ===== land + geo ===== */
const bin=atob(LAND_B64),LAND=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)LAND[i]=bin.charCodeAt(i);
const isLand=(lat,lon)=>{let j=Math.floor(90-lat),i=Math.floor(lon+180);j=Math.max(0,Math.min(179,j));i=((i%360)+360)%360;const k=j*360+i;return(LAND[k>>3]>>(k&7))&1};
const R2D=180/Math.PI,D2R=Math.PI/180;
const HOME={lat:-23.55,lon:-46.63};
const SERVERS=[
 {cc:'us',country:'Estados Unidos',city:'Nova York',lat:40.71,lon:-74},
 {cc:'br',country:'Brasil',city:'São Paulo',lat:-23.55,lon:-46.63},
 {cc:'ca',country:'Canadá',city:'Toronto',lat:43.65,lon:-79.38},
 {cc:'gb',country:'Reino Unido',city:'Londres',lat:51.51,lon:-.13},
 {cc:'nl',country:'Holanda',city:'Amsterdã',lat:52.37,lon:4.9},
 {cc:'de',country:'Alemanha',city:'Frankfurt',lat:50.11,lon:8.68},
 {cc:'ch',country:'Suíça',city:'Zurique',lat:47.38,lon:8.54},
 {cc:'jp',country:'Japão',city:'Tóquio',lat:35.68,lon:139.69},
 {cc:'sg',country:'Singapura',city:'Singapura',lat:1.35,lon:103.82},
 {cc:'au',country:'Austrália',city:'Sydney',lat:-33.87,lon:151.21}];
const gdist=(a,b)=>{const p1=a.lat*D2R,p2=b.lat*D2R,dl=(b.lon-a.lon)*D2R;return 6371*Math.acos(Math.min(1,Math.sin(p1)*Math.sin(p2)+Math.cos(p1)*Math.cos(p2)*Math.cos(dl)))};
SERVERS.forEach(s=>{s.km=Math.round(gdist(HOME,s));s.ms=Math.round(6+s.km/80)});
let sel=SERVERS[0];
const v3=(lat,lon)=>{const p=lat*D2R,l=lon*D2R;return[Math.cos(p)*Math.sin(l),Math.sin(p),Math.cos(p)*Math.cos(l)]};
const slerp=(a,b,t)=>{const d=Math.acos(clamp(a[0]*b[0]+a[1]*b[1]+a[2]*b[2],-1,1));if(d<1e-6)return a;const s=Math.sin(d),k1=Math.sin((1-t)*d)/s,k2=Math.sin(t*d)/s;return[a[0]*k1+b[0]*k2,a[1]*k1+b[1]*k2,a[2]*k1+b[2]*k2]};
const PTS=[];{const N=40000,ga=Math.PI*(3-Math.sqrt(5));for(let i=0;i<N;i++){const y=1-2*(i+.5)/N,r=Math.sqrt(1-y*y),th=ga*i;const x=r*Math.sin(th),z=r*Math.cos(th);if(isLand(Math.asin(y)*R2D,Math.atan2(x,z)*R2D))PTS.push(x,y,z)}}
const P=new Float32Array(PTS);

/* ===== Globe renderer ===== */
class Globe{
  constructor(cv,o){this.cv=cv;this.g=cv.getContext('2d');Object.assign(this,{rotY:-40,tilt:-25,target:null,eclipse:0,dot:1.6,glow:1,connected:false,connT:0,showAll:false},o);this.resize()}
  resize(){const r=this.cv.getBoundingClientRect();this.w=r.width;this.h=r.height;this.cv.width=Math.max(1,this.w*DPR);this.cv.height=Math.max(1,this.h*DPR);this.g.setTransform(DPR,0,0,DPR,0,0)}
  rot(x,y,z){const a=this.rotY*D2R,b=this.tilt*D2R,ca=Math.cos(a),sa=Math.sin(a),cb=Math.cos(b),sb=Math.sin(b);const x1=x*ca-z*sa,z1=x*sa+z*ca;return[x1,y*cb-z1*sb,y*sb+z1*cb]}
  center(lat,lon){return lon}
  step(dt){if(this.target!==null){let d=((this.target.lon-this.rotY+540)%360)-180;this.rotY+=d*Math.min(1,dt/450);if(this.target.tilt!==undefined)this.tilt+=(this.target.tilt-this.tilt)*Math.min(1,dt/450)}}
  arcPts(a,b,grow,cx,cy,R){const A=v3(a.lat,a.lon),B=v3(b.lat,b.lon);const ang=Math.acos(clamp(A[0]*B[0]+A[1]*B[1]+A[2]*B[2],-1,1));const lift=Math.min(.3,.04+ang*.09);const out=[];for(let i=0;i<=72;i++){const u=i/72*grow;const m=slerp(A,B,u);const h=1+lift*Math.sin(Math.PI*u);const q=this.rot(m[0]*h,m[1]*h,m[2]*h);out.push([cx+q[0]*R,cy-q[1]*R,q[2]])}return out}
  draw(t,L){
    const g=this.g,{cx,cy,R}=L;g.clearRect(0,0,this.w,this.h);
    // light behind the rim (eclipse)
    if(this.eclipse>0){const e=this.eclipse;const sx=cx,sy=cy-R*.985;
      const s1=g.createRadialGradient(sx,sy,0,sx,sy,R*1.05);s1.addColorStop(0,`rgba(225,238,255,${.95*e})`);s1.addColorStop(.06,`rgba(140,190,255,${.75*e})`);s1.addColorStop(.25,`rgba(46,123,255,${.32*e})`);s1.addColorStop(1,'rgba(27,111,255,0)');
      g.fillStyle=s1;g.beginPath();g.ellipse(sx,sy,R*1.4,R*.8,0,0,7);g.fill()}
    const at=g.createRadialGradient(cx,cy,R*.92,cx,cy,R*1.22);at.addColorStop(0,'rgba(46,123,255,0)');at.addColorStop(.2,`rgba(80,150,255,${(this.connected?.42:.28)*this.glow})`);at.addColorStop(1,'rgba(27,111,255,0)');
    g.fillStyle=at;g.beginPath();g.arc(cx,cy,R*1.22,0,7);g.fill();
    const bd=g.createRadialGradient(cx,cy-R*.6,R*.05,cx,cy,R);bd.addColorStop(0,'#183a6b');bd.addColorStop(.55,'#0c2042');bd.addColorStop(1,'#071428');
    g.fillStyle=bd;g.beginPath();g.arc(cx,cy,R,0,7);g.fill();
    // rim
    g.save();g.shadowColor='rgba(140,190,255,.9)';g.shadowBlur=24*this.glow;g.strokeStyle=`rgba(170,210,255,${.35+.55*this.eclipse})`;g.lineWidth=1.6+this.eclipse;g.beginPath();g.arc(cx,cy,R,Math.PI*1.04,Math.PI*1.96);g.stroke();g.restore();
    // land dots
    const ds=this.dot,H=this.h,W=this.w;
    const a=this.rotY*D2R,b=this.tilt*D2R,ca=Math.cos(a),sa=Math.sin(a),cb=Math.cos(b),sb=Math.sin(b);
    const NB=6;for(let k=0;k<NB;k++)g['_b'+k]=null;
    const paths=[];for(let k=0;k<NB;k++){paths.push(new Path2D())}
    for(let i=0;i<P.length;i+=3){const x=P[i],y=P[i+1],z=P[i+2];const x1=x*ca-z*sa,z1=x*sa+z*ca;const z2=y*sb+z1*cb;if(z2<.02)continue;const y2=y*cb-z1*sb;
      const sx=cx+x1*R,sy=cy-y2*R;if(sy>H+4||sy<-4||sx<-4||sx>W+4)continue;paths[Math.min(NB-1,(z2*NB)|0)].rect(sx,sy,ds,ds)}
    for(let k=0;k<NB;k++){const z=(k+.5)/NB;g.fillStyle=`rgba(${150+95*z|0},${195+55*z|0},255,${.25+.75*Math.sqrt(z)})`;g.fill(paths[k])}
    // nodes
    const pr=(lat,lon)=>{const q=this.rot(...v3(lat,lon));return[cx+q[0]*R,cy-q[1]*R,q[2]]};
    if(this.showAll){g.lineWidth=1;SERVERS.forEach(s=>{if(s.cc==='br'||s===sel)return;const pts=this.arcPts(HOME,s,1,cx,cy,R);g.strokeStyle='rgba(120,175,255,.16)';g.beginPath();let m=false;pts.forEach(p=>{if(p[2]<0){m=false;return}m?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]);m=true});g.stroke()})}
    SERVERS.forEach(s=>{const p=pr(s.lat,s.lon);if(p[2]<=0)return;const on=s===sel;g.fillStyle=on?'#fff':'rgba(140,190,255,.95)';g.beginPath();g.arc(p[0],p[1],on?4:2.6,0,7);g.fill();
      if(on){const k=(t/1500)%1;g.strokeStyle=`rgba(156,196,255,${1-k})`;g.lineWidth=1.5;g.beginPath();g.arc(p[0],p[1],4+k*22,0,7);g.stroke();
        if(this.labels){g.font='600 13px Geist,system-ui,sans-serif';g.fillStyle='#fff';g.fillText(s.city,p[0]+10,p[1]-8)}}});
    const showRoute=this.connected&&sel.cc!=='br';
    if(showRoute){const grow=RM?1:eo((t-this.connT)/1500);const pts=this.arcPts(HOME,sel,grow,cx,cy,R);g.lineCap='round';
      for(let i=1;i<pts.length;i++){const a=pts[i-1],b=pts[i];if(a[2]<-.02&&b[2]<-.02)continue;g.strokeStyle=`rgba(120,180,255,${.3+.7*i/pts.length})`;g.lineWidth=2.2;g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke()}
      if(grow>.99&&!RM)for(let k=0;k<3;k++){const u=((t-this.connT)/2000+k/3)%1;const p=pts[Math.floor(u*72)];if(p&&p[2]>-.02){const gl=g.createRadialGradient(p[0],p[1],0,p[0],p[1],12);gl.addColorStop(0,'rgba(255,255,255,1)');gl.addColorStop(1,'rgba(90,162,255,0)');g.fillStyle=gl;g.beginPath();g.arc(p[0],p[1],12,0,7);g.fill()}}
      const h=pr(HOME.lat,HOME.lon);if(h[2]>0){g.fillStyle='#33D539';g.beginPath();g.arc(h[0],h[1],4,0,7);g.fill();if(this.labels){g.font='600 13px Geist,system-ui,sans-serif';g.fillStyle='rgba(255,255,255,.85)';g.fillText('Você',h[0]+10,h[1]+16)}}}
  }
}
const midLon=s=>{const m=slerp(v3(HOME.lat,HOME.lon),v3(s.lat,s.lon),.5);return Math.atan2(m[0],m[2])*R2D};
const midLat=s=>{const m=slerp(v3(HOME.lat,HOME.lon),v3(s.lat,s.lon),.5);return Math.asin(m[1])*R2D};

/* ===== sky (fixed): stars that streak with scroll speed ===== */
const sky=$('#sky'),sg=sky.getContext('2d');let SW,SH;const STARS=[];
function sizeSky(){SW=innerWidth;SH=innerHeight;sky.width=SW*DPR;sky.height=SH*DPR;sg.setTransform(DPR,0,0,DPR,0,0)}
sizeSky();for(let i=0;i<(VW<700?220:460);i++)STARS.push({x:Math.random(),y:Math.random(),z:.15+Math.random()*.85,tw:Math.random()*6.28});
let vel=0,lastSY=scrollY,mX=.5,mY=.5,sX=.5,sY=.5;
function drawSky(t,dt){
  sg.clearRect(0,0,SW,SH);
  const T=t*.00005;const NEB=[[.15+.12*Math.sin(T*1.3),.1+.1*Math.cos(T),.55,'18,58,134'],[.9+.08*Math.cos(T*1.1),.5+.15*Math.sin(T*.8),.5,'11,47,110'],[.5+.15*Math.sin(T*.7),1.05+.05*Math.cos(T),.45,'27,44,107']];
  for(const n of NEB){const x=n[0]*SW,y=n[1]*SH,r=n[2]*Math.max(SW,SH);const gr=sg.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,`rgba(${n[3]},.42)`);gr.addColorStop(1,`rgba(${n[3]},0)`);sg.fillStyle=gr;sg.fillRect(0,0,SW,SH)}
  sg.fillStyle='rgb(210,228,255)';
  const v=clamp(vel,-60,60);
  for(const s of STARS){
    s.y-=(v*.0009+.00002*dt)*s.z;if(s.y<-.02)s.y+=1.04;if(s.y>1.02)s.y-=1.04;
    const x=(s.x+(sX-.5)*.03*s.z)*SW,y=s.y*SH+(sY-.5)*20*s.z;
    const a=(.25+.75*s.z)*(.65+.35*Math.sin(t*.002+s.tw));
    const len=Math.abs(v)*s.z*1.6;
    if(len>2){sg.strokeStyle=`rgba(190,215,255,${(a*.8).toFixed(2)})`;sg.lineWidth=s.z*1.4;sg.beginPath();sg.moveTo(x,y);sg.lineTo(x,y+len*Math.sign(v));sg.stroke()}
    else{sg.globalAlpha=a;const r=s.z*1.3;sg.fillRect(x,y,r,r);sg.globalAlpha=1}
  }
}

/* ===== split text ===== */
function splitWords(el){const words=el.textContent.trim().split(/\s+/);el.setAttribute('aria-label',el.textContent.trim());el.innerHTML=words.map((w,i)=>`<span class="sw-w" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`).join(' ')}
$$('.split').forEach(splitWords);
{const h=$('#hTitle span[aria-hidden]');let i=0;const walk=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();[...c.textContent].forEach(ch=>{if(ch===' '){f.appendChild(document.createTextNode(' '));return}const s=document.createElement('span');s.className='ch';s.style.setProperty('--i',i++);s.textContent=ch;f.appendChild(s)});c.replaceWith(f)}else if(c.nodeType===1&&c.tagName!=='BR')walk(c)})};walk(h)}

/* ===== hero ===== */
const hero=$('#hero'),stage=$('#stage'),hCopy=$('#hCopy'),phWrap=$('#phWrap'),phone=$('#phone'),cue=$('#cue');
const chips=['#c1','#c2','#c3','#c4'].map($);
const G1=new Globe($('#globe'),{rotY:-62,tilt:-30,eclipse:1,dot:1.7});
let heroP=0,introK=RM?1:0,userTouched=false;
function heroLayout(){
  const W=G1.w,H=G1.h,mob=W<820;
  const k=eio(seg(heroP,0,.42));
  const R=mob?Math.max(W*1.25,520):Math.max(W*.62,760);
  const top0=H*(mob?.80:.74),top1=H*(mob?.60:.50);
  const intro=eo(introK);
  const top=lerp(H*1.05,lerp(top0,top1,k),intro);
  return{cx:W/2,cy:top+R,R}
}
function phoneScale(){const mob=VW<820;return Math.min(mob?.82:1,(VH*(mob?.72:.80))/707,mob?(VW*.8)/340:1)}
function updHero(){
  const r=hero.getBoundingClientRect();const total=hero.offsetHeight-VH*2;
  heroP=clamp(-r.top/Math.max(1,total));
  const cover=clamp((-r.top-total)/VH);
  // headline
  const a=seg(heroP,.02,.26);
  hCopy.style.opacity=1-a;hCopy.style.transform=`translateY(${-a*90}px) scale(${1-a*.08})`;hCopy.style.filter=a>0?`blur(${a*8}px)`:'';
  hCopy.style.pointerEvents=a>.5?'none':'';
  cue.style.opacity=(1-seg(heroP,0,.08))*eo(introK);
  // phone
  const s=phoneScale(),ph=707*s;
  const start=VH*.84,end=(VH-ph)/2+(VW<820?10:16);
  const pk=eio(seg(heroP,.06,.46));
  const y=lerp(start+ (1-eo(introK))*VH*.3,end,pk);
  phWrap.style.transform=`translateY(${y}px) scale(${s})`;
  // chips
  chips.forEach((c,i)=>{const k=eo(seg(heroP,.5+i*.06,.68+i*.06));c.style.opacity=k*(1-cover);c.style.transform=`translateY(${(1-k)*40}px) scale(${.9+.1*k})`});
  // tap hint near the phone
  const th=$('#tapHint');const hk=seg(heroP,.38,.46)*(connected?0:1)*(1-seg(heroP,.9,1));th.style.opacity=hk;th.style.left=`calc(50% - ${170*s+170}px)`;th.style.top=`${end+ph*.33}px`;
  // auto connect
  if(heroP>.46&&!connected&&!userTouched&&!busy)connect(true);
  // cover by next sheet
  stage.style.transform=cover>0?`scale(${1-cover*.08})`:'';stage.style.opacity=1-cover*.7;
  heroVisible=cover<1&&r.bottom>0;
}
let heroVisible=true;
G1.layout=heroLayout;

/* phone mini map */
{const c=$('#scrMap'),w=420,h=280;c.width=w*DPR;c.height=h*DPR;const x=c.getContext('2d');x.scale(DPR,DPR);x.fillStyle='#fff';for(let lat=80;lat>-58;lat-=2.2)for(let lon=-180;lon<180;lon+=2.2)if(isLand(lat,lon))x.fillRect((lon+180)/360*w,(84-lat)/142*h,1.5,1.5)}

/* ===== connect ===== */
const screen=$('#screen'),power=$('#power');
let connected=false,busy=false,timerId,meterId,startAt=0;
const pad=n=>String(n).padStart(2,'0');
const setTimer=()=>{const s=Math.floor((Date.now()-startAt)/1000);$('#timer').textContent=`${pad(s/3600|0)}:${pad((s/60|0)%60)}:${pad(s%60)}`};
function scramble(el,final,dur=900){const ch='0123456789abcdef';const t0=performance.now();const run=()=>{const k=(performance.now()-t0)/dur;el.textContent=[...final].map((c,i)=>i/final.length<k||c==='.'||c==='·'?c:ch[Math.random()*16|0]).join('');if(k<1&&!RM)requestAnimationFrame(run);else el.textContent=final};run()}
function connect(auto){
  if(busy)return;if(!auto)userTouched=true;
  if(connected){connected=false;G1.connected=false;G2.connected=false;clearInterval(timerId);clearInterval(meterId);screen.classList.remove('on');
    $('#timer').textContent='00:00:00';$('#stateT').textContent='Desconectado';$('#tapT').textContent='Toque para conectar';$('#dl').textContent='0 Mbps';$('#ul').textContent='0 Mbps';$('#pMs').textContent='0ms';
    power.setAttribute('aria-pressed','false');power.setAttribute('aria-label','Conectar à VPN');G1.target=null;return}
  busy=true;screen.classList.add('busy');$('#stateT').textContent='Conectando…';
  setTimeout(()=>{busy=false;screen.classList.remove('busy');connected=true;G1.connected=true;G2.connected=true;const now=performance.now();G1.connT=now;G2.connT=now;
    G1.target={lon:midLon(sel)};screen.classList.add('on');
    startAt=Date.now()-118000;setTimer();timerId=setInterval(setTimer,1000);
    $('#stateT').textContent='Conectado';$('#tapT').textContent='Toque para desconectar';$('#pMs').textContent=sel.ms+'ms';
    const tick=()=>{$('#dl').textContent=(60+Math.random()*8).toFixed(1)+' Mbps';$('#ul').textContent=(49+Math.random()*7).toFixed(1)+' Mbps'};tick();meterId=setInterval(tick,1400);
    power.setAttribute('aria-pressed','true');power.setAttribute('aria-label','Desconectar da VPN');
    scramble($('#newIp'),'104.28.'+(20+Math.random()*200|0)+'.'+(2+Math.random()*250|0));
  },RM?0:900);
}
power.addEventListener('click',()=>connect(false));
setInterval(()=>{if(!connected||document.hidden)return;const h=()=>Math.random().toString(16).slice(2,6);$('#cipher').textContent=`${h()}·${h()}·${h()}`},260);

/* ===== servers ===== */
const G2=new Globe($('#globe2'),{rotY:-55,tilt:-20,eclipse:0,dot:1.5,showAll:true,labels:true,glow:.8});
G2.layout=()=>{const W=G2.w,H=G2.h;return{cx:W/2,cy:H/2,R:Math.min(W,H)*.40}};
G2.connected=false;G2.connT=0;
// G2 always shows route
const _d2=G2.draw.bind(G2);G2.draw=(t,L)=>{const c=G2.connected;G2.connected=true;_d2(t,L);G2.connected=c};
let drag=null,spinV=0,g2Visible=false,g2Idle=0;
const gcv=$('#globe2');
gcv.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY,r:G2.rotY,t:G2.tilt,lx:e.clientX,lt:performance.now()};G2.target=null;gcv.setPointerCapture(e.pointerId)});
gcv.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;G2.rotY=drag.r-dx*.35;G2.tilt=clamp(drag.t+dy*.25,-70,70);const now=performance.now();spinV=-(e.clientX-drag.lx)*.35/Math.max(1,now-drag.lt)*16;drag.lx=e.clientX;drag.lt=now});
const endDrag=()=>{drag=null;g2Idle=performance.now()};gcv.addEventListener('pointerup',endDrag);gcv.addEventListener('pointercancel',endDrag);
const rowsEl=$('#rows'),rowInd=$('#rowInd'),rowHov=$('#rowHov');
const barsCls=ms=>ms<90?'':ms<180?'mid':'low';
function renderRows(){const q=$('#q').value.trim().toLowerCase();const items=SERVERS.filter(s=>!q||(s.country+' '+s.city).toLowerCase().includes(q));
  rowsEl.innerHTML=items.length?items.map(s=>`<button class="row" type="button" data-cc="${s.cc}" aria-pressed="${s===sel}"><span class="flag">${FLAGS[s.cc]}</span><span class="t"><b>${s.country}</b><small>${s.city}</small></span><span class="ms">${s.ms}ms<span class="bars ${barsCls(s.ms)}"><i></i><i></i><i></i></span></span></button>`).join(''):`<p class="empty">Nenhum servidor encontrado. Tente um país como Japão ou Canadá.</p>`;placeInd()}
function placeInd(){const b=rowsEl.querySelector(`.row[data-cc="${sel.cc}"]`);if(!b){rowInd.style.opacity=0;return}rowInd.style.opacity=1;rowInd.style.top=b.offsetTop+'px';rowInd.style.height=b.offsetHeight+'px'}
function aim(s){G2.target={lon:midLon(s),tilt:-clamp(midLat(s),-45,45)}}
rowsEl.addEventListener('pointerover',e=>{const b=e.target.closest('.row');if(!b)return;rowHov.style.opacity=1;rowHov.style.top=b.offsetTop+'px';rowHov.style.height=b.offsetHeight+'px';const s=SERVERS.find(x=>x.cc===b.dataset.cc);if(s!==sel){preview=s;aim(s)}});
rowsEl.addEventListener('pointerleave',()=>{rowHov.style.opacity=0;preview=null;aim(sel)});
let preview=null;
rowsEl.addEventListener('click',e=>{const b=e.target.closest('.row');if(b)select(SERVERS.find(s=>s.cc===b.dataset.cc))});
$('#q').addEventListener('input',renderRows);
function select(s){sel=s;const now=performance.now();G2.connT=now;G1.connT=now;rowsEl.querySelectorAll('.row').forEach(r=>r.setAttribute('aria-pressed',r.dataset.cc===s.cc));placeInd();aim(s);
  $('#pFlag').innerHTML=FLAGS[s.cc];$('#pCountry').textContent=s.country;$('#pCity').textContent=s.city;$('#pMs').textContent=connected?s.ms+'ms':'0ms';
  $('#hRoute').textContent=s.cc==='br'?'São Paulo, direto':'São Paulo → '+s.city;$('#hDist').textContent=s.cc==='br'?'menos de 20 km':fmt(s.km)+' km';$('#hMs').textContent=s.ms+' ms';
  $('#spSrv').textContent=s.city;$('#c4s').textContent='Rota até '+s.city;$('#c4b').textContent=s.ms+' ms';
  if(connected)G1.target={lon:midLon(s)}}

/* ===== protocol lab ===== */
const PROTOS=[
 {name:'Auto',d:'O app escolhe o melhor protocolo para a rede em que você está e troca sozinho quando ela muda.',speed:420,size:1,kv:[['Velocidade',88,'Alta'],['Bateria',85,'Equilibrada'],['Estabilidade',95,'Muito alta']],port:'Escolhe sozinho',cipher:'Conforme o protocolo'},
 {name:'WireGuard',d:'O mais rápido e o que menos gasta bateria. Ideal para o dia a dia no celular.',speed:620,size:.8,kv:[['Velocidade',100,'Máxima'],['Bateria',95,'Baixo consumo'],['Estabilidade',85,'Alta']],port:'UDP 51820',cipher:'ChaCha20'},
 {name:'OpenVPN',d:'Clássico e confiável. Passa por redes restritas de empresas e hotéis porque parece tráfego comum.',speed:280,size:1.25,kv:[['Velocidade',62,'Média'],['Bateria',60,'Moderada'],['Estabilidade',100,'Máxima']],port:'TCP 443',cipher:'AES‑256‑GCM'},
 {name:'IKEv2',d:'Nativo do iOS. Mantém a conexão quando você troca do Wi‑Fi para o 4G no meio do caminho.',speed:460,size:1,kv:[['Velocidade',82,'Alta'],['Bateria',80,'Boa'],['Estabilidade',90,'Muito alta']],port:'UDP 500',cipher:'AES‑256',hop:true}];
let proto=PROTOS[0];
const segEl=$('#seg'),segInd=$('#segInd');
PROTOS.forEach((p,i)=>segEl.insertAdjacentHTML('beforeend',`<button type="button" role="tab" aria-selected="${i===0}" data-i="${i}" tabindex="${i?-1:0}">${p.name}</button>`));
function setProto(i,focus){proto=PROTOS[i];const bs=segEl.querySelectorAll('button');bs.forEach((b,k)=>{b.setAttribute('aria-selected',k===i);b.tabIndex=k===i?0:-1;if(k===i&&focus)b.focus()});
  const b=bs[i];segInd.style.left=b.offsetLeft+'px';segInd.style.width=b.offsetWidth+'px';
  $('#pName').textContent=proto.name;$('#pDesc').textContent=proto.d;$('#pill').textContent=proto.name;
  $('#pKv').innerHTML=proto.kv.map(k=>`<div><span>${k[0]}</span><b>${k[2]}</b><span class="bar"><i style="transform:scaleX(${k[1]/100})"></i></span></div>`).join('')+`<div><span>Transporte</span><b>${proto.port}</b></div><div><span>Cifra</span><b>${proto.cipher}</b></div>`;
  hopT=performance.now()}
segEl.addEventListener('click',e=>{const b=e.target.closest('button[data-i]');if(b)setProto(+b.dataset.i)});
segEl.addEventListener('keydown',e=>{const i=PROTOS.indexOf(proto);if(e.key==='ArrowRight'){e.preventDefault();setProto((i+1)%4,1)}if(e.key==='ArrowLeft'){e.preventDefault();setProto((i+3)%4,1)}});
const lab=$('#lab'),lg=lab.getContext('2d');let LW=0,LH=0,labVisible=false,hopT=0;
const PLAIN=['senha=minha123','GET /banco','pix R$ 50,00','foto_praia.jpg','cpf 123.456…','msg: chego 19h','login@email','cartão •••• 4421'];
const PK=[];let spawnAcc=0;
function sizeLab(){const r=lab.getBoundingClientRect();LW=r.width;LH=r.height;lab.width=LW*DPR;lab.height=LH*DPR;lg.setTransform(DPR,0,0,DPR,0,0)}
const hex=n=>{let s='';for(let i=0;i<n;i++)s+='0123456789abcdef'[Math.random()*16|0];return s};
function rr(x,y,w,h,r){lg.beginPath();lg.moveTo(x+r,y);lg.arcTo(x+w,y,x+w,y+h,r);lg.arcTo(x+w,y+h,x,y+h,r);lg.arcTo(x,y+h,x,y,r);lg.arcTo(x,y,x+w,y,r);lg.closePath()}
function drawLab(t,dt){
  if(!LW)sizeLab();const W=LW,H=LH-30,cy=H/2+4,t0=W*.27,t1=W*.73,th=Math.min(70,H*.28);
  lg.clearRect(0,0,LW,LH);
  // tunnel body
  const hop=proto.hop&&((t-hopT)%4200)<700;
  const tg=lg.createLinearGradient(t0,0,t1,0);tg.addColorStop(0,'rgba(27,111,255,0)');tg.addColorStop(.12,'rgba(27,111,255,.22)');tg.addColorStop(.88,'rgba(27,111,255,.22)');tg.addColorStop(1,'rgba(27,111,255,0)');
  lg.fillStyle=tg;rr(t0,cy-th,t1-t0,th*2,th);lg.fill();
  // rings moving inside tunnel
  for(let i=0;i<9;i++){const u=((i/9)+(t*proto.speed/1e6))%1;const x=t0+th*.6+u*(t1-t0-th*1.2);const a=Math.sin(u*Math.PI)*.5;lg.strokeStyle=`rgba(156,196,255,${a})`;lg.lineWidth=1.2;lg.beginPath();lg.ellipse(x,cy,th*.22,th*.98,0,0,7);lg.stroke()}
  if(hop){lg.fillStyle='rgba(51,213,57,.12)';rr(t0,cy-th,t1-t0,th*2,th);lg.fill();lg.font='600 12px Geist,system-ui';lg.fillStyle='#8ef092';lg.textAlign='center';lg.fillText('Wi‑Fi → 4G, sem cair',W/2,cy-th-12)}
  // endpoints
  lg.textAlign='center';
  const node=(x,label,col)=>{lg.fillStyle=col;lg.beginPath();lg.arc(x,cy,18,0,7);lg.fill();lg.fillStyle='rgba(255,255,255,.65)';lg.font='600 12px Geist,system-ui';lg.fillText(label,x,cy+38)};
  node(26,'Você','#1B6FFF');node(W-26,'Site','#2a3a52');
  // packets
  if(!RM){spawnAcc+=dt*proto.speed/1.7e5;const lastP=PK[PK.length-1];if(spawnAcc>1&&(!lastP||lastP.x>150)){spawnAcc=0;PK.push({x:44,lane:(Math.random()-.5)*th*.9,txt:PLAIN[Math.random()*PLAIN.length|0],h:hex(10),hT:0})}}
  else if(!PK.length){for(let i=0;i<6;i++)PK.push({x:60+i*(W-120)/6,lane:(i%3-1)*th*.3,txt:PLAIN[i],h:hex(10),hT:0})}
  lg.font='500 11.5px "Geist Mono",ui-monospace,monospace';
  for(let i=PK.length-1;i>=0;i--){const p=PK[i];if(!RM)p.x+=proto.speed*dt/1000*(hop&&p.x>t0&&p.x<t1?.55:1);if(p.x>W-44){PK.splice(i,1);continue}
    const inT=p.x>t0+10&&p.x<t1-10;const lane=inT?p.lane:p.lane*Math.min(1,Math.abs(p.x-(p.x<t0?44:W-44))/(t0-44))*.0+p.lane*(inT?1:.25);
    const y=cy+(inT?p.lane:p.lane*.25);
    let label;if(inT){if(t-p.hT>90){p.h=hex(10);p.hT=t}label=p.h}else if(p.x<=t0+10)label=p.txt;else label='IP 104.28…';
    const w=lg.measureText(label).width+18*proto.size,hh=20*proto.size;
    lg.fillStyle=inT?'rgba(27,111,255,.95)':(p.x<t0?'rgba(255,255,255,.92)':'rgba(120,140,170,.7)');
    if(inT){lg.shadowColor='rgba(46,123,255,.9)';lg.shadowBlur=14}
    rr(p.x-w/2,y-hh/2,w,hh,hh/2);lg.fill();lg.shadowBlur=0;
    lg.fillStyle=inT?'#fff':(p.x<t0?'#0b1220':'#fff');lg.fillText(label,p.x,y+4)}
}
setProto(0);

/* ===== statement ===== */
const stmtEl=$('#stmt');{const ws=stmtEl.textContent.trim().split(/\s+/);stmtEl.setAttribute('aria-label',stmtEl.textContent);stmtEl.innerHTML=ws.map(w=>`<span class="wd${/sabe|você/.test(w)?' hl':''}" aria-hidden="true">${w}</span>`).join(' ')}
const WDS=$$('.stmt .wd');

/* ===== ad block ===== */
let blocked=1284,adUser=false;const adT=$('#adT'),ads=$$('#browser .ad');
function burst(el){if(RM)return;const br=$('#browser').getBoundingClientRect(),r=el.getBoundingClientRect();const cs=getComputedStyle(el).backgroundImage||'';for(let i=0;i<14;i++){const s=document.createElement('span');s.className='spark';s.style.left=(r.left-br.left+Math.random()*r.width)+'px';s.style.top=(r.top-br.top+Math.random()*r.height)+'px';s.style.background=['#ff4d6d','#ff9f1c','#7b2ff7','#f107a3','#00b37e'][i%5];$('#browser').appendChild(s);
  s.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:`translate(${(Math.random()-.5)*120}px,${-30-Math.random()*80}px) rotate(${Math.random()*360}deg)`,opacity:0}],{duration:700+Math.random()*400,easing:'cubic-bezier(.16,1,.3,1)'}).onfinish=()=>s.remove()}}
function setAds(on){ads.forEach((a,i)=>setTimeout(()=>{if(on){burst(a);a.classList.add('gone')}else a.classList.remove('gone')},i*140));if(on){const from=blocked;blocked+=3;countTo($('#blocked'),from,blocked,800)}}
adT.addEventListener('change',()=>{adUser=true;setAds(adT.checked)});
function countTo(el,a,b,d){const t0=performance.now();const f=()=>{const k=eo((performance.now()-t0)/d);el.textContent=fmt(a+(b-a)*k);if(k<1)requestAnimationFrame(f)};f()}
setInterval(()=>{if(adT.checked&&!document.hidden&&Math.random()<.5){blocked+=1;$('#blocked').textContent=fmt(blocked)}},900);

/* ===== speed test ===== */
const ticks=$('#gTicks');const GA0=150,GSW=240;[0,25,50,100,150,200].forEach(v=>{const u=v/200,a=(GA0+u*GSW)*D2R;ticks.insertAdjacentHTML('beforeend',`<text x="${(150+Math.cos(a)*88).toFixed(1)}" y="${(122+Math.sin(a)*88+4).toFixed(1)}">${v}</text>`)});
const setG=v=>{const off=100-Math.min(100,v/200*100);$('#gArc').setAttribute('stroke-dashoffset',off);$('#gArcG').setAttribute('stroke-dashoffset',off);$('#gVal').textContent=v<10?v.toFixed(1).replace('.',','):Math.round(v)};
let testing=false;
function phase(target,ms,label){return new Promise(res=>{$('#gUnit').textContent=label;const t0=performance.now();const st=()=>{const k=Math.min(1,(performance.now()-t0)/ms);const v=target*(k<.35?eo(k/.35):1)*(.9+Math.random()*.12);setG(v);if(k<1)requestAnimationFrame(st);else res(v)};st()})}
const pop=id=>{const e=$(id);e.classList.add('pop');setTimeout(()=>e.classList.remove('pop'),600)};
$('#spBtn').addEventListener('click',async()=>{if(testing)return;testing=true;const t=$('#spTxt');t.textContent='Testando…';t.dataset.t='Testando…';
  ['#rDl','#rUl','#rPing'].forEach(s=>$(s).textContent='–');setG(0);await new Promise(r=>setTimeout(r,RM?0:400));
  $('#rPing').textContent=sel.ms+' ms';pop('#r3');const base=Math.max(40,180-sel.ms*.4);
  const d=await phase(base,RM?10:2400,'Mbps de download');$('#rDl').textContent=d.toFixed(1).replace('.',',')+' Mbps';pop('#r1');setG(0);await new Promise(r=>setTimeout(r,RM?0:300));
  const u=await phase(base*.7,RM?10:2000,'Mbps de upload');$('#rUl').textContent=u.toFixed(1).replace('.',',')+' Mbps';pop('#r2');
  setG(d);$('#gUnit').textContent='Mbps de download';t.textContent='Testar de novo';t.dataset.t='Testar de novo';testing=false});

/* ===== kill switch ===== */
const ks=$('#ks');let ksBusy=false;
$('#ksBtn').addEventListener('click',()=>{if(ksBusy)return;ksBusy=true;const safe=$('#ksT').checked;ks.classList.add('down');ks.classList.toggle('safe',safe);
  $('#ksMsg').textContent=safe?'A VPN caiu. Internet pausada até reconectar. Nada vazou.':'A VPN caiu e o kill switch estava desligado. Seu IP real ficou exposto.';
  setTimeout(()=>{ks.classList.remove('down','safe');$('#ksMsg').textContent='Reconectado. Conexão protegida.';ksBusy=false},2800)});

/* ===== logs ===== */
const LOGS=['22:41  abriu banco.com.br','22:42  pesquisou "voo barato"','22:44  assistiu video_42.mp4','22:45  enviou foto.jpg','22:47  entrou em loja.com','22:49  leu noticias.com.br'];
const logsEl=$('#logs');let logI=0;
function logTick(){if(document.hidden)return;const line=document.createElement('div');line.textContent='';logsEl.prepend(line);if(logsEl.children.length>4)logsEl.lastChild.remove();
  const txt=LOGS[logI++%LOGS.length];let i=0;const ty=setInterval(()=>{line.textContent=txt.slice(0,++i);if(i>=txt.length){clearInterval(ty);setTimeout(()=>{const t0=performance.now();const sc=()=>{const k=(performance.now()-t0)/700;line.textContent=[...txt].map((c,j)=>j/txt.length<k?'░':c).join('');if(k<1)requestAnimationFrame(sc);else{line.textContent='— apagado, sem registro';line.classList.add('x')}};sc()},700)}},RM?0:28)}
logTick();setInterval(logTick,2600);

/* ===== devices ===== */
const DEV=[['Celular','<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>'],['Notebook','<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>'],['Tablet','<rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M11 18h2"/>'],['TV','<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8"/>'],['Relógio','<rect x="7" y="6" width="10" height="12" rx="3"/><path d="M9 6V2h6v4M9 18v4h6v-4"/>']];
$('#devs').innerHTML=DEV.map(d=>`<span class="dev" title="${d[0]}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">${d[1]}</svg></span>`).join('');
let devDone=false;function devRun(){if(devDone)return;devDone=true;$$('.dev').forEach((d,i)=>setTimeout(()=>{d.classList.add('lit');$('#devN').textContent=i+1},RM?0:300+i*320))}
$$('.dev').forEach(d=>d.addEventListener('pointerenter',()=>{d.animate([{transform:'translateY(-4px)'},{transform:'translateY(-10px) rotate(-6deg)'},{transform:'translateY(-4px)'}],{duration:500,easing:'cubic-bezier(.34,1.56,.64,1)'})}));

/* ===== reviews ===== */
const REV=[['Fica conectado por horas sem cair. Adoro.','Marina R.','designer','#2b4a7a'],['Muito fácil de usar. Me sinto bem mais seguro no Wi‑Fi público.','Thiago S.','consultor','#1B6FFF'],['Confiável, rápido e simples. Quase não perdi velocidade.','Ana L.','estudante','#3a3f4a'],['Uso no aeroporto toda semana. Conecta antes do embarque.','Rafael M.','engenheiro','#0b5ed7'],['O bloqueio de anúncios deixou meu celular mais rápido.','Juliana P.','jornalista','#5b3fd1'],['Troco de país em dois toques para ver meus serviços.','Caio F.','desenvolvedor','#16805a']];
const card=r=>`<div class="rv-c"><div class="stars"><svg><use href="#star"/></svg><svg><use href="#star"/></svg><svg><use href="#star"/></svg><svg><use href="#star"/></svg><svg><use href="#star"/></svg></div><p>“${r[0]}”</p><div class="who"><span class="av" style="background:${r[3]}">${r[1].split(' ').map(x=>x[0]).join('')}</span><span><b>${r[1]}</b>${r[2]}</span></div></div>`;
$('#mq1').innerHTML=[...REV,...REV].map(card).join('');$('#mq2').innerHTML=[...REV.slice(3),...REV.slice(0,3),...REV.slice(3),...REV.slice(0,3)].map(card).join('');

/* ===== pricing ===== */
const plans=$$('.plan');
function updPrice(){const y=plans[0].getAttribute('aria-checked')==='true';const tr=$('#trial').checked;const b=$('#buyT');const txt=tr?'Começar por US$ 0,00':'Continuar';b.textContent=txt;b.dataset.t=txt;
  $('#fine').textContent=tr?`Grátis por 7 dias. Depois, US$ ${y?'59,99 por ano':'29,99 a cada 3 meses'}.`:`Cobrança de US$ ${y?'59,99 hoje. Renova a cada ano.':'29,99 hoje. Renova a cada 3 meses.'}`}
plans.forEach(p=>p.addEventListener('click',()=>{plans.forEach(q=>q.setAttribute('aria-checked',q===p));updPrice()}));
$('#trial').addEventListener('change',updPrice);
$('#buy').addEventListener('click',()=>{$('#fine').textContent='Este é um site conceito. No app, aqui abre a compra pela loja.'});

/* ===== final reveal ===== */
const fin=$('#fin'),finS=$('#final'),hand=$('#hand');
function updFinal(){const r=finS.getBoundingClientRect();const p=clamp((VH-r.top)/(finS.offsetHeight));const k=eio(seg(p,.1,.62));fin.style.setProperty('--r',(10+k*95)+'%');hand.style.transform=`translateY(${(1-eo(seg(p,.3,.8)))*120}px) rotate(${(1-eo(seg(p,.3,.8)))*6}deg)`}

/* ===== nav ===== */
const nav=$('#nav'),navInd=$('#navInd'),navLinks=$$('.nav-l a');
navLinks.forEach(a=>a.addEventListener('pointerenter',()=>{navInd.style.opacity=1;navInd.style.left=a.offsetLeft+'px';navInd.style.width=a.offsetWidth+'px'}));
$('.nav-l').addEventListener('pointerleave',()=>{const on=$('.nav-l a.on');if(on){navInd.style.left=on.offsetLeft+'px';navInd.style.width=on.offsetWidth+'px'}else navInd.style.opacity=0});
const secs=['servidores','protocolos','recursos','planos'].map(id=>document.getElementById(id));
let lastNavY=0;
function updNav(){const y=scrollY;nav.classList.toggle('hide',y>lastNavY+4&&y>VH*.5&&!nav.matches(':hover'));if(y<lastNavY-4)nav.classList.remove('hide');lastNavY=y;
  let cur=null;secs.forEach((s,i)=>{const r=s.getBoundingClientRect();if(r.top<VH*.4&&r.bottom>VH*.4)cur=i});navLinks.forEach((a,i)=>a.classList.toggle('on',i===cur));
  if(!$('.nav-l').matches(':hover')){const on=navLinks[cur];if(on){navInd.style.opacity=1;navInd.style.left=on.offsetLeft+'px';navInd.style.width=on.offsetWidth+'px'}else navInd.style.opacity=0}}

/* ===== cursor, magnetic, spotlight, tilt ===== */
const cur=$('.cur'),curR=$('.cur-r'),curL=$('#curL');let cx=VW/2,cy=VH/2,rx=cx,ry=cy;
let curOn=false;
addEventListener('pointermove',e=>{if(!curOn&&FINE&&!RM&&e.pointerType==='mouse'){curOn=true;document.body.classList.add('has-cur')}cx=e.clientX;cy=e.clientY;mX=e.clientX/VW;mY=e.clientY/VH;
  const el=e.target.closest&&e.target.closest('[data-cursor],a,button,input,label');
  curR.classList.toggle('lbl',!!(el&&el.dataset.cursor==='label'&&!drag));curR.classList.toggle('big',!!(el&&el.dataset.cursor!=='label'));curL.textContent=el&&el.dataset.cursor==='label'?el.dataset.label:''},{passive:true});
$$('.mag').forEach(m=>{const inner=m.querySelector('.mi');m.addEventListener('pointermove',e=>{if(!FINE||RM)return;const r=m.getBoundingClientRect();const dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2);m.style.translate=`${dx*.22}px ${dy*.3}px`;if(inner)inner.style.translate=`${dx*.12}px ${dy*.14}px`;m.style.setProperty('--fx',(e.clientX-r.left)+'px');m.style.setProperty('--fy',(e.clientY-r.top)+'px')});
  m.addEventListener('pointerleave',()=>{m.style.translate='';if(inner)inner.style.translate=''});
  m.addEventListener('pointerenter',e=>{const r=m.getBoundingClientRect();m.style.setProperty('--fx',(e.clientX-r.left)+'px');m.style.setProperty('--fy',(e.clientY-r.top)+'px')})});
$$('.surf').forEach(s=>{s.addEventListener('pointermove',e=>{const r=s.getBoundingClientRect();const x=e.clientX-r.left,y=e.clientY-r.top;s.style.setProperty('--mx',x+'px');s.style.setProperty('--my',y+'px');
  if(s.classList.contains('tilt')&&FINE&&!RM){s.style.setProperty('--try',((x/r.width-.5)*5)+'deg');s.style.setProperty('--trx',(-(y/r.height-.5)*5)+'deg')}});
  s.addEventListener('pointerleave',()=>{s.style.setProperty('--try','0deg');s.style.setProperty('--trx','0deg')})});

/* ===== reveals ===== */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;el.classList.remove('pre');io.unobserve(el);
  if(el.id==='devCard')setTimeout(devRun,500);
  if(el.id==='adCard'&&!adUser)setTimeout(()=>{if(!adUser&&!adT.checked){adT.checked=true;setAds(true)}},1600)}),{rootMargin:'0px 0px -10% 0px'});
if(!RM){[...$$('.rv'),...$$('.split')].forEach(el=>{if(el.getBoundingClientRect().top>VH*.92){el.classList.add('pre');io.observe(el)}else if(el.id==='devCard')devRun()})}else{devRun();adT.checked=true;setAds(true)}
const vis=new IntersectionObserver(es=>es.forEach(e=>{if(e.target===gcv)g2Visible=e.isIntersecting;if(e.target===lab)labVisible=e.isIntersecting}),{rootMargin:'100px'});vis.observe(gcv);vis.observe(lab);

/* ===== main loop ===== */
let last=performance.now(),skyDrawn=false;
function frame(t){
  const dt=Math.min(50,t-last);last=t;
  const y=scrollY;vel=lerp(vel,(y-lastSY)*16/Math.max(8,dt),1-Math.exp(-dt/90));lastSY=y;
  sX=lerp(sX,mX,.05);sY=lerp(sY,mY,.05);
  if(!RM||!skyDrawn){drawSky(t,dt);skyDrawn=true}
  if(introK<1)introK=Math.min(1,introK+dt/2000);
  updHero();
  if(heroVisible){G1.step(dt);if(G1.target===null&&!RM)G1.rotY+=dt*.005;G1.glow=1;G1.draw(t,heroLayout())}
  // phone tilt follows pointer gently
  if(FINE&&!RM){phone.style.setProperty('--ry',((sX-.5)*16)+'deg');phone.style.setProperty('--rx',(-(sY-.5)*10)+'deg')}
  if(g2Visible){if(!drag){if(Math.abs(spinV)>.01){G2.rotY+=spinV;spinV*=.94}else if(G2.target)G2.step(dt);else if(!RM&&t-g2Idle>1500)G2.rotY+=dt*.006}G2.draw(t,G2.layout())}
  if(labVisible)drawLab(t,dt);
  // statement words
  {const s=$('.stmt');const r=s.getBoundingClientRect();const p=clamp(-r.top/(s.offsetHeight-VH));const n=Math.floor(p*1.15*WDS.length);WDS.forEach((w,i)=>w.classList.toggle('on',i<n))}
  updFinal();updNav();
  // cursor
  rx=lerp(rx,cx,.18);ry=lerp(ry,cy,.18);cur.style.transform=`translate(${cx}px,${cy}px)`;curR.style.transform=`translate(${rx}px,${ry}px)`;
  requestAnimationFrame(frame);
}
addEventListener('resize',()=>{VW=innerWidth;VH=innerHeight;sizeSky();G1.resize();G2.resize();sizeLab();placeInd();setProto(PROTOS.indexOf(proto))});
select(SERVERS[0]);renderRows();
requestAnimationFrame(()=>{hero.classList.remove('intro');requestAnimationFrame(frame)});
if(RM){hero.classList.remove('intro');$$('.stmt .wd').forEach(w=>w.classList.add('on'))}
})();

