webpackJsonp([21],{cZjO:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={data:function(){return{ruleForm:{realname:"",username:"",password:"",role:"1"},rules:{},token:JSON.parse(sessionStorage.getItem("token"))}},methods:{onCancle:function(){this.$router.push("/account")},getData:function(e){var r=this;e.token=this.token,e.user_id=this.$route.query.id,this.$axios.post("api/user/info",e).then(function(e){var t=e.data.data;0==t.code?(r.ruleForm.realname=t.info.userInfo.realname,r.ruleForm.username=t.info.userInfo.username,r.ruleForm.role=t.info.role.role_id,r.ruleForm.password=""):r.ruleForm={realname:"",username:"",password:"",role:"1"}})},submitForm:function(){var e=this,r=this,t="",a={token:this.token,realname:this.ruleForm.realname,username:this.ruleForm.username,password:this.ruleForm.password,role_id:this.ruleForm.role};this.$route.query.id?(t="api/user/update",a.user_id=this.$route.query.id):t="api/user/add",this.$axios.post(t,a).then(function(t){var a=t.data.data;0==a.code?(e.$message.success("保存成功！"),setTimeout(function(){r.$router.push("/account")},500)):e.$message.error("保存失败！"+a.msg)})},cancleForm:function(){}},created:function(){this.$route.query.id&&this.getData({})},watch:{$route:function(e,r){this.$route.query.id&&this.getData({})}}},o={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{},[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/account"}}},[t("i",{staticClass:"el-icon-tickets"}),e._v("账户管理\n      ")]),e._v(" "),t("el-breadcrumb-item",[e._v("添加账户")])],1)],1),e._v(" "),t("div",{staticClass:"container"},[t("div",{staticStyle:{width:"60%"}},[t("div",{staticClass:"addaccount-title"},[e._v("添加账户")]),e._v(" "),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户姓名",prop:"realname"}},[t("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入用户姓名"},model:{value:e.ruleForm.realname,callback:function(r){e.$set(e.ruleForm,"realname",r)},expression:"ruleForm.realname"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"账号",prop:"username"}},[t("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入登录账号或邮箱"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{staticStyle:{width:"300px"},attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"角色",prop:"role"}},[t("el-radio-group",{model:{value:e.ruleForm.role,callback:function(r){e.$set(e.ruleForm,"role",r)},expression:"ruleForm.role"}},[t("el-radio",{attrs:{label:"1",value:1}},[e._v("管理者")]),e._v(" "),t("el-radio",{attrs:{label:"2",value:2}},[e._v("运营者")])],1)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("保存")]),e._v(" "),t("el-button",{on:{click:e.onCancle}},[e._v("取消")])],1)],1)],1)])])},staticRenderFns:[]};var s=t("VU/8")(a,o,!1,function(e){t("o28O")},"data-v-4d9135da",null);r.default=s.exports},o28O:function(e,r){}});