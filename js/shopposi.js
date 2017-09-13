var liDoms = document.getElementsByClassName("changeposi");
console.log(liDoms)
var i = 0,
    len = liDoms.length;
//循环设置每个子项的draggable属性，以及时候拖动标记
for (; i < len; i += 1) {
    liDoms[i].draggable = 'true';
    liDoms[i].flag = false;
    liDoms[i].ondragstart = function() {
        this.flag = true;
    };
    liDoms[i].ondragend = function() {
        this.flag = false;
    };
}
$(".lichange").on("dragenter",function(e){
    e.preventDefault();
})
$(".lichange").on("dragover",function(e){
    e.preventDefault();
})
$(".lichange").on("dragleave",function(e){
    e.preventDefault();
})
$(".lichange").on("drop",function(e){
    e.preventDefault();
    for (var i = 0; i < liDoms.length; i += 1) {
        if (liDoms[i].flag) {
            $(this).children(".listaa").append(liDoms[i]);
        }
    }
    console.log('成功');

})
////投放区事件
//$("con").ondragenter = function(e) {
//    e.preventDefault();
//    console.log('进入');
//
//};
//$("con").ondragover = function(e) {
//    e.preventDefault();
//    console.log('移动');
//};
//$("con").ondragleave = function(e) {
//    e.preventDefault();
//    console.log('离开');
//};
//$("con").ondrop = function(e) {
//
//    e.preventDefault();
//    for (var i = 0; i < liDoms.length; i += 1) {
//
//        if (liDoms[i].flag) { //此时获得是时box对象下li，而不是原容器的li了
//            $("con").appendChild(liDoms[i]);
//        }
//    }
//
//    console.log('成功');
//
//};