$(function($) {
  var $btnDelete = $("#btn_delete");
  // 在表格的任意一个 checkbox 选中状态时变化
  var $tbodyCheckboxs = $("tbody input");
  var $theadCheckbox = $("thead input");
  var allCheckeds = [];
  $tbodyCheckboxs.on("change", function() {
    // 获取当前tbody中复选框的选中个数
    var $tbodyCheckboxsLength = $("tbody input:checkbox:checked").length;
    var id = $(this).data("id");
    if ($(this).prop("checked")) {
      allCheckeds.push(id);
    } else {
      allCheckeds.splice(allCheckeds.indexOf(id), 1);
    }
    allCheckeds.length ? $btnDelete.fadeIn() : $btnDelete.fadeOut();
    $btnDelete.attr("href", "/admin/category-delete.php?id=" + allCheckeds);
    $theadCheckbox.prop(
      "checked",
      $tbodyCheckboxsLength === $tbodyCheckboxs.length
    );
    console.log($tbodyCheckboxsLength === $tbodyCheckboxs.length);
  });

  // 找一个合适的时机，做一件合适的事情

  $theadCheckbox.on("change", function() {
    $tbodyCheckboxs.prop("checked", $(this).prop("checked"));
    $tbodyCheckboxs.triggerHandler("change");
  });

  // 全选和全不选

  // var $btnDelete = $('#btn_delete');
  // // 在表格的任意一个 checkbox 选中状态时变化
  // var $tbodyCheckboxs = $('tbody input');

  // $tbodyCheckboxs.on('change', function() {
  //     var $checkedLength=$('tbody input:checkbox:checked').length;
  //     var flag;
  //     flag = $checkedLength>0;
  //     flag ? $btnDelete.fadeIn() : $btnDelete.fadeOut();
  // });
});
