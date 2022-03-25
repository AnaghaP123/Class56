var i=0;

function change()
{
var a=["nature1.jpg","nature2.jpg"];
if (i==2)
{
i=0;
}
document.getElementById("q").src=a[i];
i++
}