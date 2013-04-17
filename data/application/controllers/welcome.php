<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {
	public function __construct() {
		parent::__construct();

		// Customer code for controler
		$this->load->helper(array('form', 'url'));
		$this->load->database();
		$this->load->library('session');
		$this->load->library('form_validation');
		$this->load->library("email");
	}

	public function index()
	{
		$this->load->view('welcome_message');
	}
	// Submit form
	public function backup_form() {
		$this->load->view('backup_form');
	}

	// Submit form handler
	public function backup_form_submit() {
		// before store the post data, we must validate the data
		$this->form_validation->set_rules('user_name', 'User Name', 'required');
		$this->form_validation->set_rules('baoshijiezhongxin', '保时捷中心', 'required');
		$this->form_validation->set_rules('chexing', '车型', 'required');
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
		$this->form_validation->set_rules('phone', 'Phone', 'required|callback_phone_number_check');

		$ret = array();
		if ($this->form_validation->run() !== FALSE) {
			$this->load->model('Model_backupuser');
			$backup_user = new Model_backupuser;
			$backup_user->insert_entry();
			$uuid = uniqid();
			$key = md5($uuid);
			$ret = $this->get_ret('success', array('key' => $key));
			$this->session->set_userdata('key', $key);
		}
		else {
			$ret = $this->get_ret('valid failed', -1);
		}

		$this->output->set_header('Content-Type: application/json; charset=utf-8');
		$this->output->set_output(json_encode($ret));
	}

	public function download_database() {
		$post_key = $this->input->get('key');
		$our_key = $this->session->userdata('key');
		if (!empty($our_key) && $our_key == $post_key || TRUE) {
			$output;
			$ret_code;
			$db = (object)$this->config->item('backup_database');
			exec("mysqldump -u{$db->username} -p{$db->password} {$db->database} --host={$db->hostname}", $output, $ret_code);
			if ($ret_code == 0) {
				$sql_file_path = 'temp/db.sql';
				$sql_file = fopen($sql_file_path, "w+");
				fwrite($sql_file, implode("\r\n", $output));
				fclose($sql_file);
				$zip_files = array($sql_file_path);
				$zipped_file = $this->zip_file($zip_files, 'download.zip');
				$this->send_zip_file($zipped_file);
			}
			else {
				$this->output->set_output("unknown error");
			}

			$this->session->set_userdata('key', NULL);
		}
		else {
			$this->output->set_output('permission denied');
		}
	}

	public function phone_number_check($phone) {
		return TRUE;
		$valid = (preg_match("/^(((d{3}))|(d{3}-))?((0d{2,3})|0d{2,3}-)?[1-9]d{6,8}$/", $phone)) ? true : false;
		if ($valid) {
			$this->form_validation->set_message('phone_number_check', "The %s field is not phone number");		}

		return $valid ? TRUE : FALSE;
	}

	private function get_ret($msg, $data, $code = 0) {
		return array('msg' => $msg, 'code' => $code, 'data' => array());
	}

	public function zip_file($file_paths = array(), $zip_file = 'zip.zip') {
		$to_path = 'temp/'. $zip_file;
		$zip = new ZipArchive;
		$code = $zip->open($to_path, ZipArchive::CREATE);
		foreach ($file_paths as $file) {
			if (file_exists($file) && is_readable($file)) {
				$zip->addFile($file);
			}
		}
		$code = $zip->close();
		return $to_path;
	}

	public function send_zip_file($zip_file) {
		$this->output->set_header('Content-Type: appication/zip');
		$this->output->set_header('Content-disposition: attachment;filename='.$zip_file);
		$this->output->set_header('Content-Length: '. filesize($zip_file));
		readfile($zip_file);
	}

	public function initialize_database() {
		$this->load->dbforge();

		// prepare table fields
		$fields = array(
			'id' => array(
				'type' => 'INT',
				'constraint' => '10',
				'unsigned' => TRUE,
				'auto_increment' => TRUE,
			),
			'user_name' => array(
				'type' => 'varchar',
				'constraint' => '50',
			),
			'chexing' => array(
				'type' => 'varchar',
				'constraint' => '50',
			),
			'baoshijiezhongxin' => array(
				'type' => 'varchar',
				'constraint' => '50',
			),
			'email' => array(
				'type' => 'varchar',
				'constraint' => '50',
			),
			'phone' => array(
				'type' => 'varchar',
				'constraint' => '50',
			),
		);
		$this->dbforge->add_field($fields);
		// Add key on table
		$this->dbforge->add_key('id', TRUE);
		// creating backup user table.
		if ($this->dbforge->create_table('backup_user', TRUE)) {
			echo 'Table backup_user has been created';
		}
	}

	function share_with_email() {
		$this->load->view('share');
	}

	function share_form_submit() {
		// before store the post data, we must validate the data
		$this->form_validation->set_rules('email1', 'Email', 'required|valid_email');
		$this->form_validation->set_rules('email2', 'Email', 'required|valid_email');

		$ret = array();
		if ($this->form_validation->run() !== FALSE) {
			$email1 = $_POST['email1'];
			$email2= $_POST['email2'];
			$email = array();
			array_push($email, $email1, $email2);
			foreach ($email as $e) {
				$this->email->clear();
				$this->email->from("test@test.com", "test");
				$this->email->to($e);
				$this->email->subject("share");
				$this->email->message("test");
				$this->email->send();
			}

			$ret = $this->get_ret("sent", array());
		}
		else {
			$ret = $this->get_ret('valid failed', -1);
		}

		$this->output->set_header('Content-Type: application/json; charset=utf-8');
		$this->output->set_output(json_encode($ret));
	}
}