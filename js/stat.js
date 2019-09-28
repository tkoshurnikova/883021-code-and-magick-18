'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TITLE_GAP = 20;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var CHART_HEIGHT = 150;
var CHART_GAP = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px  PT Mono';
  ctx.fillStyle = '#000000';
  ctx.textBaseline = 'hanging';

  ctx.fillText('Ура вы победили!', CLOUD_X + TITLE_GAP, CLOUD_Y + TITLE_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + TITLE_GAP, CLOUD_Y + TITLE_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var barHeight = (CHART_HEIGHT * times[i]) / maxTime;
    var barX = CLOUD_X + CHART_GAP + (BAR_WIDTH + BAR_GAP) * i;

    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], barX, CLOUD_HEIGHT - TITLE_GAP);
    ctx.fillText(Math.round(times[i]), barX, CLOUD_HEIGHT - TITLE_GAP - GAP * 3 - barHeight);

    var barColor = 'hsl(240, ' + 100 * Math.random() + '%, 50%)';

    if (names[i] === 'Вы') {
      barColor = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillStyle = barColor;
    ctx.fillRect(barX, CLOUD_HEIGHT - TITLE_GAP - GAP - barHeight, BAR_WIDTH, barHeight);
  }
};
