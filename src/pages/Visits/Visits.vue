<template>
  <div class="visits-page">
    <h1 class="page-title">Piloto &nbsp;
      <small>
        <small>Teste de modelo</small>
      </small>
    </h1>
    <b-row>
     
     
    </b-row>
    <b-row>
      <b-col xl="4" xs="12">
        <Widget
          title="<h6> Teste do modelo - fase 001 </h6>"
          close settings customHeader
        >
          <div class="stats-row">
            <div class="stat-item">
              <h6 class="name">Testes feitos</h6>
              <p class="value">2</p>
            </div>
            <div class="stat-item">
              <h6 class="name">Acertos</h6>
              <p class="value">50.00%</p>
            </div>
            <div class="stat-item">
              <h6 class="name">Erros</h6>
              <p class="value">50.00%</p>
            </div>
          </div>
          <b-progress variant="success" :value="60"
            :max="100" class="progress-xs" />
          <p>
            <small>
              <span class="circle bg-primary text-white mr-2">
                <i class="la la-angle-up" />
              </span>
            </small>
            <span class="fw-semi-bold">&nbsp;xx% maior</span>
            &nbsp;que a última fase
          </p>
        </Widget>
        <Widget
          title="<h6><span class='badge badge-warning mr-2'>Testes</span> feitos</h6>"
          refresh close customHeader
        >
          <div class="widget-body p-0">
            <div class="list-group list-group-lg">
              <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr">
                  <img class="rounded-circle" src="../../assets/people/man.png" alt="..." />
                  <i class="status status-bottom bg-success" />
                </span>
                <div>
                  <h6 class="m-0">ALP.025888</h6>
                  <p class="help-block text-ellipsis m-0">
                    Resultado - Positivo
                  </p>
                </div>
              </a>
              <a class="list-group-item" href="#">
                <span class="thumb-sm float-left mr">
                  <img class="rounded-circle" src="../../assets/people/woman.png" alt="..." />
                  <i class="status status-bottom bg-danger" />
                </span>
                <div>
                  <h6 class="m-0">TAT.025888</h6>
                  <p class="help-block text-ellipsis m-0">
                    Resultado - Negativo
                  </p>
                </div>
              </a>
             
            </div>
          </div>
          <footer class="bg-widget mt">
            <input type="search" class="form-control form-control-sm" placeholder="Search" />
          </footer>
        </Widget>
      </b-col>
      <b-col xl="8" xs="12">
      <Widget
            title="<h6><span class='badge badge-success mr-2'>Upload</span> </h6>"
            refresh close customHeader
      >          
              <div>
            <label class='glow-on-hover' for="arquivo">Escolha o arquivo com a panorâmica</label>
            <input type="file" name="arquivo" id="arquivo" @change="fileselected">
        </div>
      
        <img class = "panoramica" v-if="image" :src="image" width="400px" height = "200px"/>
        </widget>
      </b-col>

    </b-row>
    <b-row>
      
      
      
    </b-row>
  </div>
</template>

<script>
import Vue from 'vue';
import Widget from '@/components/Widget/Widget';
import Map from './components/Map/Map';
import Calendar from './components/Calendar/Calendar';
import AreaChart from './components/AreaChart/AreaChart';
import AnimatedNumber from "animated-number-vue";

export default {
  name: 'Visits',
  components: {
    Widget, Map, Calendar, AreaChart, AnimatedNumber
  },
  data() {
    return {
      image:'',
      animateNumberOptions: {
        duration: 2000,
        easing: 'easeInQuad',
        formatValue(value) {
          return value.toFixed(0);
        }
      },
      checkedArr: [false, false, false],
      dataCollection: null,
    };
  },
  methods: {
    fileselected(e){
      const file = e.target.files.item(0);
      const reader = new FileReader();
      reader.addEventListener('load', this.imageloaded);
      reader.readAsDataURL(file);
      
    },
    imageloaded(e){
      this.image = e.target.result;
    },
    checkTable(id) {
      let arr = [];
      if (id === 0) {
        const val = !this.checkedArr[0];
        for (let i = 0; i < this.checkedArr.length; i += 1) {
          arr[i] = val;
        }
      } else {
        arr = this.checkedArr;
        arr[id] = !arr[id];
      }
      if (arr[0]) {
        let count = 1;
        for (let i = 1; i < arr.length; i += 1) {
          if (arr[i]) {
            count += 1;
          }
        }
        if (count !== arr.length) {
          arr[0] = !arr[0];
        }
      }
      Vue.set(this, 'checkedArr', arr);
    },
    fillData () {
      this.dataCollection = {
        labels: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#1870DC',
            borderColor: 'transparent',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'Data Two',
            backgroundColor: '#F45722',
            borderColor: 'transparent',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  },
  mounted () {
    this.fillData();
  },
};
</script>

<style src="./Visits.scss" lang="scss" />
