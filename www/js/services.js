angular.module('starter.services', [])
    .config(function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })

    //新闻数据
    .factory('NewsService', function ($http, $stateParams, $rootScope) {
        $rootScope.subsiteCode = $stateParams.pid;
        return {
            getnewsList: function (callback) {
                $http.get($rootScope.url + 'act=newsList&subsiteCode=' + $rootScope.subsiteCode, {
                    cache: true
                }).success(callback);
            },
            getnewsDetail: function (callback) {
                $http.get($rootScope.url + 'act=newsContent&subsiteCode=' + $rootScope.subsiteCode + '&newsId=' + $stateParams.newsId, {
                    cache: true
                }).success(callback);
            }
        }

    })

    //添加一级品牌
    .factory('BrandService', function ($http, $rootScope, $window, $stateParams) {
        $rootScope.subsiteCode = $stateParams.pid
        return {
            addBrand: function (b) {
                //添加商品到购物车
                var data = {
                        brand_name: b.brand_name,
                        brand_type: b.brand_type
                    },
                    transFn = function (data) {
                        return $.param(data, true);
                    },
                    postCfg = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    };

                $http.post($rootScope.url + 'addBrands', data, postCfg).success(function (data) {
                    if (data.success) {
                        alert('添加成功！');
                        $window.location.reload();
                    } else {
                        alert('添加失败!');
                    }
                });
            }, addBrandType: function (b) {
                //添加商品到购物车
                var data = {
                        brand_type: b.brand_type2,
                        childname: b.childname
                    },
                    transFn = function (data) {
                        return $.param(data, true);
                    },
                    postCfg = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    };
                $http.post($rootScope.url + 'addBrandType', data, postCfg).success(function (data) {
                    if (data.success) {
                        alert('添加成功！');
                        $window.location.reload();
                    } else {
                        alert('添加失败!');
                    }
                });
            },
            getBrandsList: function (callback) {
                $http.get($rootScope.url + 'getbrandsList', {
                    cache: true
                }).success(callback);
            }
        }
    })

    //企业详情
    .factory('orderService', function ($http, $rootScope, $window, $stateParams) {
        $rootScope.subsiteCode = $stateParams.pid
        //return {
        //    getBrandsListType: function (callback) {
        //        $http.get($rootScope.url + 'brandsTypeById?brand_type=' + $stateParams.brand_type, {
        //            cache: true
        //        }).success(callback);
        //    }
        //}
    })
    //
    .factory('BrandService2', function ($http, $rootScope, $window, $stateParams) {
        $rootScope.subsiteCode = $stateParams.pid
        return {
            getBrandsListType: function (callback) {
                $http.get($rootScope.url + 'brandsTypeById?brand_type=' + $stateParams.brand_type, {
                    cache: true
                }).success(callback);
            }
        }
    })
    //获得配件列表
    .factory('PeijianService', function ($http, $rootScope, $window, $stateParams) {
        $rootScope.subsiteCode = $stateParams.pid
        return {
            getPeijianList: function (callback) {
                $http.get('js/peijian.json').success(callback);
            }
        }
    }
)
    //排量列表
    .
    factory('BrandService3', function ($http, $rootScope, $window, $stateParams) {
        return {
            getBrands3: function (callback) {
                $http.get($rootScope.url + 'brandTT?brandsid=' + $stateParams.brandsid, {
                    cache: true
                }).success(callback);
            }, addBrand3: function (b) {
                //添加商品到购物车
                var data = {
                        title: b.title,
                        brand3_type: b.brand3_type,
                        brand3_time: b.brand3_time,
                        brands3_id: $stateParams.brandsid
                    },
                    transFn = function (data) {
                        return $.param(data, true);
                    },
                    postCfg = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    };
                $http.post($rootScope.url + 'addBrandTT', data, postCfg).success(function (data) {
                    if (data.success) {
                        alert('添加成功！');
                        $window.location.reload();
                    } else {
                        alert('添加失败!');
                    }
                });
            }
        }
    })
    //产品搜索
    .factory('productSearchService', function ($http, $stateParams, $rootScope) {
        $rootScope.subsiteCode = $stateParams.pid;
        return {
            getFruitsAsync: function (callback) {
                $http.post($rootScope.url + 'act=searchProByName&subsiteCode=' + $rootScope.subsiteCode + '&productName=' + $stateParams.productName).success(callback);
            }
        };
    })

    //产品数据
    .factory('ProductService', function ($http, $stateParams, $rootScope) {
        $rootScope.subsiteCode = $stateParams.pid;

        return {
            getProducts: function (callback) {
                var page = $stateParams.page;
                var categoryId = $stateParams.categoryId;
                if (page == null) {
                    page = 1;
                } else if (categoryId == null) {
                    categoryId = 1;
                }
                $http.get($rootScope.url + '/goods?categoryId=' + categoryId + '&page=' + page, {
                    cache: true
                }).success(callback);
            }
        };
    })

    //产品category数据
    .factory('productListService', function ($http, $stateParams, $rootScope) {
        $rootScope.subsiteCode = $stateParams.pid;
        return {
            getProductTypeList: function (callback) { //+ $stateParams.currentPage
                $http.get($rootScope.url + '/category/list', {
                    cache: true
                }).success(callback);
            }
        };
    })

    //产品详情
    .factory('ProductDetailService', function ($http, $stateParams, $window, $cookieStore, $rootScope) {
        $rootScope.subsiteCode = $stateParams.pid;
        return {
            getFruitsAsync: function (callback) {
                $http.get($rootScope.url + '/goods/' + $stateParams.proId, {
                    cache: true
                }).success(callback);
            },
            addToCart: function (goodsId) {
                //添加商品到购物车
                var data = {
                        'goodsId': goodsId,
                        'userId': $cookieStore.get('id')
                    },
                    transFn = function (data) {
                        return $.param(data, true);
                    },
                    postCfg = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    };

                $http.post($rootScope.url + '/goods/add2Cart', data, postCfg).success(function (data) {
                    if (data.success) {
                        alert('添加成功！');
                        $window.location.reload();
                    } else {
                        alert('添加失败:' + data.data);
                    }
                });
            },//从购物车删除
            delToCart: function (goodsId) {
                //添加商品到购物车
                var data = {
                        'goodsId': goodsId,
                        'userId': $cookieStore.get('id')
                    },
                    transFn = function (data) {
                        return $.param(data, true);
                    },
                    postCfg = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    };
                $http.post($rootScope.url + '/goods/removeFromCart', data, postCfg).success(function (data) {
                    if (data.success) {
                        console.log('从购物移除成功！');
//                        $window.location.reload();
                    } else {
                        console.log('移除失败:' + data.data);
                    }
                });
            }
            //添加到购物车，然后下单
            , addToOrder: function (goodsId) {
                //添加商品到购物车
                var data = {
                        'goodsId': goodsId,
                        'userId': $cookieStore.get('id')
                    },
                    transFn = function (data) {
                        return $.param(data, true);
                    },
                    postCfg = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    };

                $http.post($rootScope.url + '/goods/add2Cart', data, postCfg).success(function (data) {
                    if (data.success) {
                        //添加成功后，去付款页面
                        $window.location.assign('#/201407220000400/pay');
                    } else {
                        alert('服务器异常，请检查网络！');
                    }
                });
            },
            getcartsList: function (callback) { //购物车列表
                if ($cookieStore.get('id') == null) {
                    var url = '#/' + $rootScope.subsiteCode + '/login';
                    window.location.assign(url);
                } else {
                    $http.get($rootScope.url + '/goods/cart?userId=' + $cookieStore.get('id')).success(callback);
                }
            }
        };
    })

