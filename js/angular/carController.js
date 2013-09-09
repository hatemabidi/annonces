var moduleAccueil = angular.module('moduleAccueil', []);

var controllers = {};

controllers.governmentsController= function($scope, $http){
	$scope.showDelegation='';
	$scope.showLocality='';

	$scope.tabInputGovernment=[];
	$scope.boolAllGovernment=true;
	$scope.nbrTrueGovernment=0;
	$scope.inputGovernment="Tout les gouvernements";

	$scope.tabInputDelegation=[];
	$scope.boolAllDelegation=true;
	$scope.nbrTrueDelegation=0;
	$scope.inputDelegation="Tout les delegations";

	$scope.tabInputLocalities=[];
	$scope.boolAllLocalities=true;
	$scope.nbrTrueLocalities=0;
	$scope.inputLocalities="Tout les locales";
	

	$http.get('js/json/localities.json')
       .then(function(res){
          	$scope.governments = res.data;

          	for(i=0; i<$scope.governments.length; i++){
          		$scope.tabInputGovernment.push({namee:$scope.governments[i].name, val: true});
          	}
        });

	$scope.setGovernments=function(government){
		$scope.tabInputDelegation=[];
		$scope.showDelegation=government;
		$scope.showLocality='';
		for(i=0;i<$scope.governments.length;i++){
			if($scope.governments[i].name==government){
				for(j=0;j<$scope.governments[i].delegation.length;j++){
					$scope.tabInputDelegation.push({namee:$scope.governments[i].delegation[j].name, val: true});
				}
			}
		}
	}

	$scope.setDelegation=function(delegation){
		$scope.tabInputLocalities=[];
		$scope.showLocality=delegation;
		for(i=0;i<$scope.governments.length;i++){
			for(j=0;j<$scope.governments[i].delegation.length;j++){
				if($scope.governments[i].delegation[j].name==delegation){
					for(k=0;k<$scope.governments[i].delegation[j].localities.length;k++){
						$scope.tabInputLocalities.push({namee:$scope.governments[i].delegation[j].localities[k], val: true});
					}
				}
			}
		}
	}

	$scope.ajoutSuppInputGovernment= function(val){
		$scope.inputDelegation="Tout les délegations";
		$scope.boolAllDelegation=true;
		$scope.inputLocalities="Tout les localités";
		$scope.boolAllLocalities=true;
		$scope.inputGovernment="";
		if(val==1){
			$scope.showDelegation='';
			$scope.showLocality='';
			if($scope.boolAllGovernment){
				$scope.boolAllGovernment=false;
				for(i=0;i<$scope.tabInputGovernment.length;i++){
					$scope.tabInputGovernment[i].val=false;
				}
				$scope.inputGovernment="";
			}else{
				$scope.boolAllGovernment=true;
				for(i=0;i<$scope.tabInputGovernment.length;i++){
					$scope.tabInputGovernment[i].val=true;
				}
				$scope.inputGovernment="Tout les gouvernements";
			}
		}else{
			for(i=0;i<$scope.tabInputGovernment.length;i++){
				if($scope.tabInputGovernment[i].namee==val){
					if($scope.tabInputGovernment[i].val){
						$scope.tabInputGovernment[i].val=false;
					}else{
						$scope.tabInputGovernment[i].val=true;
					}
				}
			}

			$scope.nbrTrueGovernment=0;
			for(i=0;i<$scope.tabInputGovernment.length;i++){
				if($scope.tabInputGovernment[i].val){
					$scope.nbrTrueGovernment++;
					$scope.inputGovernment+= $scope.tabInputGovernment[i].namee+", ";
				}
			}
			if($scope.nbrTrueGovernment==$scope.tabInputGovernment.length){
				$scope.inputGovernment="Tout les gouvernements";
			}


			if($scope.nbrTrueGovernment==1){
				for(i=0;i<$scope.tabInputGovernment.length;i++)
				{
					if($scope.tabInputGovernment[i].val){
						$scope.setGovernments($scope.tabInputGovernment[i].namee);
					}
				}
			}else{
				$scope.setGovernments("");
			}
		}
	}

	$scope.ajoutSuppInputDelegation= function(val){
		$scope.inputLocalities="Tout les localités";
		$scope.boolAllLocalities=true;
		$scope.inputDelegation="";
		if(val==1){
			$scope.showLocality='';
			if($scope.boolAllDelegation){
				$scope.boolAllDelegation=false;
				for(i=0;i<$scope.tabInputDelegation.length;i++){
					$scope.tabInputDelegation[i].val=false;
				}
				$scope.inputDelegation="";
			}else{
				$scope.boolAllDelegation=true;
				for(i=0;i<$scope.tabInputDelegation.length;i++){
					$scope.tabInputDelegation[i].val=true;
				}
				$scope.inputDelegation="Tout les délegations";
			}
		}else{
			for(i=0;i<$scope.tabInputDelegation.length;i++){
				if($scope.tabInputDelegation[i].namee==val){
					if($scope.tabInputDelegation[i].val){
						$scope.tabInputDelegation[i].val=false;
					}else{
						$scope.tabInputDelegation[i].val=true;
					}
				}
			}

			$scope.nbrTrueDelegation=0;
			for(i=0;i<$scope.tabInputDelegation.length;i++){
				if($scope.tabInputDelegation[i].val){
					$scope.nbrTrueDelegation++;
					$scope.inputDelegation+= $scope.tabInputDelegation[i].namee+", ";
				}
			}
			if($scope.nbrTrueDelegation==$scope.tabInputDelegation.length){
				$scope.inputDelegation="Tout les délegations";
			}


			if($scope.nbrTrueDelegation==1){
				for(i=0;i<$scope.tabInputDelegation.length;i++)
				{
					if($scope.tabInputDelegation[i].val){
						$scope.setDelegation($scope.tabInputDelegation[i].namee);
					}
				}
			}else{
				$scope.setDelegation("");
			}
		}
	}

	$scope.ajoutSuppInputLocalities= function(val){
		$scope.inputLocalities="";
		if(val==1){
			if($scope.boolAllLocalities){
				$scope.boolAllLocalities=false;
				for(i=0;i<$scope.tabInputLocalities.length;i++){
					$scope.tabInputLocalities[i].val=false;
				}
				$scope.inputLocalities="";
			}else{
				$scope.boolAllLocalities=true;
				for(i=0;i<$scope.tabInputLocalities.length;i++){
					$scope.tabInputLocalities[i].val=true;
				}
				$scope.inputLocalities="Tout les localités";
			}
		}else{
			for(i=0;i<$scope.tabInputLocalities.length;i++){
				if($scope.tabInputLocalities[i].namee==val){
					if($scope.tabInputLocalities[i].val){
						$scope.tabInputLocalities[i].val=false;
					}else{
						$scope.tabInputLocalities[i].val=true;
					}
				}
			}

			$scope.nbrTrueLocalities=0;
			for(i=0;i<$scope.tabInputLocalities.length;i++){
				if($scope.tabInputLocalities[i].val){
					$scope.nbrTrueLocalities++;
					$scope.inputLocalities+= $scope.tabInputLocalities[i].namee+", ";
				}
			}
			if($scope.nbrTrueLocalities==$scope.tabInputLocalities.length){
				$scope.inputLocalities="Tout les localités";
			}
		}
	}	
};

