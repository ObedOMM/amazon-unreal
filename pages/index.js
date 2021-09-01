import Header from "../components/header";
import Hero from "../components/hero";
import Products from "../components/products";
import Categories from "../components/categories";
import { products } from "../fakedata";

export default function Index() {
    return (
        <div className="container">
            <Header />
            <main>
                <Hero />
                <Categories />
                <Products title="🔥 Best Sellers" products={products()} />
            </main>
        </div>
    );
}
