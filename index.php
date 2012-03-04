<!DOCTYPE html>
<html>
<head>
<title></title>
<link rel="stylesheet" href="css/reset.css" type="text/css" />
<link rel="stylesheet" href="css/main.css" type="text/css" />
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</head>
<body>
	
<div id="container">
	<div id="wrapper">
		<?php

		$content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue augue, tincidunt eu luctus vitae, cursus quis justo. Suspendisse potenti. Curabitur varius enim tincidunt magna rutrum iaculis. Donec convallis porta dolor, eu ullamcorper nunc convallis sit amet. Curabitur bibendum varius massa, non euismod ante tincidunt et. Aliquam id dui in massa laoreet aliquet ac nec diam. Aenean venenatis blandit facilisis. Donec malesuada, elit sit amet condimentum aliquam, lectus purus tempor felis, eu lacinia tellus ante eget nunc. Vestibulum vitae odio felis. Sed eget odio nulla. Quisque malesuada, tortor sit amet accumsan congue, erat nibh sollicitudin mauris, quis cursus diam tellus eget mi. Curabitur mollis accumsan congue. Duis iaculis velit vehicula nibh ornare faucibus. Morbi libero felis, rutrum at suscipit quis, pulvinar quis turpis. Vestibulum ac lectus egestas felis sagittis fringilla. Duis vitae tellus in mauris iaculis rutrum.';

		for ($i = 1; $i <= 20; $i++) {
			echo '<div class="pin" id="pin_'.$i.'">'.substr($content, 0, rand(10, 1000)).'</div>';
		}
	
		?>

		<div style="clear: both"></div>
	</div>
</div>

</body>
</html> 