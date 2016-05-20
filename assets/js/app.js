var app = angular.module('cv',['ngRoute','ngMaterial']);

// Configuration des routes
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/formations',{
        templateUrl: 'assets/views/formations.html',
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
            desc:['Flyer','Carte de visite','Design pochette d\'album']
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
            
            lvlL:['40','60','85','75','70','35','35'],
            lvlF:['60','15','50','25','65','60','35'],
            lvlBdd:['60','40','30'],
            lvlEdi:['50','55','70','80'],
            lvlDp:['80','60'],
            //test
            css:['lang','fwk','designp','edi']
        },
    ];
    
    // information basique
    var info = [
        {
            name: 'Salah Kounkou',
            mail: 'salah.knk@gmail.com',
            location: 'Toulouse, France',
            birth: '19 / 06 / 1990',
            loisirs: ['Dessin','Bande Dessinée','Film / Documentaire','Programmation'],
        }
    ];
    return {
        cvExp : function(){return exp;},
        cvFmt : function(){return fmt;},
        cvCpt : function(){return cpt;},
        cvInfo: function(){return info;},
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
    
    $scope.color = {
        red: Math.floor(47),
        green: Math.floor(37),
        blue: Math.floor(27)
    };
});
