<template>
  <div class="charts-overview">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">YOU ARE HERE</li>
      <li class="breadcrumb-item active">Resultados</li>
    </ol>
    <h1 class="page-title">
      Resultados -
      <span class="fw-semi-bold">Fase 02</span>
      <h5> Laudos com panorâmicas validados e processados <span class='fw-semi-bold'>(sample: 4.964 exames)</span></h5>
    </h1>
    <div>
      <b-row>
        <b-col xs="12" lg="12">
          <Widget
              title="<h5>Principais alterações <span class='fw-semi-bold'>(sample:  4.964 exames)</span></h5>"
              close collapse customHeader
          >
            <apexchart type="bar" height="350" :series="cd.apex.columns.series" :options="cd.apex.columns.options"/>
          </Widget>

        </b-col>

    
        <b-col xs='12' lg='12'>
          <b-row>
            <b-col xs="12" lg="6">
              <Widget
                  title="<h5>Tipos <span class='fw-bold'>de dentição</span></h5>"
                  close collapse customHeader
              >
                <apexchart type="pie" height="200" :series="cd.apex.piemodel.series" :options="cd.apex.pie.options"/>
              </Widget>
            </b-col>
            <b-col xs="12" lg="6">
              <Widget
                  title="<h5>Distribuição <span class='fw-semi-bold'>entre sexos</span></h5>"
                  close collapse customHeader
              >
                <echart :options="cd.echarts.donutmodel" :init-options="initEchartsOptions" style="height: 175px"></echart>
              </Widget>
            </b-col>
            
          </b-row>
        </b-col>
        <b-col xs="12" lg="12">
          <Widget
              title="<h5>Dentes <span class='fw-semi-bold'>mais ausentes</span></h5>"
              close collapse customHeader
          >
            <apexchart :series="cd.apex.column.series" :options="cd.apex.column.options" style="height: 250px;"></apexchart>
          </Widget>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import {chartData, liveChart, liveChartInterval} from './mock';

import ECharts from 'vue-echarts/components/ECharts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/themeRiver';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

import Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';

exporting(Highcharts);
exportData(Highcharts);

import { Chart } from 'highcharts-vue';
import Sparklines from '../../components/Sparklines/Sparklines'

export default {
  name: "ChartsModel",
  components: { Widget, echart: ECharts, highcharts: Chart, Sparklines },
  data() {
    return {
      cd: chartData,
      ld: liveChart,
      initEchartsOptions: {
        renderer: 'canvas'
      }
    };
  },
  computed: {
    sparklineData() {
      return {
        series: [{data: [1, 7, 3, 5, 7, 8]}],
        options1: {
          colors: [this.appConfig.colors.green],
          plotOptions: {
            bar: {
              columnWidth: '50%'
            }
          }
        },
        options2: {
          colors: [this.appConfig.colors.red],
          plotOptions: {
            bar: {
              columnWidth: '50%'
            }
          }
        }
      }
    }
  },
  beforeDestroy() {
    clearInterval(liveChartInterval);
  }
};
</script>

<style src="./Charts.scss" lang="scss" />
