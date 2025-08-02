import type { Category, Product } from "./definitions";

export const categories: Category[] = [
	{ id: "1", name: "جواهرات" },
	{ id: "2", name: "پوشاک" },
	{ id: "3", name: "اکسسوری" },
	{ id: "4", name: "دکوراسیون منزل" },
];

export const products: Product[] = [
	{
		id: "prod_1",
		name: "گردنبند ستاره‌ای",
		description: "گردنبند ظریف با آویز ستاره‌ای از جنس نقره استرلینگ.",
		price: 1500000,
		inventory: 15,
		images: [
			"https://picsum.photos/600",
			"https://picsum.photos/600",
			"https://picsum.photos/600",
		],
		categoryId: "1",
		featured: true,
	},
	{
		id: "prod_2",
		name: "لباس شب حریر",
		description:
			"لباس شب بلند از پارچه حریر با طراحی زیبا و رنگ صورتی ملایم.",
		price: 4500000,
		inventory: 5,
		images: ["https://picsum.photos/600"],
		categoryId: "2",
		featured: true,
	},
	{
		id: "prod_3",
		name: "کیف دستی چرم",
		description: "کیف دستی زنانه از چرم طبیعی با کیفیت بالا.",
		price: 2800000,
		inventory: 8,
		images: ["https://picsum.photos/600"],
		categoryId: "3",
		featured: false,
	},
	{
		id: "prod_4",
		name: "گلدان سرامیکی مدرن",
		description:
			"گلدان سرامیکی دست‌ساز با طراحی مینیمال برای دکوراسیون داخلی.",
		price: 950000,
		inventory: 20,
		images: ["https://picsum.photos/600"],
		categoryId: "4",
		featured: true,
	},
	{
		id: "prod_5",
		name: "گوشواره حلقه‌ای",
		description: "گوشواره‌های حلقه‌ای کلاسیک از جنس طلا.",
		price: 3200000,
		inventory: 12,
		images: ["https://picsum.photos/600"],
		categoryId: "1",
		featured: false,
	},
	{
		id: "prod_6",
		name: "شال نخی طرح‌دار",
		description: "شال نخی سبک و راحت با طرح‌های بهاری.",
		price: 750000,
		inventory: 0,
		images: ["https://picsum.photos/600"],
		categoryId: "2",
		featured: true,
	},
	{
		id: "prod_7",
		name: "عینک آفتابی",
		description: "عینک آفتابی با فریم مدرن و لنزهای محافظ UV.",
		price: 1800000,
		inventory: 10,
		images: ["https://picsum.photos/600"],
		categoryId: "3",
		featured: false,
	},
	{
		id: "prod_8",
		name: "آباژور رومیزی",
		description:
			"آباژور با پایه چوبی و شید پارچه‌ای، مناسب برای اتاق خواب.",
		price: 1200000,
		inventory: 7,
		images: ["https://picsum.photos/600"],
		categoryId: "4",
		featured: false,
	},
];
