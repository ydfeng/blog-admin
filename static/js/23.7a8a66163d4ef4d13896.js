webpackJsonp([23],{Dl99:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{form:{constellation_id:"",content:"",tag:""},title:"",id:"1",dynamicTags:[],inputVisible:!1,inputValue:"",token:JSON.parse(sessionStorage.getItem("token")),ConstellationData:[],constellation_id:"",type:"",planet_id:"",four_axis_id:"",tag:"",content:"",name:""}},methods:{onSubmit:function(){var t=this,e=this;this.$axios.post("api/astrolabe/update",{token:this.token,planet_id:this.planet_id,four_axis_id:this.four_axis_id,tag:this.dynamicTags.join(","),type:this.type,constellation_id:this.form.constellation_id,content:this.form.content}).then(function(n){var a=n.data.data;0==a.code?(t.$message.success("保存成功！"),setTimeout(function(){e.$router.push("/horoscope")},500)):t.$message.error("保存失败！"+a.msg)})},onCancle:function(){this.$router.push("/horoscope")},toArray:function(t){return t.split(",")},handleClose:function(t){this.dynamicTags.splice(this.dynamicTags.indexOf(t),1)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick(function(e){t.$refs.saveTagInput.$refs.input.focus()})},getConstellationData:function(){var t=this;this.$axios.post("api/astrolabe/constellation",{token:this.token}).then(function(e){var n=e.data.data;0==n.code?t.ConstellationData=n.info:t.ConstellationData=[]})},getInfoData:function(){var t=this,e={token:this.token};this.name=this.$route.query.name,this.constellation_name=this.$route.query.constellation_name,e.constellation_id=this.constellation_id=this.$route.query.constellation_id,e.type=this.type=this.$route.query.type,e.planet_id=this.planet_id=this.$route.query.planet_id,e.four_axis_id=this.four_axis_id=this.$route.query.four_axis_id,this.$axios.post("api/astrolabe/info",e).then(function(e){var n=e.data.data;0==n.code?(t.form=n.info,""!=t.form.tag?t.dynamicTags=t.toArray(t.form.tag):t.dynamicTags=[]):t.form={constellation_id:"",content:"",tag:""}})},handleInputConfirm:function(){var t=this.inputValue;t&&this.dynamicTags.push(t),this.inputVisible=!1,this.inputValue=""}},created:function(){this.getConstellationData(),this.getInfoData()},watch:{$route:function(t,e){this.getInfoData()}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"crumbs"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/horoscope"}}},[n("i",{staticClass:"el-icon-date"}),t._v("星盘内容\n      ")]),t._v(" "),n("el-breadcrumb-item",[t._v(t._s(t.title)+"编辑")])],1)],1),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"form-box"},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"星座名称"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.constellation_id,callback:function(e){t.$set(t.form,"constellation_id",e)},expression:"form.constellation_id"}},t._l(t.ConstellationData,function(t,e){return n("el-option",{key:e,attrs:{label:t,value:e}})}))],1),t._v(" "),n("el-form-item",{attrs:{label:t.name+"标签"}},[t._l(t.dynamicTags,function(e){return n("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(n){t.handleClose(e)}}},[t._v(t._s(e))])}),t._v(" "),t.inputVisible?n("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleInputConfirm(e):null}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):n("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showInput}},[t._v("新建标签")])],2),t._v(" "),n("el-form-item",{attrs:{label:t.name+t.constellation_name+"运势"}},[n("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("保存")]),t._v(" "),n("el-button",{on:{click:t.onCancle}},[t._v("取消")])],1)],1)],1)])])},staticRenderFns:[]};var o=n("VU/8")(a,i,!1,function(t){n("HI2l")},"data-v-41231a2f",null);e.default=o.exports},HI2l:function(t,e){}});