//支付
    .factory('PayService', function ($http, $stateParams, $cookieStore, $state, $rootScope) {
        $rootScope.subsiteCode = $stateParams.pid;
        return {
            setOrder: function (o) {
                console.log('orderInfo==' + angular.toJson(o));
                var orderInfo = o,
                    transFn = function (orderInfo) {
                        return $.param(orderInfo);
                    },
                    postCfg = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    };
                $http.post($rootScope.url + 'setOrder', orderInfo, postCfg).success(function (data) {
                    //付款成功
                    if (data.success) {
                        $state.go('pay-ok');
                    } else {
                        console.log('order faild!' + data.data);
                    }

                });
            }
        };
    })

//相册
    .factory('PhotoAlbumService', function ($http, $stateParams, $rootScope) {
        $rootScope.subsiteCode = $stateParams.pid;
        return {
            getPhotoAlbum: function (callback) {
                $http.get($rootScope.url + 'act=showImgList&subsiteCode=' + $rootScope.subsiteCode, {
                    cache: true
                }).success(callback);
            },
            getPhotoList: function (callback) {
                $http.get($rootScope.url + 'act=getImgListBySId&subsiteCode=' + $rootScope.subsiteCode + '&showImgId=' + $stateParams.albumId, {
                    cache: true
                }).success(callback);
            }
        };
    })

