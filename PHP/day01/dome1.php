<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>全部人员信息表</title>
</head>

<body>
  <h1>全部人员信息表</h1>

  <table>
    <thead>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>邮箱</th>
        <th>网址</th>
      </tr>
      </thead>
    <tbody>
    <?php foreach ($data as $line): ?> 
      <tr>
        <?php foreach ($line as $col): ?>
          <!-- $clo =>'http://XEP.VC' -->
          <?php $col=trim($col); ?>
          <!-- 判断这里的数据是不是一个网址，看看是不是http://开头的 -->
          <?php if (strpos($col, 'http://') === 0): ?>
            <td><a href="<?php echo strtolower($col); ?>"><?php echo substr($col, 7); ?></a></td>
            <?php else: ?>
              <td><?php echo $col; ?></td>
              <?php endif ?>
        <?php endforeach ?>
      </tr>
      <?php endforeach ?>
    </tbody>


  
  </table>


</body>

</html>