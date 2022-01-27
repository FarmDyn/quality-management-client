<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center pl-10">
        <v-img
          alt="FarmDyn Logo"
          class="shrink mr-2"
          contain
          :src="`${publicPath}farmdyn.png`"
          transition="scale-transition"
          width="20"
        />
        FarmDyn QM - Results
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Table class="ma-10" :data="data"/>
    </v-main>
  </v-app>
</template>

<script>
import Table from './components/table';
import {tidy,pivotWider} from '@tidyjs/tidy'

export default {
  name: 'App',

  components: {
    Table,
  },

  data: () => ({
    data: [],
    toIgnore: ["_id", "_rev", "scenario", "revision", "batch_name"],
    publicPath: process.env.BASE_URL
  }),
  
  async mounted() {
    const {rows} = await fetch("https://fruchtfolge.agp.uni-bonn.de/db/farmdyn_qm/_all_docs?include_docs=true").then((res) => res.json())
    const data = rows.map(r => r.doc).reduce((arr, obj) => {
      const keys = Object.keys(obj);
      const variables = keys.filter((k) => !this.toIgnore.includes(k));
      variables.forEach((v) => {
        arr.push({
          revision: +obj._id.split("::")[0],
          batch_name: obj["batch_name"],
          scenario: obj.scenario,
          variable: v,
          value: this.round(obj[v])
        });
      });
      return arr;
    }, [])
    console.log(data)
    
    // pivot wider
    this.data = tidy(
      data,
      pivotWider({
        namesFrom: "revision",
        valuesFrom: "value"
      })
    )
    // console.log(this.data)
    
  },
  methods: {
    round(value,precision = 1) {
      return Math.round((value + Number.EPSILON) * Math.pow(10,precision)) / Math.pow(10,precision)
    }
  }
};
</script>
