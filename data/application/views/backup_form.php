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

<script>
$.validator.setDefaults({
	submitHandler: function() { alert("submitted!"); }
});

$().ready(function() {
  
  jQuery.validator.addMethod("isMobile", function(value, element) {
  var length = value.length;
  var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;
  return this.optional(element) || (length == 11 && mobile.test(value));
 }, "请正确填写您的手机号码");
	
	
	$("#signupForm").validate({
		rules: {
			user_name: "required",
			chexing: "required",
			baoshijiezhongxin: "required",
			phone: {
				required: true,
				isMobile : true
			},
			email: {
				required: true,
				email: true
			},
			agree: "required"
		},
		messages: {
			user_name: "请输入称呼",
			chexing: "请选择感兴趣的车型",
			baoshijiezhongxin: "请选择感兴趣的保时捷中心",
			phone: {
				required: "请输入手机号码",
				isMobile : "请输入正确的手机号码"
			},
			email: "请输入邮箱",
			agree: "请确认保密政策"
		},
		submitHandler: function (form) {
			$(form).ajaxSubmit(function () {
				alert("Register success");
			});
			return false;
		}
	});

	// propose username by combining first- and lastname
	$("#username").focus(function() {
		var firstname = $("#user_name").val();
		var lastname = $("#last_name").val();
		if(firstname && lastname && !this.value) {
			this.value = firstname + "." + lastname;
		}
	});


});
</script>

<style type="text/css">
#signupForm { width: 850px; }
#signupForm label.error {
	margin-left: 2px;
	width: auto;
	display: inline;
}
#newsletter_topics label.error {
	display: none;
	margin-left: 103px;
}

.main{ width:850px; margin:0 auto; padding-left:50px; font-size:12px; line-height:18px;}

.checkform_l{ width:580px; padding:0 60px 0 0; float:left;}

.des1{color:#231f1e;}
.des2{ color:#ec5f58; padding:10px 0 40px 0;}

.chenghu{ width:270px; float:left; padding:0 40px 0 0;}
.chenghu select{width:270px;}

.zhiye{ width:270px; float:left;}
.zhiye select{width:270px;}

.firstname input,
.lastname input,
.email input,
.phone input{ width:264px; border:1px solid #5d5d5d; margin:0; padding:0 2px; height:17px; line-height:17px;}

.firstname{ width:270px; padding:10px 310px 0 0; float:left;}

.lastname{ width:270px; padding:10px 310px 0 0; float:left;}

.email{ width:270px; float:left; padding:10px 40px 0 0;}

.phone{ width:270px; float:left; padding:10px 0 0 0;}

.agree{ width:152px; margin:18px 0 0 0; height:185px; float:left; position:relative;}
.agree input{ width:10px; height:10px; border:1px solid #ccc; margin-right:130px;}
#agreelabel{ position:absolute; left:20px;}
.agree a{ color:#231f1e; text-decoration:underline;}

.submit{ width:88px; height:26px; background:url(misc/buttom.jpg); text-indent:-10000px; overflow:hidden; margin:0 0 0 640px;; padding:0; border:none;} 

</style>

</head>
<body>
	<div class="main">
		<div class="des1">远方，对于追逐者来说，并不遥远；旅程，对于逍遥者来说，近在咫尺。</div>
		<div class="des2">即刻填写您的详细资料：</div>
		<?php print form_open('backup_form_submit', array('novalidate' => 'novalidate','id' =>"signupForm", 'class' => 'checkform'))?>

			<div class="checkform_l">

				<div class="chenghu">
					<label for="chenghu">姓名*</label>
					<input type="text" id="chenghu" validate="required:true" title="Please select something!" name="user_name" />
				</div>

				<div class="phone">
					<label for="phone">电话*</label>
					<input id="phone" name="phone" type="text" class="error">
				</div>

				<div class="email">
					<label for="email">电子邮件*</label>
					<input id="email" name="email" type="email" class="error">
				</div>

				<div class="chexing">
					<label for="chexing">感兴趣的车型*</label>
					<select id="chexing" validate="required:true" title="Please select something!" name="chexing">
						<option value="">---</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
				</div>

				<div class="baoshijiezhongxin">
					<label for="baoshijiezhongxin">感兴趣的保时捷中心*</label>
					<select id="baoshijiezhongxin" name="baoshijiezhongxin" type="text" class="error">
						<option value="">---</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
				</div>
        

        
         



			</div>




			<div class="agree">
				<label id="agreelabel" for="agree">我阅读过保密政策*</label>
				<input id="agree" class="checkbox error" type="checkbox" name="agree"> 
				<div><a href="#">保密政策</a></div> 

			</div>
  
			<input class="submit" type="submit" value="Submit">
                
		</form>

	</div>




</body></html>