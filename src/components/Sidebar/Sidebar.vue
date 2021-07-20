<template>
  <b-collapse class="sidebar-collapse" id="sidebar-collapse" :visible="sidebarOpened">
  <nav
    :class="{sidebar: true}"
  >
    <header class="logo">
      <router-link to="/app">
      <img src="../../assets/logo.png" width = "50%">
      </router-link>
    </header>
    <ul class="nav">
      <h5 class="navTitle">Modelo</h5>
      <NavLink
        :activeItem="activeItem"
        header="Papiron"
        link="/app/dashboard"
        iconName="flaticon-home-3"
        index="dashboard"
        isHeader
      />
      <h5 class="navTitle">Resultados</h5>
      <NavLink
        header="Fase 01"
        link="/app/components/charts"
        iconName="flaticon-network-1 "
        index="typography"
        isHeader
      />
      <NavLink
        header="Dados modelo"
        link="/app/components/chartsmodel"
        iconName="flaticon-layers-2"
        index="tables"
        isHeader
      />
      
    </ul>
    <!-- <h5 class="navTitle d-sm-down-none">
      LABELS
    </h5>
    <ul class="sidebarLabels d-sm-down-none">
      <li>
        <a href="#">
          <i class="fa fa-circle text-success mr-3" />
          <span class="labelName">Core</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-circle text-primary mr-3" />
          <span class="labelName">UI Elements</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-circle text-danger mr-3" />
          <span class="labelName">Forms</span>
        </a>
      </li>
    </ul> -->

    <h5 class="navTitle d-sm-down-none mb-3">
      EVOLUÇÃO
    </h5>
    <div class="sidebarAlerts d-sm-down-none">
      <b-alert
        v-for="alert in alerts"
        :key="alert.id"
        class="sidebarAlert" variant="transparent"
        show dismissible
      >
        <span>{{alert.title}}</span><br />
        <b-progress class="sidebarProgress progress-xs mt-1"
          :variant="alert.color" :value="alert.value" :max="100" />
        <span>{{alert.footer}}</span>
      </b-alert>
    </div>
  </nav>
  </b-collapse>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: 'Dataset laudos',
          value: 50,
          footer: 'Laudo válidos e processado no banco',
          color: 'warning',
        },
        {
          id: 1,
          title: 'Dataset panorâmicas',
          value: 10,
          footer: 'Pranorâmicas válidas, e recortadas',
          color: 'danger',
        },
      {
          id: 2,
          title: 'Estudo de benchmark',
          value: 80,
          footer: 'Estudo de artigos relevantes',
          color: 'sucess',
        },
      {
          id: 3,
          title: 'Treinamento de modelo 01',
          value: 75,
          footer: 'Identificação de sexo',
          color: 'success-light',
        },
      ],
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
