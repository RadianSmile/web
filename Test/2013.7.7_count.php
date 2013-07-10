<?php session_start(); ?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>test</title>
</head>

<body>

<?php $a = $_SESSION['REMOTE_ADDR'];?>
<p><?php echo $a;?></p>

</body>
</html>
