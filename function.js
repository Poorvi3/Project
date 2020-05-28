function AddFavorite(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("Please Press Ctrl+D");
        }
    }
}
function selecttab(id)
{
	for(i=1;i<20;i++)
	{
      $("#stab"+i).hide();
	  $("#sge"+i).hide();
	  
 
	}
    $("#stab"+id).show();
	$("#sge"+id).show();

   //$("#tvs"+id).attr("class","minchiD");

   // $("#tvs"+id).css('background-color','#FFCC00');
   // alert("1tvs"+id);
}

function sendsms(str,code,saction)
      
{
	 
	
		var sname = $.trim($("#keyword")[0].value);
		
		var email = $.trim($("#email")[0].value);
	
	 if(sname=="" || email=="" || sname=="The name of the TV series:" || email=="Your email:" )
	        	  
	{ 
	   alert('Please input your complete information.');
	}
	else
	{
			$.post("post.php", {psname:sname,pemail:email,type:"smssend"} , function(result)
				{
					
					 //alert(result);
					if(result == 1)
					{   
					     alert("We have recieved your proposals, and we will reply to you as soon as possible. ");	
						// window.location.reload()
						 $("#keyword").attr("value",'')
						 $("#email").attr("value",'')
					}
					else
					{
						 alert("error");		
						
					}
				} );
	}
}



function  google()
{
  
		
						location.href="/index.html"  ;
				 
			 
}




function feedback(str,code,saction)
      
{
	 
	
		var t = $.trim($("#t")[0].value);
		
		var c = $.trim($("#c")[0].value);
		
		var e = $.trim($("#e")[0].value);
	
	 if(t=="" || c=="" )
	        	  
	{ 
	   alert('Please input your complete information.');
	}
	else
	{
			$.post("post.php", {psname:t,pemail:c,pe:e,type:"feedsend"} , function(result)
				{
					                                   
					// alert(result);
					if(result == 1)
					{   
					     alert("Thanks for you feedback ");	
						 $("#t").attr("value",'')
						 $("#e").attr("value",'')
						 $("#c").attr("value",'')
						// window.location.reload()
					}
					else
					{
						 alert("error");		
						
					}
				} );
	}
}






function sendcom(trueurlid)
      
{
	 
	
		var sname = $.trim($("#pinlun")[0].value);
		

	
	 if(sname=="" )        	  
	 { 
	   alert('Please input your Commnet.');
	 }
	  else
	{
			$.post("post.php", {psname:sname,uid:trueurlid,type:"comsend"} , function(result)
				{
					
					// alert(result);
					if(result == 1)
					{   
					     alert("Thanks for your comments ");	
						 
						 window.location.reload()
					}
					else
					{
						 alert("error");		
						
					}
				} );
	}
}




function errorreport(str)
      
{
	 
	
		var t = $.trim($("#title")[0].value);
		
		var c = $.trim($("#description")[0].value);
		var d = $.trim($("#email")[0].value);
		var e = $.trim($("#uu")[0].value);
		//alert(e);
	 if(t=="" || c=="" )	        	  
	{ 
	   alert('Please input Error Title and Description.');
	}
	else
	{
			$.post("/post.php", {pn:t,pd:c,uid:str,type:"error",email:d,"uu":e} , function(result)
				{
					                                   
					 //alert(result);
					if(result == 1)
					{   
					     alert("Thanks for your Report, we will correct it.");	
						 $("#tilte").attr("value",'')
						 $("#description").attr("value",'')
						 $("#report").hide();
						// window.location.reload()
					}
					else
					{
						 alert("error");		
						
					}
				} );
	}
}

function jioncheck(str)
      
{
		var a = $.trim($("#email")[0].value);
		var b = $.trim($("#username")[0].value);
		var c = $.trim($("#password")[0].value);
		var d = $.trim($("#cpassword")[0].value);
		
		if (a=="" || b=="" || c=="" || d=="")
		{
		  alert('Please input your complete information.');
		  return false;
		}
		if (c!=d )
		{
		  alert('Password does not match. Please re-enter password');
		  return false;
		}
	    return true;
}
 

