export const tags = [
  { name: "React", background: "#61DAFB", color: "#20232A" },
  { name: "Angular", background: "#DD0031", color: "#FFFFFF" },
  { name: "Vue.js", background: "#42B883", color: "#35495E" },
  { name: "HTML5", background: "#E34F26", color: "#FFFFFF" },
  { name: "CSS3", background: "#1572B6", color: "#FFFFFF" },
  { name: "Bootstrap", background: "#7952B3", color: "#FFFFFF" },
  { name: "Tailwind CSS", background: "#06B6D4", color: "#FFFFFF" },

  { name: "Node.js", background: "#339933", color: "#FFFFFF" },
  { name: "Express.js", background: "#000000", color: "#FFFFFF" },
  { name: "FastAPI", background: "#009688", color: "#FFFFFF" },
  { name: "Flask", background: "#FFFFFF", color: "#000000" }, 

  { name: "MongoDB", background: "#47A248", color: "#FFFFFF" },
  { name: "MySQL", background: "#4479A1", color: "#FFFFFF" },
  { name: "SQLite", background: "#003B57", color: "#FFFFFF" },
  { name: "Redis", background: "#e03B57", color: "#3f0300" },
  
  { name: "Linux", background: "#FCC624", color: "#000000" }, 
  { name: "Git", background: "#F05032", color: "#FFFFFF" },
  { name: "Docker", background: "#2496ED", color: "#FFFFFF" },
  { name: "Bash", background: "#2C001E", color: "#FFFFFF" }, 
  { name: "JavaScript", background: "#F7DF1E", color: "#000000" },
  { name: "Python", background: "#3776AB", color: "#FFFFFF" }, 
  { name: "C", background: "#A8B9CC", color: "#000000" },
];

export const skillCategories = {
	frontend: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Vue.js", "Bootstrap", "Tailwind CSS"],
	backend: ["Node.js", "Express.js", "FastAPI", "Flask", "Python"],
	database: ["MongoDB", "MySQL", "SQLite"],
	tools: ["Linux", "Git", "Docker", "Bash", "C"]
};

export const projects = [
	{
		title: "QuranLink",
		description: "A web application designed to assist with memorizing the Holy Quran through interactive typing practice",
		image: "assets/QuranLink.png",
		tags: ["Python", "FastAPI", "MySQL", "JavaScript", "Vue.js"],
		github: "https://github.com/Ehabw57/QuranLink"
	},
	{
		title: "ALX Learning Bot",
		description: "AI-powered application designed to search for learning resources and generate quizzes for a specific topics",
		image: "assets/AlxBot.png",
		tags: ["Python", "FastAPI", "Redis", "React", "Tailwind CSS"],
		github: "https://github.com/ALX-NULL/roundOf11",
    demo: "https://github.com/user-attachments/assets/fb355bbb-96ed-4781-93a4-13231633b3bf"
	},
	{
		title: "PlayBlocks",
		description: "A browser-based E-commerce game website created entirely using HTML, CSS, and JavaScript.",
		image: "assets/playblocks.jpg",
		tags: ["HTML5", "CSS3", "JavaScript"],
		live: "https://www.itiqena.com/playblocks/login.html",
		github: "https://github.com/Ehabw57/playblocks"
	},
	{
		title: "Logger",
		description: "A command-line tool designed for efficient management of employee logs and records.",
		image: "./assets/logger.jpg",
		tags: ["C", "SQLite", "Bash", "Linux"],
		github: "https://github.com/Ehabw57/logger",
		demo: "https://www.youtube.com/watch?v=RHmYFvXhE4Y"
	},
	{
		title: "Geometry Dodge",
		description: "A fun web-based game built with HTML Canvas, where player control a square to dodge incoming shapes.",
		image: "assets/GeomatryDodge.png",
		tags: ["HTML5", "CSS3", "JavaScript"],
		live: "https://ehabw57.github.io/javaScript-Games/Circle_Dodge/",
		github: "https://github.com/Ehabw57/javaScript-Games"
	},

	{
		title: "Terminal Portofolio",
    description: "Interactive portfolio replicating a tiling window manager environment with a terminal-style UI.",
		image: "assets/TerminalPortofolio.jpg",
		tags: ["HTML5", "CSS3", "JavaScript"],
		live: "https://ehabw57.github.io/portofolio",
		github: "https://github.com/Ehabw57/portofolio"
	}
];

