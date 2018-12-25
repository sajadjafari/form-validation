;!(function (w, d) {

    'use strict';

    var Validations = function () {

		    var t = this;

            this.codes = {

                falseKeys: [8, 9, 13, 16, 17, 18, 20, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
                enDigits: {
                    1776: 48,
                    1777: 49,
                    1778: 50,
                    1779: 51,
                    1780: 52,
                    1781: 53,
                    1782: 54,
                    1783: 55,
                    1784: 56,
                    1785: 57
                },
                faDigits: {
                    48: 1776,
                    49: 1777,
                    50: 1778,
                    51: 1779,
                    52: 1780,
                    53: 1781,
                    54: 1782,
                    55: 1783,
                    56: 1784,
                    57: 1785
                },
                enAlpha: [32, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 42, 45, 43, 46, 61, 95, 41, 40, 38, 94, 37, 36, 35, 64, 33, 126, 96, 125, 123, 124, 92, 47, 39, 34, 59, 58, 63, 62, 60, 44],
                faAlpha: [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 92, 94, 95, 96, 123, 124, 125, 126, 171, 187, 1548, 1563, 1567, 1569, 1570, 1571, 1573, 1574, 1575, 1576, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1600, 1601, 1602, 1604, 1605, 1606, 1607, 1608, 1611, 1613, 1662, 1670, 1688, 1705, 1711, 1740, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785]

            };

            this.errors = {

                // Input errors class name and error message attr name, default is [data-error].
                cn: 'input-error',
                dError: 'data-error',
                // parentNode: options && options.parentNode ? options.parentNode : '',
                parentNode: '',

                // Input default errors.
                required: 'This field is required!',
                email: 'Email is not valid!',
                url: 'URL is not valid!',
                phone: 'Phone is not valid!',
                mobile: 'Mobile is not valid!',
                domain: 'Domain is not valid!',
                number: 'Please enter numbers only',
                IBAN: 'IBAN code in not valid!',
                personalID: 'ID is not valid!',
                zipCode: 'Postal code is not valid!',
                en: 'Please enter in English',
                fa: 'Please enter in Persian',
                minChar: ['You can enter minimum', 'characters!'],
                maxChar: ['You can enter maximum', 'characters!'],
                minNum: ['You must enter a number grater than', ''],
                maxNum: ['You must enter a number lower than', '']

            };

            this.styles = {
                direction: 'ltr',
                float: 'right',
                background: '#f00',
                color: '#fff',
                font: 'inherit',
                fontSize: '1em',
                fontWeight: '400'
            };

            this.pattern = {

                url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\/\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\/\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\/\?)*)?(((\[publisher-id\]&[a-zA-Z_]*=(.)*)|(\[publisher-id\]*))|((\[publisher-name\]&[a-zA-Z_]*=(.)*)|(\[publisher-name\]*)))?$/i,

                email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                mobile: /^(((98)|(\+98)|(0098)|0)(9)[0-9]{9})+$|(^(9)[0-9]{9}$)/,

                phone: /^[2-9][0-9]{7}$/,

                domain: /^([a-zA-Z0-9][a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/i,

                check: function (input, pattern, error) {

                    var checkIt = function () {

                        if (input.value.match(pattern)) {

                            input.removeError();

                        } else {

                            input.addError(error);
                        }

                    };

                    if (input.isRequired()) {

                        if (!input.isEmpty())
                            checkIt();

                    } else {

                        checkIt();

                    }

                },

                test: function (value, pattern) {
                    return !!value.match(pattern);
                }

            };

            this.isEmpty = function (input) {

                var value = input.value.trim();

                return value === '' || value === undefined || value === null;

            };

            this.isRequired = function ($this) {

                var rules = $this.getAttribute('data-validation').split('|');

                for (var i = 0, l = rules.length; i < l; i++)
                    if (rules[i] === 'required')
                        return true;

                return false;

            };

            this.isEmail = function (input) {

                return this.pattern.test(input.value, this.pattern.email);

            };

            this.isURL = function (input) {

                return this.pattern.test(input.value, this.pattern.url);

            };

            this.isDomain = function (input) {

                return this.pattern.test(input.value, this.pattern.domain);

            };

            this.isPersonalID = function (value) {

                return this.checkPersonalID(value.trim());

            };

            this.isZipCode = function (value) {

                return this.checkZipCode(value.trim());

            };

            this.iban = function (value) {

                return this.IBAN(value.trim());

            };

            this.hasMinChar = function (input) {

                var minChar = input.dataset.validation;

                if (!!minChar.match(/min:[0-9]*/)) {

                    minChar = minChar.match(/min:[0-9]*/)[0];

                    minChar = minChar.match(/[0-9]+/)[0];

                    return validations.checkMinCharacter(input, minChar, true);

                } else {

                    return false;

                }

            };

            this.hasMinNum = function ($this) {

                var minChar = $this.dataset.validation;

                if (!!minChar.match(/min-num:[0-9]*/)) {

                    minChar = minChar.match(/min-num:[0-9]*/)[0];

                    minChar = minChar.match(/[0-9]+/)[0];

                    return checkMinNum($this, minChar, true);

                } else {

                    return false;

                }

            };

            this.returnFalseKeys = function (e) {

                for (var i = 0, l = validations.codes.falseKeys.length; i < l; i++)
                    if (e.keyCode === validations.codes.falseKeys[i])
                        return true;

                return false;

            };

            this.translateDigit = function (e, input, digits) {

                var charCode = e.key.charCodeAt(0);

                if (this.returnFalseKeys(e) || e.ctrlKey) return;

                for (var id in digits) {

                    if (digits.hasOwnProperty(id)) {

                        if (charCode === parseInt(id) || charCode === digits[id]) {

                            e.target.value += String.fromCharCode(digits [parseInt(id)]);
                            input.removeError();
                            break;

                        } else {

                            input.addError(validations.errors.number);

                        }

                    }

                }

                e.preventDefault();

            };

            this.IBAN = function (IBAN) {

                var _IBAN = IBAN.toUpperCase(),

                    modulo = function (code, divisor) {

                        var cDivident = '',
                            cRest = '',
                            cChar,
                            cOperator;

                        for (var i = 0, il = code.length; i < il; i++) {

                            cChar = code[i];

                            cOperator = cRest + '' + cDivident + '' + cChar;

                            if (cOperator < parseInt(divisor)) {

                                cDivident += '' + cChar;

                            } else {

                                cRest = cOperator % divisor;

                                if (cRest === 0)
                                    cRest = '';

                                cDivident = '';

                            }

                        }

                        cRest += '' + cDivident;

                        if (cRest === '')
                            cRest = 0;

                        return parseInt(cRest, 10) === 1;

                    };

                if (_IBAN.search(/^[A-Z]{2}/gi) < 0)
                    return false;

                _IBAN = _IBAN.substring(4) + _IBAN.substring(0, 4);

                _IBAN = _IBAN.replace(/[A-Z]/g, function (match) {

                    return match.charCodeAt(0) - 55;

                });

                return modulo(_IBAN, 97);

            };

            this.checkPersonalID = function (code) {

                var control,
                    sum = 0;

                if (code.length < 8 || parseInt(code, 10) === 0)
                    return false;

                code = ( '0000' + code ).substr(code.length + 4 - 10);

                if (parseInt(code.substr(3, 6), 10) === 0)
                    return false;

                control = parseInt(code.substr(9, 1), 10);

                for (var i = 0; i < 9; i++)
                    sum += parseInt(code.substr(i, 1), 10) * ( 10 - i );

                sum = sum % 11;

                return ( sum < 2 && control == sum ) || ( sum >= 2 && control == ( 11 - sum ) );

            };

            this.checkZipCode = function (code) {

                return code.search(/^(\d{5}-?\d{5})$/) >= 0;

            };

            this.checkMinCharacter = function (input, minChar, api) {

                var value = input.value.trim();

                api = api !== undefined ? api : false;

                if (!api) {

                    if (value.length < parseInt(minChar)) {

                        input.addError(this.errors.minChar[0] + ' ' + minChar + ' ' + this.errors.minChar[1]);

                    }

                } else {

                    return value.length >= parseInt(minChar);

                }

            };

            this.checkMinNum = function (input, minNum, api) {

                var value = removeCommas(input.value);

                api = api != undefined ? api : false;

                value = value ? parseInt(value) : false;

                if (!api) {

                    if (value < minNum) {

                        input.addError("حداقل عدد " + addCommas(minNum) + " باید وارد شود!");

                    } else {

                        /*if (!!value)
                         hasAnotherError = false;*/

                        if (!input.isRequired())
                            input.removeError();

                    }

                } else {

                    return value >= minNum;

                }

            };

            this.checkCharacter = function (e, input, chars, charCode, errorMessage) {

                var isTrue = false;

                if (chars.indexOf(charCode) !== -1)
                    isTrue = true;

                if (!isTrue) {

                    e.preventDefault();

                    input.addError(errorMessage);

                    return false;

                } else {

                    return true;

                }

            };

            this.isPattern = function (value, pattern, reverse) {

                var regExp = new RegExp(pattern, 'g');

                return reverse ? !value.match(regExp) : !!value.match(regExp);

            };

            this.removeCommas = function (value) {

                return value.replace(/[,،]/g, '');

            };

            // -- Validators

		    this.removeError = function (input) {

			    var _regexp = new RegExp('\\s*' + validations.errors.cn, 'g');

			    input.parentElement.className = input.parentElement.className.replace(_regexp, '');

			    input.parentElement.removeAttribute('data-error');

		    };

		    this.addError = function (input, error) {

			    var _regexp = new RegExp('\\s*' + validations.errors.cn, 'g');
			    var parent = (validations.errors.parentNode !== '' ? input.findParent(validations.errors.parentNode) : input.parentElement );

			    if (!parent.className.match(_regexp)) {

				    parent.className = parent.className + ' ' + validations.errors.cn;



			    }
			    parent.setAttribute(validations.errors.dError, error);
		    };

		    this.required = function (input) {

			    var value;

			    input.on('blur', function () {

				    value = input.value.trim();

				    if (value === '' || value === null)
					    t.addError(this, validations.errors.required);

			    })

		    };

		    this.email = function (input) {

			    input.on('blur', function () {

				    validations.pattern.check(this, validations.pattern.email, validations.errors.email);

			    });

		    };

		    this.url = function (input) {

			    input.on('blur', function () {

				    validations.pattern.check(this, validations.pattern.url, validations.errors.url);

			    });

		    };

		    this.domain = function (input) {

			    input.on('blur', function () {

				    validations.pattern.check(this, validations.pattern.domain, validations.errors.domain);

			    });

		    };

		    this.number = function (input, lang) {

			    lang = lang.toUpperCase();

			    input.on('keydown', function (e) {

				    if (lang === 'EN')
					    validations.translateDigit(e, this, validations.codes.enDigits);

				    else if (lang === 'FA')
					    validations.translateDigit(e, this, validations.codes.faDigits);

			    });

		    };

		    this.alphabet = function (input, lang) {

			    var charCode, value;

			    lang = lang.toUpperCase();

			    input.on('keydown', function (e) {

				    if (e.key) {

					    charCode = e.key.charCodeAt(0);

					    if (validations.returnFalseKeys(e))
						    return;

					    if (e.ctrlKey)
						    return;

					    if (lang === 'EN')
						    validations.checkCharacter(e, input, validations.codes.enAlpha, charCode, validations.errors.en);

					    else if (lang === 'FA')
						    validations.checkCharacter(e, input, validations.codes.faAlpha, charCode, validations.errors.fa);

				    }

			    });

			    input.on('blur', function (e) {

				    value = e.target.value;

				    for (var i = 0, il = value.length; i < il; i++) {

					    if (lang === 'EN')
						    validations.checkCharacter(e, input, validations.codes.enAlpha, value[i].charCodeAt(0), validations.errors.en);

					    else if (lang === 'FA')
						    validations.checkCharacter(e, input, validations.codes.faAlpha, value[i].charCodeAt(0), validations.errors.fa);

				    }

			    });

		    };

		    this.minCharacter = function (input, min) {

			    var minChar = parseInt(min);

			    input.on('blur', function (e) {

				    if (validations.returnFalseKeys(e) || e.ctrlKey)
					    return;

				    if (this.isRequired()) {

					    if (!this.isEmpty())
						    validations.checkMinCharacter(this, minChar);

				    } else {

					    validations.checkMinCharacter(this, minChar);

				    }

			    });

		    };

		    this.maxCharacter = function (input, max) {

			    var maxChar = parseInt(max),
				    value;

			    input.on('keydown', function (e) {

				    value = input.value.trim();

				    if (validations.returnFalseKeys(e) || e.ctrlKey)
					    return;

				    if (value.length >= maxChar) {

					    e.preventDefault();

					    input.addError(validations.errors.maxChar[0] + ' ' + maxChar + ' ' + validations.errors.maxChar[1]);

				    } else {

					    input.removeError();

				    }

			    });

		    };

		    this.minNumber = function (input, min) {

			    var minNum = parseInt(min);

			    input.on('blur input', function () {

				    if (this.isRequired()) {

					    if (!this.isEmpty())
						    validations.checkMinNum(this, minNum);

				    } else {

					    validations.checkMinNum(this, minNum);

				    }

			    });

			    input.on('focusin', function () {

				    input.removeError();

			    });

		    };

		    this.maxNumber = function (input, max) {

			    var maxNum = parseInt(max),
				    value;

			    if (!input.hasMinNum()) {

				    input.on('keydown', function (e) {

					    validations.translateDigit(e, this, validations.codes.enDigits);

				    });

			    }

			    input.on('keydown keyup', function (e) {

				    value = validations.removeCommas(input.value);

				    if (validations.returnFalseKeys(e))
					    return;

				    if (value > maxNum) {

					    e.preventDefault();

					    input.addError(validations.errors.maxNum[0] + maxNum + validations.errors.minNum[1]);

					    input.value = input.value.substr(0, this.value.length - 1);

				    }

			    });

			    input.on('blur input', function () {

				    if (!hasAnotherError)
					    input.removeError();

			    });

		    };

		    this.mobile = function (input) {

			    input.on('blur', function () {

				    validations.pattern.check(input, validations.pattern.mobile, validations.errors.mobile);

			    });

		    };

		    this.phone = function (input) {

			    input.on('blur', function () {

				    validations.pattern.check(input, validations.pattern.phone, validations.errors.phone);

			    });

		    };

		    this.iban = function (input) {

			    input.on('blur', function () {

				    var value = this.value;

				    if (this.isRequired()) {

					    if (!this.isEmpty()) {

						    if (!validations.IBAN(value))
							    input.addError(validations.errors.IBAN);

					    }

				    } else {

					    if (!validator.IBAN(value))
						    input.addError(validations.errors.IBAN);

				    }

			    });


		    };

		    this.personalID = function (input) {

			    input.on('blur', function () {

				    var value = this.value;

				    if (input.isRequired()) {

					    if (!input.isEmpty()) {

						    if (!validator.checkPersonalID(value))
							    input.addError(validations.errors.personalID);

					    }

				    } else {

					    if (!validator.checkPersonalID(value))
						    input.addError(validations.errors.personalID);

				    }

			    });

		    };

		    this.zipCode = function (input) {

			    input.on('blur', function () {

				    var value = input.value;

				    if (this.isRequired()) {

					    if (!this.isEmpty()) {

						    if (!validations.checkZipCode(value))
							    validator.addError(validations.errors.zipCode);

					    }

				    } else {

					    if (!validations.checkZipCode(value))
						    validator.addError(validations.errors.zipCode);

				    }

			    });

		    };

		    this.form = function (form, options) {

			    var formInputs = form.querySelectorAll('[ data-validation ]'),

				    rule,
				    ruleValue,
				    input,
				    validationRules,

				    invalidInputs = [],

				    addFormError = function (input, errorMessage) {

					    invalidInputs.push([[input], errorMessage]);

				    };

			    for (var i = 0, vl = formInputs.length; i < vl; i++) {

				    input = formInputs[i];

				    validationRules = input.getAttribute('data-validation').split('|');

				    for (var j = 0, rl = validationRules.length; j < rl; j++) {

					    rule = validationRules[j].split(':')[0];

					    ruleValue = validationRules[j].split(':')[1];

					    // Rules that are set in data-validation attr.

					    switch (rule) {

						    case 'required':

							    if (input.isEmpty())
								    addFormError(input, 'Field is required!');

							    break;

						    case 'url':

							    if (!input.isURL())
								    addFormError(input, 'Required a valid URL as value!');

							    break;

						    case 'domain':

							    if (!input.isDomain())
								    addFormError(input, 'Required a valid DOMAIN NAME as value!');

							    break;

						    case 'email':

							    if (!input.isEmail())
								    addFormError(input, 'Required a valid EMAIL as value!');

							    break;

						    case 'min':

							    if (!input.hasMinChar())
								    addFormError(input, 'Required MINIMUM-CHARACTER [ ' + ruleValue + ' ]!');

							    break;

						    case 'min-num':

							    if (!input.hasMinNum())
								    addFormError(input, 'Required MINIMUM-NUMBER [ ' + ruleValue + ' ]!');

							    break;

						    case 'mobile':

							    if (!input.isMobile())
								    addFormError(input, 'Required a valid MOBILE number as value!');

							    break;

						    case 'phone':

							    if (!input.isPhone())
								    addFormError(input, 'Required a valid PHONE number as value!');

							    break;

						    case 'iban':

							    if (!input.isIBAN())
								    addFormError(input, 'Required a valid SHEBA-CODE (IBAN) as value!');

							    break;

						    case 'personal-id':

							    if (!input.isPersonalID())
								    addFormError(input, 'Required a valid PERSONAL-ID as value!');

							    break;

						    case 'postal-code':

							    if (!input.isZipCode())
								    addFormError(input, 'Required a valid POSTAL-CODE as value!');

							    break;

						    case 'default':

							    break;

					    }

				    }

			    }

			    if (invalidInputs.length > 0) {

				    if (options.console) {

					    console.error('Validation.js: Form (" ' + ( form.id !== '' ? '#' + form.id : '.' + form.className ) + ' ") is not valid and you can not submit it! All required fields must fill out with an appropriate value! ');

					    for (var k = 0, kl = invalidInputs.length; k < kl; k++)
						    console.error(invalidInputs[k][1], invalidInputs[k][0]);


				    } else {

					    return false;

				    }

			    } else {

				    return true;

			    }

		    };

            // -- Init a new input

		    this.init = function (_input) {

			    var inputs = !!_input ? _input : document.querySelectorAll('[data-validation]'),
				    input,
				    rules,
				    rule,
				    ruleValue;

			    for (var i = 0, l = inputs.length; i < l; i++) {

				    input = inputs[i];
				    rules = input.getAttribute('data-validation').split('|');

				    if (input.initialized) return;

				    input.on('focusin', function () {
					    this.removeError();
				    });

				    for (var j = 0; j < rules.length; j++) {

					    rule = rules[j].split(':')[0];
					    ruleValue = rules[j].split(':')[1];

					    switch (rule) {

						    case 'required':

							    input.validation.required = true;

							    validator.required(input);

							    break;

						    case 'email':

							    input.validation.email = true;

							    validator.email(input);

							    break;

						    case 'url':

							    input.validation.url = true;

							    validator.url(input);

							    break;

						    case 'domain':

							    input.validation.domain = true;

							    validator.domain(input);

							    break;

						    case 'number':

							    input.validation.number = true;

							    validator.number(input, ruleValue);

							    break;

						    case 'alphabet':

							    input.validation.alphabet = true;

							    validator.alphabet(input, ruleValue);

							    break;

						    case 'min':

							    input.validation.minChar = true;

							    validator.minCharacter(input, ruleValue);

							    break;

						    case 'max':

							    input.validation.maxChar = true;

							    validator.maxCharacter(input, ruleValue);

							    break;

						    case 'min-num':

							    input.validation.minNum = true;

							    validator.minNumber(input, ruleValue);

							    break;

						    case 'max-num':

							    input.validation.maxNum = true;

							    validator.maxNumber(input, ruleValue);

							    break;

						    case 'mobile':

							    input.validation.mobile = true;

							    validator.mobile(input);

							    break;

						    case 'phone':

							    input.validation.phone = true;

							    validator.phone(input);

							    break;

						    case 'iban':

							    input.validation.iban = true;

							    validator.iban(input);

							    break;

						    case 'personal-id':

							    input.validation.personalID = true;

							    validator.personalID(input);

							    break;

						    case 'zip-code':

							    input.validation.zipCode = true;

							    validator.zipCode(input);

							    break;

						    case 'default':

							    break;

					    }

					    input.initialized = true;

				    }

			    }

		    };

        },

        Validator = function () {},

        validation = function (options) {

            if (!options) return;

            if (options.errors) {

                for (var i in options.errors)
                    if (options.errors.hasOwnProperty(i) && validations.errors.hasOwnProperty(i))
                        validations.errors[i] = options.errors[i];

            }

            if (options.styles) {

                for (var j in options.styles)
                    if (options.styles.hasOwnProperty(j) && validations.styles.hasOwnProperty(j))
                        validations.styles[j] = options.styles[j];

            }

            if (options.parentNode)
                validations.errors.parentNode = options.parentNode;

        },

        validations = new Validations();

        // validator = new Validator();

    !(function () {

        EventTarget.prototype.on = function (events, callback) {

            var eventsArray = events.split(' ');

            for (var i = 0, l = eventsArray.length; i < l; i++) {

                if (this.addEventListener)
                    this.addEventListener(eventsArray[i], callback);

                else if (this.attachEvent)
                    this.attachEvent(eventsArray[i], callback);

            }

        };

        EventTarget.prototype.findParent = function (cn) {

            var p = this.parentNode;

            while ( p.className.indexOf(cn) < 0 ) {

                p = p.parentNode;

            }

            return p;

        };

        EventTarget.prototype.addError = function (error) {

            validator.addError(this, error);

        };

        EventTarget.prototype.removeError = function () {

            validator.removeError(this);

        };

        EventTarget.prototype.isRequired = function () {

            return validations.isRequired(this);

        };

        EventTarget.prototype.isEmpty = function () {

            return validations.isEmpty(this);

        };

        EventTarget.prototype.isEmail = function () {

            return validations.isEmail(this);

        };

        EventTarget.prototype.isURL = function () {

            return validations.isURL(this);

        };

        EventTarget.prototype.isDomain = function () {

            return validations.isDomain(this);

        };

        EventTarget.prototype.isMobile = function () {

            return validations.mobile(this.value, true);

        };

        EventTarget.prototype.isPhone = function () {

            return validations.phone(this.value, true);

        };

        EventTarget.prototype.isIBAN = function () {

            return validations.iban(this.value);

        };

        EventTarget.prototype.isPersonalID = function () {

            return validations.isPersonalID(this.value);

        };

        EventTarget.prototype.isZipCode = function () {

            return validations.isZipCode(this.value);

        };

        EventTarget.prototype.isValidForm = function (options) {

            options = options !== undefined ? options : false;

            if (this.tagName === 'FORM')
                return validations.isValidForm(this, options);

            else
                throw new Error('.isValidForm() will only work on FORM Elements! not a ' + this.tagName + ' Element', [this]);

        };

        EventTarget.prototype.isPattern = function (pattern, reverse) {

            reverse = reverse !== undefined ? reverse : false;

            return validations.isPattern(this.value, pattern, reverse);

        };

        EventTarget.prototype.hasMinChar = function () {

            return validations.hasMinChar(this);

        };

        EventTarget.prototype.hasMinNum = function () {

            return validations.hasMinNum(this);

        };

        EventTarget.prototype.validation = function () {

            initialize(this);

        };

    })();

    initialize();

    w.validation = validation;

})(window, document);