import React from 'react';
export  const Header = () => {
    return(
        <header>
                    <ul id="slide-out" class="side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default" data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a">
                        <li>
                            <div class="logo-wrapper waves-light waves-effect waves-light">
                                <a>
                                    <img src="http://mdbootstrap.com/img/logo/mdb-transparent.png" alt="" class="img-fluid flex-center" />
                                </a>
                            </div>
                        </li>
                        <li>
                            <ul class="social">
                                <li>
                                    <a class="icons-sm fb-ic">
                                        <i class="fa fa-facebook"> </i>
                                    </a>
                                </li>
                                <li>
                                    <a class="icons-sm pin-ic">
                                        <i class="fa fa-pinterest"> </i>
                                    </a>
                                </li>
                                <li>
                                    <a class="icons-sm gplus-ic">
                                        <i class="fa fa-google-plus"> </i>
                                    </a>
                                </li>
                                <li>
                                    <a class="icons-sm tw-ic">
                                        <i class="fa fa-twitter"> </i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <form class="search-form" role="search">
                                <div class="form-group waves-light waves-effect waves-light">
                                    <input type="text" class="form-control" placeholder="Search" />
                                </div>
                            </form>
                        </li>
                        <li>

                            <ul class="collapsible collapsible-accordion">
                                <li>
                                    <a class="collapsible-header waves-effect arrow-r">
                                        <i class="fa fa-shopping-bag"></i> Product Page
                                        <i class="fa fa-angle-down rotate-icon"></i>
                                    </a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li>
                                                <a href="product.html" class="waves-effect">Product Page V.1</a>
                                            </li>
                                            <li>
                                                <a href="product-page.html" class="waves-effect">Product Page V.2</a>
                                            </li>
                                            <li>
                                                <a href="product-page-4.html" class="waves-effect">Product Page V.3</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="active">
                                    <a class="collapsible-header waves-effect arrow-r active">
                                        <i class="fa fa-shopping-cart"></i> Cart Pages
                                        <i class="fa fa-angle-down rotate-icon"></i>
                                    </a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li>
                                                <a href="cart.html" class="waves-effect">Page with shopping cart</a>
                                            </li>
                                            <li>
                                                <a href="contact.html" class="waves-effect">Page with contact form</a>
                                            </li>
                                            <li>
                                                <a href="contact-2.html" class="waves-effect">Page with contact form V.2</a>
                                            </li>
                                            <li>
                                                <a href="login.html" class="waves-effect">Page with sign in form</a>
                                            </li>
                                            <li>
                                                <a href="terms.html" class="waves-effect">Page with 'terms of use'</a>
                                            </li>
                                            <li>
                                                <a href="faq.html" class="waves-effect">Page with 'FAQ'</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a class="collapsible-header waves-effect arrow-r">
                                        <i class="fa fa-dashboard"></i> Homepages
                                        <i class="fa fa-angle-down rotate-icon"></i>
                                    </a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li>
                                                <a href="home-page.html" class="waves-effect">Ecommerce homepage default</a>
                                            </li>
                                            <li>
                                                <a href="home-page-2.html" class="waves-effect">Ecommerce homepage full width</a>
                                            </li>
                                            <li>
                                                <a href="home-page-3-carousel.html" class="waves-effect">Ecommerce homepage V.3 Carousel</a>
                                            </li>
                                            <li>
                                                <a href="home-page-3-full-page-carousel.html" class="waves-effect">Ecommerce homepage V.3 Full Page Carousel</a>
                                            </li>
                                            <li>
                                                <a href="home-page-3-half-page-carousel.html" class="waves-effect">Ecommerce homepage V.3 Half Page Carousel</a>
                                            </li>
                                            <li>
                                                <a href="home-page-4.html" class="waves-effect">Ecommerce homepage V.4</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a class="collapsible-header waves-effect arrow-r">
                                        <i class="fa fa-desktop"></i> Post Pages
                                        <i class="fa fa-angle-down rotate-icon"></i>
                                    </a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li>
                                                <a href="post.html" class="waves-effect">Page with column on the right</a>
                                            </li>
                                            <li>
                                                <a href="blog-post-left-column.html" class="waves-effect">Page with newsletter on the left</a>
                                            </li>
                                            <li>
                                                <a href="blog-post.html" class="waves-effect">Page with newsletter on the right</a>
                                            </li>
                                            <li>
                                                <a href="blog-post-full-width.html" class="waves-effect">Full width page with logged user</a>
                                            </li>
                                            <li>
                                                <a href="blog-post-full-width%20not%20logged%20in%20user.html" class="waves-effect">Full width page with not logged user</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a class="collapsible-header waves-effect arrow-r">
                                        <i class="fa fa-diamond"></i> Category Pages
                                        <i class="fa fa-angle-down rotate-icon"></i>
                                    </a>
                                    <div class="collapsible-body">
                                        <ul>
                                            <li>
                                                <a href="category-list-left-column.html" class="waves-effect">Category list with left column</a>
                                            </li>
                                            <li>
                                                <a href="category-list-right-column.html" class="waves-effect">Category list with right column</a>
                                            </li>
                                            <li>
                                                <a href="category-grid-left-column.html" class="waves-effect">Category grid with left column</a>
                                            </li>
                                            <li>
                                                <a href="category-right-column.html" class="waves-effect">Category grid with right column</a>
                                            </li>
                                            <li>
                                                <a href="category-grid-left-column-carousel.html" class="waves-effect">Category grid with left column carousel</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                        </li>

                        <div class="sidenav-bg mask-strong"></div>

                        <div class="ps__scrollbar-x-rail">
                            <div class="ps__scrollbar-x" tabIndex="0"></div>
                        </div>
                        <div class="ps__scrollbar-y-rail">
                            <div class="ps__scrollbar-y" tabIndex="0"></div>
                        </div>
                    </ul>

                    <nav class="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">

                        <div class="float-left">
                            <a data-activates="slide-out" class="button-collapse">
                                <i class="fa fa-bars"></i>
                            </a>
                        </div>

                        <div class="breadcrumb-dn mr-auto">
                            <ol class="breadcrumb header-breadcrumb">
                                <li class="breadcrumb-item">
                                    <a>Trang Chủ</a>
                                </li>
                            </ol>
                        </div>

                        <ul class="nav navbar-nav nav-flex-icons ml-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i class="fa fa-user"></i> Tài Khoản</a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                                    <a class="dropdown-item waves-effect waves-light">Đăng Ký</a>
                                    <a class="dropdown-item waves-effect waves-light">Đăng Nhập</a>
                                    <a class="dropdown-item waves-effect waves-light">Đăng Xuất</a>
                                </div>
                            </li>
                        </ul>

                    </nav>

                </header>
    )
}