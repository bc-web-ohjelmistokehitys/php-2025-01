<html>

<head>
  <title>My First PHP kotskasivu</title>
  <link rel="stylesheet" href="./index.css" />
</head>

<body>
  <h1>Heipparallaa!</h1>

  <?php
  $conn = new PDO("pgsql:host=possukka;port=5432;dbname=postgres;user=postgres;password=example");

  $query = $conn->query("SELECT * FROM person");
  $rows = $query->fetchAll(PDO::FETCH_ASSOC);
  ?>

  <?php echo "My first PHP ECHO"; ?>

  <?php // echo phpinfo(); ?>

  <p>Minä olen Peksu Pöksy, opettajista parhain!</p>

  <ul>
    <?php foreach ($rows as $row): ?>
      <li><?php echo $row['name']; ?></li>
    <?php endforeach; ?>
  </ul>

  <p>
    Tänään opetan PHP:tä, huomenna opetan kyynistymistä työelämään! Olisinpa
    vielä nuori ja reipas.
  </p>
</body>

</html>