// Translations object for all content
export const translations = {
	en: {
		// Navigation
		nav: {
			home: "Home",
			about: "About",
			skills: "Skills",
			projects: "Projects",
			contact: "Contact"
		},
		// Hero section
		hero: {
			greeting: "Hi, I'm",
			name: "Ehab Hegazy",
			description: "Full-Stack Developer, I build scalable web apps with MEARN, Python and (SQL, non-SQL) DBs.",
			myWork: "My Work",
			hireMe: "Hire Me"
		},
		// About section
		about: {
			title: "About",
			description: "I'm Ehab, a passionate Full-Stack Web Developer with a deep love for programming and computer science. I thrive in the world of Linux and open-source technologies, constantly exploring systems at their core and experimenting hands-on. With a strong curiosity and an eagerness to learn, I'm always driven to discover new ideas, develop innovative solutions, and bring unique projects to life",
			downloadCV: "Download CV"
		},
		// Skills section
		skills: {
			title: "Skills",
			description: "Here's an overview of the tools and skills I use to build my projects.",
			categories: {
				frontend: "Frontend",
				backend: "Backend",
				database: "Database",
				tools: "Tools"
			}
		},
		// Projects section
		projects: {
			title: "Projects",
			description: "I enjoy turning ideas into real projects—here are some highlights.",
			items: [
				{
					title: "QuranLink",
					description: "A web application designed to assist with memorizing the Holy Quran through interactive typing practice"
				},
				{
					title: "ALX Learning Bot",
					description: "AI-powered application designed to search for learning resources and generate quizzes for a specific topics"
				},
				{
					title: "PlayBlocks",
					description: "A browser-based E-commerce game website created entirely using HTML, CSS, and JavaScript."
				},
				{
					title: "Logger",
					description: "A command-line tool designed for efficient management of employee logs and records."
				},
				{
					title: "Geometry Dodge",
					description: "A fun web-based game built with HTML Canvas, where player control a square to dodge incoming shapes."
				},
				{
					title: "Terminal Portfolio",
					description: "Interactive portfolio replicating a tiling window manager environment with a terminal-style UI."
				}
			],
			buttons: {
				live: "Live",
				github: "GitHub",
				demo: "Demo"
			}
		},
		// Contact section
		contact: {
			title: "Let's Connect",
			description: "I'm always excited to discuss new opportunities, collaborations, or just chat about tech. Reach me through:",
			email: "Email",
			whatsapp: "WhatsApp"
		},
		// Footer
		footer: {
			copyright: "©2025 Ehab Hegazy"
		}
	},
	ar: {
		// Navigation - الروابط
		nav: {
			home: "الرئيسية",
			about: "نبذة عني",
			skills: "المهارات",
			projects: "المشاريع",
			contact: "تواصل معي"
		},
		// Hero section - القسم الرئيسي
		hero: {
			greeting: "مرحباً، أنا",
			name: "إيهاب حجازي",
			description: "مطور ويب متكامل، أبني تطبيقات ويب قابلة للتوسع باستخدام MERN و Python وقواعد بيانات SQL و NoSQL.",
			myWork: "أعمالي",
			hireMe: "وظفني"
		},
		// About section - نبذة عني
		about: {
			title: "نبذة عني",
			description: "أنا إيهاب، مطور ويب متكامل شغوف بالبرمجة وعلوم الحاسوب. أزدهر في عالم لينكس وتقنيات المصادر المفتوحة، أستكشف الأنظمة من جذورها وأجرب بشكل عملي مستمر. بفضول قوي ورغبة دائمة في التعلم، أسعى دائماً لاكتشاف أفكار جديدة، وتطوير حلول مبتكرة، وإحياء مشاريع فريدة.",
			downloadCV: "تحميل السيرة الذاتية"
		},
		// Skills section - المهارات
		skills: {
			title: "المهارات",
			description: "نظرة عامة على الأدوات والمهارات التي أستخدمها لبناء مشاريعي.",
			categories: {
				frontend: "الواجهة الأمامية",
				backend: "الواجهة الخلفية",
				database: "قواعد البيانات",
				tools: "الأدوات"
			}
		},
		// Projects section - المشاريع
		projects: {
			title: "المشاريع",
			description: "أستمتع بتحويل الأفكار إلى مشاريع حقيقية—إليك بعض الأمثلة البارزة.",
			items: [
				{
					title: "QuranLink",
					description: "تطبيق ويب مصمم للمساعدة في حفظ القرآن الكريم من خلال ممارسة الكتابة التفاعلية"
				},
				{
					title: "ALX Learning Bot",
					description: "تطبيق مدعوم بالذكاء الاصطناعي مصمم للبحث عن موارد التعلم وإنشاء اختبارات لموضوعات محددة"
				},
				{
					title: "PlayBlocks",
					description: "موقع ألعاب تجارة إلكترونية قائم على المتصفح تم إنشاؤه بالكامل باستخدام HTML و CSS و JavaScript."
				},
				{
					title: "Logger",
					description: "أداة سطر أوامر مصممة لإدارة سجلات الموظفين بكفاءة."
				},
				{
					title: "Geometry Dodge",
					description: "لعبة ويب ممتعة مبنية باستخدام HTML Canvas، حيث يتحكم اللاعب في مربع لتفادي الأشكال القادمة."
				},
				{
					title: "معرض أعمال طرفي",
					description: "معرض أعمال تفاعلي يحاكي بيئة مدير نوافذ البلاط بواجهة على نمط الطرفية."
				}
			],
			buttons: {
				live: "مباشر",
				github: "جيت هاب",
				demo: "عرض تجريبي"
			}
		},
		// Contact section - تواصل معي
		contact: {
			title: "لنتواصل",
			description: "أنا دائماً متحمس لمناقشة الفرص الجديدة، التعاونات، أو مجرد الدردشة عن التقنية. تواصل معي عبر:",
			email: "البريد الإلكتروني",
			whatsapp: "واتساب"
		},
		// Footer - تذييل
		footer: {
			copyright: "©2025 إيهاب حجازي"
		}
	}
};


