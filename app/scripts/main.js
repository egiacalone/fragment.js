
import { newNodeOperations } from './partialJs/_nodeOperations.js';
import { newSimpleTable } from './Jsons/simpleTable.js';
// main.js

(function e(t, n, r) { function s(o, u) { if (!n[o]) { if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw f.code = "MODULE_NOT_FOUND", f } var l = n[o] = { exports: {} }; t[o][0].call(l.exports, function (e) { var n = t[o][1][e]; return s(n ? n : e) }, l, l.exports, e, t, n, r) } return n[o].exports } var i = typeof require == "function" && require; for (var o = 0; o < r.length; o++)s(r[o]); return s })({
    1: [function (require, module, exports) {
        'use strict';

        // const {MDCSlider} = require('@material/slider/dist/mdc.slider');
        // import {MDCSlider} from '@material/slider';
        // const slider = new MDCSlider(document.querySelector('.mdc-slider'));
        // slider.listen('MDCSlider:change', () => console.log(`Value changed to ${slider.value}`));

        var data = newSimpleTable

        window.addEventListener("load", () => {

            var NodeOperations = newNodeOperations(data)

            console.log(NodeOperations)

        });

    }, {}]
}, {}, [1])
