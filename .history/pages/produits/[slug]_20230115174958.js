import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import products from "../../data/products.json"

export default function Product ({product}) {
  return(
    <div>
      <Layout>
        <Head>
          <title> {product.name} </title>
        </Head>
        <Container>
          <div className="flex pt-8 min-h-fit lg:px-40">
            <div className=" w-1/2 flex justify-center ">
              <Image src={product.image} width={400} height={400} alt={product.name}/>
            </div>
            <div className=" w-1/2 flex flex-col gap-5">
              <h1 className="font-bold text-2xl">{product.name}</h1>
              <h3 className="font-medium text-lg">{product.price}€</h3>
              <p className="text-justify">{product.description}</p>
              <button className="snipcart-add-item inline-block rounded-md border border-transparent bg-stone-500 py-3 px-8 text-center font-medium text-white shadow-md hover:bg-stone-600 hover:shadow-xl" 
                data-item-id={product.id}
                data-item-image={product.image}
                data-item-name={product.name}
                data-item-price={product.price}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  )
}

export async function getStaticProps ({params}) {
  const {slug} = params;
  const product = products.find(({id}) => id === slug);
  return {
    props: {
      product
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: products.map(({id}) => {
      return {
        params: {
          slug : id
        }
      }
  }),
  fallback:false
}
} 