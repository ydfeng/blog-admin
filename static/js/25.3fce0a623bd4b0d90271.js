webpackJsonp([25],{Bu0M:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("mvHQ"),l=s.n(i),a={data:function(){return{ruleForm:{title:"",illustration:"",question_list:"",img:"",result_analyze_list:[{id:"",title:"",desc:""}]},form:{token:JSON.parse(sessionStorage.getItem("token"))},token:JSON.parse(sessionStorage.getItem("token")),rules:{}}},methods:{UploadUrl:function(){return this.baseURL+"/upload/img"},beforeUploadIllustration:function(t){var e=t.size/1024/1024<10;return e||this.$message({message:"上传封面大小不能超过 10MB!",type:"warning"}),e},illustrationSuccess:function(t,e,s){if(0==t.data.code){var i=t.data.info[0];this.ruleForm.illustration=i.res_url}else this.$message({message:"封面上传失败!",type:"error"})},beforeUploadImg:function(t){var e=t.size/1024/1024<10;return e||this.$message({message:"上传图片大小不能超过 10MB!",type:"warning"}),e},imgSuccess:function(t,e,s){if(0==t.data.code){var i=t.data.info[0];this.ruleForm.img=i.res_url}else this.$message({message:"图片上传失败!",type:"error"})},deleteAnalysis:function(t){var e=[];this.ruleForm.result_analyze_list.forEach(function(s,i){i!==t&&e.push(s)}),this.ruleForm.result_analyze_list=e},addAnalysis:function(){this.ruleForm.result_analyze_list.push({id:"",title:"",desc:""})},submitForm:function(t){var e=this,s=this,i="",a={token:this.token,title:this.ruleForm.title,illustration:this.ruleForm.illustration,question_list:this.ruleForm.question_list,img:this.ruleForm.img,result_analyze_list:l()(this.ruleForm.result_analyze_list)};this.$route.query.id?(i=this.baseURL+"/test/update",a.id=this.$route.query.id):(i=this.baseURL+"/test/add",a.type="0"),this.$axios.post(i,a).then(function(t){var i=t.data.data;0==i.code?(e.$message.success("保存成功！"),setTimeout(function(){s.$router.push("/hottest")},500)):e.$message.error("保存失败！"+i.msg)})},onCancle:function(){this.$router.push("/hottest")},getData:function(){var t=this;this.id=this.$route.query.id,this.$axios.post(this.baseURL+"/test/info",{token:this.token,id:this.id}).then(function(e){var s=e.data.data;0==s.code?(t.constellationForm=s.info,t.ruleForm.title=s.info.title,t.ruleForm.illustration=s.info.illustration,t.ruleForm.question_list=s.info.question_list,t.ruleForm.img=s.info.img,t.ruleForm.result_analyze_list=JSON.parse(s.info.result_analyze_list)):t.ruleForm={title:"",illustration:"",question_list:"",img:"",result_analyze_list:[{id:"",title:"",desc:""}]}})}},watch:{$route:function(t,e){this.$route.query.id&&this.getData()}},mounted:function(){this.$route.query.id&&this.getData()}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"crumbs"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/hottest"}}},[s("i",{staticClass:"el-icon-date"}),t._v("热门测试\n      ")]),t._v(" "),s("el-breadcrumb-item",[t._v("新建普通测试")])],1)],1),t._v(" "),s("div",{staticClass:"container",staticStyle:{position:"relative"}},[s("div",{staticClass:"form-box",staticStyle:{width:"60%"}},[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"标题",prop:"title"}},[s("el-input",{model:{value:t.ruleForm.title,callback:function(e){t.$set(t.ruleForm,"title",e)},expression:"ruleForm.title"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"封面",prop:"illustration"}},[s("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.UploadUrl(),data:t.form,"on-success":t.illustrationSuccess,"before-upload":t.beforeUploadIllustration,"show-file-list":!1}},[t.ruleForm.illustration?s("img",{staticClass:"avatar",attrs:{src:t.ruleForm.illustration}}):s("i",{staticClass:"el-icon-upload"}),t._v(" "),s("div",{staticClass:"el-upload__text"},[t._v("点击上传封面图片")])])],1),t._v(" "),s("el-form-item",{attrs:{label:"问题",prop:"question_list"}},[s("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入问题"},model:{value:t.ruleForm.question_list,callback:function(e){t.$set(t.ruleForm,"question_list",e)},expression:"ruleForm.question_list"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"图片",prop:"img"}},[s("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.UploadUrl(),data:t.form,"on-success":t.imgSuccess,"before-upload":t.beforeUploadImg,"show-file-list":!1}},[t.ruleForm.img?s("img",{staticClass:"avatar",attrs:{src:t.ruleForm.img}}):s("i",{staticClass:"el-icon-upload"}),t._v(" "),s("div",{staticClass:"el-upload__text"},[t._v("点击上传图片")])])],1),t._v(" "),s("el-form-item",{staticStyle:{width:"60%","min-width":"750px"},attrs:{label:"选项及解读",prop:"title"}},[s("div",{staticClass:"analysis"},[s("div",{staticClass:"analysisTitle"},[s("div",{staticClass:"analysisTitleLeft"},[t._v("选项")]),t._v(" "),s("div",{staticClass:"analysisTitleRight"},[t._v("解读")])]),t._v(" "),t._l(t.ruleForm.result_analyze_list,function(e,i){return s("div",{key:i,staticClass:"analysisContainer"},[s("div",{staticClass:"character"},[s("el-input",{attrs:{type:"textarea",rows:2,placeholder:"选项,如：A"},model:{value:e.id,callback:function(s){t.$set(e,"id",s)},expression:"item.id"}})],1),t._v(" "),s("div",{staticClass:"middleContainer"},[s("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入解读标题"},model:{value:e.title,callback:function(s){t.$set(e,"title",s)},expression:"item.title"}})],1),t._v(" "),s("div",{staticClass:"rightContainer"},[s("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入解读内容"},model:{value:e.desc,callback:function(s){t.$set(e,"desc",s)},expression:"item.desc"}})],1),t._v(" "),s("div",{staticStyle:{clear:"both"}}),t._v(" "),s("div",{staticClass:"deleteRow"},[s("i",{staticClass:"el-icon-delete",on:{click:function(e){t.deleteAnalysis(i)}}})])])}),t._v(" "),s("div",{staticClass:"addAnalysis"},[s("el-button",{on:{click:t.addAnalysis}},[t._v("添加选项")])],1)],2)]),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("保存")]),t._v(" "),s("el-button",{on:{click:t.onCancle}},[t._v("取消")])],1)],1)],1)])])},staticRenderFns:[]};var o=s("VU/8")(a,r,!1,function(t){s("NYsh")},null,null);e.default=o.exports},NYsh:function(t,e){}});