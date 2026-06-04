function setLanguage(lang){

    if(lang === "ar"){
        document.getElementById("title").innerText =
        "البطولة الوطنية الاحترافية";

        document.getElementById("standings-title").innerText =
        "الترتيب";

        document.getElementById("matches-title").innerText =
        "المباريات";

        document.getElementById("news-title").innerText =
        "الأخبار";
    }

    if(lang === "fr"){
        document.getElementById("title").innerText =
        "Championnat National Professionnel";

        document.getElementById("standings-title").innerText =
        "Classement";

        document.getElementById("matches-title").innerText =
        "Matchs";

        document.getElementById("news-title").innerText =
        "Actualités";
    }

    if(lang === "en"){
        document.getElementById("title").innerText =
        "National Professional Championship";

        document.getElementById("standings-title").innerText =
        "Standings";

        document.getElementById("matches-title").innerText =
        "Matches";

        document.getElementById("news-title").innerText =
        "News";
    }
}