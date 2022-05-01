const result_area = document.getElementById('js_result');

const bpm_check =  document.getElementById('js_check_bpm');

const genre_check =  document.getElementById('js_check_genre');
const sousgenre_check =  document.getElementById('js_check_sousgenre');

const tableau_genre_electro = ['Futur House', 'Futur Bass']
const tableau_genre_prod = ['Trap', 'lofi']
const tableau_genre = [tableau_genre_electro, tableau_genre_prod]

const chrono_check = document.getElementById("js_check_chrono");
const tableau_chrono = ['15 minutes', '30 minutes', '45 minutes', '60 minutes'];

const sample_check = document.getElementById('js_check_sample');

const accapella_check = document.getElementById('js_check_accapella');

function Generate(){
    //GENERATION DU BPM
    var bpm = 1;
    if (bpm_check.checked) {
        bpm = Math.floor(chance.floating({ min: 70, max: 180 }));
    } else {
        var bpm = 'Aucun'
    } 

    //GENRATION DU GENRE
    if (genre_check.checked) {

        var genre_general = tableau_genre[Math.floor(Math.random() * tableau_genre.length)];

        if(sousgenre_check.checked){
            var sousgenre = genre_general[Math.floor(Math.random() * genre_general.length)];
            var genre_final = sousgenre;
        }
        else{
            var genre_final = genre_general;
        }
        
        if(genre_general === tableau_genre_electro){
            bpm = Math.floor(chance.floating({ min: 100, max: 110 }));
        }
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
            result_area.innerHTML += '<br/>Sample : <a href="https://www.youtube.com/watch?v='+accapella+'" target="_blank">https://www.youtube.com/watch?v='+accapella+'</a>';
        });

    }else{
        var accapella = 'Aucun'
        result_area.innerHTML += '<br/>Accapella : Aucun';
    }

    //AFFICHAGE RESULTAT
    result_area.innerHTML = 'Bpm de :'+bpm+'<br/>Genre : '+genre_final+'<br/>Chrono : '+chrono+'';
}