<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      dense
      :headers="headers"
      :items="filteredData"
      :items-per-page="15"
      :search="search"
      class="elevation-1"
    >
    
    <template v-slot:header.batch_name="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon small :color="selectedBatchNames.length === batchNames.length ? '' : 'primary'">
                    mdi-filter
                  </v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-select style="max-height: 200px; overflow: scroll;"
                  multiple
                  deletable-chips
                  chips
                  :menu-props="{ maxHeight: '400' }"
                  v-model="selectedBatchNames"
                  :items="batchNames"
                  class="pa-4"
                  type="text"
                  label="Filter by"
                ></v-select>
                <v-btn
                  @click="selectedBatchNames = batchNames"
                  small
                  text
                  color="primary"
                  class="ml-2 mb-2"
                >Select All</v-btn>
                <v-btn
                  @click="selectedBatchNames = []"
                  small
                  text
                  color="secondary"
                  class="ml-2 mb-2"
                >Clear</v-btn>
              </div>
            </v-menu>
          </template>
          
          <template v-slot:header.scenario="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon small :color="selectedScenarios.length === scenarios.length ? '' : 'primary'">
                    mdi-filter
                  </v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-select style="max-height: 200px; overflow: scroll;"
                  multiple
                  deletable-chips
                  chips
                  :menu-props="{ maxHeight: '400' }"
                  v-model="selectedScenarios"
                  :items="scenarios"
                  class="pa-4"
                  type="text"
                  label="Filter by"
                ></v-select>
                <v-btn
                  @click="selectedScenarios = scenarios"
                  small
                  text
                  color="primary"
                  class="ml-2 mb-2"
                >Select All</v-btn>
                <v-btn
                  @click="selectedScenarios = []"
                  small
                  text
                  color="secondary"
                  class="ml-2 mb-2"
                >Clear</v-btn>
              </div>
            </v-menu>
          </template>
          
          <template v-slot:header.variable="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon small :color="selectedVariables.length === variables.length ? '' : 'primary'">
                    mdi-filter
                  </v-icon>
                </v-btn>
              </template>
              <div style="background-color: white; width: 280px">
                <v-select style="max-height: 200px; overflow: scroll;"
                  multiple
                  deletable-chips
                  chips
                  :menu-props="{ maxHeight: '400' }"
                  v-model="selectedVariables"
                  :items="variables"
                  class="pa-4"
                  type="text"
                  label="Filter by"
                ></v-select>
                <v-btn
                  @click="selectedVariables = variables"
                  small
                  text
                  color="primary"
                  class="ml-2 mb-2"
                >Select All</v-btn>
                <v-btn
                  @click="selectedVariables = []"
                  small
                  text
                  color="secondary"
                  class="ml-2 mb-2"
                >Clear</v-btn>
              </div>
            </v-menu>
          </template>
  </v-data-table>
  </v-card>
</template>

<script>
export default {
  computed: {
    filteredData() {
      return this.data.filter(r => this.selectedBatchNames.includes(r.batch_name) && this.selectedScenarios.includes(r.scenario) && this.selectedVariables.includes(r.variable))
    },
    headers() {
      if (!this.data || !this.data.length) return []
      const revisions = Object.keys(this.data[0]).filter(k => !isNaN(+k)).sort((a,b) => b - a)
      
      return [{
        text: 'Batch Name',
        value: 'batch_name',
        align: 'start'
      }, {
        text: 'Scenario',
        value: 'scenario'
      }, {
        text: 'Variable',
        value: 'variable'
      }, ...revisions.map(r => ({
        text: r,
        value: r,
        sortable: false
      }))]
    },
    batchNames() {
      const allBatchNames = [...new Set(this.data.map(r => r.batch_name).filter(f => f))]
      return allBatchNames
    },
    scenarios() {
      return [...new Set(this.data.map(r => r.scenario).filter(f => f))]
    },
    variables() {
      return [...new Set(this.data.map(r => r.variable).filter(f => f))]
    }
  },
  watch: {
    batchNames() {
      this.selectedBatchNames = this.batchNames
    },
    scenarios() {
      this.selectedScenarios = this.scenarios
    },
    variables() {
      this.selectedVariables = this.variables
    }
  },
  data: () => {
    return {
      search: '',
      selectedBatchNames: [],
      selectedScenarios: [],
      selectedVariables: [],
    }
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
<style>
.v-select__selections {
  padding-top: 15px;
}
</style>