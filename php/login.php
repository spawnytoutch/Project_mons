<?php
/**
 * Created by PhpStorm.
 * User: Lwaxana
 * Date: 19/01/2015
 * Time: 10:11
 */
?>

<form name="login" action="<?php echo site_url(); ?>/identification" method="post">
<label> USERNAME : </label><input type="text" name="username"/><br/>
<label> PASSWORD : </label><input type="password" name="password"/><br/>
<input type="submit" value="Envoyer">
</form>