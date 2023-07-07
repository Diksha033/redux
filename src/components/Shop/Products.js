import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummy_products=[
  {
    id:'p1',
    price:6,
    title:'my first book',
    description:'the first book i ever wrote',
  },
  {
    id:'p2',
    price:16,
    title:'my second book',
    description:'the second book i ever wrote',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {dummy_products.map((product)=>(
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;
