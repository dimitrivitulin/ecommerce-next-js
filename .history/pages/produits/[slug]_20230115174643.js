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
              <h1 className="font-bold">{product.name}</h1>
              <h3 className="font-medium">{product.price}€</h3>
              <p className="text-justify">{product.description}</p>
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