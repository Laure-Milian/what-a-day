(function() {
	"use strict";
	var app = {

		day : null,

		year : null,
		
		init : function() {
			this.listeners();
		},
		
		listeners : function() {
			$("#checkButton").on("click", this.checkAll);
		},

		checkAll : function() {
			$("#inputDay, #inputYear").removeClass("inputError");
			$(".error").html("");
			app.checkDay();
			app.checkYear();
		},

		checkDay : function() {
			var $inputDay = parseInt($("#inputDay").val(), 10);
			if ($inputDay > 0 && $inputDay < 32) {
				app.day = true;
				app.printResult();
			} else {
				$(".error").append("<p>La date du jour doit être comprise entre 1 et 31</p>");
				$("#inputDay").addClass("inputError");
				app.day = null;
			}
		},

		checkYear : function() {
			var $inputYear = parseInt($("#inputYear").val(), 10);
			if ($inputYear > 0) {
				app.year = true;
				app.printResult();
			} else {
				$(".error").append("<p>L'année doit être supérieure à 0</p>");
				$("#inputYear").addClass("inputError");
				app.year = null;
			}
		},

		printResult : function() {
			$("body").html("<div class='overlay'>Lundi <button id='restart'>Recommencer</button></div>");
		}

	}


	app.init();

})();