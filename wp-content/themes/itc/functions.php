<?php
define('THEME_URL', get_template_directory_uri());
define('SITE_NAME', get_bloginfo('name'));

$blocks_file = get_template_directory() . '/blocks/blocks.php';

if (file_exists($blocks_file)) {
    require_once $blocks_file;
}

function load_custom_css()
{
    $theme = wp_get_theme();
    $version = $theme->get('Version');

    wp_enqueue_style('custom-style', get_stylesheet_directory_uri() . '/dist/css/main.css', array(), $version, 'all');
    wp_enqueue_script( 'main-js', get_template_directory_uri() . '/dist/js/bundle.js', array('jquery'), $version, true );
}
add_action('wp_enqueue_scripts', 'load_custom_css');


function register_custom_menu() {
    register_nav_menus( array(
        'primary_menu' => 'Primary Menu',
        'secondary_menu' => 'Secondary Menu',
    ) );
}
add_action( 'after_setup_theme', 'register_custom_menu' );


function register_favicon() {
    $favicon_url = THEME_URL . '/dist/images/favicon.png';
    echo '<link rel="icon" href="' . $favicon_url . '" type="image/x-icon">';
    echo '<link rel="shortcut icon" href="' . $favicon_url . '" type="image/x-icon">';
}
add_action('wp_head', 'register_favicon');
