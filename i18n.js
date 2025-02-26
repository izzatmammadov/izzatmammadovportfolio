import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "HOME PAGE",
      about: "About Me",
      experience: "Experience",
      contact: "Contact",
      fullname: "Izzat Mammadov",
      hello: "Hi there, let's work together. . .",
      description:
        "With the experience I gained in projects in different sectors, I learned to overcome difficulties and optimize business processes. By taking an active role in team work, I contributed to the successful completion of projects.",
      download: "Download CV",
      animation1: "Frontend & Web Developer",
      animation2: "Software Instructor & Mentor",
      aboutMe:
        "I'm a Frontend Developer with 4+ years of experience. I'm passionate about web development and I love developing user-friendly, high-performance and scalable applications with modern technologies. I'm especially specialized in React, Next.js and TypeScript.",
      aboutMe2:
        "Throughout my career: I've created dynamic, interactive and innovative user interfaces in the React ecosystem. I've developed SEO-friendly, fast-loading and modern web applications with Next.js. I've increased code quality and created scalable projects using TypeScript.",
      aboutMe3:
        "In the software development process, I aim to provide customized solutions to project needs by adopting modular structure, clean code principles and best practices. I'm prone to teamwork and adapting to new technologies is a source of motivation for me. As a developer who cares about user experience and is eager and talented in developing high-quality web applications, I'm here to add value to your projects.",
      experience1: {
        workplace: "SQL.az",
        role: "Frontend Development Instructor",
        duration: "January 2025 - Present",
        workstyle: "Hybrid",
        description:
          "The curriculum focuses on modern frontend technologies, hands-on projects, and best industry practices. My role involves not only teaching but also mentoring students, ensuring they are ready for the job market as competent developers. By the end of the program, students have built a strong portfolio and gained the confidence to enter the tech industry.",
        responsibility1:
          "Developing scalable web applications using React and Next.js.",
        responsibility2:
          "Providing constructive feedback to improve students' coding standards.",
        responsibility3:
          "Tailored feedback to enhance students' coding skills and standards, fostering an environment of continuous improvement and learning.",
      },
      experience2: {
        workplace: "EA Camp School",
        role: "Frontend Developer & Instructor",
        duration: "April 2023 - October 2024",
        workstyle: "Full-time",
        description:
          "I worked on a campus where I actively coded in React and Next.js while also teaching frontend programming to groups of students. I shared practical knowledge and insights through collaborative lessons, focusing on building modern and scalable web applications. My role involved both hands-on development and guiding students to improve their coding skills systematically.",
        responsibility1:
          "Developing scalable web applications using React and Next.js.",
        responsibility2:
          "Conducting group lessons and workshops on core frontend concepts.",
        responsibility3:
          "Mentoring students by reviewing their code and guiding them in project-based learning.",
      },
      experience3: {
        workplace: "EYTSOFT A. Ş",
        role: "React Developer",
        duration: "March 2022 - July 2024",
        workstyle: "Remote",
        description:
          "I contributed to projects by coding in React and supporting development tasks. I developed utility functions to streamline workflows and improve code efficiency for other developers. Additionally, I shared my custom features and solutions with the team, fostering collaboration and enhancing overall productivity. My role focused on both coding and team-oriented problem-solving.",
        responsibility1:
          "Writing and maintaining React components and application features.",
        responsibility2:
          "Developing reusable utility functions to support other developers.",
        responsibility3:
          "Enhance code efficiency, providing essential support to other developers in their tasks and contributing to a more cohesive development process.",
      },
      experience4: {
        workplace: "Freelancer",
        role: "React & Next.js Developer",
        duration: "March 2022 - August 2023",
        workstyle: "Part-time",
        description:
          "I worked as a freelancer, creating websites and solving issues for individuals and businesses from different countries through various freelance platforms. I tailored web solutions based on client requirements, ensuring functionality and user-friendly design. My role involved analyzing problems, implementing fixes, and delivering custom websites.",
        responsibility1:
          "Designing and developing customized websites based on client specifications.",
        responsibility2:
          "Troubleshooting and resolving technical issues for existing websites.",
        responsibility3:
          "Communicating with clients to understand their needs and delivering tailored solutions.",
      },
      experience5: {
        workplace: "Developia E. A",
        role: "Internship - Frontend Developer",
        duration: "December 2021 - March 2022",
        workstyle: "Hybrid",
        description:
          "I gained practical experience in web development, learning modern frontend technologies and tools. I had the opportunity to work on real-world projects, which helped me adapt to professional workflows and standards. This experience not only strengthened my technical abilities but also boosted my confidence in tackling frontend challenges.",
        responsibility1: "Developing frontend components for various projects.",
        responsibility2:
          "Participating in code reviews and implementing feedback.",
        responsibility3:
          "Sharing knowledge and resources to achieve common goals and ensure timely delivery of high-quality work.",
      },
      contactDesc:
        "I look forward to working with you and contributing to your projects! Feel free to contact me for any questions or collaborations.",
      emailInput: "YOUR EMAIL HERE",
      messageInput: "YOUR MESSAGE HERE . . .",
      sendBtn: "SEND",
      footerDesc: '"All rights reserved"',
      emailRequired: "Email is required.",
      messageRequired: "Message is required.",
    },
  },
  az: {
    translation: {
      welcome: "ƏSAS SƏHİFƏ",
      about: "Haqqımda",
      experience: "Təcrübə",
      contact: "Əlaqə",
      fullname: "İzzət Məmmədov",
      hello: "Salam, gəlin birlikdə işləyək. . .",
      description:
        "Fərqli sektor layihələrində qazandığım təcrübə ilə çətinliklərin öhdəsindən gəlməyi və iş proseslərini optimallaşdırmağı öyrəndim. Komanda işində aktiv iştirak edərək, layihələrin uğurla tamamlanmasına töhfə verdim.",
      download: "CV-ni Yüklə",
      animation1: "Frontend & Veb Proqramçı",
      animation2: "Proqram Təlimçisi & Mentor",
      aboutMe:
        "4+ illik təcrübəyə sahib bir Frontend Developerəm. Veb inkişafına böyük həvəsim var və müasir texnologiyalarla istifadəçi dostu, yüksək performanslı və miqyaslana bilən tətbiqlər inkişaf etdirməyi sevirəm. Xüsusilə React, Next.js və TypeScript üzrə ixtisaslaşmışam.",
      aboutMe2:
        "Karyeram boyunca: React ekosistemində dinamik, interaktiv və yenilikçi istifadəçi interfeysləri yaratmışam. Next.js ilə SEO dostu, sürətli yüklənən və müasir veb tətbiqlər inkişaf etdirmişəm. TypeScript istifadə edərək kod keyfiyyətini artırmış və miqyaslana bilən layihələr yaratmışam.",
      aboutMe3:
        "Proqram təminatı inkişafı prosesində modulyar quruluş, təmiz kod prinsipləri və ən yaxşı təcrübələri qəbul edərək layihə ehtiyaclarına uyğun həllər təqdim etməyi hədəfləyirəm. Komanda işinə yatqınam və yeni texnologiyalara uyğunlaşmaq mənim üçün motivasiya mənbəyidir. İstifadəçi təcrübəsinə önəm verən, yüksək keyfiyyətli veb tətbiqlər inkişaf etdirməkdə həvəsli və bacarıqlı bir proqramçı kimi layihələrinizə dəyər qatmaq üçün buradayam.",
      experience1: {
        workplace: "SQL.az",
        role: "Frontend Development Instructor",
        duration: "Yanvar 2025 - İndiki",
        workstyle: "Hibrid",
        description:
          "Kurikulum müasir frontend texnologiyalarına, 6-aylıq praktiki layihələrə və ən yaxşı sənaye təcrübələrinə əsaslanır. Mənim rolum yalnız dərs demək deyil, həm də tələbələri mentorluq edərək iş bazarına hazır inkişafçılar kimi formalaşdırmaqdır. Proqramın sonunda tələbələr güclü portfel yaradır və texnologiya sektoruna inamla daxil olurlar.",
        responsibility1:
          "React və Next.js istifadə edərək miqyaslana bilən veb tətbiqlər hazırlamaq.",
        responsibility2:
          "Tələbələrin kod standartlarını yaxşılaşdırmaq üçün konstruktiv rəy vermək.",
        responsibility3:
          "Tələbələrin iş bazarına keçidini asanlaşdırmaq üçün simulyasiya müsahibələri təşkil etmək.",
      },
      experience2: {
        workplace: "EA Camp School",
        role: "Frontend Developer & Instructor",
        duration: "Aprel 2023 - Oktyabr 2024",
        workstyle: "Tam zamanlı",
        description:
          "Mən həm React və Next.js-də aktiv şəkildə kod yazdım, həm də tələbələrə frontend proqramlaşdırmanı öyrətdim. Müasir və miqyaslana bilən veb tətbiqlər yaratmaq üçün praktik bilik və təcrübə paylaşdım. Mənim rolum həm aktiv inkişaf, həm də tələbələrin kodlaşdırma bacarıqlarını sistematik şəkildə yaxşılaşdırmalarına kömək etmək idi.",
        responsibility1:
          "React və Next.js istifadə edərək miqyaslana bilən veb tətbiqlər hazırlamaq.",
        responsibility2:
          "Tədris mövzuları üzrə qruplara dərslər və seminarlar keçmək.",
        responsibility3:
          "Tələbələrin kodunu qiymətləndirmək və layihə yönümlü öyrənmə prosesinə rəhbərlik etmək.",
      },
      experience3: {
        workplace: "EYTSOFT A. Ş",
        role: "React Developer",
        duration: "Mart 2022 - İyul 2024",
        workstyle: "Uzaqdan",
        description:
          "Mən React-də kod yazaraq və inkişaf tapşırıqlarına dəstək verərək layihələrə töhfə verdim. Başqa inkişafçılar üçün iş axınlarını asanlaşdırmaq və kod effektivliyini artırmaq üçün faydalı funksiyalar hazırladım. Həmçinin, komanda ilə əməkdaşlıq edərək öz xüsusi xüsusiyyətlərimi və həllərimi paylaşdım, bu da əməkdaşlıq və ümumi məhsuldarlığı artırdı.",
        responsibility1:
          "React komponentləri və tətbiq funksiyalarını yazmaq və saxlamaq.",
        responsibility2:
          "Başqa inkişafçılara dəstək vermək üçün yenidən istifadə oluna bilən faydalı funksiyalar hazırlamaq.",
        responsibility3:
          "Komanda ilə əməkdaşlıq edərək həlləri paylaşmaq və kod effektivliyini optimallaşdırmaq.",
      },
      experience4: {
        workplace: "Freelancer",
        role: "React & Next.js Developer",
        duration: "Mart 2022 - Avqust 2023",
        workstyle: "Qismən zamanlı",
        description:
          "Bu müddət ərzində mən fərdi və müxtəlif ölkələrdən olan bizneslər üçün veb saytlar yaratmaqla məşğul oldum. Müxtəlif freelancer platformalarında müştərilərin tələblərinə uyğun veb həllər təqdim etdim. Mənim rolum öncədən yaranmış problemləri analiz etmək, düzəlişlər tətbiq etmək və xüsusi veb saytlar təqdim etməkdən ibarət idi.",
        responsibility1:
          "Müştəri spesifikasiyalarına əsasən fərdi veb saytlar dizayn etmək və inkişaf etdirmək.",
        responsibility2:
          "Mövcud veb saytlar üçün texniki məsələləri həll etmək.",
        responsibility3:
          "Müştərilərlə ünsiyyət quraraq onların ehtiyaclarını anlamaq və xüsusi həllər təqdim etmək.",
      },
      experience5: {
        workplace: "Developia E. A",
        role: "Təcrübə - Frontend Developer",
        duration: "Dekabr 2021 - Mart 2022",
        workstyle: "Hibrid",
        description:
          "Mən müasir frontend texnologiyalarını və alətlərini öyrənərək praktiki təcrübə qazandım. Real dünya layihələrində iştirak etdim, bu da mənə peşəkar iş axınlarına və standartlara uyğunlaşmağa kömək etdi. Bu təcrübə yalnız texniki bacarıqlarımı gücləndirmədi, eyni zamanda veb frontend problemlərini həll etməkdə inamımı artırdı.",
        responsibility1:
          "Müxtəlif layihələr üçün yenidən istifadə oluna bilən frontend komponentləri hazırlamaq.",
        responsibility2:
          "Kodların qiymətləndirilməsi prosesində iştirak etmək və rəy tətbiq etmək.",
        responsibility3:
          "Komanda ilə əməkdaşlıq edərək layihə tapşırıqlarını tamamlaymaq.",
      },
      contactDesc:
        "Sizinlə işləməyi və layihələrinizə töhfə verməyi səbirsizliklə gözləyirəm! Hər hansı bir sualınız və ya əməkdaşlığınız üçün mənimlə əlaqə saxlamaqdan çəkinməyin.",
      emailInput: "EMAİL ADRESİNİZ",
      messageInput: "MESAJINIZ . . .",
      sendBtn: "GÖNDƏR",
      footerDesc: '"Müəllif hüquqları qorunur"',
      emailRequired: "E-poçt tələb olunur.",
      messageRequired: "Mesaj tələb olunur.",
    },
  },
  tr: {
    translation: {
      welcome: "ANA SAYFA",
      about: "Hakkımda",
      experience: "Tecrübe",
      contact: "İletişim",
      fullname: "İzzet Memmedov",
      hello: "Selam, hadi birlikte çalışalım. . .",
      description:
        "Farklı sektör projelerinde kazandığım deneyim ile zorlukların üstesinden gelmeyi ve iş süreçlerini optimize etmeyi öğrendim. Takım çalışmasında aktif rol alarak projelerin başarılı bir şekilde tamamlanmasına katkı sağladım.",
      download: "CV-yi İndir",
      animation1: "Frontend & Veb Geliştirici",
      animation2: "Yazılım Eğitmeni & Mentor",
      aboutMe:
        "4+ yıllık deneyime sahip bir Frontend Developer'ım. Web geliştirmeye büyük bir tutkuyla bağlıyım ve modern teknolojilerle kullanıcı dostu, yüksek performanslı ve ölçeklenebilir uygulamalar geliştirmeyi seviyorum. Özellikle React, Next.js ve TypeScript konusunda uzmanım.",
      aboutMe2:
        "Kariyerim boyunca: React ekosisteminde dinamik, interaktif ve yenilikçi kullanıcı arayüzleri oluşturdum. Next.js ile SEO dostu, hızlı yüklenen ve modern web uygulamaları geliştirdim. TypeScript kullanarak kod kalitesini artırdım ve ölçeklenebilir projeler oluşturdum.",
      aboutMe3:
        "Yazılım geliştirme sürecinde modüler yapı, temiz kod prensipleri ve en iyi uygulamaları benimseyerek proje ihtiyaçlarına özel çözümler sunmayı hedefliyorum. Takım çalışmasına yatkınım ve yeni teknolojilere uyum sağlamak benim için bir motivasyon kaynağı. Kullanıcı deneyimine önem veren, yüksek kaliteli web uygulamaları geliştirme konusunda istekli ve yetenekli bir yazılımcı olarak projelerinize değer katmak için buradayım.",
      experience1: {
        workplace: "SQL.az",
        role: "Frontend Development Instructor",
        duration: "Ocak 2025 - Şu an",
        workstyle: "Hibrid",
        description:
          "Müfredat, modern frontend teknolojilerine, uygulamalı projelere ve en iyi sektör uygulamalarına odaklanmaktadır. Rolüm sadece ders vermek değil, aynı zamanda öğrencilerin iş gücü olarak yetkin gelişimciler olarak hazırlanmalarına rehberlik etmektir. Programın sonunda öğrenciler sağlam bir portföy oluşturur ve teknoloji sektörüne güvenle girerler.",
        responsibility1:
          "React ve Next.js kullanarak ölçeklenebilir web uygulamaları geliştirmek.",
        responsibility2:
          "Öğrencilerin kodlama standartlarını artırmak için yapıcı geri bildirimde bulunmak.",
        responsibility3:
          "Öğrencilerin iş gücüne geçişini kolaylaştırmak için simülasyon mülakatları düzenlemek.",
      },
      experience2: {
        workplace: "EA Camp School",
        role: "Frontend Developer & Instructor",
        duration: "Nisan 2023 - Ekim 2024",
        workstyle: "Tam zamanlı",
        description:
          "Ben, hem React hem de Next.js üzerinde aktif olarak kod yazarken, öğrencilere frontend programlamayı öğretmekteydim. Modern ve ölçeklenebilir web uygulamaları geliştirmek için pratik bilgi ve deneyim paylaştım. Rolüm, hem aktif bir geliştirme hem de öğrencilerin kodlama becerilerini sistematik olarak geliştirmelerine yardımcı olmaktı.",
        responsibility1:
          "React ve Next.js kullanarak ölçeklenebilir web uygulamaları geliştirmek.",
        responsibility2:
          "Temel frontend kavramları hakkında grup dersleri ve atölyeleri düzenlemek.",
        responsibility3:
          "Öğrencilerin kodlarını gözden geçirerek ve projeye dayalı öğrenmeye rehberlik ederek mentorluk yapmak.",
      },
      experience3: {
        workplace: "EYTSOFT A. Ş",
        role: "React Developer",
        duration: "Mart 2022 - Temmuz 2024",
        workstyle: "Uzaktan",
        description:
          "React'ta kod yazarak ve geliştirme görevlerine destek vererek projelere katkı sağladım. Diğer geliştiriciler için iş akışlarını kolaylaştırmak ve kod verimliliğini artırmak için yardımcı işlevler geliştirdim. Ayrıca, ekip ile işbirliği yaparak kendi özel özelliklerimi ve çözümlerimi paylaşarak işbirliğini artırdım ve genel verimliliği yükselttim.",
        responsibility1:
          "React bileşenleri ve uygulama özelliklerini yazmak ve sürdürmek.",
        responsibility2:
          "Diğer geliştiricilere destek sağlamak için yeniden kullanılabilir yardımcı işlevler geliştirmek.",
        responsibility3:
          "Ekip ile işbirliği yaparak çözümleri paylaşmak ve kod verimliliğini optimize etmek.",
      },
      experience4: {
        workplace: "Freelancer",
        role: "React & Next.js Developer",
        duration: "Mart 2022 - Ağustos 2023",
        workstyle: "Yarı zamanlı",
        description:
          "Bu zaman müddetinde farklı ülkelerden bireyler ve işletmeler için web siteleri oluşturarak çalıştım. Çeşitli serbest çalışma platformlarında müşteri taleplerine göre web çözümleri sunmaya odaklandım. Rolüm, benden önce yaranmış olan sorunları analiz etmek, düzeltmeleri uygulamak ve özel web siteleri teslim etmekti ve destek göstermekti.",
        responsibility1:
          "Müşteri spesifikasyonlarına göre özelleştirilmiş web siteleri tasarlamak ve geliştirmek.",
        responsibility2: "Mevcut web siteleri için teknik sorunları çözmek.",
        responsibility3:
          "Müşterilerle iletişim kurarak ihtiyaçlarını anlamak ve özel çözümler sunmak.",
      },
      experience5: {
        workplace: "Developia E. A",
        role: "Staj - Frontend Developer",
        duration: "Aralık 2021 - Mart 2022",
        workstyle: "Hibrid",
        description:
          "Modern frontend teknolojilerini ve araçlarını öğrenerek pratik deneyim kazandım. Gerçek dünya projelerinde yer alarak profesyonel iş akışlarına ve standartlara uyum sağlama yeteneğimi geliştirdim. Bu deneyim, yalnızca teknik becerilerimi geliştirmekle kalmayıp, aynı zamanda web frontend sorunlarını çözme konusundaki güvenimi artırdı.",
        responsibility1:
          "Çeşitli projeler için frontend bileşenleri geliştirmek.",
        responsibility2:
          "Kod değerlendirme süreçlerine katılmak ve geri bildirim sağlamak.",
        responsibility3:
          "Ekip ile işbirliği yaparak proje görevlerini tamamlamak.",
      },
      contactDesc:
        "Sizinle çalışmayı ve projelerinize katkıda bulunmayı dört gözle bekliyorum! Herhangi bir sorunuz veya iş birliği için benimle iletişime geçmekten çekinmeyin.",
      emailInput: "EMAİL ADRESİNİZ",
      messageInput: "MESAJINIZ . . .",
      sendBtn: "GÖNDER",
      footerDesc: '"Telif hakları korunmaktadır"',
      emailRequired: "E-posta gerekli.",
      messageRequired: "Mesaj gerekli.",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});

export default i18n;
