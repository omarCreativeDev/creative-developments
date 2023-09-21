import Highcharts from 'highcharts';

export const options: Highcharts.Options = {
  credits: {
    enabled: false
  },
  chart: {
    height: 200,
    width: 200,
    renderTo: 'hobbiesHighChart',
    plotBackgroundColor: undefined,
    plotBorderWidth: undefined,
    plotShadow: false,
    type: 'pie',
    spacingTop: 0,
    spacingBottom: 0,
    spacingLeft: 0,
    spacingRight: 0
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '<b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      size: '100%',
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        distance: -30
      },
      showInLegend: false
    }
  },
  series: [
    {
      data: [
        { name: 'Reading', y: 20 },
        { name: 'Football', y: 40 },
        {
          name: 'Gaming',
          y: 20,
          sliced: true,
          selected: true
        },
        { name: 'Gym', y: 20 }
      ],
      type: 'pie'
    }
  ]
};
