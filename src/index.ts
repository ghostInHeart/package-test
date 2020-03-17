import Vue, { ComponentOptions, PluginFunction, AsyncComponent } from 'vue'
type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent
import ChannelAccount from '@/views/channel/account/accountList.vue'
import ChannelAssetOl from '@/views/channel/asset/onloanList.vue'
import ChannelAssetFl from '@/views/channel/asset/finishList.vue'
import ChannelAssetOd from '@/views/channel/asset/overdueList.vue'
import ChannelAssetCp from '@/views/channel/asset/cleanProof.vue'
import ChannelWithdrawList from '@/views/channel/withdraw/list.vue'

interface IList {
  path: string
  component: Component
}

const totalList: IList[] = [
  {
    path: '/channel/account/accountList',
    component: ChannelAccount
  },
  {
    path: '/channel/asset/onloanList',
    component: ChannelAssetOl
  },
  {
    path: '/channel/asset/finishList',
    component: ChannelAssetFl
  },
  {
    path: '/channel/asset/overdueList',
    component: ChannelAssetOd
  },
  {
    path: '/channel/asset/cleanProof',
    component: ChannelAssetCp
  },
  {
    path: 'channel/withdraw/list',
    component: ChannelWithdrawList
  }
]

export default totalList
