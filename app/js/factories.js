'use strict';

/* factories */

angular.module('myApp.factories', []).
    factory('textRender', [function () {
        var textRender = {
            /**
             * draw the text on the canvas
             */
            draw: function (top, bottom) {

                var canvas = document.getElementById('memeCanvas');
                var ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillRect(0, 0, top, bottom);
            }
        };
        return textRender;
    }
]);