controllers.listCarAdvertController= function($scope, $http){
	$http.get('js/json/listCarAdvert.json')
       .then(function(res){
          	$scope.listCarAdvert= res.data;
        });

    
    $scope.showFeatures=[
		{
			name:"Energie",
		    val:true
		},
		{
			name:"Puissance",
		    val:true
		},
		{
			name:"Kilométrage",
			val:true
		},
		{
			name:"Couleur",
			val:false
		},
		{
			name:"Age",
			val:false
		},
		{
			name:"Cylindrée",
			val:false
		},
		{
			name:"Boite de vitesse",
			val:false
		},
		{
			name:"Locale",
			val:false
		}
	]

    $scope.showHide= function(val){
    	if($scope.showFeatures[val].val){
    		$scope.showFeatures[val].val=false;
    	}else{
    		$scope.showFeatures[val].val=true;
    	}
    }
};

controllers.carBrandsController= function($scope, $http){
	$scope.brands={};
	$scope.models={};
	$scope.showModels=false;

	$scope.tabInputBrands=[];
	$scope.boolAllBrands=true;
	$scope.nbrTrueBrands=0;
	$scope.inputBrands="Tout les marques";

	$scope.tabInputModels=[];
	$scope.boolAllModels=true;
	$scope.nbrTrueModels=0;
	$scope.inputModels="Tout les modèles";

	$http.get('js/json/carBrands.json')
       .then(function(res){
          	$scope.brands= res.data;

          	for(i=0; i<$scope.brands.length; i++){
          		$scope.tabInputBrands.push({namee:$scope.brands[i].name, val: true});
          	}

        });

	$scope.getCarBrands= function(brand){
		$scope.tabInputModels=[];
		if(brand == ""){
			$scope.showModels=false;	
		}else{
			$scope.showModels=true;
			for(i=0;i<$scope.brands.length;i++){
				if($scope.brands[i].name==brand){
					for(j=0;j<$scope.brands[i].models.length;j++){
						$scope.tabInputModels.push({namee:$scope.brands[i].models[j], val: true});
					}
				}
			}
		}
	}

	$scope.ajoutSuppInputBrand= function(val){
		$scope.inputBrands="";
		$scope.nbrTrueBrands=0;

		if(val==1){
			$scope.getCarBrands("");
			if($scope.boolAllBrands){
				$scope.boolAllBrands=false;
				for(i=0;i<$scope.tabInputBrands.length;i++){
					$scope.tabInputBrands[i].val=false;
				}
				$scope.inputBrands="";
			}else{
				$scope.boolAllBrands=true;
				for(i=0;i<$scope.tabInputBrands.length;i++){
					$scope.tabInputBrands[i].val=true;
				}
				$scope.inputBrands="Tout les marques";
			}
		}else{
			for(i=0;i<$scope.tabInputBrands.length;i++){
				if($scope.tabInputBrands[i].namee==val){
					if($scope.tabInputBrands[i].val){
						$scope.tabInputBrands[i].val=false;
					}else{
						$scope.tabInputBrands[i].val=true;
					}
				}
			}

			for(i=0;i<$scope.tabInputBrands.length;i++){
				if($scope.tabInputBrands[i].val){
					$scope.nbrTrueBrands++;
					$scope.inputBrands+= $scope.tabInputBrands[i].namee+", ";
				}
			}
			if($scope.nbrTrueBrands==$scope.tabInputBrands.length){
				$scope.inputBrands="Tout les marques";
			}
			if($scope.nbrTrueBrands==1){
				for(i=0;i<$scope.tabInputBrands.length;i++)
				{
					if($scope.tabInputBrands[i].val){
						$scope.getCarBrands($scope.tabInputBrands[i].namee);
					}
				}
			}else{
				$scope.getCarBrands("");
			}
		}
	}

	$scope.ajoutSuppInputModel= function(val){
		$scope.inputModels="";
		if(val==1){
			if($scope.boolAllModels){
				$scope.boolAllModels=false;
				for(i=0;i<$scope.tabInputModels.length;i++){
					$scope.tabInputModels[i].val=false;
				}
				$scope.inputModels="";
			}else{
				$scope.boolAllModels=true;
				for(i=0;i<$scope.tabInputModels.length;i++){
					$scope.tabInputModels[i].val=true;
				}
				$scope.inputModels="Tout les modèles";
			}
		}else{
			for(i=0;i<$scope.tabInputModels.length;i++){
				if($scope.tabInputModels[i].namee==val){
					if($scope.tabInputModels[i].val){
						$scope.tabInputModels[i].val=false;
					}else{
						$scope.tabInputModels[i].val=true;
					}
				}
			}

			$scope.nbrTrueModels=0;
			for(i=0;i<$scope.tabInputModels.length;i++){
				if($scope.tabInputModels[i].val){
					$scope.nbrTrueModels++;
					$scope.inputModels+= $scope.tabInputModels[i].namee+", ";
				}
			}
			if($scope.nbrTrueModels==$scope.tabInputModels.length){
				$scope.inputModels="Tout les modèles";
			}
		}
	}
};

