<?php

class Model_backupuser extends CI_Model {
	var $user_name;
	var $chexing;
	var $baoshijiezhongxin;
	var $email;
	var $phone;

	function __construct() {
		parent::__construct();
	}

	function insert_entry() {
		$this->user_name = $_POST['user_name'];
		$this->chexing = $_POST['chexing'];
		$this->baoshijiezhongxin = $_POST['baoshijiezhongxin'];		
		$this->email = $_POST['email'];
		$this->phone = $_POST['phone'];

		$this->db->insert("backup_user", $this);
	}
}