import Highcharts from 'highcharts';
import config from '../../config';
const colors = config.colors;

let columnColors = [colors.blue, colors.green, colors.orange, colors.red, colors.default, colors.gray, colors.teal, colors.pink];
let lineColors = [colors.blue, colors.green, colors.orange];

export const chartData = {
  apex: {
    columns: {
      series: [{
        data: [83776, 55633, 54434, 53859, 51216, 47951, 47703, 45874]
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar'
        },
        colors: columnColors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true
          }
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['imagem radiolucida na coroa', 'conduto com material obturador', 'hiperpneumatizacao sinusal ', 'desgaste incisal', 'inclinacao para mesial', 'solucao de continuidade na coroa', 'anomalia de raiz', 'giroversao dentaria'],
          labels: {
            style: {
              colors: colors.chartTextColor,
              fontSize: '0px',
              enabled:true,
            }
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: colors.chartTextColor,
            }
          }
        },
        tooltip: {
          theme: 'dark'
        },
        grid: {
          borderColor: colors.gridLineColor
        },
        legend: {
          labels: {
            colors: colors.chartTextColor
          }
        }
      }          
    },
    column: {
      series: [{
        data: [58893, 58317, 55319, 55101,31679,30592,20977,20108]
      }],
      options: {
        chart: {
          height: 250,
          type: 'bar'
        },
        colors: columnColors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true
          }
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['18', '28', '38', '48', '36','37','47'],
          labels: {
            style: {
              colors: colors.chartTextColor,
              fontSize: '0px',
              enabled:true,
            }
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: colors.chartTextColor,
            }
          }
        },
        tooltip: {
          theme: 'dark'
        },
        grid: {
          borderColor: colors.gridLineColor
        },
        legend: {
          labels: {
            colors: colors.chartTextColor
          }
        }
      }          
    },
    pie: {
      series: [138,13435,114303],
      
      options: {
        
        labels: ["Dentição decídua", "Dentição mista", 'Dentição permanente'],
        theme: {
          monochrome: {
            enabled: true,
            color: colors.blue,
          }
        },
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: true,
        stroke: {
          show: false,
          width: 0
        },
        legend: true,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 400
            },
            legend: {
              position: 'bottom',
              show: true
            }
          }
        }]
      }
    },
    piemodel: {
      series: [7,1023,3905],
      
      options: {
        
        labels: ["Dentição decídua", "Dentição mista", 'Dentição permanente'],
        theme: {
          monochrome: {
            enabled: true,
            color: colors.blue,
          }
        },
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: true,
        stroke: {
          show: false,
          width: 0
        },
        legend: true,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 400
            },
            legend: {
              position: 'bottom',
              show: true
            }
          }
        }]
      }
    }
  },
  echarts: {
    donut: {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        show: false
      },
      color: [colors.blue, colors.green, colors.orange, colors.red, colors.purple],
      series: [
        {
          name: 'Access source',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              position: 'bottom'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '20',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [
            {value: 54933, name: 'Masculino'},
            {value: 73422, name: 'Feminino'}
          ]
        }
      ]
    },
    donutmodel: {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        show: false
      },
      color: [colors.blue, colors.green, colors.orange, colors.red, colors.purple],
      series: [
        {
          name: 'Access source',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              position: 'bottom'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '20',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [
            {value: 2113, name: 'Masculino'},
            {value: 2849, name: 'Feminino'}
          ]
        }
      ]
    },
  }}
