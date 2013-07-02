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
                    centeredWidthTop,
                    centeredWidthBottom,
                    topX = 0,
                    topY = 0,
                    bottomX = 0,
                    bottomY = 0,
                    fontStyle = '',
                    fontSize = [' 50px', ' 45px', ' 35px', ' 30px', ' 20px', ' 16px', ' 10px'],
                    fontSizeTemp,
                    fontSizeIndex = 0,
                    fontWeight = ' bold',
                    fontFamily = ' Impact',
                    fontColor = '#FFFFFF',
                    strokeColor = '#000000',
                    textMetrics,
                    topTokens = [],
                    bottomTokens = [];

                topTokens = top.split(' ');
                bottomTokens = bottom.split(' ');

                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                //ctx.fillRect(0, 0, top, bottom);

                ctx.font = fontStyle + fontWeight + fontSize[fontSizeIndex] + fontFamily; //'bold 12px sans-serif';
                ctx.textAlign = 'middle';
                ctx.textBaseline = 'top';
                ctx.fillStyle = fontColor;
                ctx.strokeStyle = strokeColor;
                ctx.lineWidth = 2;
                bottomY = canvasHeight - parseInt(fontSize, 10);
                //console.log(bottomY);

                //use fillText before strokeText
                textMetrics = ctx.measureText(top);
                centeredWidthTop = (canvasWidth - textMetrics.width) / 2;
                console.log(textMetrics);

                textMetrics = ctx.measureText(bottom);
                centeredWidthBottom = (canvasWidth - textMetrics.width) / 2;
                console.log(textMetrics);

                /*
                if (textMetrics > canvasWidth) {
                    fontSizeTemp = fontSizeIndex--;
                    ctx.font = fontStyle + fontWeight + fontSize[fontSizeTemp] + fontFamily;
                    console.log(ctx.font);
                }
                else {
                    fontSizeTemp = fontSizeIndex++;
                    ctx.font = fontStyle + fontWeight + fontSize[fontSizeTemp] + fontFamily;
                    console.log(ctx.font);
                    console.log((canvasWidth - textMetrics.width) / 2);
                }
                */

                ctx.fillText(top, centeredWidthTop, 10);
                ctx.strokeText(top, centeredWidthTop, 0);

                //bottom text
                ctx.fillText(bottom, centeredWidthBottom, bottomY - 10);
                ctx.strokeText(bottom, centeredWidthBottom, bottomY - 10);
            }
        };
        return textRender;
    }
]);
