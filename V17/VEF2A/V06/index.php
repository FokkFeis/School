<?php
  include('petrol.php');
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>VEF2A | V06</title>
  </head>
  <body>

    <div class="container">
      <h1><span class ="label label-default">Gas stations</span></h1>
      <table class ="table table-striped table-responsive table-condensed">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Bensin95</th>
            <th>bensin95 Discount</th>
            <th>Diesel</th>
            <th>Diesel Discount</th>
            <th>company</th>
          </tr>
          <?php
          for ($i=0; $i < count($data['results']); $i++) {
            echo "<tr>";
              echo "<td>".$data['results'][$i]['name']."</td>";
              echo "<td>".$data['results'][$i]['bensin95']."</td>";
              echo "<td>".$data['results'][$i]['bensin95_discount']."</td>";
              echo "<td>".$data['results'][$i]['diesel']."</td>";
              echo "<td>".$data['results'][$i]['diesel_discount']."</td>";
              echo "<td>".$data['results'][$i]['company']."</td>";
              echo "</tr>";
          }
           ?>
         </tbody>
      </table>

    </div>
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  </body>
</html>
