var opt = document.createElement('option');
opt.value = "date";
opt.innerHTML = "Ngày";
document.getElementsByClassName("select_date")[0].appendChild(opt);

opt = document.createElement('option');
opt.value = "month";
opt.innerHTML = "Tháng";
document.getElementsByClassName("select_month")[0].appendChild(opt);

opt = document.createElement('option');
opt.value = "year";
opt.innerHTML = "Năm";
document.getElementsByClassName("select_years")[0].appendChild(opt);
for (var i = 1; i<=31; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    document.getElementsByClassName("select_date")[0].appendChild(opt);
}

for (var i = 1; i<=12; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    document.getElementsByClassName("select_month")[0].appendChild(opt);
}

for (var i = 2021; i>=1905; i--){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    document.getElementsByClassName("select_years")[0].appendChild(opt);
}