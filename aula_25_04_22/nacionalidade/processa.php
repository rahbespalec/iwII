<?php
$pais =$_POST['pais'];
echo "Vivendo em ${pais}";
if ($pais==='BRA'){
   echo"<br>Você é Brasileiro.";
}else{
    echo"<br>Você é estrangeiro";
};
?>