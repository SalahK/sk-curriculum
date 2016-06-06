var app = angular.module('cv',['ngRoute','ngMaterial']);

// Configuration des routes
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/formations',{
        templateUrl: 'views/diplomes.html',
        controller: 'cvCtrl'
    })
    .when('/experiences',{
        templateUrl: 'views/experiences.html',
        controller: 'cvCtrl'
    })
    .when('/competences',{
        templateUrl: 'views/competences.html',
        controller: 'cvCtrl'
    }).
    otherwise({
        redirectTo: '/formations'
    });
}]);

app.factory("cvFact", function(){
    // Expériences
    var exp = [
        {
            date:'2016 ...',
            titre:'Conseil en communication',
            desc:['Identité visuel','Charte graphique','Design support de communication', 'Site vitrine & E-commerce','Réferencement naturel','Application mobile'],
            lien:['Boutique-violette.com','Le-lieu.fr']
        },
        {
            date:'2015',
            titre:'Stage développement Web',
            desc:['Site web full responsive','Base de donnée NoSQL','Intégration firebase', 'Gestion utilisateurs','Intégration API Facebook','Gestion évènement','Intégration API Meetup','Gestion contact email','Intégration API Mandrill'],
            lien:['Toulousesowine.fr']
        },
        {
            date:'2014 - 2015',
            titre:'Graphiste Indépendant',
            desc:['Flyer','Carte de visite','Design pochette d\'album'],
            folio:['fly','carte','maquettes']
        }
    ];
    
    // Formations
    var fmt = [
        {
            date: '2015',
            titre: 'AFPA',
            stitre: 'Formation Développeur Logiciel',
            desc: ['DEVELOPPEMENT ORIENTE OBJET','DEVELOPPEMENT EVENEMENTIEL','ACCES AUX BASE DE DONNEE','DDEVELOPPEMENT WEB','DEVELOPPEMENT ANDROID','METHODOLOGIE DE DEVELOPPEMENT'],
            css: 'afpa'
        },
        {
            date: '2013-2014',
            titre: 'Ecole Supérieure des Métiers Artistiques',
            stitre: 'Mise à niveau en art appliqué',
            desc: ['DESIGN GRAPHIQUE', 'ART APPLIQUE', 'ART PLASTIQUE', 'HISTOIRE DE L\'ART'],
            css: 'esma'
        }
    ];
    
    // information basique
    var info = {
            name: 'Salah Kounkou',
            mail: 'salah.knk@gmail.com',
            location: 'Toulouse, France',
            birth: '19 / 06 / 1990',
            loisirs: ['Dessin','Bande Dessinée','Film / Documentaire','Programmation'],
        };
    
    // réalisations
    var crea = [
        {
            maquettes: ['jazz1.png','jazz2.png','jazz3.png','jazz4.png','jazz5.png','jazz-final.png'],
            //carte:['ilEtaitUneCom.png','mercerie.png'],
            //fly:['fly-mercerie.png']
        }
    ];
    
    // Compétences
    // + 
    // niveau de connaissances --> languages ...
    // niveau de connaissances --> frameworks ...
    // niveau de connaissances --> bdd ...
    // niveau de connaissances --> dp ...
    // niveau de connaissances --> edi
    var cpt = [
        {
            Languages: ['Java','C#','HTML','CSS','JAVASCRIPT','PHP','SQL'],
            Frameworks:
            ['WinForm.Net','ADO.Net','Node Js','Express','Angular Js','Ionic','Cordova'],
            BDD:['Firebase','SqlServer 2008','MySql'],
            EDI:['Eclipse','Visual Studio','SublimeText','Brackets'],
            DesignPattern:['MVC','MVVM'],
            GDP : ['Git'],
            lvlL:['40','60','85','75','70','35','35'],
            lvlF:['60','15','50','25','65','60','35'],
            lvlBdd:['60','40','30'],
            lvlEdi:['50','55','70','80'],
            lvlDp:['80','60'],
            lvlGdp:['50'],
            //test
            css:['lang','fwk','designp','edi']
        },
    ];
    
    return {
        cvExp : function(){return exp;},
        cvFmt : function(){return fmt;},
        cvCpt : function(){return cpt;},
        cvInfo: function(){return info;},
        cvCrea: function(){return crea;},
    };
});

app.controller('cvCtrl', function($scope,cvFact){
    $scope.exp = cvFact.cvExp();
    console.log(cvFact.cvExp());

    $scope.fmt = cvFact.cvFmt();
    console.log(cvFact.cvFmt());
    
    $scope.cpt = cvFact.cvCpt();
    console.log(cvFact.cvCpt());

    $scope.info = cvFact.cvInfo();
    console.log(cvFact.cvInfo());
    
    $scope.skill = false;
    
    $scope.toggle = function(){
        $scope.skill = !$scope.skill;
    };
    
    // Permet d'afficher les réalisations
    $scope.real = cvFact.cvCrea();
    console.log(cvFact.cvCrea());
    
    // Bouttons réalisations
    $scope.fly = false;
    $scope.maquette = false;
    $scope.carte = false;
    
    // Gestion de l'affichage des réalisations
    $scope.toggleC = function(e){
        console.log(e);
        // Si l'élément est égales à une clé du tableau
        if(e == 'maquettes'){
            // Alors on expose la vue choisie
            $scope.carte = false;
            $scope.fly = false;
            $scope.maquette = !$scope.maquette;
        };
        if(e == 'fly'){
            // Alors on expose la vue choisie
            $scope.maquette = false;
            $scope.carte = false;
            $scope.fly = !$scope.fly;
        };
        if(e == 'carte'){
            // Alors on expose la vue choisie
            $scope.maquette = false;
            $scope.fly = false;
            $scope.carte = !$scope.carte;
        };      
        if(e == 'skill'){
            $scope.xp = false;
            $scope.formation = false;
            $scope.skills = !$scope.skills;
        };     
        if(e == 'xp'){
            $scope.skills = false;
            $scope.formation = false;
            $scope.xp = !$scope.xp;
        };     
        if(e == 'fmt'){
            $scope.skills = false;
            $scope.xp = false;
            $scope.formation = !$scope.formation;
        };
        //console.log(e in $scope.real[0]);
    };
});