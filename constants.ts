import { Project, Service } from './types';

export const HERO_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCmlZMVNooNqf5B9c0MLnmt2bZgA7124oq4IDsrodd_Y84izO7dVnuu_VtbwhZUgRh0OEGDyFu8FPG0y-wsep4ba-mYNiJ4lxCYLMPImoOCDPVEgVwjpoKVPilq76P-qCMg8rKRFo5MWO2Q1YisFyP2FeS85wFThlcM_0sxwVJ9U4PDFq_a1aNsxrgdg9xHwdOYEM6het-M0KP6dqnbjpMSpz7e7aOE5y8rBx1BpNBtCs9322QXqcIPDBd9UVYSDAuP4jqTnDJfttJT";
export const HERO_OVERLAY = "https://lh3.googleusercontent.com/aida-public/AB6AXuDhiFuZpJ_HRabzNXGKeq62hdKK_Me-whaUpNrGp_tGG0QTwZYls1MeK9m2lWd95xzbgpYdfz_KbvpSb-VKv8G1dY7N2GE2eAx7nZoRgURHMQkOnrTihgNNMTkdlb5gxHwwnTOEe29qDRwkxI8c0g_IRSsvq-163SIpBc743oGTsHM1P4LjH3DEhsNtABC5faRDfvAqTjCff5CNI3NvRaewSzPrFRQ5MY6t0YiFplYUi7IjWaam_5Fo4EbNJBC4nz2dgZW_O6o5T1Nh";

export const EXPERTISE_ITEMS: Service[] = [
  {
    id: 1,
    title: "Residential Towers",
    title_ar: "أبراج سكنية",
    subtitle: "Flagship Service",
    description: "Smart, sustainable living spaces designed for the modern Egyptian family with unparalleled amenities.",
    description_ar: "مساحات معيشية ذكية ومستدامة مصممة للعائلة المصرية الحديثة مع وسائل راحة لا مثيل لها.",
    longDescription: "Our residential towers redefine vertical living in Cairo and beyond. We integrate state-of-the-art smart home technologies, energy-efficient building skins, and communal spaces that foster social interaction. Each project is meticulously studied to maximize natural light, ventilation, and views, ensuring that luxury is felt in every detail.",
    longDescription_ar: "تعيد أبراجنا السكنية تعريف الحياة العمودية في القاهرة وخارجها. ندمج أحدث تقنيات المنازل الذكية، والواجهات الموفرة للطاقة، والمساحات المشتركة التي تعزز التفاعل الاجتماعي. تتم دراسة كل مشروع بدقة لتعظيم الإضاءة الطبيعية والتهوية والمناظر، مما يضمن الشعور بالرفاهية في كل التفاصيل.",
    type: 'card-large',
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmNIlPtZxWiN8OEBGPPMNQlYFbBxJARqeQNp6awgH3W66KuB0up746XCLrdH59Bn49qUuDF7SCDAfc-EiBVp_-Fg2UUS8gb8GswvARQc0mfIvvKwr3LAgzyTJrMmFtBu24G_nIKTLaam4Gd11zT6FyzXd9dVqGCBoWs1_0xWQ9oKKPZKbdbALfhfPDvOYOZwS9zsjMUL9dO1YmJlmj5xXF4m2XKp5VPZf_K2QDm1H36Qc8YlJpZDUjoVzNKz5MAQdI1zZpkdykEorG"
  },
  {
    id: 2,
    title: "Commercial Hubs",
    title_ar: "مراكز تجارية",
    description: "Next-gen workspaces.",
    description_ar: "مساحات عمل من الجيل التالي.",
    longDescription: "We build commercial environments that inspire productivity and innovation. From flexible office layouts to high-tech infrastructure, our hubs are designed for the businesses of tomorrow. We focus on LEED certification standards to ensure environmental responsibility alongside economic growth.",
    longDescription_ar: "نقوم ببناء بيئات تجارية تلهم الإنتاجية والابتكار. من تخطيطات المكاتب المرنة إلى البنية التحتية عالية التقنية، تم تصميم مراكزنا لشركات الغد. نركز على معايير شهادة LEED لضمان المسؤولية البيئية جنبًا إلى جنب مع النمو الاقتصادي.",
    type: 'card-tall',
    icon: "domain",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjHvlmjdhggkvIE8A_zk_V0Jfy8Q0jlgZohD0rbwvff5MBUi-lGCPz46latyIkQmjKZQcza-4kiGaYzc6cscadmyQ5PLCEY96FO9SG8w2EPtLKPHA1q9-2jKCfykA7FUlshYJ0uZcmPX0bRGiLfE16Z1SI7JTQoxHLQwpUjavTAohX7rIBWj67XIw1SCfpteQZtAkWmlDNhETxEjFl6WpmDEmaGSOy-85AUYJgrtioFuVFNrT1H7y9WwiEcMlLZt-jaMIZA9pAdMRl"
  },
  {
    id: 3,
    title: "Architecture",
    title_ar: "هندسة معمارية",
    description: "Precision planning & schematic design.",
    description_ar: "تخطيط دقيق وتصميم تخطيطي.",
    longDescription: "Our architectural philosophy combines cultural heritage with contemporary parametric design. We utilize BIM technology from day one to ensure that every curve, angle, and material is optimized for both aesthetics and constructability.",
    longDescription_ar: "تجمع فلسفتنا المعمارية بين التراث الثقافي والتصميم البارامتري المعاصر. نستخدم تقنية BIM من اليوم الأول لضمان تحسين كل منحنى وزاوية ومادة من حيث الجماليات وقابلية البناء.",
    type: 'card-small',
    icon: "architecture",
    subtitle: "03"
  },
  {
    id: 4,
    title: "Civil Eng.",
    title_ar: "هندسة مدنية",
    description: "Structural integrity analysis & execution.",
    description_ar: "تحليل السلامة الهيكلية والتنفيذ.",
    longDescription: "Safety and durability are the cornerstones of our engineering division. We specialize in complex structural systems for high-rise buildings and long-span structures, utilizing advanced materials to reduce carbon footprint while maintaining maximum strength.",
    longDescription_ar: "السلامة والمتانة هما حجر الزاوية في قسم الهندسة لدينا. نحن متخصصون في الأنظمة الهيكلية المعقدة للمباني الشاهقة والهياكل طويلة الامتداد، باستخدام مواد متقدمة لتقليل البصمة الكربونية مع الحفاظ على أقصى قدر من القوة.",
    type: 'card-small',
    icon: "engineering",
    subtitle: "04"
  }
];

