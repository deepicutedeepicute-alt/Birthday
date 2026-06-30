*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Segoe UI,sans-serif;
}

body{
background:linear-gradient(135deg,#7b2cbf,#ff4fa3);
overflow:hidden;
height:100vh;
color:white;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
}

.hidden{
display:none;
}

.intro,
.birthday{
width:90%;
max-width:700px;
animation:fadeIn 2s;
}

.typing{
font-size:32px;
margin-bottom:30px;
animation:blink 1s infinite;
}

button{
padding:15px 30px;
font-size:20px;
border:none;
border-radius:40px;
cursor:pointer;
background:white;
color:#7b2cbf;
font-weight:bold;
transition:.4s;
}

button:hover{
transform:scale(1.1);
background:#ffd6ec;
}

.photo{
width:250px;
height:250px;
object-fit:cover;
border-radius:50%;
border:8px solid white;
margin:25px 0;
box-shadow:0 0 40px pink;
animation:float 4s infinite;
}

.message{
font-size:22px;
line-height:1.8;
margin:20px;
}

#surprise{
margin-top:30px;
font-size:45px;
display:none;
animation:pop 1s;
}

@keyframes fadeIn{
from{opacity:0;}
to{opacity:1;}
}

@keyframes float{
0%{transform:translateY(0);}
50%{transform:translateY(-15px);}
100%{transform:translateY(0);}
}

@keyframes pop{
0%{transform:scale(0);}
100%{transform:scale(1);}
}

@keyframes blink{
50%{opacity:.5;}
}