controllers.addListingController= function($scope){
	$scope.data = {
		government:{
			important:'1',
			val:'',
			idDiv:'IdCovernmentAdd',
			idInput:'GovernmentAdvertAdd'
		},
		delegation:{
			important:'1',
			val:'',
			idDiv:'IdDelegationAdd',
			idInput:'DelegationAdvertAdd'
		},
		locality:{
			important:'1',
			val:'',
			idDiv:'IdLocalityAdd',
			idInput:'LocalityAdvertAdd'
		},
		category:{
			important:'1',
			val:'',
			idDiv:'IdCategoryAdd',
			idInput:'CategoryAdvertAdd'
		},
		brand:{
			important:'2',
			val:'',
			idDiv:'IdCarBrandAdd',
			idInput:'CarBrandAdvertAdd'
		},
		model:{
			important:'2',
			val:'',
			idDiv:'IdCarModelAdd',
			idInput:'CarModelAdvertAdd'
		},
		floor:{
			important:'2',
			val:'',
			idDiv:'IdFloorAdd',
			idInput:'FloorAdvertAdd'
		},
		room:{
			important:'2',
			val:'',
			idDiv:'IdRoomAdd',
			idInput:'RoomAdvertAdd'
		},
		surface:{
			important:'2',
			val:'',
			idDiv:'IdSurfaceAdd',
			idInput:'SurfaceAdvertAdd'
		},
		km:{
			important:'2',
			val:'',
			idDiv:'IdKmAdd',
			idInput:'KmAdvertAdd'
		},
		year:{
			important:'2',
			val:'',
			idDiv:'IdCarModelYearAdd',
			idInput:'CarModelYearAdvertAdd'
		},
		power:{
			important:'2',
			val:'',
			idDiv:'IdCarPowerAdd',
			idInput:'CarPowerAdvertAdd'
		},
		color:{
			important:'2',
			val:'',
			idDiv:'IdColorAdd',
			idInput:'ColorAdvertAdd'
		},
		type:{
			important:'1',
			val:'',
			idDiv:'IdTypeAdd',
			idInput:'TypeAdvertAdd'
		},
		prix:{
			important:'1',
			val:'',
			idDiv:'IdPrixAdd',
			idInput:'PrixAdvertAdd'
		},
		title:{
			important:'1',
			val:'',
			idDiv:'IdTitleAdd',
			idInput:'TitleAdvertAdd'
		},
		description:{
			important:'2',
			val:'',
			idDiv:'IdDescriptionAdd',
			idInput:'DescriptionAdvertAdd'
		},
		tel:{
			important:'2',
			val:'',
			idDiv:'IdTelAdd',
			idInput:'TelAdvertAdd'
		},
		fixe:{
			important:'2',
			val:'',
			idDiv:'IdFixeAdd',
			idInput:'FixeAdvertAdd'
		},
		fax:{
			important:'2',
			val:'',
			idDiv:'IdFaxAdd',
			idInput:'FaxAdvertAdd'
		},
		mail:{
			important:'2',
			val:'',
			idDiv:'IdMailAdd',
			idInput:'MailAdvertAdd'
		}
	};

	$scope.boolPub=true;

	$scope.setCategory= function(category){
		$scope.showAddInfo=category;
	}

	$scope.VerifAdd= function(par,idDiv,idInput,type){
		var element= document.getElementById(idDiv);
		if(par==""){
			if(type=="1"){
				element.className="control-group error";
				document.getElementById(idInput).style.background="#fff url(img/InputError.png) top right no-repeat";
			}else{
				element.className="control-group info";
				document.getElementById(idInput).style.background="#fff url(img/InputInfo.png) top right no-repeat";
			}
		}else{
			element.className="control-group success";
			document.getElementById(idInput).style.background="#fff url(img/InputSuccess.png) top right no-repeat";
		}
	}

	$scope.submitBtn=function(){
		$scope.boolPub=true;
		for(i in $scope.data){
			if($scope.data[i].important=='1'){
				if($scope.data[i].val==''){
					$scope.boolPub=false;
					$scope.VerifAdd('',$scope.data[i].idDiv,$scope.data[i].idInput,1);
					window.scrollTo(0,0);
				}
			}
		}

		if($scope.boolPub){
			if($scope.data.category.val=='Voitures'){
				if($scope.data.brand.val==''){
					$scope.boolPub=false;
					$scope.VerifAdd('',$scope.data.brand.idDiv,$scope.data.brand.idInput,1);
					window.scrollTo(0,0);
				}
				if($scope.data.model.val==''){
					$scope.boolPub=false;
					$scope.VerifAdd('',$scope.data.model.idDiv,$scope.data.model.idInput,1);
					window.scrollTo(0,0);
				}
			}
		}
		if($scope.boolPub){
			alert(11);
			for(i in $scope.data){
				console.log($scope.data[i].val);
			}
		}
	}
};

