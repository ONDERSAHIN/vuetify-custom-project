<<template>
    <v-layout row justify-center>
      <v-flex xs12 md11>
        <v-data-table
          :headers="table.headers"
          :items="table.data"
          :loading="table.loading"
          :pagination.sync="pagination"
          :total-items="table.totalItems"
          :rows-per-page-items="[10,25,50,100]"
          item-key="id"
          class="elevation-2"
        >
          <v-progress-linear slot="progress" color="primary" indeterminate></v-progress-linear>
          <template slot="items" slot-scope="props">
            <tr>
              <td @click="props.expanded = !props.expanded">{{ props.item.name }}</td>
              <td class="justify-end layout">
                <v-btn icon class="mx-0" @click="editItem(props.item)">
                  <v-icon color="tertiary">edit</v-icon>
                </v-btn>
                <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                  <v-icon color="tertiary">delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </template>
          <template slot="expand" slot-scope="props">
            <v-container class="ml-0 mr-0">
              <v-layout row wrap justify-space-between>
                <v-flex xs12 sm6 md6 order-md1 order-sm1>
                  <span class="bold caption red--text text-md-left">Created Date : </span>
                  <span xs5 md10> {{ props.item.createdDateTime}} </span>
                </v-flex>
                <v-flex xs12 sm6 md6 order-md1 order-sm1>
                  <span class="bold caption red--text text-md-left">Updated Date : </span>
                  <span xs5 md10> {{ props.item.updatedDateTime}} </span>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12 sm12 md12>
                  <span class="bold caption red--text text-md-left">{{$lang.strings.description}} :</span>
                  <span>{{props.item.description || '--'}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
</template>
<script>
  export default {
    name: 'JobInfo',
    data : (vm) => ({
        actionSheet: false,
        searching: {
          text: '',
          status: false,
        },
        customDialogModel: false,
        name: '',
        pagination : {},
        table: {
          data: [],
          totalItems : 0,
          headers: [
            {
              text: vm.$t('message.name'),
              align: 'left',
              sortable: true,
              value: 'name',
              class: ['primary--text'],
            },
            {
              text: '',
              name: '',
              align: 'right',
              sortable: false,
            },
          ],
          loading: false,
        },
        removing: false,
        modal: {
          detail: false,
          status: false,
          title: '',
          okButtonText: 'Create',
          isSaving: false,
          savingText: '',
          size: {minWidth: '40vw', minHeight: '40vh'},
        },
        job: {
          id: '',
          name: '',
          description: '',
        },
    }),
    watch: {
      pagination: {
        handler () {
          this.request(this.pagination)
        },
        deep: true
      }
    },
    methods: {
      request ({pagination}) {
          // todo
      },
    },
    created () {
      this.request({pagination: this.pagination})
    },
    mounted () { },
  }
</script>

<style scoped>
</style>
