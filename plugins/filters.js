import Vue from 'vue'

import dateFormat from '@/plugins/filters/dateFormat'
import datetimeFormat from '@/plugins/filters/datetimeFormat'
import humanizeTime from '@/plugins/filters/humanizeTime'
import numberFormat from '@/plugins/filters/numberFormat'
import phoneFormat from '@/plugins/filters/phoneFormat'

export default () => {
    Vue.filter('datetimeFormat', datetimeFormat)
    Vue.filter('dateFormat', dateFormat)
    Vue.filter('humanizeTime', humanizeTime)
    Vue.filter('numberFormat', numberFormat)
    Vue.filter('phoneFormat', phoneFormat)
}
