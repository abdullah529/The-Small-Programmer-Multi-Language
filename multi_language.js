var arabic = document.getElementById("arabic");
var arabic_title = document.getElementById("arabic_title");
var arabic_desc = document.getElementById("arabic_desc");
var english = document.getElementById("english");
var english_title = document.getElementById("english_title");
var english_desc = document.getElementById("english_desc");
var turkish = document.getElementById("turkish");
var turkish_title = document.getElementById("turkish_title");
var turkish_desc = document.getElementById("turkish_desc");
var about = document.getElementById("about");
var about_desc = document.getElementById("about_desc");
var cs = document.getElementById("cs");
onload = ()=>{
    var language = localStorage.getItem("Language");
    if(language != null){
        setLanguage(language);
    }else{
        en();
    }
};
function ar(){
    setLanguage("arabic");
}
function en(){
    setLanguage("english");
}
function tr(){
    setLanguage("turkish");
}
function setLanguage(language){
    if(language == "english"){
        localStorage.setItem("Language","english");
        about.innerText = "About";
        about_desc.innerText ="We are programmers if you have anything you can contact us with we";
        cs.innerText = "Contact US";
        arabic.innerText = "Select This Language";
        arabic_title.innerText = "Arabic";
        arabic_desc.innerText = "This is Arabic language this language used in the last time and the default quran writed with the Arabic language.";
        english.innerText = "Select This Language";
        english_title.innerText = "English";
        english_desc.innerText = "This is English language and in the any country you need to learn English for speching and can solving your problems.";
        turkish.innerText = "Select This Language";
        turkish_title.innerText = "Turkish";
        turkish_desc.innerText = "This is Turkish Language in the all Turkish countries are peoples muslim and reading quran kerim in the Turkish and Arabic language.";
    }else if(language == "arabic"){
        localStorage.setItem("Language","arabic");
        about.innerText = "حولنا";
        about_desc.innerText ="نحن مبرمجون اذا كان يوجد لديك اقتراح يمكنك اخبارنا عبر التواصل معنا";
        cs.innerText = "تواصل ";
        arabic.innerText = "تحديد هذه اللغة";
        arabic_title.innerText = "العربية";
        arabic_desc.innerText = "هذه اللغة هي اللغة العربية هذه اللغة استخدمت من الزمان القديم كتب القرآن الكريم باللغة العربية.";
        english.innerText = "تحديد هذه اللغة";
        english_title.innerText = "الإنجليزية";
        english_desc.innerText = "هذه اللغة الإنجليزية في اي دولة والى اين ماذهبت يجب عليك تعلم اللغة الإنجليزية للتحدث و لحل جميع مشاكلك.";
        turkish.innerText = "تحديد هذه اللغة";
        turkish_title.innerText = "التركية";
        turkish_desc.innerText = "هذه اللغة التركية في اي دولة تركية الاشخاص مسلمون و يقرئون القرآن الكريم باللغة التركية و العربية.";
    }else if(language == "turkish"){
        localStorage.setItem("Language","turkish");
        about.innerText = "Hakımızda";
        about_desc.innerText ="Biz programcıyız senin herhangi bir fikrin varsa Bize Ulaşa bilirsiniz.";
        cs.innerText = "Bize Ulaşın";
        arabic.innerText = "Bu Dili Seç";
        arabic_title.innerText = "Arapça";
        arabic_desc.innerText = "Bu Arapça dili bu dil önceki zamanlarda kullanılmıştır ve kuranı kerim Arapça dili ile yazıldı.";
        english.innerText = "Bu Dili Seç";
        english_title.innerText = "İngilizce";
        english_desc.innerText = "Bu İngilizce dili her herhangi bir devletin içinde yada herhangi bir devlete gidersen İngilizce dilini öğrenmelisin anlaşmak ve problemlerini yada sıkıntılarını çözmek için.";
        turkish.innerText = "Bu Dili Seç";
        turkish_title.innerText = "Türkçe";
        turkish_desc.innerText = "Bu Türkçe dili herhangi bir Türk devletin içine gidersen insanlar müslim türkçe ve arapça dili ile kuran okurlar.";
    }
}