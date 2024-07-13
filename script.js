var w=0;var t=0;var slid;
        var imgContainer=document.querySelector('.imgContainer');
        var imgs=['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg','img9.jpg','img10.jpg'];
        //imgs array for slideshow images...................................
        function bodyLoad(){
            imgs.map((data)=>{
                var img=document.createElement('img');
                img.src=data;
                imgContainer.appendChild(img);
            })
            slid=setInterval(right,3000);
        }
        function right(){//right navigation button click...........................................
            w--;if(w===-10){w=0;document.querySelector('.imgContainer').style.transition='none'}else{
                document.querySelector('.imgContainer').style.transition='1s'
            }
            document.querySelector('.imgContainer').style.left=(w*100)+'%';
        }
        function left(){//left navigation button click...........................................
            w++;if(w===1){w=-9;document.querySelector('.imgContainer').style.transition='none'}else{
                document.querySelector('.imgContainer').style.transition='1s'
            }
            document.querySelector('.imgContainer').style.left=(w*100)+'%';
        }
        function ctrl(){//pause or resume button for auto slideshow................................
            if(t===0){t=1;document.getElementById('strt').style.display='block';document.getElementById('stp').style.display='none';
                clearInterval(slid);
            }
            else if(t===1){t=0;document.getElementById('strt').style.display='none';document.getElementById('stp').style.display='block';
            slid=setInterval(right,3000);
            }
        }