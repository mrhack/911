<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<base href="<?php print base_url()?>" />
<title>jQuery validation</title>
<script src="<?php print ('misc/js/jquery.js')?>"></script>
<script src="<?php print ('misc/js/jquery-1.9.0.js')?>"></script>
<script src="<?php print ('misc/js/jquery.validate.js')?>"></script>
<script src="<?php print ('misc/js/jquery.form.js')?>"></script>
<script type="text/javascript">
	$(document).ready(function () {
		$("button[name='sharebutton']").click(function() {
			$("#shareForm").ajaxSubmit(function (data) {
				console.log(data);
			});
		});
	});
</script>
</head>
<body>
	<div class="main">
		<?php print form_open('share_form_submit', array('novalidate' => 'novalidate','id' =>"shareForm", 'class' => 'checkform'))?>
		<input type="text" name="email1" value="" />
		<input type="text" name="email2" value="" />
		<button type="button" name="sharebutton">Share</button>
		<?php print form_close()?>
	</div>




</body></html>