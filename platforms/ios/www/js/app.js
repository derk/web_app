// Ionic Starter App

angular.module('starter', ['ionic', 'LocalStorageModule', 'starter.services', 'starter.controllers', 'ngCookies'])

.run(function($rootScope) {
    $rootScope.subsiteCode = "";
    $rootScope.url = "http://58.30.241.14/webapp/mobile.do?";
    $rootScope.user = {
        userId: '001',
        nickname: 'user',
        sex: '1',
        icon: '',
        city: '北京'
    };
    $rootScope.timeout = 800;
})


.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
    //开始页面，初始化
        .state('start', {
        url: '/201407220000400',
        template: '<div></div>',
        controller: 'InitCtrl'
    })

    // 新闻列表
    .state('news', {
        url: '/:pid/news',
        templateUrl: 'templates/news-index.html',
        controller: 'NewsCtrl'
    })


    // 新闻详情
    .state('news-detail', {
        url: '/:pid/news/:newsId',
        templateUrl: 'templates/news-detail.html',
        controller: 'NewsDetailCtrl'
    })

    //招聘
    .state('personnel-recruitment', {
        url: '/:pid/personnel-recruitment',
        templateUrl: 'templates/personnel-recruitment.html',
        controller: 'PersonnelRecruitmentCtrl'
    })


    //发送留言
    .state('send-message', {
        url: '/:pid/send-message',
        templateUrl: 'templates/send-message.html',
        controller: 'SendMessageCtrl'
    })

    //企业列表
    .state('company-list', {
        url: '/:pid/company-list',
        templateUrl: 'templates/company-list.html',
        controller: 'CompanyListCtrl'
    })

    //企业详情
    .state('company-details', {
            resolve: {
                loadJs: function() {
                    var oldDocumentWrite = document.write;
                    document.write = function(node) {
                        $("body").append(node);
                    }

                    // get script
                    $.getScript("http://api.map.baidu.com/api?v=1.5&ak=89638fb582dece35cc3955c0f580abca", function() {
                        setTimeout(function() {
                            document.write = oldDocumentWrite;
                        }, 100);
                    });
                }
            },
            url: '/:pid/company-details',
            templateUrl: 'templates/company-details.html',
            controller: 'CompanyDetailsCtrl'
        })
        //分类
        .state('classify', {
            url: '/:pid/classify',
            templateUrl: 'templates/classify.html',
            controller: 'ClassCtrl'
        })
        //产品列表首页
        .state('products', {
            url: '/:pid/products',
            templateUrl: 'templates/products.html',
            controller: 'ProductCtrl'
        })
        //产品列表（根据分类）
        .state('product-list', {
            url: '/:pid/product-list/:proTypeMaxId',
            templateUrl: 'templates/product-list.html',
            controller: 'productListCtrl'
        })
        //产品搜索结果
        .state('product-search', {
            url: '/:pid/product-search/:productName',
            templateUrl: 'templates/product-search.html',
            controller: 'productSearchCtrl'
        })
        //产品详情
        .state('product-detail', {
            url: '/:pid/product-detail/:proId',
            templateUrl: 'templates/product-detail.html',
            controller: 'ProductDetailCtrl'
        })
        //下订单
        .state('pay', {
            url: '/:pid/pay',
            templateUrl: 'templates/pay.html',
            controller: 'PayCtrl'
        })
        //去付款
        .state('pay-ok', {
            url: '/:pid/pay-ok?orderNum&totalMoney&linkMan&productName',
            templateUrl: 'templates/pay-ok.html',
            controller: 'PayOKCtrl'
        })
        //首页风格4
        .state('home-4', {
            url: '/:pid/home-4',
            templateUrl: 'templates/home-4.html',
            controller: 'HomeCtrl'
        })
        //首页风格5
        .state('home-5', {
            url: '/:pid/home-5',
            templateUrl: 'templates/home-5.html',
            controller: 'HomeCtrl'
        })
        //首页风格6
        .state('home-6', {
            url: '/:pid/home-6',
            templateUrl: 'templates/home-6.html',
            controller: 'HomeCtrl'
        })
        //首页风格7
        .state('home-7', {
            url: '/:pid/home-7',
            templateUrl: 'templates/home-7.html',
            controller: 'HomeCtrl'
        })
        //首页风格8
        .state('home-8', {
            url: '/:pid/home-8',
            templateUrl: 'templates/home-8.html',
            controller: 'HomeCtrl'
        })
        //首页风格9
        .state('home-9', {
            url: '/:pid/home-9',
            templateUrl: 'templates/home-9.html',
            controller: 'HomeCtrl'
        })
        //首页风格10
        .state('home-10', {
            url: '/:pid/home-10',
            templateUrl: 'templates/home-10.html',
            controller: 'HomeCtrl'
        })
        //首页风格11
        .state('home-11', {
            url: '/:pid/home-11',
            templateUrl: 'templates/home-11.html',
            controller: 'HomeCtrl'
        })
        //首页风格12
        .state('home-12', {
            url: '/:pid/home-12',
            templateUrl: 'templates/home-12.html'
        })
        //首页风格13
        .state('home-13', {
            url: '/:pid/home-13',
            templateUrl: 'templates/home-13.html',
            controller: 'HomeCtrl'
        })
        //首页风格16
        .state('home-16', {
            url: '/:pid/home-16',
            templateUrl: 'templates/home-16.html',
            controller: 'HomeCtrl'
        })
        //首页风格18
        .state('home-18', {
            url: '/:pid/home-18',
            templateUrl: 'templates/home-18.html',
            controller: 'HomeCtrl'
        })
        //首页风格19
        .state('home-19', {
            url: '/:pid/home-19',
            templateUrl: 'templates/home-19.html',
            controller: 'HomeCtrl'
        })
        //首页风格21
        .state('home-21', {
            url: '/:pid/home-21',
            templateUrl: 'templates/home-21.html',
            controller: 'HomeCtrl'
        })
        //首页风格22
        .state('home-22', {
            url: '/:pid/home-22',
            templateUrl: 'templates/home-22.html',
            controller: 'HomeCtrl'
        })
        //首页风格23
        .state('home-23', {
            url: '/:pid/home-23',
            templateUrl: 'templates/home-23.html',
            controller: 'HomeCtrl'
        })
        //首页风格25
        .state('home-25', {
            url: '/:pid/home-25',
            templateUrl: 'templates/home-25.html',
            controller: 'HomeCtrl'
        })
        //首页风格27
        .state('home-27', {
            url: '/:pid/home-27',
            templateUrl: 'templates/home-27.html',
            controller: 'HomeCtrl'
        })
        //首页风格28
        .state('home-28', {
            url: '/:pid/home-28',
            templateUrl: 'templates/home-28.html',
            controller: 'HomeCtrl'
        })
        //首页风格29
        .state('home-29', {
            url: '/:pid/home-29',
            templateUrl: 'templates/home-29.html',
            controller: 'HomeCtrl'
        })
        //个人中心
        .state('user', {
            url: '/:pid/user',
            templateUrl: 'templates/user.html',
            controller: 'UserCtrl'
        })
        //在线预约
        .state('order', {
            url: '/:pid/order',
            templateUrl: 'templates/order.html',
            controller: 'orderCtrl'
        })
        //修改密码
        .state('user-change-pwd', {
            url: '/:pid/user-change-pwd',
            templateUrl: 'templates/user-change-pwd.html'
                // controller: 'NewsCtrl-grids'
        })
        //个人中心--个人信息修改
        .state('user-detail', {
            url: '/:pid/user-detail',
            templateUrl: 'templates/user-detail.html',
            controller: 'UserDetailEdit'
        })
        //个人中心--用户地址列表
        .state('user-address', {
            url: '/:pid/user-address',
            templateUrl: 'templates/user-address.html',
            controller: 'user-addressCtrl'
        })
        //个人中心--用户地址--增加
        .state('user-addressAdd', {
            url: '/:pid/user-addressAdd',
            templateUrl: 'templates/user-addressAdd.html',
            controller: 'user-addressCtrl'
        })
        //个人中心--订单
        .state('user-order', {
            url: '/:pid/user-order/:userId',
            templateUrl: 'templates/user-order.html',
            controller: 'UserCtrlOrder'
        })
        //关于我们
        .state('about-us', {
            url: '/:pid/about-us',
            templateUrl: 'templates/about-us.html',
            controller: 'AboutUsCtrl'
        })
        //二维码
        .state('qr-code', {
            url: '/:pid/qr-code',
            templateUrl: 'templates/register.html',
            controller: 'QRCodeCtrl'
        })
        //相册
        .state('photoAlbum', {
            url: '/:pid/photoAlbum',
            templateUrl: 'templates/photo-album.html',
            controller: 'PhotoAlbumCtrl'
        })
        //相册列表
        .state('photoList', {
            url: '/:pid/photoAlbum/:albumId',
            templateUrl: 'templates/photo-picture-list.html',
            controller: 'PhotoListCtrl'
        })
        //团购
        .state('customers', {
            url: '/:pid/customers',
            templateUrl: 'templates/customers.html',
            controller: 'CustomersCtrl'
        })
        //团购详情
        .state('customers-details', {
            url: '/:pid/customers-details/:groupId',
            templateUrl: 'templates/customers-details.html',
            controller: 'CustomersDetailsCtrl'
        })
        //优惠信息
        .state('special-offers', {
            url: '/:pid/specialOffers',
            templateUrl: 'templates/special-offers.html',
            controller: 'SpecialOffersCtrl'
        })
        //会员卡
        .state('user-card', {
            url: '/:pid/user-card',
            templateUrl: 'templates/user-card.html',
            controller: 'UserCardCtrl'
        })
        //会员签到
        .state('user-signIn', {
            url: '/:pid/signIn',
            templateUrl: 'templates/user-signin.html',
            controller: 'UserSignInCtrl'
        })
        //投票
        .state('vote', {
            url: '/:pid/vote',
            templateUrl: 'templates/vote.html',
            controller: 'VoteCtrl'
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
    //    $locationProvider.html5Mode(true);

});