export const PORTFOLIO_ITEMS: Project[] = [
  {
    id: 1,
    title: "The Nile View",
    title_ar: "إطلالة النيل",
    category: "Residential",
    category_ar: "سكني",
    tags: ["Luxury", "Waterfront", "Smart Home"],
    tags_ar: ["فخامة", "واجهة بحرية", "منزل ذكي"],
    location: "Zamalek, Cairo",
    location_ar: "الزمالك، القاهرة",
    description: "Ultra-luxury residential complex overlooking the eternal river. Bringing peace to the chaotic city center.",
    description_ar: "مجمع سكني فائق الفخامة يطل على النهر الخالد. جلب السلام إلى وسط المدينة الصاخب.",
    longDescription: "Standing majestically on the banks of the Nile, this project represents the pinnacle of waterfront living. The design maximizes the panoramic views of Cairo while providing an oasis of tranquility. Residents enjoy private access to a river promenade, infinity pools, and a world-class wellness center.",
    longDescription_ar: "يقف هذا المشروع بشموخ على ضفاف النيل، ويمثل قمة المعيشة على الواجهة البحرية. يتيح التصميم إطلالات بانورامية على القاهرة مع توفير واحة من الهدوء. يتمتع السكان بمدخل خاص لممشى نهري وحمامات سباحة لا متناهية ومركز صحي عالمي المستوى.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHBqOmLe4In6MDAaQa7pq4pNFjN2ggWLDwjLFvJXBhF7_naqudxyyqcr1IIeUSx1RdIrSphGvbE34f0gbzsQCsQ7WJ3XeGydHaVDFA96o7Ut044kMAu8X6x4FyiNtg8B8vlzvPoEJoPuntKtzakPvIBpQ6hQjgWJpAfwlsB4T-mY2hIIxINE1cbA7SDHrzaIDXQJOl5v4PqQH9kzXZmEYYh_cgF5x48VFfsbbbfYQng5fu9hAbfSyw5tKhGQj-V-NOAqpiYQ52RY1n",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" 
  },
  {
    id: 2,
    title: "Apex Arts",
    title_ar: "فنون القمة",
    category: "Cultural",
    category_ar: "ثقافي",
    tags: ["Sustainable", "Public Space"],
    tags_ar: ["مستدام", "مساحة عامة"],
    location: "New Capital",
    location_ar: "العاصمة الجديدة",
    description: "A geometric masterpiece of concrete and light, serving as the cultural heart of the new capital.",
    description_ar: "تحفة هندسية من الخرسانة والضوء، تعمل كقلب ثقافي للعاصمة الجديدة.",
    longDescription: "Located in the heart of the New Capital, Apex Arts is more than a building; it is a cultural movement. The structure features adaptive acoustic halls, expansive galleries, and rooftop gardens. The brutalist concrete facade is softened by vertical gardens, creating a dialogue between nature and structure.",
    longDescription_ar: "يقع Apex Arts في قلب العاصمة الإدارية الجديدة، وهو أكثر من مجرد مبنى؛ إنه حركة ثقافية. يتميز الهيكل بقاعات صوتية متكيفة ومعارض واسعة وحدائق على السطح. يتم تخفيف واجهة الخرسانة القاسية من خلال الحدائق العمودية، مما يخلق حوارًا بين الطبيعة والبناء.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaZGbIOx2uWuJ-0wQbbpSn_OT5ZMDWxYhTvMmvcV2kjjXwooM2dOUdP37kESh2dA-pWXPSe7mS1aJkITaNnsdM4xFMYuyVyo0kGs8Z8WWqOhM9-1IGyNhHseQPo_ubPZHfkQR5d0_KygxXG0aN3VyiSTz3Ziwqfsf65iVCEf8dCbzHUUCIV7a-Iw-jS6hhz4cKYJyk_B036cUNRFgg8y5ANDw0u-R-s6PKFiJjkk_YL-gkE6lZ9SnriHBIRIFGW1Z08JDbHli4mAHJ"
  },
  {
    id: 3,
    title: "Azure Heights",
    title_ar: "مرتفعات أزور",
    category: "Private Villa",
    category_ar: "فيلا خاصة",
    tags: ["Minimalist", "Resort", "Eco-friendly"],
    tags_ar: ["حد أدنى", "منتجع", "صديق للبيئة"],
    location: "North Coast",
    location_ar: "الساحل الشمالي",
    description: "Minimalist villas integrated into the coastal landscape. Serenity designed by nature.",
    description_ar: "فيلات بسيطة مدمجة في المناظر الطبيعية الساحلية. الصفاء من تصميم الطبيعة.",
    longDescription: "Azure Heights brings the concept of 'barefoot luxury' to the North Coast. Each villa is carved into the natural topography to ensure unobstructed sea views. Local materials such as limestone and driftwood are integrated into the modern design, grounding the project in its environment.",
    longDescription_ar: "يجلب Azure Heights مفهوم 'الرفاهية البسيطة' إلى الساحل الشمالي. تم نحت كل فيلا في التضاريس الطبيعية لضمان إطلالات غير محجوبة على البحر. يتم دمج المواد المحلية مثل الحجر الجيري والأخشاب الطافية في التصميم الحديث، مما يرسخ المشروع في بيئته.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFS14eZK7TJoyNO3CTkpv7roT_uq5cdgxrKyKfVGp1rys_0Oq_3ASTcQF4W1CD9nqMy3SGOuN-w5WaxNwYzut8BPorxCluPE3nBWVtiaphEMLMkREVrIqzS1b6LXo9LVD9ZSdkjK9lpo-AqCvYVmYRABqer2wNrSUnxFTGVvyNWnE33jSSQahoASv6_6sYgNT_dK7YlcFcnlomquTG7XZz7ZEjBxJiLoKd9xZjBSkVJeUSvph552-soDcy6KZJYHW67BrFvDX5e4WZ"
  },
  {
    id: 4,
    title: "Onyx Tower",
    title_ar: "برج أونيكس",
    category: "Commercial",
    category_ar: "تجاري",
    tags: ["High-tech", "Corporate"],
    tags_ar: ["تكنولوجيا عالية", "شركات"],
    location: "New Cairo",
    location_ar: "القاهرة الجديدة",
    description: "A sleek black glass monolith housing the headquarters of top fintech companies.",
    description_ar: "كتلة زجاجية سوداء أنيقة تضم المقرات الرئيسية لأرقى شركات التكنولوجيا المالية.",
    longDescription: "A symbol of corporate power and transparency. Onyx Tower utilizes smart glass technology to regulate temperature and light. The interior spaces are designed to foster collaboration, featuring open-plan layouts interspersed with quiet zones. It is the first net-zero energy commercial tower in the district.",
    longDescription_ar: "رمز لقوة الشركات والشفافية. يستخدم برج أونيكس تقنية الزجاج الذكي لتنظيم درجة الحرارة والضوء. تم تصميم المساحات الداخلية لتعزيز التعاون، حيث تتميز بتخطيطات مفتوحة تتخللها مناطق هادئة. إنه أول برج تجاري بصافي طاقة صفرية في المنطقة.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhiFuZpJ_HRabzNXGKeq62hdKK_Me-whaUpNrGp_tGG0QTwZYls1MeK9m2lWd95xzbgpYdfz_KbvpSb-VKv8G1dY7N2GE2eAx7nZoRgURHMQkOnrTihgNNMTkdlb5gxHwwnTOEe29qDRwkxI8c0g_IRSsvq-163SIpBc743oGTsHM1P4LjH3DEhsNtABC5faRDfvAqTjCff5CNI3NvRaewSzPrFRQ5MY6t0YiFplYUi7IjWaam_5Fo4EbNJBC4nz2dgZW_O6o5T1Nh"
  }
];