function forget()
      
{
		var a = $.trim($("#e")[0].value);
		var b = $.trim($("#u")[0].value);
		 
		
		if (a=="" && b==""  )
		{
		  alert('Please input your Email or Username.');
		  return false;
		}
		 
	    return true;
}


function setemail()
{
		$.post("/post.php", {type:"checklogin"} , function(result)
				{
					                                   
					 //alert(result);
					if(result != 1)
					{   
					    document.getElementById("e").value=result;
					
					}
				});
}

function setemail2()
{
		$.post("/post.php", {type:"checklogin"} , function(result)
				{
					                                   
					 //alert(result);
					if(result != 1)
					{   
					    document.getElementById("email").value=result;
					
					}
				});
}


function userinof()
{
	
	$.post("/post.php", {type:"checklogin"} , function(result)
				{
					                                   
					 //alert(result);
					if(result != 1)
					{   
					      $("#userinfo").html("<li><a href='/profile.php'>"+result+"</a></li> <li><a href='/out.php'> Logout </a></li>");
					
					}
					else
					{
						  $("#userinfo").html("<li><a href='/signup.php'>Sign up</a></li> <li><a href='/login.php'>Login</a></li>");
					
					}
				});
}

function addsubp(tid)
{
	
	$.post("/post.php", {type:"subcrip",tid:tid},function(result)
				{
					                                   
					  // alert(result);
					if(result == 2)
					{   
					      alert("Please Login!");
				            location.href="/login.php";
					
					}
					else if(result >0)
					{
						 document.getElementById("scup").innerHTML= "<img src='/images/sub2.jpg' border=0>";
						 document.getElementById("scup2").innerHTML= '<font size="2"  face="Arial, Helvetica, sans-serif">&nbsp;'+result+'</font>';
					
					}
				});
}


function chksubp(tid)
{
	
	$.post("/post.php", {type:"chksubcrip",tid:tid} , function(result)
				{
					                                   
					 //alert(result);
					  af =result.split("-") ;


                      if (  af[1]>0) 
                      {
						   document.getElementById("scup").innerHTML= "<img src='/images/sub2.jpg' border=0>";
                      }

					 
						
					 document.getElementById("scup2").innerHTML= '<font size="2"  face="Arial, Helvetica, sans-serif">&nbsp;'+ af[2]+'</font>';
					
					 
				});
}


function ov(i)
{
   t=1;
   while(t<=i)
	{
	  // alert(t);
	    $("#"+t).attr("src","/ab.jpg");
		t++;
    }
	$("#rt").html('<b>'+i+'</b><font color="#CCCCCC">/10</font>');
}
function ou(i)
{
   t=1;
   while(t<=i)
	{
		  $("#"+t).attr("src","/ba.jpg");
		  t++;
    }

	$("#rt").html('-<font color="#CCCCCC">/10</font>');
}


 
function oc(st,mid)
{
	  
	$.post("/post.php", {type:"addstars",st:st,mid:mid},function(result)
				{
					//alert(result);                                   
					  
					if(result == 2)
					{   
					        alert("Please Login!");
				            location.href="/login.php";
					
					}
					else if(result!="")
					{
						      tmp=result.split('|');
                             $("#allnum").html('<b>'+tmp[0]+'</b>'); 
                             $("#at").html('<b>Ratings:</b> <b>'+tmp[0]+'</b>/10 from '+tmp[1]+' users  '); 
					
					}
				});
}

function goc(mid)
{
	  
	$.post("/post.php", {type:"getstars",mid:mid},function(result)
		        {  if(result!="")
					{
						      tmp=result.split('|');
                             $("#allnum").html('<b>'+tmp[0]+'</b>'); 
                             $("#at").html('<b>Ratings:</b> <b>'+tmp[0]+'</b>/10 from '+tmp[1]+' users  '); 
					
					}
				});
}