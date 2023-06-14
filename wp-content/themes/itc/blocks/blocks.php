<?php
function register_acf_block_types() {
    if (function_exists('acf_register_block_type')) {
        acf_register_block_type(array(
            'name' => 'leadership-block',
            'title' => __('Leadership Block'),
            'description' => __('Carousel Leaderships'),
            'render_template' => get_template_directory() . '/blocks/leadership/leardership-block.php',
            'category' => 'formatting',
            'icon' => 'buddicons-buddypress-logo',
            'keywords' => array('leadership'),
        ));
    }
}
add_action('acf/init', 'register_acf_block_types');