controllers.SignupController= function($scope){
	$scope.boolInsc=true;

    $scope.data = {
    	lastName:{
    		important:'1',
    		val:'',
    		idDiv:'InLName',
    		idInput:'InInputLName'
    	},
    	firstName:{
    		important:'1',
    		val:'',
    		idDiv:'InFName',
    		idInput:'InInputFName'
    	},
    	mailI:{
    		important:'1',
    		val:'',
    		idDiv:'InMail',
    		idInput:'InInputMail'
    	},
    	passwordI:{
    		important:'1',
    		val:'',
    		idDiv:'InPass1',
    		idInput:'InInputPass1'
    	},
    	password2:{
    		important:'1',
    		val:'',
    		idDiv:'InPass2',
    		idInput:'InInputPass2'
    	},
    	tel:{
    		important:'2',
    		val:'',
    		idDiv:'InTel',
    		idInput:'InInputTel'
    	},
    	fixe:{
    		important:'2',
    		val:'',
    		idDiv:'InFixe',
    		idInput:'InInputFixe'
    	},
    	fax:{
    		important:'2',
    		val:'',
    		idDiv:'InFax',
    		idInput:'InInputFax'
    	}
    };

    $scope.VerifAdd= function(par,idDiv,idInput,type){
		var element= document.getElementById(idDiv);
		if(par==""){
			if(type=="1"){
				element.className="control-group error";
				document.getElementById(idInput).style.background="#fff url(img/InputError.png) top right no-repeat";
				document.getElementById(idInput).value="";
			}else{
				element.className="control-group info";
				document.getElementById(idInput).style.background="#fff url(img/InputInfo.png) top right no-repeat";
			}
		}else{
			element.className="control-group success";
			document.getElementById(idInput).style.background="#fff url(img/InputSuccess.png) top right no-repeat";
		}
	}

    $scope.signup = function(){
    	$scope.boolInsc=true;
    	for(i in $scope.data){
    		if($scope.data[i].important=='1'){
    			if($scope.data[i].val==''){
    				$scope.VerifAdd('',$scope.data[i].idDiv,$scope.data[i].idInput,'1');
    				$scope.boolInsc=false;
    				window.scrollTo(0,0);
    			}
    		}
    	}
    	if($scope.data.passwordI.val!=$scope.data.password2.val){
    		$scope.VerifAdd('',$scope.data.passwordI.idDiv,$scope.data.passwordI.idInput,'1');
    		$scope.VerifAdd('',$scope.data.password2.idDiv,$scope.data.password2.idInput,'1');
    		$scope.boolInsc=false;
    		window.scrollTo(0,0);
    	}
    	if($scope.boolInsc){
        	console.log($scope.data);
        	alert('Vous êtes bien inscrit.');
        }
    }
};

