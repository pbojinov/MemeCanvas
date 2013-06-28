'use strict';

/* factories */

angular.module('myApp.factories', []).
    factory('textRender', [function () {
        var textRender = {
            /**
             * draw the text on the canvas
             */
            draw: function (top, bottom) {

                top = top.toUpperCase();
                bottom = bottom.toUpperCase();

                var canvas = document.getElementById('memeCanvas'),
                    ctx = canvas.getContext('2d'),
                    canvasWidth = canvas.width,
                    canvasHeight = canvas.height,
                    centerWidth = canvasWidth / 2,
                    centerHeight = canvasHeight / 2,
                    topX = 0,
                    topY = 0,
                    bottomX = 0,
                    bottomY = 0,
                    fontStyle = '',
                    fontSize = ' 35px',
                    fontWeight = ' bold',
                    fontFamily = ' Impact',
                    fontColor = '#FFFFFF',
                    strokeColor = '#000000',
                    textMetrics;

                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                //ctx.fillRect(0, 0, top, bottom);

                ctx.font = fontStyle + fontWeight + fontSize + fontFamily; //'bold 12px sans-serif';
                ctx.textAlign = 'middle';
                ctx.textBaseline = 'top';
                ctx.fillStyle = fontColor;
                ctx.strokeStyle = strokeColor;
                ctx.lineWidth = 2;
                bottomY = canvasHeight - parseInt(fontSize, 10);
                console.log(bottomY);

                //use fillText before strokeText
                ctx.fillText(top, centerWidth, 0);
                ctx.strokeText(top, centerWidth, 0);

                //bottom text
                ctx.fillText(bottom, centerWidth, bottomY - 10);
                ctx.strokeText(bottom, centerWidth, bottomY - 10);
            }
        };
        return textRender;
    }
]);
