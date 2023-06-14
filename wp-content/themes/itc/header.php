<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php wp_title('|', true, 'right'); ?>
        <?php bloginfo('name'); ?>
    </title>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <header class="header">
        <div class="headerWrap">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="header__logo">
                <figure>
                    <img src="<?php echo THEME_URL ?>/dist/images/logo.webp" alt="<?php echo SITE_NAME ?>"
                        title="<?php echo SITE_NAME ?>" height="100" width="100" />
                </figure>
            </a>
            <div class="header__menuWrap">
                <?php wp_nav_menu(
                    array(
                        'theme_location' => 'primary_menu',
                        'container' => 'nav',
                        'container_class' => 'header__menu',
                    )
                ); ?>
            </div>
            <span class="header__hamb">
                <span></span>
            </span>
        </div>
    </header>
    <main>