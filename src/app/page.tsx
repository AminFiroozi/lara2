import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { categories, products } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/product-card";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function HomePage() {
	const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex-1">
				<section className="relative h-[60vh] w-full text-white">
					<Image
						src="https://placehold.co/1800x1000.png"
						alt="Hero background"
						layout="fill"
						objectFit="cover"
						className="z-0"
						data-ai-hint="pink silk fabric"
					/>
					<div className="absolute inset-0 bg-black/40" />
					<div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
						<h1 className="font-headline text-4xl font-bold md:text-6xl">
							کلکسیون جدید ستاره
						</h1>
						<p className="mt-4 max-w-2xl text-lg md:text-xl">
							زیبایی در سادگی است. محصولات ما را کشف کنید.
						</p>
						<Button asChild size="lg" className="mt-8">
							<Link href="/products">
								مشاهده محصولات{" "}
								<ArrowLeft className="ms-2 h-5 w-5" />
							</Link>
						</Button>
					</div>
				</section>

				<section className="py-12 md:py-20">
					<div className="container">
						<h2 className="mb-8 text-center font-headline text-3xl font-bold">
							محصولات ویژه
						</h2>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{featuredProducts.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
						</div>
					</div>
				</section>

				<section className="bg-secondary/50 py-12 md:py-20">
					<div className="container">
						<h2 className="mb-8 text-center font-headline text-3xl font-bold">
							خرید بر اساس دسته‌بندی
						</h2>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{categories.map((category) => (
								<Link
									key={category.id}
									href={`/products?category=${category.id}`}
								>
									<Card className="group overflow-hidden">
										<CardContent className="p-0">
											<Image
												src="https://picsum.photos/400/300"
												alt={category.name}
												width={400}
												height={300}
												className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
												data-ai-hint="minimalist jewelry"
											/>
											<div className="p-4">
												<h3 className="text-lg font-semibold">
													{category.name}
												</h3>
											</div>
										</CardContent>
									</Card>
								</Link>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
