jQuery(document).ready(function () {
	(function ($) {

		// ------------------------------------
		// Set Global Vars
		// ------------------------------------

		var today = new Date();
		var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var dateTime = date + ' ' + time;
		console.log(dateTime);

		var data = {};
		var days = 0;
		var daysEtgari = 0;

		$('.t-datepicker-etgari').tDatePicker({
			iconDate: '',
			titleCheckIn: 'תאריך התחלה',
			titleCheckOut: 'תאריך סיום',
			titleToday: 'היום',
			titleDateRange: 'יום',
			titleDateRanges: 'ימים',
			titleDays: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש׳'],
			titleMonths: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', "דצמבר"],
			daysOfWeekHighlighted: [],
			showFullDateRanges: true,
			limitDateRanges: 365,
			toDayHighlighted: false,
			titleMonthsLimitShow: 20,
		});

		$('.t-datepicker-ski').tDatePicker({
			iconDate: '',
			titleCheckIn: 'תאריך התחלה',
			titleCheckOut: 'תאריך סיום',
			titleToday: 'היום',
			titleDateRange: 'יום',
			titleDateRanges: 'ימים',
			titleDays: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש׳'],
			titleMonths: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', "דצמבר"],
			daysOfWeekHighlighted: [],
			showFullDateRanges: true,
			limitDateRanges: 365,
			toDayHighlighted: false,
			titleMonthsLimitShow: 20,
		});

		$('.t-datepicker-flight').tDatePicker({
			iconDate: '',
			titleCheckIn: 'בחר תאריך יציאה',
			titleCheckOut: 'בחר תאריך חזרה',
			titleToday: 'היום',
			titleDateRange: 'יום',
			titleDateRanges: 'ימים',
			titleDays: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש׳'],
			titleMonths: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', "דצמבר"],
			daysOfWeekHighlighted: [],
			showFullDateRanges: true,
			limitDateRanges: 365,
			toDayHighlighted: false,
			titleMonthsLimitShow: 20,
		})
			.on('eventClickDay', function () {
				$('.t-datepicker-etgari').tDatePicker('setStartDate', $('.t-datepicker-flight').tDatePicker('getDateInputs')[0]);
				$('.t-datepicker-etgari').tDatePicker('setEndDate', $('.t-datepicker-flight').tDatePicker('getDateInputs')[1]);

				$('.t-datepicker-ski').tDatePicker('setStartDate', $('.t-datepicker-flight').tDatePicker('getDateInputs')[0]);
				$('.t-datepicker-ski').tDatePicker('setEndDate', $('.t-datepicker-flight').tDatePicker('getDateInputs')[1]);
			});


		// ------------------------------------
		// Load JSON file with all insurance data
		// ------------------------------------

		$.getJSON('/calculator2021/js/data.json', function (json) {
			data = json;
		});

		// ------------------------------------
		// Add New Person to Calulation
		// ------------------------------------

		$('#addperson').on('click', function () {
			var num = $('.fields').children().length + 1;
			console.log('%cAdded Person #' + num, 'color: green; font-weight: bold;');
			$('.fields li:first-child').clone().appendTo('.fields');
			$('.fields li:last-child').find('.num').html('<a href="remove">&#215;</a>נוסע ' + num + ':');
			$('.fields li:last-child').find('input').val('');
		});


		// ------------------------------------
		// Remove Person (Person > 1)
		// ------------------------------------

		$('.fields').on('click', 'li .num a', function (e) {
			e.preventDefault();

			console.log('%cRemoved Person #' + ($(this).parent().parent().index() + 1), 'color: red; font-weight: bold;');
			$(this).parent().parent().remove();

			$('.fields li').each(function () {
				var num = $(this).index() + 1;

				if (num == 1) {
					$(this).find('.num').html('נוסע ' + num + ':');
				} else {
					$(this).find('.num').html('<a href="remove">&#215;</a> נוסע ' + num + ':');
				}
			});
		});

		// ------------------------------------
		// ON CLICK Calculating
		// ------------------------------------

		$('#calculate').on('click', function () {
			if (checkAges()) {
				var table = '';

				var dateFlight = $('.t-datepicker-flight').tDatePicker('getDates')[0];
				var dateBack = $('.t-datepicker-flight').tDatePicker('getDates')[1];

				var etgariStart = $('.t-datepicker-etgari').tDatePicker('getDates')[0];
				var etgariEnd = $('.t-datepicker-etgari').tDatePicker('getDates')[1];

				var skiStart = $('.t-datepicker-ski').tDatePicker('getDates')[0];
				var skiEnd = $('.t-datepicker-ski').tDatePicker('getDates')[1];


				// Reset for total calculation
				var total = {
					harel: 0,
					harelusa: 0,
					migdal: 0,
					fenix: 0,
					passportcard: 0,
					menora: 0,
					clal: 0
				};

				days = daysDiff(dateFlight, dateBack);
				daysEtgari = daysDiff(etgariStart, etgariEnd);
				daysSki = daysDiff(skiStart, skiEnd);

				console.log('%cRegular Days: ' + days + ', Etgari Days: ' + daysEtgari + ', Ski: ' + daysSki, 'color: red; font-weight: bold;');


				// Create Table with Pricing
				table += '<ul>'
				table += '<li style="height: 54px;">חברה</li>';
				for (var i = 1; i <= $('.fields li').length; i++) {
					table += '<li>נוסע ' + i + '</li>';
				}
				table += '</ul>';
				table += '<div class="tablewrap-inner">';
				table += '<table>';
				table += '<tr>';
				table += '<th>חברה</th>';
				table += '<th><img src="img/svg/harel.svg" alt="" /></th>';
				table += '<th><img src="calculator2021/images/harelusa.png" alt="" /></th>';
				table += '<th><img src="img/svg/migdal.svg" alt="" /></th>';
				table += '<th><img src="img/svg/fenix.svg" alt="" /></th>';
				table += '<th><img src="img/svg/passportcard.svg" alt="" /></th>';
				table += '<th><img src="img/svg/menora.svg" alt="" /></th>';
				table += '<th><img src="img/svg/clal.svg" alt="" /></th>';
				table += '</tr>';
				$('.fields li').each(function () {
					var personNum = parseInt($(this).index()) + 1;
					var personAge = $(this).find('input[name="age"]').val();
					var $this = $(this);

					console.log('%cPerson #' + personNum + ', Age:' + personAge, 'color: blue; font-weight: bold;');

					table += '<tr>';
					table += '<td>נוסע ' + personNum + '</td>';

					$.each(data, function (company) {
						console.log('%c-- Company: ' + company, 'font-weight: bold;');

						price = checkFieldsGetPrice($this, company, personAge, days, daysEtgari, daysSki);

						if (price == 0 || price == false) {
							price = '--';
						} else {
							total[company] += price;
							price = roundNum(price) + '$';
						}

						table += '<td>';
						table += price;
						table += '</td>';
					});

					table += '</tr>';
				});
				table += '<tr>';
				table += '<td>סה״כ</td>';
				$.each(total, function (key, price) {
					table += '<td>' + roundNum(price) + '$</td>';
				});
				table += '</tr>';
				table += '</table>';
				table += '</div>';

				$('.results').html(table).show();
				scrollTables();
			}
		});

		// ------------------------------------
		// Calculate Basic Price
		// ------------------------------------

		var calculateBasic = function (company, age, days) {
			var price = 0;

			if (typeof data[company]['basic'] !== 'undefined') {
				$.each(data[company]['basic'], function (k, v) {
					if (eval(age + k)) {
						price = v;
						return false;
					}
				});

				if (price > 0) {
					console.log('%c---- Basic Price In "' + company + '" For ' + days + ' Days: ' + price * days + '$ (Price per day: ' + price + ')', 'color: gray');
					return price * days;
				} else {
					console.log('%c---- No Basic Price Found Returned FALSE', 'color: gray');
					return false;
				}
			} else {
				console.log('%c---- No Basic Price found in "' + company + '"', 'color: gray');
				return 0;
			}
		}

		// ------------------------------------
		// Calculate Medical Price
		// ------------------------------------

		var calculateMedical = function (company, age, days) {
			var price = 0;

			if (typeof data[company]['medical'] !== 'undefined') {
				$.each(data[company]['medical'], function (k, v) {
					if (eval(age + k)) {
						price = v;
						return false;
					}
				});

				if (price > 0) {
					console.log('%c---- Medical Price In "' + company + '" For ' + days + ' Days: ' + price * days + '$ (Price per day: ' + price + ')', 'color: gray');
					return price * days;
				} else {
					console.log('%c---- No Medical Price Found Returned FALSE', 'color: gray');
					return false;
				}
			} else {
				console.log('%c---- No Medical Price found in "' + company + '"', 'color: gray');
				return 0;
			}
		}

		// ------------------------------------
		// Calculate Tzad Gimel Price
		// ------------------------------------

		var calculateGimel = function (company, days) {
			if (typeof data[company]['gimel'] !== 'undefined') {
				var price = data[company]['gimel'];
				console.log('%c---- Insurance Tzad Gimel Price In "' + company + '" For ' + days + ' Days: ' + price * days + '$ (Price per day: ' + price + ')', 'color: gray');
				return price * days;
			} else {
				console.log('%c---- No Insurance Tzad Gimel Price found in "' + company + '"', 'color: gray');
				return 0;
			}
		}

		// ------------------------------------
		// Calculate Rescue Price
		// ------------------------------------

		var calculateRescue = function (company, days) {
			var price = 0;

			if (typeof data[company]['rescue'] !== 'undefined') {
				for (var i = 1; i <= days; i++) {
					$.each(data[company]['rescue'], function (k, v) {
						if (eval(i + k)) {
							price = price + v;
						}
						//console.log(i + ' | ' + k + ' | ' + v + ' | ' + price);
					});
				}

				console.log('%c---- Rescue Price In "' + company + '" For ' + days + ' Days: ' + price + '$', 'color: gray');
				return price;
			} else {
				console.log('%c---- No Rescue Price found in "' + company + '"', 'color: gray');
				return 0;
			}
		}

		// ------------------------------------
		// Calculate Luggage Price
		// ------------------------------------

		var calculateLuggage = function (company, days) {
			if (typeof data[company]['luggage'] !== 'undefined') {
				var price = data[company]['luggage'];
				console.log('%c---- Luggage Price In "' + company + '" For ' + days + ' Days: ' + price * days + '$ (Price per day: ' + price + ')', 'color: gray');
				return price * days;
			} else {
				console.log('%c---- No Luggage Price found in "' + company + '"', 'color: gray');
				return 0;
			}
		}

		// ------------------------------------
		// Calculate Flight Cancle Price
		// ------------------------------------

		var calculateFlightCancle = function (company, age, days) {
			var price = 0;

			if (typeof data[company]['flightcancle'] !== 'undefined') {
				$.each(data[company]['flightcancle'], function (k, v) {
					if (eval(age + k)) {
						price = v;
						return false;
					}
				});

				if (price * days < 5) {
					console.log('%c---- Flight Cancle Price In "' + company + '" For ' + days + ' Days: ' + price * days + '$ (Price per day: ' + price + ')', 'color: gray');
					return price * days;
				} else {
					console.log('%c---- Flight Cancle Price In "' + company + '": 5$ (Limit of 5$ Total)', 'color: gray');
					return 5;
				}
			} else {
				console.log('%c---- No Flight Cancle Price found in "' + company + '"', 'color: gray');
				return 0;
			}
		}

		// ------------------------------------
		// Calculate Pregnant Price
		// ------------------------------------

		var calculatePregnant = function (company, age, days) {
			var price = 0;

			if (typeof data[company]['pregnant'] !== 'undefined') {
				$.each(data[company]['pregnant'], function (k, v) {
					if (eval(age + k)) {
						price = v;
						return false;
					}
				});

				if (price > 0 && days <= 60) {
					console.log('%c---- Pregnant Price In "' + company + '" For ' + days + ' Days: ' + price * days + '$ (Price per day: ' + price + ')', 'color: gray');
					return price * days;
				} else {
					console.log('%c---- No Pregnant Price Found/60 Days Limit Returned FALSE', 'color: gray');
					return false;
				}
			} else {
				console.log('%c---- No Pregnant Price found in "' + company + '"', 'color: gray');
				return 0;
			}
		}

		// ------------------------------------
		// Calculate Phone Lost Price
		// ------------------------------------

		var calculatePhone = function (company, days) {
			if (typeof data[company]['phone'] !== 'undefined') {
				var price = data[company]['phone'];
				console.log('%c---- Phone Insurance Price In "' + company + '" For ' + days + ' Days: ' + price * days + '$ (Price per day: ' + price + ')', 'color: gray');
				return price * days;
			} else {
				console.log('%c---- No Phone Insurance Price found in "' + company + '"', 'color: gray');
				return 0;
			}
		}

		// ------------------------------------
		// Calculate Laptop Lost Price
		// ------------------------------------

		var calculateLaptop = function (company, days) {
			if (typeof data[company]['laptop'] !== 'undefined') {
				var price = data[company]['laptop'];
				console.log('%c---- Laptop Insurance Price In "' + company + '" For ' + days + ' Days: ' + price * days + '$ (Price per day: ' + price + ')', 'color: gray');
				return price * days;
			} else {
				console.log('%c---- No Laptop Insurance Price found in "' + company + '"', 'color: gray');
				return 0;
			}
		}

		// ------------------------------------
		// Calculate Etgari Price
		// ------------------------------------

		var calculateEtgari = function (company, days, daysEtgari) {
			var price = 0;

			if (company == 'harel' || company == 'harelusa' || company == 'fenix') {
				days = daysEtgari;
			}

			if (typeof data[company]['etgari'] !== 'undefined') {
				for (var i = 1; i <= days; i++) {
					$.each(data[company]['etgari'], function (k, v) {
						if (eval(i + k)) {
							price = price + v;
						}
					});
				}

				console.log('%c---- Etgari Price In "' + company + '" For ' + days + ' Days: ' + price + '$', 'color: gray');
				return price;
			} else {
				console.log('%c---- No Etgari Price found in "' + company + '"', 'color: gray');
				return 0;
			}
		}

		// ------------------------------------
		// Calculate Ski Price
		// ------------------------------------

		var calculateSki = function (company, age, days, daysSki) {
			var price = 0;

			if (company == 'harel' || company == 'harelusa' || company == 'fenix') {
				days = daysSki;
			}

			if (typeof data[company]['ski'] !== 'undefined') {
				$.each(data[company]['ski'], function (k, v) {
					if (eval(age + k)) {
						price = v;
						return false;
					}
				});

				console.log('%c---- Ski Price In "' + company + '" For ' + days + ' Days: ' + price * days + '$ (Price per day: ' + price + ')', 'color: gray');
				return price * days;
			} else {
				console.log('%c---- No Ski Price found in "' + company + '"', 'color: gray');
				return 0;
			}
		}

		// ------------------------------------
		// Check if all ages are filled
		// ------------------------------------

		var checkAges = function () {
			var issues = 0;

			$('.fields li label div.error').remove();

			$('.fields li').each(function () {
				var age = parseInt($(this).find('input[name="age"]').val());

				if (isNaN(age)) {
					issues++;

					$(this).find('input[name="age"]').parent().append('<div class="error">חובה לציין גיל</div>')
				}
			});

			if (issues > 0) {
				return false;
			} else {
				return true;
			}
		}

		// ------------------------------------
		// Check all fields
		// ------------------------------------

		var checkFieldsGetPrice = function ($this, company, personAge, days, daysEtgari, daysSki) {
			var priceTemp = 0;
			var medical = $this.find('select[name="medical"]').val();
			var gimel = $this.find('select[name="gimel"]').val();
			var rescue = $this.find('select[name="rescue"]').val();
			var luggage = $this.find('select[name="luggage"]').val();
			var flightcancle = $this.find('select[name="flightcancle"]').val();
			var pregnant = $this.find('select[name="pregnant"]').val();
			var phone = $this.find('select[name="phone"]').val();
			var laptop = $this.find('select[name="laptop"]').val();
			var etgari = $('input[name="t-datepicker-etgari"]').prop('checked');
			var ski = $('input[name="t-datepicker-ski"]').prop('checked');

			var price = calculateBasic(company, personAge, days);

			if (!price) {
				return false;
			}

			if (medical == 1) {
				priceTemp = calculateMedical(company, personAge, days);

				if (priceTemp > 0) {
					price += priceTemp;
				} else {
					return false;
				}
			}

			if (gimel == 1) {
				price += calculateGimel(company, days);
			}

			if (rescue == 1) {
				price += calculateRescue(company, days);
			}

			if (luggage == 1) {
				price += calculateLuggage(company, days);
			}

			if (flightcancle == 1) {
				price += calculateFlightCancle(company, personAge, days);
			}

			if (pregnant == 1) {
				priceTemp = calculatePregnant(company, personAge, days);

				if (priceTemp > 0) {
					price += priceTemp;
				} else {
					return false;
				}
			}

			if (phone == 1) {
				price += calculatePhone(company, days);
			}

			if (laptop == 1) {
				price += calculateLaptop(company, days);
			}

			if (etgari == 1) {
				priceTemp = calculateEtgari(company, days, daysEtgari);

				if (priceTemp > 0) {
					price += priceTemp;
				} else {
					return false;
				}
			}

			if (ski == 1) {
				priceTemp = calculateSki(company, personAge, days, daysSki);

				if (priceTemp > 0) {
					price += priceTemp;
				} else {
					return false;
				}
			}

			return price;
		}


		// ------------------------------------
		// Get Days Between to dates
		// ------------------------------------

		var daysDiff = function (dateStart, dateEnd) {
			var days = Math.abs((dateEnd - dateStart) / 1000 / 60 / 60 / 24);

			if (isNaN(days) || days == 0) {
				return 0;
			} else {
				return days + 1;
			}
		}

		// ------------------------------------
		// Generate Table for Mobile
		// ------------------------------------

		var mobileTableGenerate = function () {
			var ul = '';

			ul += '<ul>';
			$('.calculator2021 .tablewrap table tr').each(function () {
				var $elm = $(this).find('th:first-child, td:first-child');
				var height = $elm.outerHeight();

				ul += '<li style="height: ' + height + 'px">' + $elm.text() + '</li>';
			});
			ul += '<ul>';

			$('.calculator2021 .tablewrap table').parent().parent().prepend(ul);
		}

		// ------------------------------------
		// Round Number (00.00)
		// ------------------------------------

		var roundNum = function (num) {
			num = +(Math.round(num + "e+2") + "e-2");
			return num;
		}

		// ------------------------------------
		// Check if Etgari or Ski Checked
		// ------------------------------------

		var checkIfEtgariSki = function () {
			$('.dates input[type="checkbox"]').on('change', function () {
				var name = $(this).attr('name');
				var prop = $(this).prop('checked');

				if (prop == false) {
					$('.' + name).css('display', 'none');
				} else {
					$('.' + name).css('display', 'block');
				}
			});
		}

		// ------------------------------------
		// Check if Etgari or Ski Checked
		// ------------------------------------

		var scrollTables = function () {
			$('.tablewrap-inner').on('scroll', function (e) {
				$('.tablewrap-inner').scrollLeft($(this).scrollLeft());
			});
		}

		// ------------------------------------
		// Results need to be updated
		// ------------------------------------

		var updateResults = function () {
			$('.fields select').on('change', function () {
				if ($('.results').css('display') == 'block') {
					$('#calculate').click();
				}
			});

			$('.fields input').on('keyup', function () {
				if ($('.results').css('display') == 'block') {
					$('#calculate').click();
				}
			});
		}

		mobileTableGenerate();
		checkIfEtgariSki();
		updateResults();

	})(jQuery);
});
// JavaScript Document