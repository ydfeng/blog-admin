webpackJsonp([9],{"0vYM":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("bOdI"),s=i.n(a),l=(i("7xIN"),{data:function(){var t;return t={url:"",tableData:[],cur_page:1,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,delVisible:!1,form:{name:"",date:"",address:""},idx:-1,dialogVisible:!1,type:"",status:"",title:"",token:JSON.parse(sessionStorage.getItem("token"))},s()(t,"is_search",!1),s()(t,"page",""),s()(t,"limit",""),s()(t,"total",""),s()(t,"pageInfo",{first:0,before:0,current:0,last:0,next:0,total_pages:0}),s()(t,"singleValue",!1),s()(t,"emptytext","暂无数据"),t},created:function(){this.getData({})},watch:{$route:function(t,e){this.getData({})}},methods:{handleClose:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},changeStatus:function(t){var e=this,i={token:this.token,id:t.id};i.status="0"==t.status?"0":"1";var a=this;this.$axios.post(this.baseURL+"/test/status",i).then(function(t){var i=t.data.data;0==i.code?a.$message.success("状态修改成功！"):e.$message.error("状态修改失败！"+i.msg),a.getData({})})},handleCurrentChange:function(t){this.cur_page=t,this.getData({})},getData:function(t){var e=this;t.token=this.token,this.$axios.post(this.baseURL+"/test/list",{page:this.cur_page,limit:this.limit,token:this.token,type:this.type,status:this.status,title:this.title}).then(function(t){var i=t.data.data;if(0==i.code){e.tableData=i.info.items;var a={first:i.info.first,before:i.info.before,current:i.info.current,last:i.info.last,next:i.info.next,total_pages:i.info.total_pages,total_items:i.info.total_items,limit:i.info.limit};e.pageInfo=a}else e.tableData=[],e.emptytext=i.msg})},search:function(){var t={type:this.type,status:this.status,title:this.title};this.getData(t)},formatter:function(t,e){return t.address},filterTag:function(t,e){return e.tag===t},handleEdit:function(t,e,i){var a="";"0"==e.type?a="addnormal":"1"==e.type&&(a="addtaro"),this.$router.push({path:a,query:{id:e.id}})},goAdd:function(t){"normal"==t?(this.dialogVisible=!1,this.$router.push({path:"addnormal",query:{type:"0"}})):"taro"==t&&(this.dialogVisible=!1,this.$router.push({path:"addtaro",query:{type:"1"}}))},handleDelete:function(t,e){this.idx=t,this.delVisible=!0},delAll:function(){var t=this.multipleSelection.length,e="";this.del_list=this.del_list.concat(this.multipleSelection);for(var i=0;i<t;i++)e+=this.multipleSelection[i].name+" ";this.$message.error("删除了"+e),this.multipleSelection=[]},handleSelectionChange:function(t){this.multipleSelection=t},saveEdit:function(){this.$set(this.tableData,this.idx,this.form),this.editVisible=!1,this.$message.success("修改第 "+(this.idx+1)+" 行成功")},deleteRow:function(){this.tableData.splice(this.idx,1),this.$message.success("删除成功"),this.delVisible=!1}}}),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table"},[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("i",{staticClass:"el-icon-tickets"}),t._v("内容管理\n      ")]),t._v(" "),i("el-breadcrumb-item",[t._v("热门测试")])],1)],1),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"handle-box"},[i("el-button",{attrs:{type:"primary",icon:"delete"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("新建测试")]),t._v(" "),i("el-dialog",{attrs:{title:"选择测试模板",visible:t.dialogVisible,width:"20%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"test-border",on:{click:function(e){t.goAdd("normal")}}},[i("div",{staticClass:"icon-caiji iconfont icon-style"}),t._v(" "),i("div",{staticClass:"test-title"},[t._v("普通测试")]),t._v(" "),i("div",{staticClass:"test-desc"},[t._v("回答一个问题,获得测试结果")])]),t._v(" "),i("div",{staticClass:"test-border",on:{click:function(e){t.goAdd("taro")}}},[i("div",{staticClass:"icon-taluoliumangxing iconfont icon-style"}),t._v(" "),i("div",{staticClass:"test-title"},[t._v("塔罗测试")]),t._v(" "),i("div",{staticClass:"test-desc"},[t._v("抽取一张塔罗牌,获取测试结果")])])]),t._v(" "),i("el-select",{staticClass:"handle-select mr10",attrs:{size:"small",placeholder:"分类选择"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[i("el-option",{key:"1",attrs:{label:"塔罗测试",value:"1"}}),t._v(" "),i("el-option",{key:"2",attrs:{label:"普通测试",value:"0"}})],1),t._v(" "),i("el-select",{staticClass:"handle-select mr10",attrs:{size:"small",placeholder:"状态选择"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[i("el-option",{key:"1",attrs:{label:"已上线",value:"1"}}),t._v(" "),i("el-option",{key:"2",attrs:{label:"已下线",value:"0"}})],1),t._v(" "),i("el-input",{staticClass:"handle-input1 mr10",attrs:{size:"small",placeholder:"标题搜索"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),i("el-button",{attrs:{size:"small",type:"primary",icon:"search"},on:{click:t.search}},[t._v("搜索")])],1),t._v(" "),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","empty-text":t.emptytext},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{label:"标题",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-card",{attrs:{"body-style":{padding:"5px",position:"relative"}}},[i("img",{staticClass:"card-image",staticStyle:{width:"150px"},attrs:{src:e.row.illustration}}),t._v(" "),i("div",{staticClass:"card-title",staticStyle:{left:"160px"},attrs:{title:e.row.title}},[t._v(t._s(e.row.title))])])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"type",label:"分类",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return["0"==e.row.type?i("div",[t._v("普通测试")]):t._e(),t._v(" "),"1"==e.row.type?i("div",[t._v("塔罗测试")]):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"状态",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-switch",{attrs:{"active-value":"1","inactive-value":"0","active-text":"上线","inactive-text":"下线"},on:{change:function(i){t.changeStatus(e.row)}},model:{value:e.row.status,callback:function(i){t.$set(e.row,"status",i)},expression:"scope.row.status"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"update_time",label:"更新时间",width:"150"}}),t._v(" "),i("el-table-column",{attrs:{prop:"create_time",label:"创建时间",width:"150"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text"},on:{click:function(i){t.handleEdit("newscontainer",e.row,e.$index)}}},[t._v("编辑")])]}}])})],1),t._v(" "),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{layout:"prev, pager, next,jumper,total",total:t.pageInfo.total_items},on:{"current-change":t.handleCurrentChange}})],1)],1)])},staticRenderFns:[]};var o=i("VU/8")(l,n,!1,function(t){i("iAEI")},null,null);e.default=o.exports},"7xIN":function(t,e){},iAEI:function(t,e){}});