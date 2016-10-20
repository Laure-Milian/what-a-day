(function() {
	"use strict";
	var app = {

		init : function() {
			this.listeners();
		},
		
		listeners : function() {
			$("#checkButton").on("click", this.checkInputs);
		},

		checkInputs : function() {
			// effacer les erreurs précédentes
			$("#inputDay, #inputYear").removeClass("inputError");
			$(".error").html("");

			// récupérer les inputs
			var $inputDay = parseInt($("#inputDay").val(), 10);
			var $selectedMonth = $("#selectMonth").val();
			var $inputYear = parseInt($("#inputYear").val(), 10);
			
			// vérifier si les inputs correspondent aux attentes, si oui, lancer la fonction getDate
			if ($inputDay < 1 || $inputDay > 31 || !$inputDay) {
				app.inputError("inputDay", "La date du jour doit être comprise entre 1 et 31");
			} 
			else if ($inputYear < 0 || !$inputYear) {
				app.inputError("inputYear", "L'année doit être supérieure à 0");
			} 
			else {
				app.getDate($inputDay, $selectedMonth, $inputYear);
			}

		},

		getDate : function(day, month, year) {
			var date = moment(year + "-" + month + "-" + day);
			var correspondingDay = date.weekday();
			var daysArr = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
			var dayToDisplay = daysArr[correspondingDay];
			app.displayDay(dayToDisplay);
		},

		displayDay : function(day) {
			$("body").html("<div class='overlay'>" + day + "<button id='restart'>Recommencer</button></div>");
			$("#restart").on("click", app.restart);			
		},

		inputError : function(selector, message) {
			$(".error").append("<p>" + message + "</p>");
			$("#" + selector).addClass("inputError");
		},

		restart : function() {
			location.reload();
		}

	}


	app.init();

})();