//根据用户名查询用户信息
    .factory('UsersService', function ($http, $stateParams, $cookieStore, $window, $location, $rootScope) {
        $rootScope.subsiteCode = $stateParams.pid;
        return {

            getUserInfo: function (callback) {
                if ($cookieStore.get('id') == null) {
                    var url = '#/' + $rootScope.subsiteCode + '/login';
                    window.location.assign(url);
                } else {
                    $http.get($rootScope.url + '/user/getInfo?id=' + $cookieStore.get('id'), {
                        cache: true
                    }).success(callback);
                }
            },
            //得到会员收货地址
            getUserAddressList: function (callback) {
                $http.get($rootScope.url + '/user/getAddresses?id=' + $cookieStore.get('id')).success(callback);
            },
            //得到会员余额
            getUserAccount: function (callback) {
                $http.get($rootScope.url + '/user/account?id=' + $cookieStore.get('id')).success(callback);
            },
            //完善个人信息
            setUserDetailInfo: function (users) {
                var udata = {
                        userId: users.userId,
                        email: users.email,
                        phone: users.phone,
                        qq: users.qq
                    },
                    transFn = function (udata) {
                        return $.param(udata);
                    },
                    postCfg = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    };
                $http.post($rootScope.url + 'act=updateUser&subsiteCode=' + $rootScope.subsiteCode, udata, postCfg).success(function (data) {
                    if (data.succeed == "000") {
                        $window.history.back();
                    }
                });
            },
            //添加用户收货地址
            addAddress: function (address) {
                var data = {
                        province: address.province,
                        city: address.city,
                        district: address.district,
                        street: address.street,
                        username: address.username,
                        phone: address.phone,
                        "user.id": $cookieStore.get('id'),
                        default: true
                    },
                    transFn = function (data) {
                        return $.param(data);
                    },
                    postCfg = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    };
                $http.post($rootScope.url + '/user/addAddress', data, postCfg).success(function (data) {
                    if (data.success) {
                        //保存默认地址
                        $cookieStore.put('addressYoo', data.data);
                        $window.history.back();
                    }
                });

            },
            //删除地址
            delAddress: function (userAddId) {
                $http.get($rootScope.url + 'act=userAddressDelete&subsiteCode=' + $rootScope.subsiteCode + '&userAddId=' + userAddId).success(function (data) {
                    if (data.succeed == "000") {
                        $window.location.reload();
                    }
                });
            }

        };
    })

//用户订单
    .factory('UserOrderService', function ($http, $stateParams, $cookieStore, $rootScope) {
        $rootScope.subsiteCode = $stateParams.pid;
        currentPage = 0;
        return {
            getOrderList: function (callback) {
                $http.get($rootScope.url + 'orderList').success(callback);
            }
        };
    })

//用户会员卡
    .factory('UserCardService', function ($http, $stateParams, $rootScope) {
        $rootScope.subsiteCode = $stateParams.pid;
        return {
            getCardInfo: function (callback) {
                $http.get($rootScope.url + 'act=myUserCardView&subsiteCode=' + $rootScope.subsiteCode, {
                    cache: true
                }).success(callback);
            },
            //完善用户信息
            updateUserInfo: function (users) {
                $http.get($rootScope.url + 'act=updateUser&subsiteCode=' + $rootScope.subsiteCode + '&userId=' + users.userId).success(callback);
            }
        };
    })

//用户登陆
    .factory('LoginService', function ($http, $cookieStore, $stateParams, $window, $rootScope) {
        $rootScope.subsiteCode = $stateParams.pid;
        return {
            //注册
            sign: function (sign) {
                var data = {
                        'username': sign.username,
                        'email': sign.email,
                        'phone': sign.phone,
                        'password': sign.password,
                        'rePassword': sign.rePassword
                    },
                    transFn = function (data) {
                        return $.param(data, true);
                    },
                    postCfg = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        transformRequest: transFn
                    };

                $http.post($rootScope.url + '/user/register', data, postCfg).success(function (data) {
                    if (data.success) {
                        $cookieStore.put('id', data.data);
                        $window.location.assign('#/201407220000400/user?id=' + data.data);
                    } else {
                        alert('注册失败:' + data.data);
                    }
                });
            },
            //登陆
            login: function (user) {
                console.log('login user===' + user);
                $http.get($rootScope.url + '/user/login?emailOrPhone=' + user.emailOrPhone + '&password=' + user.password).success(function (data) {
                    if (data.success) {
                        $cookieStore.put('id', data.data);
                        $window.location.assign('#/201407220000400/user?id=' + data.data);
                    } else {
                        alert('登陆失败:' + data.data);
                    }
                });
            }
        }
    })

//签到
    .factory('SignInService', function ($http, $stateParams, $rootScope) {
        $rootScope.subsiteCode = $stateParams.pid;
        return {
            signIn: function (callback) {
                $http.get($rootScope.url + 'act=signIn&subsiteCode=' + $rootScope.subsiteCode).success(callback);
            },
            signInList: function (callback) {
                $http.get($rootScope.url + 'act=getSignInList&subsiteCode=' + $rootScope.subsiteCode).success(callback);
            }
        }
    });
