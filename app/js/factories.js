'use strict';

/* factories */

angular.module('myApp.factories', []).
    factory('textRenderTop', [function() {

    }
]).
    //stack each text on top of each using multi layer canvas
    factory('textRenderBottom', [function () {

        console.log('init canvas selectors');
        var canvas = document.getElementById('memeCanvas'),
            ctx = canvas.getContext('2d'),
            canvasWidth = canvas.width,
            canvasHeight = canvas.height,
            centerWidth = canvasWidth / 2,
            centerHeight = canvasHeight / 2,
            fontSizeIndexTop = 0,
            fontSizeIndexBottom = 0,
            fontStyle = '',
            fontSize = [' 50px', ' 40px', ' 30px', ' 25px', ' 20px', ' 16px', ' 10px'],
            fontSizeTemp,
            fontWeight = ' bold',
            fontFamily = ' Impact',
            fontColor = '#FFFFFF',
            strokeColor = '#000000';

        var textRenderBottom = {

            /**
             * draw the text on the canvas
             */
            draw: function (bottom) {

                //top = top.toUpperCase();
                bottom = bottom.toUpperCase();

                var centeredWidthTop,
                    centeredWidthBottom,
                    topX = 0,
                    topY = 0,
                    bottomX = 0,
                    bottomY = 0,
                    textMetricsTop,
                    textMetricsBottom,
                    topTokens = [],
                    bottomTokens = [];

                //topTokens = top.split(' ');
                bottomTokens = bottom.split(' ');

                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                //ctx.fillRect(0, 0, top, bottom);

                ctx.font = fontStyle + fontWeight + fontSize[fontSizeIndexBottom] + fontFamily; //'bold 12px sans-serif';
                ctx.textAlign = 'middle';
                ctx.textBaseline = 'top';
                ctx.fillStyle = fontColor;
                ctx.strokeStyle = strokeColor;
                ctx.lineWidth = 2;
                bottomY = canvasHeight - parseInt(fontSize, 10);
                //console.log(bottomY);

                //use fillText before strokeText
                //textMetricsTop = ctx.measureText(top);
                //centeredWidthTop = (canvasWidth - textMetricsTop.width) / 2;
                //console.log(textMetricsTop);

                textMetricsBottom = ctx.measureText(bottom);
                centeredWidthBottom = (canvasWidth - textMetricsBottom.width) / 2;
                console.log(textMetricsBottom);

                console.log('text Top w, cw, font size', textMetricsBottom.width, canvasWidth, fontSizeIndexBottom);

                /*
                if (textMetricsTop.width >= canvasWidth) {
                    ++fontSizeIndexTop;
                    ctx.font = fontStyle + fontWeight + fontSize[fontSizeIndexTop] + fontFamily;
                }
                */

                if (textMetricsBottom.width >= canvasWidth) {
                    ++fontSizeIndexBottom;
                    ctx.font = fontStyle + fontWeight + fontSize[fontSizeIndexBottom] + fontFamily;
                }
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

                //ctx.fillText(top, centeredWidthTop, 10);
                //ctx.strokeText(top, centeredWidthTop, 0);

                //bottom text
                ctx.fillText(bottom, centeredWidthBottom, bottomY - 10);
                ctx.strokeText(bottom, centeredWidthBottom, bottomY - 10);
            }
        };
        return textRenderBottom;
    }
]);
