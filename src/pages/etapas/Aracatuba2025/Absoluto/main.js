		function OpenPhoto($url, $name) {
			newWindow=window.open("", "", "directories=no,location=no,toolbar=no,menubar=no,height=400,width=400");
			newWindow.document.write("<html><head><title>"+$name+"</title></head><body style='background:#eaf4ff;'><div align=center><img src='"+$url+"' style='height:90%;'></div></body></html>");
			newWindow.focus();
}
		var bFirstRun = true;
		var aPhoto = [];
		var aPhotoTD = [];
		var aCb = [];
		var aNoPhotoDIV = [];
		var aFrfo = [];
		var bHidden = false;
		var iL1 = 0;
		var iL2 = 0;
		var iL3 = 0;
		var iL4 = 0;
		var iL5 = 0;
		function ShowHidePhoto() {
			document.body.style.cursor='wait';
			if (bFirstRun) {
				bHidden = true;
				bFirstRun = false;
				var allHTMLTags = [];
				var allHTMLTags=document.getElementsByTagName('*');
				for (i=0; i<allHTMLTags.length; i++) {
					if (allHTMLTags[i].className=='foto') {
						aPhoto[iL1] = allHTMLTags[i];
						aPhoto[iL1].style.display='none';
						iL1++;
					}
					if (allHTMLTags[i].className=='fo') {
						aPhotoTD[iL2] = allHTMLTags[i];
						aPhotoTD[iL2].className='';
						iL2++;
					}
					if (allHTMLTags[i].className=='cb') {
						aCb[iL3] = allHTMLTags[i];
						aCb[iL3].checked=0;
						iL3++;
					}
					if (allHTMLTags[i].className=='frfo') {
						aFrfo[iL4] = allHTMLTags[i];
						aFrfo[iL4].className='fr';
						iL4++;
					}
					if (allHTMLTags[i].className=='nofoto') {
						aNoPhotoDIV[iL5] = allHTMLTags[i];
						aNoPhotoDIV[iL5].style.visibility='visible';
						iL5++;
					}
				}
			}
else {
				bHidden = !bHidden;
				if (bHidden) {
					for (i=0; i<aPhoto.length; i++) {
						aPhoto[i].style.display='none';
					}
					for (i=0; i<aPhotoTD.length; i++) {
						aPhotoTD[i].className='';
					}
					for (i=0; i<aFrfo.length; i++) {
						aFrfo[i].className='fr';
					}
					for (i=0; i<aCb.length; i++) {
						aCb[i].checked=0;
					}
					for (i=0; i<aNoPhotoDIV.length; i++) {
						aNoPhotoDIV[i].style.visibility='visible';
					}
				}
				else {
					for (i=0; i<aPhoto.length; i++) {
						aPhoto[i].style.display='block';
					}
					for (i=0; i<aPhotoTD.length; i++) {
						aPhotoTD[i].className='fo';
					}
					for (i=0; i<aFrfo.length; i++) {
						aFrfo[i].className='frfo';
					}
					for (i=0; i<aCb.length; i++) {
						aCb[i].checked=1;
					}
					for (i=0; i<aNoPhotoDIV.length; i++) {
						aNoPhotoDIV[i].style.visibility='hidden';
					}
				}
			}
			document.body.style.cursor='default';
		}
