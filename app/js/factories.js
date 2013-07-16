'use strict';

/* factories */

angular.module('myApp.factories', []).
    factory('textRenderTop', [function() {
        
        console.log('init top canvas selectors');
        var canvas = document.getElementById('memeCanvasTop'),
            ctx = canvas.getContext('2d'),
            canvasWidth = canvas.width,
            canvasHeight = canvas.height,
            centerWidth = canvasWidth / 2,
            centerHeight = canvasHeight / 2,
            fontSizeIndexTop = 0,
            fontStyle = '',
            fontSize = [' 50px', ' 40px', ' 30px', ' 25px', ' 20px', ' 16px', ' 10px'],
            fontSizeTemp,
            fontWeight = ' bold',
            fontFamily = ' Impact',
            fontColor = '#FFFFFF',
            strokeColor = '#000000';
        
        var textRenderTop = {
            
            draw: function(top) {
                
                top = top.toUpperCase();

                var centeredWidthTop,
                    topX = 0,
                    topY = 0,
                    textMetricsTop,
                    topPadding = canvasWidth / 4,
                    topTokens = [];

                topTokens = top.split(' ');
                console.log(topTokens.length);

                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                //ctx.fillRect(0, 0, top, bottom);

                ctx.font = fontStyle + fontWeight + fontSize[fontSizeIndexTop] + fontFamily; //'bold 12px sans-serif';
                ctx.textAlign = 'middle';
                ctx.textBaseline = 'top';
                ctx.fillStyle = fontColor;
                ctx.strokeStyle = strokeColor;
                ctx.lineWidth = 2;
                topY = parseInt(fontSize, 10) / 2;
                console.log(topY);

                //use fillText before strokeText
                textMetricsTop = ctx.measureText(top);
                centeredWidthTop = (canvasWidth - textMetricsTop.width) / 2;
                console.log(textMetricsTop, centeredWidthTop);

                console.log('text Top w, cw, font size', textMetricsTop.width, canvasWidth, fontSizeIndexTop);

                if ((textMetricsTop.width) + topPadding >= canvasWidth) {
                    ++fontSizeIndexTop;
                    ctx.font = fontStyle + fontWeight + fontSize[fontSizeIndexTop] + fontFamily;
                }

                //top text
                ctx.fillText(top, centeredWidthTop, topY - 10);
                ctx.strokeText(top, centeredWidthTop, topY - 10);
            }
        };
        
        return textRenderTop;
    }
]).
    //stack each text on top of each using multi layer canvas
    factory('textRenderBottom', [function () {

        console.log('init bottom canvas selectors');
        var canvas = document.getElementById('memeCanvasBottom'),
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
                    bottomTokens = [];

                bottomTokens = bottom.split(' ');

                ctx.clearRect(0, 0, canvasWidth, canvasHeight);

                ctx.font = fontStyle + fontWeight + fontSize[fontSizeIndexBottom] + fontFamily; //'bold 12px sans-serif';
                ctx.textAlign = 'middle';
                ctx.textBaseline = 'top';
                ctx.fillStyle = fontColor;
                ctx.strokeStyle = strokeColor;
                ctx.lineWidth = 2;
                bottomY = canvasHeight - parseInt(fontSize, 10);
                //console.log(bottomY);

                textMetricsBottom = ctx.measureText(bottom);
                centeredWidthBottom = (canvasWidth - textMetricsBottom.width) / 2;
                console.log(textMetricsBottom);

                console.log('text bot w, cw, font size', textMetricsBottom.width, canvasWidth, fontSizeIndexBottom);

                if (textMetricsBottom.width >= canvasWidth) {
                    ++fontSizeIndexBottom;
                    ctx.font = fontStyle + fontWeight + fontSize[fontSizeIndexBottom] + fontFamily;
                }
                
                //bottom text
                ctx.fillText(bottom, centeredWidthBottom, bottomY - 10);
                ctx.strokeText(bottom, centeredWidthBottom, bottomY - 10);
            }
        };
        
        return textRenderBottom;
    }
]);
