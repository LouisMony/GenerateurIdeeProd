const result_area = document.getElementById('js_result');

const genre_check =  document.getElementById('js_check_genre');
const tableau_genre = ['Futur House/Futur Bounce', 'Color House', 'Dubstep', 'Deep House','Progressive House', 'Futur Bass', 'Vaporwave', 'Bass House', 'Pop House','Trap', 'Drill', 'Afro', 'Emo', 'Lofi', 'Acoustic', 'Bass Trap', 'Jazzy', 'Digital', 'Bounce', 'Tryhard', 'Rock'];

const artiste_check = document.getElementById('js_check_artiste');
const tableau_artiste = ['Mike Williams', 'Mesto', 'Mofalk', 'Ziak', 'Freeze Corleone', 'Alpha Wann', 'Damso', 'Martin Garrix', 'Brooks', 'Dj snake', 'Laylow', 'Wit', 'Benjamin Epps', 'Travis Scott', 'Kendrick Lamar', 'XXXTentacion', 'Jonas Aden', '75eme Session', 'Cabballero & JeanJass', 'The Chainsmokers', 'Aya Nakamura', 'PNL', 'Jauzz', 'Plk', 'Ysos (fait pas ca stp)',  ]

const chrono_check = document.getElementById("js_check_chrono");
const tableau_chrono = ['15 minutes', '30 minutes', '45 minutes', '60 minutes', '90 minutes', '2 heures'];

const sample_check = document.getElementById('js_check_sample');
const accapella_check = document.getElementById('js_check_accapella');

//SELECT / DESELECT
function SelectAll(){
    const checkboxlist = document.querySelectorAll('input');
    for(i=0; i<checkboxlist.length; i++){  
        if(checkboxlist[i].type=='checkbox')  
            checkboxlist[i].checked=true;  
    }  
}
function DeSelectAll(){
    const checkboxlist = document.querySelectorAll('input');
    for(i=0; i<checkboxlist.length; i++){  
        if(checkboxlist[i].type=='checkbox')  
            checkboxlist[i].checked=false;  
    }  
}

function Generate(){
    //GENERATION ARTISTE
    if (artiste_check.checked) {
        var artiste_final = tableau_artiste[Math.floor(Math.random() * tableau_artiste.length)];
    } else {
        var artiste_final = 'Aucun'
    } 
    //GENRATION DU GENRE
    if (genre_check.checked) {

        var genre_final = tableau_genre[Math.floor(Math.random() * tableau_genre.length)];
        
    } else {
        var genre_final = 'Aucun'
    } 

    //GENERATION DI CHRONO
    if(chrono_check.checked){
        var chrono = tableau_chrono[Math.floor(Math.random() * tableau_chrono.length)];
        
    }else{
        var chrono = 'Pas du durée'
    }

    //GENERATION SAMPLE
    var sample = 'SAMPLE';
    if(sample_check.checked){
        playlistId = 'PLfuuwfx2LGYNhJ78u3I02IcOqUt6l-YaE'
        fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+playlistId+"&key=AIzaSyBezc970iXsyuJ0ybuTnof2h9AaNqt844s")
        .then((result)=>{
            return result.json()
        }).then((data)=>{
            items_number = Math.floor(chance.floating({ min: 1, max: data.items.length}))
            var sample = data.items[items_number].snippet.resourceId.videoId;
            result_area.innerHTML += '<br/>Sample : <a href="https://www.youtube.com/watch?v='+sample+'" target="_blank">https://www.youtube.com/watch?v='+sample+'</a>';
        });

    }else{
        var sample = 'Aucun'
        result_area.innerHTML += '<br/>Sample : Aucun';

    }

    //GENERATION SAMPLE
    var accapella = 'Accapella';
    if(accapella_check.checked){
        playlistIdbis = 'PLfuuwfx2LGYMs3h5E7mWEvVcPW04VC916'
        fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+playlistIdbis+"&key=AIzaSyBezc970iXsyuJ0ybuTnof2h9AaNqt844s")
        .then((result)=>{
            return result.json()
        }).then((data)=>{
            items_number = Math.floor(chance.floating({ min: 1, max: data.items.length}))
            var accapella = data.items[items_number].snippet.resourceId.videoId;
            result_area.innerHTML += '<br/>Accapella : <a href="https://www.youtube.com/watch?v='+accapella+'" target="_blank">https://www.youtube.com/watch?v='+accapella+'</a>';
        });

    }else{
        var accapella = 'Aucun'
        result_area.innerHTML += '<br/>Accapella : Aucun';
    }

    //AFFICHAGE RESULTAT
    if(artiste_check.checked && genre_check.checked){
        alert('Attention, tu as selectionné un artiste et un genre, le resulat du générateur pourrait inchorent !');
    }
    result_area.innerHTML = 'Genre : '+genre_final+'<br/> Artiste : '+artiste_final+'<br/>Chrono : '+chrono+'';
}