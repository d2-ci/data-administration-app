/*! For license information please see cs.f48c41cd.chunk.js.LICENSE.txt */
(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[18],{184:function(e,n,s){!function(e){"use strict";var n="leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),s="led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_"),r=[/^led/i,/^\xfano/i,/^b\u0159e/i,/^dub/i,/^kv\u011b/i,/^(\u010dvn|\u010derven$|\u010dervna)/i,/^(\u010dvc|\u010dervenec|\u010dervence)/i,/^srp/i,/^z\xe1\u0159/i,/^\u0159\xedj/i,/^lis/i,/^pro/i],t=/^(leden|\xfanor|b\u0159ezen|duben|kv\u011bten|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|z\xe1\u0159\xed|\u0159\xedjen|listopad|prosinec|led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i;function a(e){return e>1&&e<5&&1!==~~(e/10)}function d(e,n,s,r){var t=e+" ";switch(s){case"s":return n||r?"p\xe1r sekund":"p\xe1r sekundami";case"ss":return n||r?t+(a(e)?"sekundy":"sekund"):t+"sekundami";case"m":return n?"minuta":r?"minutu":"minutou";case"mm":return n||r?t+(a(e)?"minuty":"minut"):t+"minutami";case"h":return n?"hodina":r?"hodinu":"hodinou";case"hh":return n||r?t+(a(e)?"hodiny":"hodin"):t+"hodinami";case"d":return n||r?"den":"dnem";case"dd":return n||r?t+(a(e)?"dny":"dn\xed"):t+"dny";case"M":return n||r?"m\u011bs\xedc":"m\u011bs\xedcem";case"MM":return n||r?t+(a(e)?"m\u011bs\xedce":"m\u011bs\xedc\u016f"):t+"m\u011bs\xedci";case"y":return n||r?"rok":"rokem";case"yy":return n||r?t+(a(e)?"roky":"let"):t+"lety"}}e.defineLocale("cs",{months:n,monthsShort:s,monthsRegex:t,monthsShortRegex:t,monthsStrictRegex:/^(leden|ledna|\xfanora|\xfanor|b\u0159ezen|b\u0159ezna|duben|dubna|kv\u011bten|kv\u011btna|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|srpna|z\xe1\u0159\xed|\u0159\xedjen|\u0159\xedjna|listopadu|listopad|prosinec|prosince)/i,monthsShortStrictRegex:/^(led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),weekdaysShort:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),weekdaysMin:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[z\xedtra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v ned\u011bli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve st\u0159edu v] LT";case 4:return"[ve \u010dtvrtek v] LT";case 5:return"[v p\xe1tek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[v\u010dera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou ned\u011bli v] LT";case 1:case 2:return"[minul\xe9] dddd [v] LT";case 3:return"[minulou st\u0159edu v] LT";case 4:case 5:return"[minul\xfd] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"p\u0159ed %s",s:d,ss:d,m:d,mm:d,h:d,hh:d,d:d,dd:d,M:d,MM:d,y:d,yy:d},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(s(47))}}]);
//# sourceMappingURL=cs.f48c41cd.chunk.js.map