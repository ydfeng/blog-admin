webpackJsonp([17],{Ljoc:function(t,e){},VFBz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("bOdI"),n=a.n(i),s={data:function(){var t;return t={url:"./static/vuetable.json",tableData:[],cur_page:1,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,delVisible:!1,form:{name:"",date:"",address:""}},n()(t,"is_search",!1),n()(t,"page",""),n()(t,"limit",""),n()(t,"total",""),n()(t,"pageInfo",{first:0,before:0,current:0,last:0,next:0,total_pages:0}),n()(t,"singleValue",!1),n()(t,"token",JSON.parse(sessionStorage.getItem("token"))),t},created:function(){this.getData({})},watch:{$route:function(t,e){this.getData({})}},computed:{data:function(){}},methods:{changeStatus:function(t){var e=this,a={token:this.token,id:t.id};a.status="0"==t.status?"0":"1";var i=this;this.$axios.post("api/occupy/status",a).then(function(t){var a=t.data.data;0==a.code?i.$message.success("状态修改成功！"):e.$message.error("状态修改失败！"+a.msg),i.getData({})})},handleCurrentChange:function(t){this.cur_page=t,this.getData({})},handleSelectionChange:function(t){this.multipleSelection=t},getData:function(t){var e=this;t.token=this.token,this.$axios.post("api/occupy/list",{page:this.cur_page,limit:this.limit,token:this.token}).then(function(t){var a=t.data.data;if(0==a.code){var i=a.info.items;e.tableData=i.map(function(t){return t.content=JSON.parse(t.content),t});var n={first:a.info.first,before:a.info.before,current:a.info.current,last:a.info.last,next:a.info.next,total_pages:a.info.total_pages,total_items:a.info.total_items,limit:a.info.limit};e.pageInfo=n}else e.tableData=[]})},search:function(){this.is_search=!0},handleEdit:function(t){this.$router.push({path:"adddivinationday",query:{id:t.id}})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-date"}),t._v(" 运势管理\n      ")]),t._v(" "),a("el-breadcrumb-item",[t._v("每日一占")])],1)],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("router-link",{staticStyle:{color:"#fff"},attrs:{to:{path:"/adddivinationday"}}},[a("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"delete",size:"small"}},[t._v("新建解读")])],1)],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"title",label:"名称",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"占卜正位",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.row.content[0].img,lazy:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0","active-text":"上线","inactive-text":"下线"},on:{change:function(a){t.changeStatus(e.row)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"update_time",label:"更新时间",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleEdit(e.row)}}},[t._v("编辑")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"prev, pager, next,jumper,total",total:t.pageInfo.total_items},on:{"current-change":t.handleCurrentChange}})],1)],1)])},staticRenderFns:[]};var o=a("VU/8")(s,l,!1,function(t){a("Ljoc")},"data-v-7d3daabf",null);e.default=o.exports}});