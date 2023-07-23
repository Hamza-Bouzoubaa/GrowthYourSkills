// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          "Find your prof": "Find your prof",
          "Class Type:": "Class Type:",
          "Select a class type": "Select a class type",
          "IT": "IT",
          "business": "Business",
          "finance": "Finance",
          "Professor Language:": "Professor Language:",
          "Select a language": "Select a language",
          "English": "English",
          "French": "French",
          "Start Now!": "Start Now!",
          'professors.johnSmith': 'John Smith is a highly experienced IT professor, specializing in programming languages and software development.',
        'professors.emilyJohnson': 'Emily Johnson is an IT expert with extensive knowledge of database management and system architecture.',
        'professors.michaelWilliams': 'Michael Williams is a renowned professor in IT security and network administration.',
        'professors.jessyRodriguez': 'Jessy Rodriguez is a passionate marketing professor, guiding students in developing effective marketing strategies.',
        'professors.sarahDavis': 'Sarah Davis is a dedicated professor with expertise in business management and entrepreneurship.',
        'professors.robertThompson': 'Robert Thompson is a seasoned finance professor with a deep understanding of financial markets and investments.',

          'mentor.button': 'Mentor',
          'navbar.howItWorks': 'How it works',
          'navbar.ourCourses': 'Our courses',
          'navbar.language': 'Language',
          'footer.address': '123 Main Street',
          'footer.cityStateZIP': 'City, State ZIP',
          'footer.phone': 'Phone: 555-555-5555',
          'footer.email': 'Email: info@example.com',
          'mainPage.whoWillYouBecome': 'Who Will You Become During Challenging Times?',
          'mainPage.duringToughTimes':
            'During tough times, true achievers invest in their skills and level up, paving the way to fulfill their dreams. Join our mentoring program, embrace growth, and surge ahead towards a brighter future. Let us guide you on this transformative journey of success.',
          'mainPage.howDoesItWork': 'How does it work?',
          'mainPage.startNow': 'Start Now',
          'howItWorks.title': 'How the Mentorship Program Works',
          'howItWorks.step1Title': ' Identification of Mentors and Mentees',
          'howItWorks.step1Description':
            'Mentors and mentees are identified based on their expertise, experience, and areas of interest. They may go through an application or nomination process to participate in the program.',
          'howItWorks.step2Title': ' Program Enrollment',
          'howItWorks.step2Description':
            'Mentors and mentees enroll in the mentorship program by submitting their applications or expressing their interest. They provide necessary information about their background, goals, and expectations from the program.',
          'howItWorks.step3Title': ' Matching Process',
          'howItWorks.step3Description':
            'The program organizers carefully match mentors with mentees based on their respective profiles, goals, and preferences. The matching process aims to create compatible mentor-mentee pairs.',
          'howItWorks.step4Title': '4. Orientation and Goal Setting',
          'howItWorks.step4Description':
            'Once the mentor-mentee pairs are established, an orientation session is conducted to introduce the participants to the program guidelines, expectations, and code of conduct. During this phase, mentors and mentees collaborate to set specific goals and define the scope of their mentorship relationship.',
          'howItWorks.step5Title': '5. Establishment of Mentorship Relationship',
          'howItWorks.step5Description':
            'Mentors and mentees begin their mentorship journey by establishing a strong and supportive relationship. They communicate regularly, discuss challenges, share experiences, and provide guidance and feedback to each other.',
          'howItWorks.step6Title': '6. Knowledge Sharing and Guidance',
          'howItWorks.step6Description':
            'Mentors share their knowledge, skills, and expertise with mentees, providing guidance and support in their areas of interest or development. They may offer advice, resources, and practical tips to help mentees overcome obstacles and achieve their goals.',
          'howItWorks.step7Title': '7. Career and Personal Development Support',
          'howItWorks.step7Description':
            'Mentors assist mentees in their career and personal development by offering insights into professional growth opportunities, networking, and skill enhancement. They may provide guidance on resume building, interview preparation, and career advancement strategies.',
          'howItWorks.step8Title': '8. Continuous Learning and Skill Building',
          'howItWorks.step8Description':
            'Mentees actively engage in learning from their mentors, taking advantage of their expertise and experiences. They work on acquiring new skills, expanding their knowledge, and applying the learnings to their personal and professional lives.',
          'howItWorks.step9Title': '9. Monitoring and Evaluation',
          'howItWorks.step9Description':
            'The program organizers periodically monitor the progress of the mentorship relationships and evaluate their effectiveness. Feedback from both mentors and mentees is gathered to make improvements and ensure the program\'s success.',
          'howItWorks.step10Title': '10. Closure and Transition',
          'howItWorks.step10Description':
            'As the mentorship program comes to an end, mentors and mentees reflect on their journey, achievements, and lessons learned. They wrap up their formal mentorship relationship with gratitude and may continue to stay in touch informally.',
          'howItWorks.step11Title': '11. Alumni Engagement',
          'howItWorks.step11Description':
            'After completing the mentorship program, participants may become mentors themselves or actively engage with the program\'s alumni network. They can share their experiences, provide guidance to new participants, and contribute to the continuous growth of the mentorship community.',
            'testimonial_slider.reviews_title' :'Reviews',
            'testimonial_slider.title' : 'What our customers think of our Mentorship Program',
            'testimonial_slider.rating' : 'Rating',


        },
      },
      fr: {
        translation: {
          'testimonial_slider.reviews_title' :'Avis',
          'testimonial_slider.title' : 'Ce que nos clients pensent de notre programme',
          'testimonial_slider.rating' : 'Note',



          "Find your prof": "Trouvez votre prof",
          "Class Type:": "Type de classe :",
          "Select a class type": "Sélectionnez un type de classe",
          "IT": "Informatique",
          "business": "Affaires",
          "finance": "Finance",
          "Professor Language:": "Langue du professeur :",
          "Select a language": "Sélectionnez une langue",
          "English": "Anglais",
          "French": "Français",
          "Start Now!": "Commencez maintenant !",
          'professors.johnSmith': 'John Smith est un professeur d\'informatique hautement expérimenté, spécialisé dans les langages de programmation et le développement de logiciels.',
        'professors.emilyJohnson': 'Emily Johnson est une experte en informatique avec une vaste connaissance de la gestion de bases de données et de l\'architecture système.',
        'professors.michaelWilliams': 'Michael Williams est un professeur de renom en sécurité informatique et en administration réseau.',
        'professors.jessyRodriguez': 'Jessy Rodriguez est un professeur passionné de marketing, guidant les étudiants dans le développement de stratégies marketing efficaces.',
        'professors.sarahDavis': 'Sarah Davis est une professeure dévouée spécialisée en gestion d\'entreprise et entrepreneuriat.',
        'professors.robertThompson': 'Robert Thompson est un professeur chevronné en finance avec une compréhension approfondie des marchés financiers et des investissements.',

          'mentor.button': 'Mentorat',
          'navbar.howItWorks': 'Comment ça marche',
          'navbar.ourCourses': 'Nos cours',
          'navbar.language': 'Langue',
          'footer.address': '123, rue Principale',
          'footer.cityStateZIP': 'Ville, État ZIP',
          'footer.phone': 'Téléphone : 555-555-5555',
          'footer.email': 'Courriel : info@example.com',
          'mainPage.whoWillYouBecome': 'Qui Deviendrez-Vous en Période de Changement?',
          'mainPage.duringToughTimes':
            'En période difficile, les vrais gagnants investissent dans leurs compétences et se perfectionnent, ouvrant ainsi la voie pour réaliser leurs rêves. Rejoignez notre programme de mentorat, embrassez la croissance et avancez vers un avenir meilleur. Laissez-nous vous guider dans ce voyage de transformation vers le succès.',
          'mainPage.howDoesItWork': 'Comment ça fonctionne ?',
          'mainPage.startNow': 'Commencez maintenant',
          'howItWorks.title': 'Comment Fonctionne le Programme de Mentorat',
          'howItWorks.step1Title': 'Identification des Mentors et des Mentorés',
          'howItWorks.step1Description':
            'Les mentors et les mentorés sont identifiés en fonction de leur expertise, de leur expérience et de leurs domaines d\'intérêt. Ils peuvent passer par un processus de candidature ou de nomination pour participer au programme.',
          'howItWorks.step2Title': 'Inscription au Programme',
          'howItWorks.step2Description':
            'Les mentors et les mentorés s\'inscrivent au programme de mentorat en soumettant leur candidature ou en exprimant leur intérêt. Ils fournissent les informations nécessaires sur leur parcours, leurs objectifs et leurs attentes vis-à-vis du programme.',
          'howItWorks.step3Title': 'Processus de Mise en Relation',
          'howItWorks.step3Description':
            'Les organisateurs du programme mettent en relation soigneusement les mentors avec les mentorés en fonction de leurs profils respectifs, de leurs objectifs et de leurs préférences. L\'objectif du processus de mise en relation est de créer des binômes mentor-mentoré compatibles.',
          'howItWorks.step4Title': 'Orientation et Définition des Objectifs',
          'howItWorks.step4Description':
            'Une fois les binômes mentor-mentoré établis, une séance d\'orientation est organisée pour présenter les lignes directrices du programme, les attentes et le code de conduite. Pendant cette phase, les mentors et les mentorés collaborent pour définir des objectifs spécifiques et délimiter le périmètre de leur relation de mentorat.',
          'howItWorks.step5Title': 'Établissement de la Relation de Mentorat',
          'howItWorks.step5Description':
            'Les mentors et les mentorés entament leur parcours de mentorat en établissant une relation solide et bienveillante. Ils communiquent régulièrement, discutent des défis, partagent leurs expériences et fournissent mutuellement des conseils et des retours d\'information.',
          'howItWorks.step6Title': 'Partage de Connaissances et Conseils',
          'howItWorks.step6Description':
            'Les mentors partagent leurs connaissances, compétences et expertise avec les mentorés, en leur offrant des conseils et un soutien dans leurs domaines d\'intérêt ou de développement. Ils peuvent donner des conseils, des ressources et des astuces pratiques pour aider les mentorés à surmonter les obstacles et atteindre leurs objectifs.',
          'howItWorks.step7Title': 'Soutien au Développement Professionnel et Personnel',
          'howItWorks.step7Description':
            'Les mentors aident les mentorés dans leur développement professionnel et personnel en leur offrant des perspectives sur les opportunités de croissance professionnelle, le réseautage et l\'amélioration de leurs compétences. Ils peuvent donner des conseils sur la rédaction de CV, la préparation aux entretiens et les stratégies d\'avancement professionnel.',
          'howItWorks.step8Title': 'Apprentissage Continu et Développement de Compétences',
          'howItWorks.step8Description':
            'Les mentorés s\'impliquent activement dans l\'apprentissage auprès de leurs mentors, en profitant de leur expertise et de leurs expériences. Ils s\'efforcent d\'acquérir de nouvelles compétences, d\'élargir leurs connaissances et d\'appliquer ce qu\'ils apprennent dans leur vie personnelle et professionnelle.',
          'howItWorks.step9Title': 'Suivi et Évaluation',
          'howItWorks.step9Description':
            'Les organisateurs du programme suivent périodiquement l\'évolution des relations de mentorat et évaluent leur efficacité. Les retours d\'information des mentors et des mentorés sont recueillis pour apporter des améliorations et assurer le succès du programme.',
          'howItWorks.step10Title': 'Clôture et Transition',
          'howItWorks.step10Description':
            'À la fin du programme de mentorat, les mentors et les mentorés réfléchissent à leur parcours, à leurs réalisations et aux leçons apprises. Ils mettent un terme à leur relation formelle de mentorat avec gratitude et peuvent continuer à rester en contact de manière informelle.',
          'howItWorks.step11Title': 'Engagement des Anciens',
          'howItWorks.step11Description':
            'Après avoir terminé le programme de mentorat, les participants peuvent devenir eux-mêmes des mentors ou s\'engager activement dans le réseau des anciens du programme. Ils peuvent partager leurs expériences, offrir des conseils aux nouveaux participants et contribuer à la croissance continue de la communauté de mentorat.',
        },
      },
    },
  });

export default i18n;
