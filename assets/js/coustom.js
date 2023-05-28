$(document).ready(function () {
//احصائيات الصفحة الرئيسية
//clients_stats
        const ctx = document.getElementById('clients_stats');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
            datasets: [
                {
              label: 'مالك اسطبل',
              data: [5, 10, 19, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: "#38bb94"
            },
            {
              label: 'مدربين',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: "#0069a5"
            },
            {
              label: 'عميل فردي',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: "#ffa030"
            },
            {
              label: 'عميل إيواء',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: "#f13d47"
            }
        ]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

//laboratory_analyzes
        const ctx1 = document.getElementById('laboratory_analyzes');
      
        new Chart(ctx1, {
          type: 'line',
          data: {
            labels: ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
            datasets: [
                {
              label: 'عينات جديدة',
              data: [5, 10, 19, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: "#38bb94"
            },
            {
              label: 'نتائج التحليل',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: "#ffa030"
            }
        ]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
});

$(document).ready(function () {
  
/**اختيار عميل مدرج في النظام**/
$('#client_name').hide();
$('#client_tel').hide();
$('#client_no').hide();
$('#horse_no').hide();
$('#chlint_access').hide();

$('#select-clients-pos').change(function() {
  if ($(this).val() === '0') {
    $('#client_name').hide();
    $('#client_tel').hide();
    $('#client_no').hide();
    $('#horse_no').hide();
    $('#chlint_access').hide();
  };
});
$('#select-clients-pos').change(function() {
  if ($(this).val() === '1') {
    $('#client_name').show();
    $('#client_tel').hide();
    $('#client_no').hide();
    $('#horse_no').hide();
    $('#chlint_access').hide();
  };
});
$('#select-clients-pos').change(function() {
  if ($(this).val() === '2') {
    $('#client_name').hide();
    $('#client_tel').show();
    $('#client_no').hide();
    $('#horse_no').hide();
    $('#chlint_access').hide();
  };
});
$('#select-clients-pos').change(function() {
  if ($(this).val() === '3') {
    $('#client_name').hide();
    $('#client_tel').hide();
    $('#client_no').show();
    $('#horse_no').hide();
    $('#chlint_access').hide();
  };
});
$('#select-clients-pos').change(function() {
  if ($(this).val() === '4') {
    $('#client_name').hide();
    $('#client_tel').hide();
    $('#client_no').hide();
    $('#horse_no').show();
    $('#chlint_access').hide();
  };
});
$('#select-clients-pos').change(function() {
  if ($(this).val() === '5') {
    $('#client_name').hide();
    $('#client_tel').hide();
    $('#client_no').hide();
    $('#horse_no').hide();
    $('#chlint_access').show();
  };
});


});
