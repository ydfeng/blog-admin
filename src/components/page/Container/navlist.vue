<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-tickets"></i>导航管理
                </el-breadcrumb-item>
                <el-breadcrumb-item>导航列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <router-link :to="{ path: '/editnav' }" style="color:#fff">
                    <el-button type="primary" icon="delete" size="small" class="handle-del mr10">发布导航内容</el-button>
                </router-link>
            </div>
            <el-table :data="tableData" border style="width: 100%" ref="multipleTable" :empty-text="emptytext">
                <el-table-column prop="title" label="导航名称" width="100"></el-table-column>
                <el-table-column prop="types" label="导航类型" width="100"></el-table-column>
                <el-table-column prop="homeurl" label="导航网站地址" width="200"></el-table-column>
                <el-table-column prop="githuburl" label="导航github地址" width="200"></el-table-column>
                <el-table-column label="状态" width="150">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="0" active-text="上线"
                            inactive-text="下线" @change="changeStatus(scope.row)"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column prop="cdate" label="发布时间" width="150"></el-table-column>
                <el-table-column label="操作" min-width="110">
                    <template slot-scope="scope">
                        <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next,jumper,total"
                    :total="total_items"></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: "",
                tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: "",
                select_word: "",
                del_list: [],
                is_search: false,
                editVisible: false,
                delVisible: false,
                token: JSON.parse(sessionStorage.getItem("token")),
                page: "",
                limit: "",
                total: "",
                pageInfo: {
                    first: 0,
                    before: 0,
                    current: 0,
                    last: 0,
                    next: 0,
                    total_pages: 0
                },
                is_off: "1",
                source_type: "",
                tag: "",
                title: "",
                ConstellationData: [],
                emptytext: "暂无数据",
                base: "",
                page:1,
                limit:10,
                total_items:0

            };
        },
        created() {
            this.getData();
        },
        watch: {
            $route(to, from) {
                //监听路由是否变化
                this.getData();
            }
        },
        methods: {
            changeStatus(row) {
                var data = {
                    token: this.token,
                    id: row.id
                };
                data.status = row.status == "0" ? "0" : "1";
                var _this = this;
                this.$axios.post(`${this.baseURL}/navs/changestatus`, data).then(res => {
                    var resData = res.data.data;
                    if (res.data.code == 0) {
                        _this.$message.success("状态修改成功！");
                    } else {
                        this.$message.error("状态修改失败！" + resData.msg);
                    }
                    _this.getData({});
                });
            },
            handleCurrentChange(val){
                this.page=val;
                this.getData();
            },
            getData() {
                let data = {
                    page: this.page,
                    limit: this.limit
                };
                this.$axios.post(`${this.baseURL}/navs/allList/admin`, data).then(res => {
                    if (res.data.code == 0) {
                        this.tableData = res.data.data.data;
                        this.total_items=res.data.data.total_items;
                    } else {
                        this.tableData = [];
                        this.total_items=0;
                    }
                });
            },
            search() {
                this.getData();
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleDelete(row) {
                var _this = this;
                this.$confirm("此操作将删除该导航, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    })
                    .then(() => {
                        var data = {
                            token: _this.token,
                            id: row.id
                        };
                        this.$axios.post(`${this.baseURL}/navs/delete`, data).then(res => {
                            if (res.data.code == 0) {
                                _this.$message.success("删除成功！");
                                _this.getData();
                            } else {
                                _this.$message.error("删除失败！" + res.data.msg);
                            }
                        });
                    })
                    .catch(() => {
                        this.$message({
                            type: "info",
                            message: "已取消删除"
                        });
                    });
            },
            handleEdit(row) {
                this.$router.push({
                    path: `editnav`,
                    query: {
                        id: row.id,
                    }
                });
            }
        }
    };

</script>

<style>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }

    .del-dialog-cnt {
        font-size: 16px;
        text-align: center;
    }

    .card-image {
        width: 150px;
        height: 100px;
    }

    .card-title {
        width: 150px;
        height: 48px;
        position: absolute;
        top: 10px;
        left: 160px;
        font-size: 14px;
        font-weight: bold;
        overflow: hidden;
    }

    .card-reading-num-left {
        width: 80px;
        height: 25px;
        position: absolute;
        top: 70px;
        left: 160px;
        font-size: 10px;
        text-align: left;
        color: #c0c4cc;
        overflow: hidden;
    }

    .card-reading-num-right {
        width: 70px;
        height: 25px;
        position: absolute;
        top: 70px;
        left: 240px;
        font-size: 10px;
        text-align: left;
        color: #c0c4cc;
        overflow: hidden;
    }

    .card-time {
        width: 150px;
        height: 25px;
        position: absolute;
        bottom: 5px;
        left: 160px;
        font-size: 10px;
        color: #c0c4cc;
        overflow: hidden;
    }

    /* 修改开关默认样式 */

    .el-switch__core {
        height: 22px !important;
        line-height: 22px !important;
        width: 50px !important;
    }

    .el-switch__label--left {
        position: relative;
        left: 55px;
        color: #fff;
        z-index: -1111;
    }

    .el-switch__label--right {
        position: relative;
        right: 55px;
        color: #fff;
        z-index: -1111;
    }

    .el-switch__label--right.is-active {
        z-index: 1111;
        color: #fff !important;
    }

    .el-switch__label--left.is-active {
        z-index: 1111;
        color: #fff !important;
    }

    .el-switch__core:after {
        top: 2px;
    }

    .el-switch__label * {
        color: #fff;
        font-size: 12px;
    }

    .handle-input1 {
        width: 300px !important;
        display: inline-block;
    }

</style>
