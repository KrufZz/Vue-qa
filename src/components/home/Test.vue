<template>
    <div id="weather-v2-plugin-standard" ref="weather">
    <remote-script src="https://apip.weatherdt.com/standard/static/js/weather-standard-common.js?v=2.0"></remote-script>
    </div>
</template>

<script>
    Window.WIDGET = {
        CONFIG: {
            "layout": 2,
            "width": "230",
            "height": "270",
            "background": 1,
            "dataColor": "FFFFFF",
            "borderRadius": 5,
            "key": "171b6c4b980a460d95e77a74c50665a5"
        }
    }
    import Vue from 'vue'
    Vue.component('remote-script', {   // vue动态生成script (在html中当成组件来用)
        render: function (createElement) {
            var self = this;
            return createElement('script', {
                attrs: {
                    type: 'text/javascript',
                    src: this.src
                },
                on: {
                    load: function (event) {
                        self.$emit('load', event);
                    },
                    error: function (event) {
                        self.$emit('error', event);
                    },
                    readystatechange: function (event) {
                        if (this.readyState == 'complete') {
                            self.$emit('load', event);
                        }
                    }
                }
            });
        },
        props: {
            src: {
                type: String,
                required: true
            }
        }
    })

    export default {
        name: "Test"
    }
</script>

<style scoped>

</style>