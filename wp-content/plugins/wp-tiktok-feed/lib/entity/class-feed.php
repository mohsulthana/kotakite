<?php
namespace QuadLayers\TTF\Entity;

use QuadLayers\WP_Orm\Entity\CollectionEntity;

class Feed extends CollectionEntity {
	public static $primaryKey  = 'id'; //phpcs:ignore
	public $id                 = 0;
	public $source             = 'account';
	public $open_id            = '';
	public $hashtag            = 'WordPress';
	public $username           = 'tiktok';
	public $create_time        = 0;
	public $layout             = 'masonry';
	public $limit              = 12;
	public $columns            = 3;
	public $hide_carousel_feed = true;
	public $lazy               = true;
	public $profile            = [
		'display'   => false,
		'username'  => '',
		'nickname'  => '',
		'biography' => '',
		'link_text' => 'Follow',
		'avatar'    => '',
	];
	public $video              = [
		'spacing' => 10,
		'radius'  => 0,
	];
	public $highlight          = [
		'id'       => '',
		'tag'      => '',
		'position' => '1, 5, 7',
	];
	public $mask               = [
		'display'        => true,
		'background'     => '#000000',
		'likes_count'    => true,
		'comments_count' => true,
	];
	public $box                = [
		'display'    => false,
		'padding'    => 1,
		'radius'     => 0,
		'background' => '#fefefe',
		'text_color' => '#000000',
	];
	public $card               = [
		'display'           => false,
		'radius'            => 0,
		'font_size'         => '12',
		'background'        => '#ffffff',
		'background_hover'  => '#ffffff',
		'text_color'        => '#000000',
		'padding'           => '5',
		'likes_count'       => true,
		'max_word_count'    => 10,
		'video_description' => true,
		'comments_count'    => true,
	];
	public $carousel           = [
		'slidespv'          => 5,
		'autoplay'          => false,
		'autoplay_interval' => 3000,
		'navarrows'         => true,
		'navdots'           => true,
		'hoverpause'        => true,
		'infinite'          => true,
		'adaptiveheight'    => false,
		'rtl'               => false,
	];
	public $modal              = [
		'display'           => true,
		'profile'           => true,
		'download'          => false,
		'video_description' => true,
		'likes_count'       => true,
		'autoplay'          => true,
		'comments_count'    => true,
		'date'              => true,
		'controls'          => true,
		'align'             => 'right',
	];
	public $button             = [
		'display'          => true,
		'text'             => 'View on TikTok',
		'text_color'       => '#ffff',
		'background'       => '',
		'background_hover' => '',
	];
	public $button_load        = [
		'display'          => false,
		'text_color'       => '#ffff',
		'text'             => 'Load more...',
		'background'       => '',
		'background_hover' => '',
		'profile'          => '',
	];
}
