
//cookie functions

function clearCook(){
    $('.colorr').each(function(){
    var id = $(this).attr('id');
    setCookie(id,"",-1);
})
    setCookie('zoneimg',"",-1);
    setCookie('active',"",-1);
  };

function setCookie(cname, cvalue, hrs) {
    var d = new Date();
    d.setTime(d.getTime() + (hrs*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}    

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};  


//check to see if colors/zone/activation have been saved

$(document).ready(function(){
  if(getCookie('active')!=""){
    $('#active').html("Ticket activated at "+getCookie('active'));
  }

  if(getCookie('zoneimg')!=""){
    $('#zoneimg').prop('src',getCookie('zoneimg'));
  }
  
  $('.colorr').each(function(){
    var id = $(this).attr('id');
    if (getCookie(id)!=""){
        var oldcol=getCookie(id);
        $(this).css('background-color',oldcol);
    };
  });
  $('.colorr').css('opacity',1)
})