controllers.LoginController= function($scope){
	$scope.boolConx=true;

    $scope.data = {
    	mail:{
    		important:'1',
    		val:'',
    		idDiv:'CoMail',
    		idInput:'CoInputMail'
    	},
    	password:{
    		important:'1',
    		val:'',
    		idDiv:'CoPass',
    		idInput:'CoInputPass'
    	}
    };

    $scope.VerifAdd= function(par,idDiv,idInput,type){
		var element= document.getElementById(idDiv);
		if(par==""){
			if(type=="1"){
				element.className="control-group error";
				document.getElementById(idInput).style.background="#fff url(img/InputError.png) top right no-repeat";
			}else{
				element.className="control-group info";
				document.getElementById(idInput).style.background="#fff url(img/InputInfo.png) top right no-repeat";
			}
		}else{
			element.className="control-group success";
			document.getElementById(idInput).style.background="#fff url(img/InputSuccess.png) top right no-repeat";
		}
	}

    $scope.login = function(){
    	for(i in $scope.data){
    		if($scope.data[i].val==''){
    			$scope.VerifAdd('',$scope.data[i].idDiv,$scope.data[i].idInput,'1');
    			$scope.boolConx=false;
    			window.scrollTo(0,0);
    		}
    	}
    	if($scope.boolConx){
        	console.log($scope.data);
        }
    }
};

moduleAccueil.controller(controllers);

moduleAccueil.config(function($routeProvider) {
    $routeProvider
            .when("/accueil",
                { 
                    templateUrl: "AccueilView.html"
                })
            .when("/resultatRecherche",
                {
                	controller: "listCarAdvertController",
                    templateUrl: "ResultatRechercheView.html"
                })
            .when("/contact",
                {
                    templateUrl: "ContactView.html" 
                })
            .when("/affichageAnnonce",
                {
                    templateUrl: "AffichageAnnonceView.html"
                })

            .otherwise({ redirectTo: "/accueil" });
});