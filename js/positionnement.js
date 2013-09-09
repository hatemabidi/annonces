var larg=0;
var haut=0;
var active=1;
var filterShow=true;
var tabActive=1;
var buttonActive=1;

var heightList="";
var heightAllSearch="";
var widthAllSearch="";

function sizeWindow(bool){
	if (document.body){
		larg = (document.body.clientWidth);
		haut = ($(document).height());
	}else{
		larg = (window.innerWidth);
		haut = ($(document).height());
	}

	if(bool==1){
		if(larg>=758){
			heightList="309px";
			heightAllSearch="1000px";
			widthAllSearch="230px";
			document.getElementById('pageAnnonce').style.width=larg-310+"px";
			document.getElementById('showFilter').style.background="url(http://127.0.0.1/annonces/img/hideFilter.png) center no-repeat";
			document.getElementById('showFilter').style.visibility="visible";
			document.getElementById('DivInputAllSearch').style.width=230+"px";
		}
	}else{
		if(bool==2){
			if(larg>=758){
				heightList="309px";
				heightAllSearch="1000px";
				if(filterShow){
					document.getElementById('pageAnnonce').style.width=larg-300+"px";
					document.getElementById('showFilter').style.background="url(http://127.0.0.1/annonces/img/hideFilter.png) center no-repeat";
					document.getElementById('showFilter').style.visibility="visible";
					document.getElementById('DivInputAllSearch').style.width=230+"px";
				}else{
					document.getElementById('pageAnnonce').style.width=larg+"px";
				}
			}
		}else{
			if(filterShow){

				document.getElementById('filtre').style.marginLeft="-301px";
				filterShow=false;
				document.getElementById('pageAnnonce').style.width=larg+"px";
				document.getElementById('showFilter').style.background="url(http://127.0.0.1/annonces/img/showFilter.png) center no-repeat";
			}else{

				document.getElementById('filtre').style.marginLeft="0px";
				filterShow=true;
				document.getElementById('pageAnnonce').style.width=larg-300+"px";
				document.getElementById('showFilter').style.background="url(http://127.0.0.1/annonces/img/hideFilter.png) center no-repeat";
			}
		}
	}
	if(larg<758){
		heightList="200px";
		heightAllSearch="438px";
		document.getElementById('filtre').style.marginLeft="0px";
		document.getElementById('pageAnnonce').style.width=larg+"px";
		document.getElementById('showFilter').style.visibility="hidden";
		document.getElementById('DivInputAllSearch').style.width=larg-30+"px";
	}
}

function showHideOptionCar(val){
	document.getElementById('BlockPrix').style.display=val;
	document.getElementById('BlockKm').style.display=val;
	document.getElementById('BlockAge').style.display=val;
	document.getElementById('BlockPuissance').style.display=val;
	document.getElementById('BlockColor').style.display=val;
	document.getElementById('BlockVitesse').style.display=val;
	document.getElementById('BlockEnergie').style.display=val;
}

function showHideOptionHouse(val){
	document.getElementById('BlockPrix').style.display=val;
	document.getElementById('BlockEtage').style.display=val;
	document.getElementById('BlockSurface').style.display=val;
	document.getElementById('BlockRoom').style.display=val;
}

function CategoryActive(val){
	document.getElementById('Category'+active).style.background="url(http://127.0.0.1/annonces/img/category"+active+".png) no-repeat center";
	document.getElementById('Category'+val).style.background="url(http://127.0.0.1/annonces/img/category"+val+"Hover.png) no-repeat center";
	document.getElementById('TabCategory'+active).style.display="none";
	document.getElementById('TabCategory'+val).style.display="block";

	if(val==1){
		showHideOptionHouse('none');
		showHideOptionCar('block');
	}else{
		showHideOptionCar('none');
		showHideOptionHouse('block');
	}

	showHideTab(tabActive,buttonActive,false);
	active=val;
}

function showHideScroll(val){
	var bool=true;
	if(val!='select'&&document.getElementById(val).style.display=="block"){
		document.getElementById('DivInputAllSearch').style.height=309+"px";
		bool=false;
	}
	document.getElementById('listCheckboxGovernments').style.display="none";
	document.getElementById('listCheckboxDelegations').style.display="none";
	document.getElementById('listCheckboxLocalities').style.display="none";
	document.getElementById('listCheckboxBrands').style.display="none";
	document.getElementById('listCheckboxModels').style.display="none";
	document.getElementById('optionSearch').style.display="none";

	if(val!='select'&&bool){
		document.getElementById(val).style.display="block";
		document.getElementById('DivInputAllSearch').style.height=heightAllSearch;
		document.getElementById(val).style.height=heightList;
	}
}

function showHideTab(tab,button,html){
	if(html){
		if(tab==tabActive&&button==buttonActive){
			if(document.getElementById('Tab'+tab+button).style.height=="309px"){
				document.getElementById('Tab'+tab+button).style.height="0px";
				document.getElementById('DivInputAllSearch').style.height="0px";
			}
			else{
				document.getElementById('Tab'+tab+button).style.height="309px";
				document.getElementById('DivInputAllSearch').style.height="309px";
				document.getElementById('DivInputAllSearch').style.marginTop=(30*button)+"px";
			}
		}else{
			document.getElementById('Tab'+tabActive+buttonActive).style.height="0px";
			document.getElementById('Tab'+tab+button).style.height="309px";
			document.getElementById('DivInputAllSearch').style.height="309px";
			document.getElementById('DivInputAllSearch').style.marginTop=(30*button)+"px";
		}
	}else{
		document.getElementById('Tab'+tab+button).style.height="0px";
		document.getElementById('DivInputAllSearch').style.height="0px";
	}

	showHideScroll('select');

	tabActive=tab;
	buttonActive=button;
}