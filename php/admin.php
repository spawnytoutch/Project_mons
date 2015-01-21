

<!doctype html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <title>Il était une fois ... Mons ___ Contact</title>
    <link rel="stylesheet" href="../../assets/css/main.css" />
    <link rel="stylesheet" href="../../assets/css/tools/_font-awesome.min.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
</head>

<body id="body-admin" class="overflow-on">
        <h1 class="titre-admin">Admin</h1>
        <div class="zone-admin">
            <div class="info-admin">
                <div class="info-label" >
                    <p class="info-requise">Nom</p>
                    <p class="info-requise">Prénom</p>
                    <p class="info-requise">Adresse e-mail</p>
                    <p class="info-requise">Choix du bâtiment</p>
                    <p class="info-requise">Date de la photo</p>
                    <p class="info-requise">Votre photo</p>
                    <p class="info-requise">Commentaire</p>
                </div>
                <div class="info-edit" id="infos1"></div>
                <div class="photo-admin" id="infos2"></div>
        </div>
        <div class="boutton-admin">

            <button>Éditer</button>
            <form method="post" action="<?php echo site_url(); ?>/admin/valider">
                <button type="submit">Valider</button>
            </form>

        </div>
        <script type="text/javascript" src="../../assets/js/libs/jquery.js"></script>
        <script type="text/javascript" src="../../assets/js/app.js"></script>

</body>
<script>




    function affichage(datas){
        var affichage = '<p class="info-recue">'+datas[0]['lastname']+'</p>';
        affichage += '<p class="info-recue">'+datas[0]['firstname']+'</p>';
        affichage += '<p class="info-recue">'+datas[0]['email']+'</p>';
        affichage += '<p class="info-recue">'+datas[0]['nom']+'</p>';
        affichage += '<p class="info-recue">'+datas[0]['date2']+'</p>';
        affichage += '<p class="info-recue">'+datas[0]['image']+'</p>';
        affichage+='</div>';
        affichage += '<p class="info-commentaire">'+datas[0]['comment']+'</p>';
        affichage+='</div>';
        $("#infos1").append(affichage);
        affichage = '<img src=' +datas[0]['image']+ ' alt='+datas[0]['alt']+  '/>';
        $("#infos2").append(affichage);
    }

    $(document).ready(function(){
        $.ajax({
            url : 'http://spawny.battlehammers.com/index.php/admin/getDatas',
            type : 'post',
            dataType : 'json',
            success : function(datas){
                console.log(datas);
                affichage(datas);
            }
        });
    });



</script>

</html>