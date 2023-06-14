<?php if (have_rows('leader_ships')): ?>
    <div class="owl-carousel owl-theme leaderships">
        <?php
        while (have_rows('leader_ships')):
            the_row();
            $image_id = get_sub_field('image');
            $image = wp_get_attachment_image($image_id, 'full');
            $name = get_sub_field('name');
            $position = get_sub_field('position');
            $description = get_sub_field('description');
            ?>
            <div class="item leaderships__item">
                <div class="leaderships__item__thumb">
                    <?php echo $image; ?>
                </div>
                <div class="leaderships__item__content">
                    <p class="h1 leaderships__item__content--tit">
                        <?php echo $name ?>
                    </p>
                    <p class="h3 leaderships__item__content--position">
                        <?php echo $position ?>
                    </p>
                    <p class="leaderships__item__content--des">
                        <?php echo $description ?>
                    </p>
                    <?php
                    if (have_rows('slogans')):
                        while (have_rows('slogans')):
                            the_row();
                            $slogan = get_sub_field('slogan');
                            ?>
                            <p class="leaderships__item--slogan">
                                <em>
                                    <?php echo $slogan ?>
                                </em>
                            </p>
                            <?php
                        endwhile;
                    endif; ?>
                </div>
            </div>
            <?php
        endwhile;
        ?>
    </div>
<?php endif; ?>