	var def_lang = "en";
	var lang = def_lang;
	function Dw(sStr, sParam) {
		var sRet = sStr;
		sRet = sStr.replace("{p}", sParam);
		document.write(sRet);
	}

	function CheckTr() {
		var l = document.location.search;
		if (l.length >= 5 && l.substr(0,3) == "?l=")
			lang = l.substr(3,2);
		else
			lang = def_lang;
	}

	function Tr_cs(sStr) {
		return sStr;
	}

	function Tr_en(sStr) {
		return sStr;
	}

	function Tr_pl(sStr) {
		return sStr;
	}

	function Tr(sStr, sParam) {
		if (lang == "cs") Dw(Tr_cs(sStr), sParam); else
		if (lang == "en") Dw(Tr_en(sStr), sParam); else
		if (lang == "pl") Dw(Tr_pl(sStr), sParam); else
		Dw(sStr, sParam);
	}
	function GetTr(sStr, sParam) {
		if (lang == "cs") return Tr_cs(sStr); else
		if (lang == "en") return Tr_en(sStr); else
		if (lang == "pl") return Tr_pl(sStr); else
		return sStr;
	}

	function ALink(sHref, sName, bTranslate, sParam, sOther_tags) {
		if (lang != def_lang) 
			Dw("<a href='"+sHref+"?l="+lang+"' "+sOther_tags+">", ""); 
		else
			Dw("<a href=\""+sHref+"\""+sOther_tags+">", "");
		if (bTranslate) 
			Tr(sName, sParam);
		else 
			Dw(sName, sParam);
		Dw("</a>", "");
	}

	CheckTr();